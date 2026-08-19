import type { RoadmapGraph, RoadmapMeta } from './types'
import { parseTopicMarkdown } from './parseTopic'

const metaModules = import.meta.glob('../../content/roadmaps/*/meta.json', {
  eager: true,
}) as Record<string, { default: RoadmapMeta }>

const graphModules = import.meta.glob('../../content/roadmaps/*/graph.json', {
  eager: true,
}) as Record<string, { default: RoadmapGraph }>

const topicModules = import.meta.glob('../../content/roadmaps/*/topics/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function slugFromPath(path: string): string {
  const m = path.match(/content\/roadmaps\/([^/]+)\//)
  if (!m) throw new Error(`Cannot parse slug from ${path}`)
  return m[1]
}

export function listRoadmaps(): RoadmapMeta[] {
  return Object.entries(metaModules)
    .map(([path, mod]) => ({
      ...mod.default,
      slug: mod.default.slug || slugFromPath(path),
    }))
    .sort((a, b) => a.order - b.order)
}

export function getRoadmap(slug: string) {
  const metaEntry = Object.entries(metaModules).find(([p]) =>
    p.includes(`/roadmaps/${slug}/`),
  )
  const graphEntry = Object.entries(graphModules).find(([p]) =>
    p.includes(`/roadmaps/${slug}/`),
  )
  if (!metaEntry || !graphEntry) return null

  const topics: Record<string, string> = {}
  for (const [path, raw] of Object.entries(topicModules)) {
    if (!path.includes(`/roadmaps/${slug}/topics/`)) continue
    const file = path.split('/').pop() || ''
    const id = file.replace(/\.md$/, '')
    topics[id] = raw
  }

  return {
    meta: metaEntry[1].default,
    graph: graphEntry[1].default,
    topics,
  }
}

export function getParsedTopic(slug: string, nodeId: string) {
  const roadmap = getRoadmap(slug)
  if (!roadmap) return null
  const raw = roadmap.topics[nodeId]
  if (!raw) return null
  return parseTopicMarkdown(raw)
}
