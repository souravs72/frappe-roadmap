import fs from 'node:fs'
import path from 'node:path'
import { parseTopic } from './lib/topic.mjs'

const ROOT = path.resolve(import.meta.dirname, '..')
const BASE = path.join(ROOT, 'content', 'roadmaps')
const SAMPLE = 12

const urls = []
for (const slug of fs.readdirSync(BASE)) {
  const dir = path.join(BASE, slug, 'topics')
  if (!fs.existsSync(dir)) continue
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue
    const parsed = parseTopic(fs.readFileSync(path.join(dir, file), 'utf8'))
    for (const r of parsed.resources) {
      if (r.type === 'official' || r.type === 'docs' || r.type === 'github') {
        urls.push(r.url)
      }
    }
  }
}

const unique = [...new Set(urls)].slice(0, SAMPLE)
let failed = 0
for (const url of unique) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' })
    const ok = res.ok || res.status === 405 || res.status === 403
    console.log(ok ? 'ok' : `fail ${res.status}`, url)
    if (!ok) failed += 1
  } catch (err) {
    console.log('fail', url, err.message)
    failed += 1
  }
}

if (failed) {
  console.error(`check-links: ${failed} of ${unique.length} sample URLs failed`)
  process.exit(1)
}
console.log(`check-links: ${unique.length} sample URLs reachable`)
