const TYPES = new Set([
  'official',
  'docs',
  'forum',
  'school',
  'article',
  'internal',
])

export function parseTopic(raw) {
  const lines = raw.replace(/\r\n/g, '\n').split('\n')
  let title = 'Topic'
  const bodyLines = []
  const resources = []
  let inLearn = false
  for (const line of lines) {
    if (line.startsWith('# ')) {
      title = line.slice(2).trim()
      continue
    }
    if (/^##\s+Learn\s*$/i.test(line)) {
      inLearn = true
      continue
    }
    if (inLearn && line.startsWith('## ')) inLearn = false
    if (inLearn) {
      const m = line.match(/^- @(\w+)@\s+(.+?)\s+\|\s+((?:https?:\/\/|#\/)\S+)\s*$/)
      if (m && TYPES.has(m[1])) {
        resources.push({ type: m[1], title: m[2].trim(), url: m[3] })
        continue
      }
    }
    bodyLines.push(line)
  }
  return { title, body: bodyLines.join('\n').trim(), resources }
}
