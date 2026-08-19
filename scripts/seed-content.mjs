import fs from 'node:fs'
import path from 'node:path'
import { roadmaps } from './catalog.mjs'

const ROOT = path.resolve(import.meta.dirname, '..')
const NODE_W = 210
const GAP_X = 28
const GAP_Y = 140

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function buildGraph(rows) {
  const nodes = []
  const edges = []
  let y = 56
  let prevFirst = null
  for (const row of rows) {
    nodes.push({
      id: `g-${slugify(row.group)}`,
      type: 'groupLabel',
      position: { x: 16, y: y - 36 },
      data: { label: row.group },
    })
    const ids = []
    row.topics.forEach((t, i) => {
      nodes.push({
        id: t.id,
        type: 'topic',
        position: { x: 16 + i * (NODE_W + GAP_X), y },
        data: { label: t.label },
      })
      ids.push(t.id)
    })
    for (let i = 0; i < ids.length - 1; i++) {
      edges.push({
        id: `${ids[i]}-${ids[i + 1]}`,
        source: ids[i],
        target: ids[i + 1],
      })
    }
    if (prevFirst && ids[0]) {
      edges.push({
        id: `${prevFirst}-${ids[0]}`,
        source: prevFirst,
        target: ids[0],
      })
    }
    prevFirst = ids[0]
    y += GAP_Y
  }
  return { nodes, edges }
}

function topicMarkdown(t) {
  const lines = (t.resources || []).map(
    (r) => `- @${r.type}@ ${r.title} | ${r.url}`,
  )
  return `# ${t.label}\n\n${t.summary}\n\n## Learn\n\n${lines.join('\n')}\n`
}

for (const rm of roadmaps) {
  const dir = path.join(ROOT, 'content', 'roadmaps', rm.slug)
  const topicsDir = path.join(dir, 'topics')
  fs.mkdirSync(topicsDir, { recursive: true })
  const meta = {
    slug: rm.slug,
    title: rm.title,
    type: rm.type,
    version: rm.version,
    summary: rm.summary,
    order: rm.order,
  }
  fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify(meta, null, 2) + '\n')
  fs.writeFileSync(
    path.join(dir, 'graph.json'),
    JSON.stringify(buildGraph(rm.rows), null, 2) + '\n',
  )
  const topicIds = new Set()
  for (const row of rm.rows) {
    for (const t of row.topics) {
      topicIds.add(t.id)
      fs.writeFileSync(path.join(topicsDir, `${t.id}.md`), topicMarkdown(t))
    }
  }
  for (const file of fs.readdirSync(topicsDir)) {
    const id = file.replace(/\.md$/, '')
    if (file.endsWith('.md') && !topicIds.has(id)) {
      fs.unlinkSync(path.join(topicsDir, file))
    }
  }
  console.log('seeded', rm.slug)
}
