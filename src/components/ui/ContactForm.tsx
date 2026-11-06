"use client";

import { ArrowRight } from "lucide-react";
import { useId, useState } from "react";

/**
 * No server, no third-party form service: the form writes the email for you and
 * opens it in your mail app, addressed to me.
 */
export function ContactForm({ email, firstName }: { email: string; firstName: string }) {
  const id = useId();
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = topic.trim() || `Hello from ${name.trim() || "your portfolio"}`;
    const body = `${message.trim()}\n\n${name.trim()}`.trim();
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "mt-2 block w-full border border-border-strong bg-bg px-3 py-3 text-fg placeholder:text-fg-subtle focus:border-fg focus:outline-none focus-visible:outline-2 focus-visible:outline-fg";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label htmlFor={`${id}-name`} className="label">
          Your name
        </label>
        <input id={`${id}-name`} required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-topic`} className="label">
          What it&apos;s about
        </label>
        <input
          id={`${id}-topic`}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="A role, a project, a talk"
          className={field}
        />
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="label">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Hi ${firstName}, ...`}
          className={`${field} resize-y`}
        />
      </div>
      <button type="submit" className="btn btn-solid w-full sm:w-auto">
        Write the email
        <ArrowRight aria-hidden className="size-4" />
      </button>
      <p className="text-sm text-fg-subtle">This opens your email app with the message filled in. Nothing is stored here.</p>
    </form>
  );
}
