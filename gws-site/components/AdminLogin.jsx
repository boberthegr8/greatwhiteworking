"use client";
import { useState } from "react";
import FinLogo from "./FinLogo";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Login failed");
      window.location.reload();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="login-screen">
      <form className="login-card" onSubmit={onSubmit}>
        <div className="login-brand">
          <FinLogo />
          <div>
            <strong>GWS Admin</strong>
            <small>Great White Streams</small>
          </div>
        </div>
        <p className="login-hint">Enter your admin password to continue.</p>
        <div className="field">
          <label htmlFor="pw">Password</label>
          <input
            id="pw"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            placeholder="••••••••"
          />
        </div>
        {error && <div className="form-msg err">{error}</div>}
        <button className="btn btn-primary btn-block" disabled={loading}>
          {loading ? "Checking…" : "Sign in"}
        </button>
        <a href="/" className="login-back">
          ← Back to site
        </a>
      </form>
    </div>
  );
}
