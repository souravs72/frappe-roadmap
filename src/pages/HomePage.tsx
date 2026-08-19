import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { listRoadmaps } from '../lib/loadRoadmaps'

export function HomePage() {
  const [q, setQ] = useState('')
  const roadmaps = listRoadmaps()
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return roadmaps
    return roadmaps.filter(
      (r) =>
        r.title.toLowerCase().includes(s) ||
        r.summary.toLowerCase().includes(s) ||
        r.slug.includes(s),
    )
  }, [q, roadmaps])

  const groups = [
    { key: 'role', label: 'Role' },
    { key: 'skill', label: 'Skills for Frappe' },
    { key: 'app', label: 'Framework and apps' },
  ] as const

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <p className="text-sm text-[var(--muted)]">Frappe v16 · original content</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Frappe developer roadmaps</h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Interactive learning maps for bench, Frappe Framework, ERPNext, HRMS, LMS, and
        Helpdesk. Prerequisite maps are Frappe-specific; they link out to roadmap.sh instead
        of copying it.
      </p>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search roadmaps"
        className="mt-6 w-full max-w-md rounded border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-sm"
      />
      {groups.map((g) => {
        const items = filtered.filter((r) => r.type === g.key)
        if (!items.length) return null
        return (
          <section key={g.key} className="mt-10">
            <h2 className="text-lg font-medium">{g.label}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {items.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/r/${r.slug}`}
                    className="block rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 hover:border-[var(--accent)]"
                  >
                    <div className="font-medium text-[var(--text)]">{r.title}</div>
                    <p className="mt-1 text-sm text-[var(--muted)]">{r.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
