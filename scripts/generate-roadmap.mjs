import fs from 'node:fs'
import path from 'node:path'

function arg(name, fallback = '') {
  const i = process.argv.indexOf(`--${name}`)
  if (i === -1) return fallback
  return process.argv[i + 1] || fallback
}

const slug = arg('slug')
const title = arg('title', slug)
const type = arg('type', 'skill')
const topicsCsv = arg('topics')

if (!slug || !topicsCsv) {
  console.error(
    'Usage: node scripts/generate-roadmap.mjs --slug my-map --title "My map" --type skill --topics "Topic A,Topic B"',
  )
  console.error('Optional: OPENAI_API_KEY to rewrite summaries. Always review output before merging.')
  process.exit(1)
}

function toId(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const labels = topicsCsv.split(',').map((s) => s.trim()).filter(Boolean)
const apiKey = process.env.OPENAI_API_KEY

async function summarize(label) {
  if (!apiKey) {
    return `${label} on Frappe v16. Replace this stub with original notes and official doc links before merging.`
  }
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content:
            'Write 2-3 original sentences for a Frappe v16 developer roadmap topic. Cite official docs only. No APIs you cannot cite.',
        },
        { role: 'user', content: `Topic: ${label}` },
      ],
    }),
  })
  if (!res.ok) {
    throw new Error(`OpenAI HTTP ${res.status}`)
  }
  const data = await res.json()
  return data.choices[0].message.content.trim()
}

const ROOT = path.resolve(import.meta.dirname, '..')
const dir = path.join(ROOT, 'content', 'roadmaps', slug)
const topicsDir = path.join(dir, 'topics')
fs.mkdirSync(topicsDir, { recursive: true })

const nodes = []
const edges = []
const ids = []
for (let i = 0; i < labels.length; i++) {
  const id = toId(labels[i])
  ids.push(id)
  nodes.push({
    id,
    type: 'topic',
    position: { x: 16 + (i % 4) * 238, y: 56 + Math.floor(i / 4) * 140 },
    data: { label: labels[i] },
  })
}
for (let i = 0; i < ids.length - 1; i++) {
  edges.push({ id: `${ids[i]}-${ids[i + 1]}`, source: ids[i], target: ids[i + 1] })
}

fs.writeFileSync(
  path.join(dir, 'meta.json'),
  JSON.stringify(
    {
      slug,
      title,
      type,
      version: 'v16',
      summary: `Generated stub for ${title}. Human review required.`,
      order: 90,
    },
    null,
    2,
  ) + '\n',
)
fs.writeFileSync(path.join(dir, 'graph.json'), JSON.stringify({ nodes, edges }, null, 2) + '\n')

for (const label of labels) {
  const id = toId(label)
  const summary = await summarize(label)
  const md = `# ${label}\n\n${summary}\n\n## Learn\n\n- @official@ Frappe Framework docs | https://docs.frappe.io/framework\n`
  fs.writeFileSync(path.join(topicsDir, `${id}.md`), md)
  console.log('wrote', id)
}

console.log('Generated', slug, '- review before merge')
