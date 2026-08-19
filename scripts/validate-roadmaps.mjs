import fs from 'node:fs'
import path from 'node:path'
import { parseTopic } from './lib/topic.mjs'

const ROOT = path.resolve(import.meta.dirname, '..')
const BASE = path.join(ROOT, 'content', 'roadmaps')

const TYPES = new Set([
  'official',
  'docs',
  'forum',
  'school',
  'article',
  'internal',
])

function fail(msg) {
  console.error(msg)
  process.exitCode = 1
}

const BANNED_HOST = ['roadmap', 'sh'].join('.')
const BANNED_HOST_RE = new RegExp(BANNED_HOST.replace('.', '\\.'), 'i')
const SKIP_SCAN = new Set(['node_modules', 'dist', '.git'])

function scanTree(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP_SCAN.has(name)) continue
    const p = path.join(dir, name)
    const st = fs.statSync(p)
    if (st.isDirectory()) {
      scanTree(p)
      continue
    }
    if (!/\.(md|mjs|js|ts|tsx|json|css|html|yml|yaml|txt)$/i.test(name)) continue
    const raw = fs.readFileSync(p, 'utf8')
    if (BANNED_HOST_RE.test(raw)) {
      fail(`${path.relative(ROOT, p)}: forbidden third-party skill-map host`)
    }
  }
}

if (!fs.existsSync(BASE)) {
  fail(`Missing ${BASE}`)
  process.exit(1)
}

scanTree(ROOT)

for (const slug of fs.readdirSync(BASE)) {
  const dir = path.join(BASE, slug)
  if (!fs.statSync(dir).isDirectory()) continue
  const metaPath = path.join(dir, 'meta.json')
  const graphPath = path.join(dir, 'graph.json')
  const topicsDir = path.join(dir, 'topics')
  if (!fs.existsSync(metaPath) || !fs.existsSync(graphPath) || !fs.existsSync(topicsDir)) {
    fail(`${slug}: missing meta.json, graph.json, or topics/`)
    continue
  }
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
  const graph = JSON.parse(fs.readFileSync(graphPath, 'utf8'))
  if (meta.slug !== slug) fail(`${slug}: meta.slug mismatch`)
  const topicIds = graph.nodes.filter((n) => n.type === 'topic').map((n) => n.id)
  const files = fs.readdirSync(topicsDir).filter((f) => f.endsWith('.md'))
  const fileIds = files.map((f) => f.replace(/\.md$/, ''))
  for (const id of topicIds) {
    if (!fileIds.includes(id)) fail(`${slug}: node ${id} has no topics/${id}.md`)
  }
  for (const id of fileIds) {
    if (!topicIds.includes(id)) fail(`${slug}: topics/${id}.md has no graph node`)
  }
  const nodeSet = new Set(graph.nodes.map((n) => n.id))
  for (const e of graph.edges) {
    if (!nodeSet.has(e.source) || !nodeSet.has(e.target)) {
      fail(`${slug}: edge ${e.id} references missing node`)
    }
  }
  for (const file of files) {
    const raw = fs.readFileSync(path.join(topicsDir, file), 'utf8')
    const parsed = parseTopic(raw)
    for (const r of parsed.resources) {
      if (!TYPES.has(r.type)) fail(`${slug}/${file}: bad type @${r.type}@`)
      if (r.type === 'internal') {
        if (!r.url.startsWith('#/')) fail(`${slug}/${file}: @internal@ must start with #/`)
        continue
      }
      try {
        new URL(r.url)
      } catch {
        fail(`${slug}/${file}: bad url ${r.url}`)
      }
      if (r.type === 'forum' && !r.url.includes('discuss.frappe.io')) {
        fail(`${slug}/${file}: @forum@ must be a discuss.frappe.io URL`)
      }
    }
  }
}

if (process.exitCode) {
  console.error('validate failed')
  process.exit(1)
}
console.log('validate ok')
