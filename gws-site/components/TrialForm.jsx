"use client";
import { useState } from "react";

export default function TrialForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Request failed");
      setStatus("done");
      form.reset();
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-card">
        <div className="form-msg ok">
          Request received. We&apos;ll set up your trial and reach out by email shortly.
        </div>
        <button
          className="btn btn-ghost"
          style={{ marginTop: 16 }}
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="t-name">Name</label>
        <input id="t-name" name="name" required placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor="t-email">Email</label>
        <input id="t-email" name="email" type="email" required placeholder="you@email.com" />
      </div>
      <div className="field">
        <label htmlFor="t-service">Preferred app</label>
        <select id="t-service" name="service" defaultValue="Hush-XC">
          <option>Hush-XC</option>
          <option>GWS Online</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="t-device">Your device</label>
        <input
          id="t-device"
          name="device"
          placeholder="e.g. Firestick, Android TV, Google TV…"
        />
      </div>
      <div className="field">
        <label htmlFor="t-message">Anything we should know? (optional)</label>
        <textarea
          id="t-message"
          name="message"
          placeholder="Questions, device details, preferred contact…"
        />
      </div>
      {status === "error" && <div className="form-msg err">{error}</div>}
      <button className="btn btn-primary btn-block" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Request my free trial"}
      </button>
      <p className="form-note">
        No payment needed for a trial. We&apos;ll email your login and setup steps.
      </p>
    </form>
  );
}
