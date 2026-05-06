import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { Resend } from "resend";

/**
 * Sample / Quote form endpoint.
 *
 * Validates required fields, assigns a reference ID, acknowledges the
 * request, stores it locally, and forwards by email to operations.
 *
 * Required minimum fields:
 *   - intent (one of samples / pricing / both / technical)
 *   - name, company, email, country, specs
 *
 * Returns:
 *   200 → { ok: true, ref: "JM-{timestamp}-{random}" }
 *   400 → { ok: false, error: string }
 */

type Submission = {
  ref: string;
  receivedAt: string;
  intent: string;
  name: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  industry: string;
  projectStage: string;
  productInterest: string;
  sampleQuantity: string;
  annualVolume: string;
  specs: string;
  ndaRequired: boolean;
  raw: Record<string, unknown>;
};

const FORWARD_TO = "info@jiayangmagnetics.com";

function buildPlaintextEmail(submission: Submission): string {
  return [
    "New website request received",
    "",
    `Reference: ${submission.ref}`,
    `Received at: ${submission.receivedAt}`,
    `Intent: ${submission.intent}`,
    "",
    `Name: ${submission.name}`,
    `Company: ${submission.company}`,
    `Email: ${submission.email}`,
    `Country: ${submission.country}`,
    `Phone: ${submission.phone || "-"}`,
    "",
    `Industry: ${submission.industry || "-"}`,
    `Project stage: ${submission.projectStage || "-"}`,
    `Product interest: ${submission.productInterest || "-"}`,
    `Sample quantity: ${submission.sampleQuantity || "-"}`,
    `Annual volume: ${submission.annualVolume || "-"}`,
    `NDA required: ${submission.ndaRequired ? "Yes" : "No"}`,
    "",
    "Detailed specifications:",
    submission.specs,
  ].join("\n");
}

async function forwardViaResend(submission: Submission): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) return false;

  const resend = new Resend(apiKey);
  const subject = `[Jiayang Website] ${submission.intent} request · ${submission.company} · ${submission.ref}`;

  await resend.emails.send({
    from,
    to: [FORWARD_TO],
    replyTo: submission.email,
    subject,
    text: buildPlaintextEmail(submission),
  });
  return true;
}

async function forwardViaSmtp(submission: Submission): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "0");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM_EMAIL;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !port || !user || !pass || !from) return false;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const subject = `[Jiayang Website] ${submission.intent} request · ${submission.company} · ${submission.ref}`;
  await transporter.sendMail({
    from,
    to: FORWARD_TO,
    replyTo: submission.email,
    subject,
    text: buildPlaintextEmail(submission),
  });

  return true;
}

async function forwardSubmissionEmail(submission: Submission): Promise<{
  sent: boolean;
  provider: "resend" | "smtp" | null;
  error?: string;
}> {
  try {
    const sentByResend = await forwardViaResend(submission);
    if (sentByResend) return { sent: true, provider: "resend" };

    const sentBySmtp = await forwardViaSmtp(submission);
    if (sentBySmtp) return { sent: true, provider: "smtp" };

    return {
      sent: false,
      provider: null,
      error:
        "No email provider configured. Set RESEND_* or SMTP_* environment variables.",
    };
  } catch (err) {
    return {
      sent: false,
      provider: null,
      error: err instanceof Error ? err.message : "Unknown email-forwarding error.",
    };
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const required = ["intent", "name", "company", "email", "country", "specs"];
  for (const key of required) {
    if (!body[key] || typeof body[key] !== "string") {
      return NextResponse.json(
        { ok: false, error: `Missing required field: ${key}` },
        { status: 400 }
      );
    }
  }

  const intent = String(body.intent);
  if (!["samples", "pricing", "both", "technical"].includes(intent)) {
    return NextResponse.json(
      { ok: false, error: "Invalid intent." },
      { status: 400 }
    );
  }

  const ref = `JM-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase()}`;

  const submission: Submission = {
    ref,
    receivedAt: new Date().toISOString(),
    intent,
    name: String(body.name),
    company: String(body.company),
    email: String(body.email),
    country: String(body.country),
    phone: typeof body.phone === "string" ? body.phone : "",
    industry: typeof body.industry === "string" ? body.industry : "",
    projectStage: typeof body.projectStage === "string" ? body.projectStage : "",
    productInterest:
      typeof body.productInterest === "string" ? body.productInterest : "",
    sampleQuantity:
      typeof body.sampleQuantity === "string" ? body.sampleQuantity : "",
    annualVolume: typeof body.annualVolume === "string" ? body.annualVolume : "",
    specs: String(body.specs),
    ndaRequired: body.ndaRequired === "yes",
    raw: body,
  };

  try {
    const dir = path.join(process.cwd(), "data");
    const file = path.join(dir, "contact-submissions.jsonl");
    fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(file, `${JSON.stringify(submission)}\n`, "utf8");
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to store submission." },
      { status: 500 }
    );
  }

  const emailResult = await forwardSubmissionEmail(submission);

  // eslint-disable-next-line no-console
  console.log("[contact] submission stored", {
    ref,
    emailSent: emailResult.sent,
    provider: emailResult.provider,
    emailError: emailResult.error,
  });

  return NextResponse.json({
    ok: true,
    ref,
    emailForwarded: emailResult.sent,
    emailProvider: emailResult.provider,
    emailError: emailResult.error,
  });
}
