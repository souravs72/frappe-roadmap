import type { ParsedTopic, Resource, ResourceType } from './types'

const TYPES: ResourceType[] = [
  'official',
  'github',
  'docs',
  'video',
  'article',
  'school',
  'roadmapsh',
]

export function parseTopicMarkdown(raw: string): ParsedTopic {
  const lines = raw.replace(/\r\n/g, '\n').split('\n')
  let title = 'Topic'
  const bodyLines: string[] = []
  const resources: Resource[] = []
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
    if (inLearn && line.startsWith('## ')) {
      inLearn = false
    }
    if (inLearn) {
      const m = line.match(/^- @(\w+)@\s+(.+?)\s+\|\s+(https?:\/\/\S+)\s*$/)
      if (m) {
        const type = m[1] as ResourceType
        if (TYPES.includes(type)) {
          resources.push({ type, title: m[2].trim(), url: m[3] })
        }
        continue
      }
    }
    bodyLines.push(line)
  }

  return {
    title,
    body: bodyLines.join('\n').trim(),
    resources,
  }
}
