"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formNeeds } from "@/content/site";

export function ContactForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const need = String(data.get("need") || "").trim();
    const message = String(data.get("message") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk || !need || !message) {
      setError(true);
      return;
    }
    setError(false);
    setDone(true);
  }

  if (done) {
    return (
      <div id="thanks" className="thanks">
        <p>
          Thanks. We have your note and will be in touch within one business day. While you wait,{" "}
          <Link className="text-link" href="/assessments/">
            take a gap check
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="kform grid gap-5" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Label>
          Name
          <Input name="name" autoComplete="name" required aria-invalid={error} />
        </Label>
        <Label>
          Company
          <Input name="company" autoComplete="organization" />
        </Label>
        <Label>
          Email
          <Input name="email" type="email" autoComplete="email" required aria-invalid={error} />
        </Label>
        <Label>
          Phone (optional)
          <Input name="phone" type="tel" autoComplete="tel" />
        </Label>
        <Label>
          What do you need help with?
          <select name="need" required defaultValue="" aria-invalid={error}>
            <option value="">Select…</option>
            {formNeeds.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Label>
        <Label>
          Timeline
          <select name="timeline" defaultValue="">
            <option value="">Select…</option>
            <option>now</option>
            <option>1 to 3 months</option>
            <option>later</option>
          </select>
        </Label>
      </div>
      <Label>
        Message
        <textarea name="message" rows={5} required aria-invalid={error} />
      </Label>
      {error ? (
        <p className="form-error" role="alert">
          Please fill in the required fields.
        </p>
      ) : null}
      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}
