import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RoadmapCanvas } from '../components/RoadmapCanvas'
import { TopicDrawer } from '../components/TopicDrawer'
import { getParsedTopic, getRoadmap } from '../lib/loadRoadmaps'
import { loadDone, toggleDone } from '../lib/progress'

export function RoadmapPage() {
  const { slug = '' } = useParams()
  const roadmap = getRoadmap(slug)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [done, setDone] = useState(() => loadDone(slug))

  useEffect(() => {
    setSelectedId(null)
    setDone(loadDone(slug))
  }, [slug])
  const topicCount = roadmap?.graph.nodes.filter((n) => n.type === 'topic').length ?? 0

  const topic = useMemo(
    () => (selectedId ? getParsedTopic(slug, selectedId) : null),
    [slug, selectedId],
  )

  if (!roadmap) {
    return (
      <div className="p-8">
        <p>Roadmap not found.</p>
        <Link to="/">Back</Link>
      </div>
    )
  }

  return (
    <div className="flex h-svh flex-col">
      <header className="flex items-center justify-between gap-4 border-b border-[var(--border)] px-4 py-3">
        <div>
          <Link to="/" className="text-sm text-[var(--muted)]">
            All roadmaps
          </Link>
          <h1 className="m-0 text-xl font-semibold">{roadmap.meta.title}</h1>
          <p className="m-0 text-sm text-[var(--muted)]">
            {done.size} / {topicCount} done · {roadmap.meta.version}
          </p>
        </div>
      </header>
      <div className="flex min-h-0 flex-1">
        <div className="min-w-0 flex-1">
          <RoadmapCanvas
            graph={roadmap.graph}
            done={done}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
        {selectedId && (
          <TopicDrawer
            topic={topic}
            nodeId={selectedId}
            done={done.has(selectedId)}
            onClose={() => setSelectedId(null)}
            onToggle={() => setDone(toggleDone(slug, selectedId))}
          />
        )}
      </div>
    </div>
  )
}
