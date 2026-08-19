export type RoadmapType = 'role' | 'skill' | 'app'

export type ResourceType =
  | 'official'
  | 'docs'
  | 'forum'
  | 'school'
  | 'article'
  | 'internal'

export interface Resource {
  type: ResourceType
  title: string
  url: string
}

export interface RoadmapMeta {
  slug: string
  title: string
  type: RoadmapType
  version: string
  summary: string
  order: number
}

export interface GraphNodeData {
  label: string
  kind?: 'topic' | 'groupLabel'
}

export interface RoadmapGraph {
  nodes: Array<{
    id: string
    type: 'topic' | 'groupLabel'
    position: { x: number; y: number }
    data: GraphNodeData
  }>
  edges: Array<{
    id: string
    source: string
    target: string
  }>
}

export interface ParsedTopic {
  title: string
  body: string
  resources: Resource[]
}
