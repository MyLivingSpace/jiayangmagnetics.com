"use client";

import { useMemo, useState } from "react";
import CTAButton from "./CTAButton";
import { primaryApplications, establishedMarkets } from "@/lib/content";

/**
 * Sample / Quote Request form (per strategy doc Section 7).
 *
 * Visible section grouping: A. Request Type / B. Contact /
 * C. Project & Application / D. Technical / E. NDA & Documentation.
 *
 * The intent router controls progressive disclosure:
 *   - "Required sample quantity" appears for Samples / Both flows
 *   - "Anticipated annual production volume" appears for Pricing / Both flows
 *
 * Free-mail domains are flagged for the Pricing and Both flows but accepted
 * on the Technical-discussion flow — technical conversations early in the
 * buyer journey often come from a personal address.
 */

type QuoteIntent = "samples" | "pricing" | "both" | "technical";

const intents: { value: QuoteIntent; label: string; description: string }[] = [
  {
    value: "samples",
    label: "Samples for evaluation",
    description: "I want to validate the part on my bench before pricing.",
  },
  {
    value: "pricing",
    label: "Indicative pricing for a known specification",
    description: "I have a spec and need pricing for budgeting or comparison.",
  },
  {
    value: "both",
    label: "Both — samples and indicative pricing",
    description: "Send samples and a target-volume quotation in parallel.",
  },
  {
    value: "technical",
    label: "Technical discussion before either",
    description: "I want to talk to an engineer before committing to a path.",
  },
];

const projectStages = [
  "Concept",
  "Prototype",
  "Pilot",
  "Mass production",
] as const;

const FREE_MAIL_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "yahoo.co.jp",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "me.com",
  "qq.com",
  "163.com",
  "126.com",
  "sina.com",
  "aol.com",
  "protonmail.com",
]);

function isFreeMail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at === -1) return false;
  return FREE_MAIL_DOMAINS.has(email.slice(at + 1).toLowerCase().trim());
}

type FormState = "idle" | "submitting" | "success" | "error";

function isQuoteIntent(v: string | undefined): v is QuoteIntent {
  return (
    v === "samples" ||
    v === "pricing" ||
    v === "both" ||
    v === "technical"
  );
}

export default function SampleQuoteForm({
  initialIntent,
}: {
  initialIntent?: QuoteIntent;
}) {
  const [intent, setIntent] = useState<QuoteIntent>(() =>
    isQuoteIntent(initialIntent) ? initialIntent : "samples"
  );
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [reference, setReference] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const showSampleQty = intent === "samples" || intent === "both";
  const showAnnualVolume = intent === "pricing" || intent === "both";
  const businessEmailRequired = intent === "pricing" || intent === "both";

  const emailWarning = useMemo(() => {
    if (!email || !businessEmailRequired) return null;
    if (isFreeMail(email)) {
      return "A business email is recommended for pricing requests so we can route the inquiry correctly.";
    }
    return null;
  }, [email, businessEmailRequired]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    if (formData.get("website")) {
      setState("success");
      return;
    }

    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; ref?: string; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Submission failed");
      }
      setReference(json.ref ?? null);
      setState("success");
    } catch (err) {
      setState("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-slate-200 bg-white p-8">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Request received
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
          Thank you — we&rsquo;ll be in touch within one business day.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          A qualified magnetics engineer is reviewing your request now. You
          will receive a reply with sample availability, a technical
          assessment, and indicative pricing as appropriate to your inquiry.
        </p>
        {reference ? (
          <p className="mt-4 text-xs text-slate-500">
            Reference: <span className="font-mono">{reference}</span>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Honeypot — hidden visually, present to spam bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px"
      />

      {/* A. REQUEST TYPE */}
      <FormSection
        eyebrow="A · Request Type"
        title="What do you need today?"
        lead="We route Samples, Pricing, Both, and Technical-discussion requests differently. Pick the closest match."
      >
        <fieldset>
          <legend className="sr-only">Request type</legend>
          <div className="grid gap-3 md:grid-cols-2">
            {intents.map((opt) => {
              const active = intent === opt.value;
              return (
                <label
                  key={opt.value}
                  className={
                    "flex cursor-pointer items-start gap-3 border p-4 transition-colors " +
                    (active
                      ? "border-slate-900 bg-slate-50"
                      : "border-slate-200 bg-white hover:border-slate-400")
                  }
                >
                  <input
                    type="radio"
                    name="intent"
                    value={opt.value}
                    checked={active}
                    onChange={() => setIntent(opt.value)}
                    className="mt-1 h-4 w-4 accent-slate-900"
                  />
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      {opt.label}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-500">
                      {opt.description}
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </fieldset>
      </FormSection>

      {/* B. CONTACT INFORMATION */}
      <FormSection
        eyebrow="B · Contact Information"
        title="How can we reach you?"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name" name="name" required />
          <Field label="Company name" name="company" required />
          <Field
            label={businessEmailRequired ? "Business email" : "Email"}
            name="email"
            type="email"
            required
            value={email}
            onChange={(v) => setEmail(v)}
            help={emailWarning ?? undefined}
          />
          <Field label="Country / region" name="country" required />
          <Field
            label="Phone / WhatsApp / WeChat (optional)"
            name="phone"
            type="text"
          />
        </div>
      </FormSection>

      {/* C. PROJECT & APPLICATION */}
      <FormSection
        eyebrow="C · Project & Application"
        title="Tell us about the project."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <SelectField
            label="Industry / application"
            name="industry"
            options={[
              ...primaryApplications.map((a) => a.name),
              ...establishedMarkets.map((m) => m.name),
              "Robotics & Automation",
              "Other",
            ]}
          />
          <SelectField
            label="Project stage"
            name="projectStage"
            options={[...projectStages]}
          />
          <Field
            label="Product type of interest"
            name="productInterest"
            placeholder="e.g., high-frequency transformer, common-mode choke, nanocrystalline core"
            className="md:col-span-2"
          />
        </div>
      </FormSection>

      {/* D. TECHNICAL REQUIREMENTS */}
      <FormSection
        eyebrow="D · Technical Requirements"
        title="What are the magnetic-component requirements?"
      >
        {(showSampleQty || showAnnualVolume) ? (
          <div className="mb-5 grid gap-5 md:grid-cols-2">
            {showSampleQty ? (
              <Field
                label="Required sample quantity"
                name="sampleQuantity"
                type="number"
                defaultValue="3"
                min={1}
                max={10}
                help="Default 3. Maximum free-sample quantity depends on product family."
              />
            ) : null}
            {showAnnualVolume ? (
              <Field
                label="Anticipated annual production volume"
                name="annualVolume"
                type="number"
                min={1}
                help="Helps us prepare a meaningful indicative quote."
              />
            ) : null}
          </div>
        ) : null}

        <div>
          <label className="block text-sm font-medium text-slate-900">
            Detailed specifications
            <span className="ml-1 text-accent" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            name="specs"
            required
            rows={6}
            placeholder="Voltage, current, frequency, topology, dimensions, mounting, environment — and anything else our engineering team should know."
            className="mt-2 block w-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>
      </FormSection>

      {/* E. NDA / DOCUMENTATION */}
      <FormSection
        eyebrow="E · NDA & Documentation"
        title="Anything we should sign first?"
      >
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            name="ndaRequired"
            value="yes"
            className="mt-1 h-4 w-4 accent-slate-900"
          />
          <span>
            NDA required before discussion. (We&rsquo;ll send our standard NDA
            on request.)
          </span>
        </label>
      </FormSection>

      {/* LEGAL DISCLOSURE — strategic placement #5 (per strategy doc Section 11). */}
      <p className="border-t border-slate-200 pt-5 text-xs leading-relaxed text-slate-500">
        Samples and quotations are issued by{" "}
        <span className="font-medium text-slate-700">
          Huizhou Jiayang Electronic Technology Co., Ltd.
        </span>{" "}
        Sample lead time and qualification policy depend on product family —
        our engineering team will confirm both in the response.
      </p>

      {/* SUBMIT */}
      <div className="flex items-center gap-4">
        <CTAButton
          type="submit"
          variant="primary"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Submitting…" : "Submit Request"}
        </CTAButton>
        {state === "error" ? (
          <span className="text-sm text-red-600">
            {errorMessage ?? "Something went wrong. Please try again."}
          </span>
        ) : null}
      </div>
    </form>
  );
}

/* --------------------------- form section primitive --------------------------- */

function FormSection({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-200 pt-8 first:border-t-0 first:pt-0">
      <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </div>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      {lead ? (
        <p className="mt-2 text-sm text-slate-600">{lead}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

/* ------------------------------ field primitives ------------------------------ */

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
  value,
  onChange,
  help,
  min,
  max,
  className,
}: {
  label: string;
  name: string;
  type?: "text" | "email" | "number";
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (v: string) => void;
  help?: string;
  min?: number;
  max?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-slate-900">
        {label}
        {required ? (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        min={min}
        max={max}
        className="mt-2 block w-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
      />
      {help ? (
        <p className="mt-1 text-xs text-slate-500">{help}</p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="mt-2 block w-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
