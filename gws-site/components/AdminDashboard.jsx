"use client";
import { useEffect, useState, useCallback } from "react";
import FinLogo from "./FinLogo";

const TABS = ["Users", "Trials", "Messages", "Updates"];

const emptyUser = {
  name: "",
  email: "",
  service: "Hush",
  plan: "Monthly",
  status: "active",
  expiresAt: "",
  notes: "",
};

export default function AdminDashboard() {
  const [tab, setTab] = useState("Users");
  const [data, setData] = useState({
    users: [],
    trials: [],
    messages: [],
    updates: [],
  });
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    setErr("");
    try {
      const res = await fetch("/api/admin/data", { cache: "no-store" });
      if (res.status === 401) {
        window.location.reload();
        return;
      }
      if (!res.ok) throw new Error("Failed to load data");
      setData(await res.json());
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function logout() {
    await fetch("/api/auth", { method: "DELETE" });
    window.location.reload();
  }

  const newTrials = data.trials.filter((t) => t.status === "new").length;
  const newMsgs = data.messages.filter((m) => !m.handled).length;

  const counts = {
    Users: data.users.length,
    Trials: newTrials,
    Messages: newMsgs,
    Updates: data.updates.length,
  };

  return (
    <div className="admin">
      <aside className="admin-side">
        <div className="admin-brand">
          <FinLogo />
          <div>
            <strong>GWS Admin</strong>
            <small>Great White Streams</small>
          </div>
        </div>
        <nav className="admin-nav">
          {TABS.map((t) => (
            <button
              key={t}
              className={`admin-nav-item ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              <span>{t}</span>
              {counts[t] > 0 && <em>{counts[t]}</em>}
            </button>
          ))}
        </nav>
        <div className="admin-side-foot">
          <a href="/" className="admin-link">
            ← View site
          </a>
          <button className="btn btn-ghost btn-block" onClick={logout}>
            Sign out
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-head">
          <h1>{tab}</h1>
          <div className="admin-head-actions">
            <button className="btn btn-ghost" onClick={load}>
              ↻ Refresh
            </button>
          </div>
        </header>

        {err && <div className="form-msg err">{err}</div>}
        {loading ? (
          <div className="admin-empty">Loading…</div>
        ) : (
          <>
            {tab === "Users" && <UsersTab users={data.users} reload={load} />}
            {tab === "Trials" && (
              <TrialsTab trials={data.trials} reload={load} />
            )}
            {tab === "Messages" && (
              <MessagesTab messages={data.messages} reload={load} />
            )}
            {tab === "Updates" && (
              <UpdatesTab updates={data.updates} reload={load} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    active: "ok",
    trial: "warn",
    expired: "muted",
    suspended: "danger",
    new: "warn",
    sent: "info",
    converted: "ok",
    declined: "muted",
  };
  return <span className={`badge ${map[status] || "muted"}`}>{status}</span>;
}

function fmt(d) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/* ── Users ─────────────────────────────────────────── */
function UsersTab({ users, reload }) {
  const [form, setForm] = useState(emptyUser);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);

  function startNew() {
    setForm(emptyUser);
    setEditingId(null);
    setOpen(true);
  }
  function startEdit(u) {
    setForm({
      name: u.name,
      email: u.email,
      service: u.service,
      plan: u.plan,
      status: u.status,
      expiresAt: u.expiresAt ? u.expiresAt.slice(0, 10) : "",
      notes: u.notes || "",
    });
    setEditingId(u.id);
    setOpen(true);
  }

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    const url = editingId ? `/api/users/${editingId}` : "/api/users";
    const method = editingId ? "PATCH" : "POST";
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    setOpen(false);
    reload();
  }

  async function remove(id) {
    if (!confirm("Delete this user?")) return;
    await fetch(`/api/users/${id}`, { method: "DELETE" });
    reload();
  }

  return (
    <div>
      <div className="toolbar">
        <p className="muted">{users.length} managed users</p>
        <button className="btn btn-primary" onClick={startNew}>
          + Add user
        </button>
      </div>

      {open && (
        <form className="panel editor" onSubmit={save}>
          <h3>{editingId ? "Edit user" : "New user"}</h3>
          <div className="editor-grid">
            <div className="field">
              <label>Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Service</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option>Hush</option>
                <option>Pure Vision</option>
              </select>
            </div>
            <div className="field">
              <label>Plan</label>
              <input
                value={form.plan}
                onChange={(e) => setForm({ ...form, plan: e.target.value })}
                placeholder="Monthly, Yearly, Trial…"
              />
            </div>
            <div className="field">
              <label>Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option value="active">active</option>
                <option value="trial">trial</option>
                <option value="expired">expired</option>
                <option value="suspended">suspended</option>
              </select>
            </div>
            <div className="field">
              <label>Expires</label>
              <input
                type="date"
                value={form.expiresAt}
                onChange={(e) =>
                  setForm({ ...form, expiresAt: e.target.value })
                }
              />
            </div>
          </div>
          <div className="field">
            <label>Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>
          <div className="editor-actions">
            <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" disabled={saving}>
              {saving ? "Saving…" : "Save user"}
            </button>
          </div>
        </form>
      )}

      <div className="panel">
        {users.length === 0 ? (
          <div className="admin-empty">No users yet. Add your first one.</div>
        ) : (
          <table className="tbl">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Expires</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td data-label="Name">{u.name}</td>
                  <td data-label="Email" className="muted">{u.email}</td>
                  <td data-label="Service">{u.service}</td>
                  <td data-label="Plan">{u.plan}</td>
                  <td data-label="Status"><StatusBadge status={u.status} /></td>
                  <td data-label="Expires" className="muted">{fmt(u.expiresAt)}</td>
                  <td className="row-actions">
                    <button className="mini" onClick={() => startEdit(u)}>
                      Edit
                    </button>
                    <button className="mini danger" onClick={() => remove(u.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

/* ── Trials ────────────────────────────────────────── */
function TrialsTab({ trials, reload }) {
  async function setStatus(id, status) {
    await fetch(`/api/trials/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    reload();
  }
  async function remove(id) {
    if (!confirm("Delete this trial request?")) return;
    await fetch(`/api/trials/${id}`, { method: "DELETE" });
    reload();
  }

  return (
    <div className="panel">
      {trials.length === 0 ? (
        <div className="admin-empty">No trial requests yet.</div>
      ) : (
        <div className="cards">
          {trials.map((t) => (
            <div className="req-card" key={t.id}>
              <div className="req-top">
                <div>
                  <strong>{t.name}</strong>
                  <a href={`mailto:${t.email}`} className="muted">
                    {t.email}
                  </a>
                </div>
                <StatusBadge status={t.status} />
              </div>
              <div className="req-meta">
                <span>🦈 {t.service}</span>
                {t.device && <span>📺 {t.device}</span>}
                <span className="muted">{fmt(t.createdAt)}</span>
              </div>
              {t.message && <p className="req-body">{t.message}</p>}
              <div className="req-actions">
                <button className="mini" onClick={() => setStatus(t.id, "sent")}>
                  Mark sent
                </button>
                <button
                  className="mini ok"
                  onClick={() => setStatus(t.id, "converted")}
                >
                  Converted
                </button>
                <button
                  className="mini"
                  onClick={() => setStatus(t.id, "declined")}
                >
                  Decline
                </button>
                <button className="mini danger" onClick={() => remove(t.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Messages ──────────────────────────────────────── */
function MessagesTab({ messages, reload }) {
  async function toggle(id, handled) {
    await fetch(`/api/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ handled }),
    });
    reload();
  }
  async function remove(id) {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/messages/${id}`, { method: "DELETE" });
    reload();
  }

  return (
    <div className="panel">
      {messages.length === 0 ? (
        <div className="admin-empty">No messages yet.</div>
      ) : (
        <div className="cards">
          {messages.map((m) => (
            <div
              className={`req-card ${m.handled ? "dim" : ""}`}
              key={m.id}
            >
              <div className="req-top">
                <div>
                  <strong>{m.name}</strong>
                  <a href={`mailto:${m.email}`} className="muted">
                    {m.email}
                  </a>
                </div>
                {m.handled ? (
                  <span className="badge ok">handled</span>
                ) : (
                  <span className="badge warn">new</span>
                )}
              </div>
              <div className="req-meta">
                {m.subject && <span>✉️ {m.subject}</span>}
                <span className="muted">{fmt(m.createdAt)}</span>
              </div>
              <p className="req-body">{m.message}</p>
              <div className="req-actions">
                <a className="mini" href={`mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject || "Your message")}`}>
                  Reply
                </a>
                <button
                  className="mini"
                  onClick={() => toggle(m.id, !m.handled)}
                >
                  {m.handled ? "Mark unread" : "Mark handled"}
                </button>
                <button className="mini danger" onClick={() => remove(m.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Updates ───────────────────────────────────────── */
function UpdatesTab({ updates, reload }) {
  const [form, setForm] = useState({ source: "Hush", title: "", body: "" });
  const [saving, setSaving] = useState(false);

  async function post(e) {
    e.preventDefault();
    if (!form.title) return;
    setSaving(true);
    await fetch("/api/updates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ source: form.source, title: "", body: "" });
    setSaving(false);
    reload();
  }
  async function remove(id) {
    if (!confirm("Delete this update?")) return;
    await fetch(`/api/updates/${id}`, { method: "DELETE" });
    reload();
  }

  return (
    <div>
      <form className="panel editor" onSubmit={post}>
        <h3>Post an update</h3>
        <p className="muted" style={{ marginTop: -6, marginBottom: 14 }}>
          Pure Vision updates also sync automatically from Telegram. Use this to
          relay Hush updates from Circle, or post anything manually.
        </p>
        <div className="editor-grid">
          <div className="field">
            <label>Source</label>
            <select
              value={form.source}
              onChange={(e) => setForm({ ...form, source: e.target.value })}
            >
              <option>Hush</option>
              <option>Pure Vision</option>
            </select>
          </div>
          <div className="field" style={{ gridColumn: "span 2" }}>
            <label>Title</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Short headline"
            />
          </div>
        </div>
        <div className="field">
          <label>Details (optional)</label>
          <textarea
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
        </div>
        <div className="editor-actions">
          <button className="btn btn-primary" disabled={saving}>
            {saving ? "Posting…" : "Post update"}
          </button>
        </div>
      </form>

      <div className="panel">
        {updates.length === 0 ? (
          <div className="admin-empty">No updates posted yet.</div>
        ) : (
          <div className="cards">
            {updates.map((u) => (
              <div className="req-card" key={u.id}>
                <div className="req-top">
                  <strong>{u.title}</strong>
                  <span
                    className={`badge ${
                      u.source === "Hush" ? "info" : "ok"
                    }`}
                  >
                    {u.source}
                    {u.externalId ? " · TG" : ""}
                  </span>
                </div>
                {u.body && <p className="req-body">{u.body}</p>}
                <div className="req-actions">
                  <span className="muted" style={{ fontSize: 12 }}>
                    {fmt(u.createdAt)}
                  </span>
                  <button className="mini danger" onClick={() => remove(u.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
