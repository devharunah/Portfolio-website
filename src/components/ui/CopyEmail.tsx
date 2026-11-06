"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

/** Big email as a mailto link plus a square copy button, for people on webmail. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="flex items-stretch border border-border-strong">
      <a
        href={`mailto:${email}`}
        className="min-w-0 flex-1 truncate px-4 py-3 font-display text-lg font-bold text-fg underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-500 hover:decoration-fg md:text-xl"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex w-12 shrink-0 items-center justify-center border-l border-border-strong text-fg transition-colors duration-500 hover:bg-fg hover:text-bg"
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
      </button>
      <span role="status" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
}
