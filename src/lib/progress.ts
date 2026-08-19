const storageKey = (slug: string) => `frappe-roadmap:progress:${slug}`

export function loadDone(slug: string): Set<string> {
  try {
    const raw = localStorage.getItem(storageKey(slug))
    if (!raw) return new Set()
    const parsed = JSON.parse(raw) as string[]
    return new Set(parsed)
  } catch {
    return new Set()
  }
}

export function saveDone(slug: string, done: Set<string>) {
  localStorage.setItem(storageKey(slug), JSON.stringify([...done]))
}

export function toggleDone(slug: string, nodeId: string): Set<string> {
  const next = loadDone(slug)
  if (next.has(nodeId)) next.delete(nodeId)
  else next.add(nodeId)
  saveDone(slug, next)
  return next
}
