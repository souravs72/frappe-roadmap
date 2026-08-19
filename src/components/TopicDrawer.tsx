import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { ParsedTopic, ResourceType } from '../lib/types'

const labels: Record<ResourceType, string> = {
  official: 'Official',
  docs: 'Docs',
  forum: 'Forum',
  school: 'Frappe School',
  article: 'Article',
  internal: 'This site',
}

export function TopicDrawer({
  topic,
  nodeId,
  done,
  onClose,
  onToggle,
}: {
  topic: ParsedTopic | null
  nodeId: string | null
  done: boolean
  onClose: () => void
  onToggle: () => void
}) {
  if (!topic || !nodeId) return null
  return (
    <aside className="flex h-full w-full max-w-md flex-col border-l border-[var(--border)] bg-[var(--panel)]">
      <div className="flex items-start justify-between gap-3 border-b border-[var(--border)] p-4">
        <h2 className="m-0 text-lg font-semibold text-[var(--text)]">{topic.title}</h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded px-2 py-1 text-sm text-[var(--muted)] hover:bg-black/20"
        >
          Close
        </button>
      </div>
      <div className="flex-1 overflow-auto p-4 text-sm leading-relaxed text-[var(--muted)]">
        <div className="topic-body text-[var(--text)]">
          <Markdown remarkPlugins={[remarkGfm]}>{topic.body}</Markdown>
        </div>
        {topic.resources.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-2 text-sm font-semibold text-[var(--text)]">Learn</h3>
            <ul className="space-y-2">
              {topic.resources.map((r) => (
                <li key={`${r.type}-${r.url}`}>
                  <span className="mr-2 rounded bg-black/30 px-1.5 py-0.5 text-[11px] uppercase">
                    {labels[r.type]}
                  </span>
                  <a
                    href={r.url}
                    {...(r.url.startsWith('#/')
                      ? {}
                      : { target: '_blank', rel: 'noreferrer' })}
                  >
                    {r.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-[var(--border)] p-4">
        <button
          type="button"
          onClick={onToggle}
          className="w-full rounded bg-[var(--accent)] px-3 py-2 text-sm font-medium text-black"
        >
          {done ? 'Mark as not done' : 'Mark as done'}
        </button>
      </div>
    </aside>
  )
}
