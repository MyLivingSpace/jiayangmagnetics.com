import type { Config } from "tailwindcss";

/**
 * Jiayang Magnetics design system.
 *
 * The accent color (`accent`) is a desaturated copper that hints at copper
 * windings without straying into generic-Chinese-factory red. Use sparingly:
 * primary CTAs are slate-900 (serious / industrial), and the copper accent is
 * reserved for trust-strip data, certification labels, and small detail rules.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Copper accent — used for fine details, not primary CTAs.
        accent: {
          DEFAULT: "#B45309", // amber-700
          dark: "#92400E", // amber-800
          light: "#D97706", // amber-600
        },
      },
      fontFamily: {
        // System-font stack. See app/layout.tsx for the rationale (Chinese
        // network resilience + zero web-font load). The order matches modern
        // OS defaults: SF on Apple, Segoe on Windows, Roboto on Android.
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1200px",
      },
      letterSpacing: {
        tight: "-0.015em",
        tighter: "-0.025em",
      },
    },
  },
  plugins: [],
};

export default config;
