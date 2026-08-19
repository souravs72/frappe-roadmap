import { useCallback, useMemo } from 'react'
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Node,
  type Edge,
} from '@xyflow/react'
import { GroupLabelNode, TopicNode } from './TopicNode'
import type { RoadmapGraph } from '../lib/types'

const nodeTypes = { topic: TopicNode, groupLabel: GroupLabelNode }

export function RoadmapCanvas({
  graph,
  done,
  selectedId,
  onSelect,
}: {
  graph: RoadmapGraph
  done: Set<string>
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  const nodes: Node[] = useMemo(
    () =>
      graph.nodes.map((n) => ({
        id: n.id,
        type: n.type,
        position: n.position,
        data: { label: n.data.label, done: done.has(n.id) },
        selected: selectedId === n.id,
        draggable: false,
        connectable: false,
      })),
    [graph.nodes, done, selectedId],
  )

  const edges: Edge[] = useMemo(
    () =>
      graph.edges.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        animated: false,
      })),
    [graph.edges],
  )

  const onNodeClick = useCallback(
    (_: unknown, node: Node) => {
      if (node.type === 'topic') onSelect(node.id)
    },
    [onSelect],
  )

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        minZoom={0.3}
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}
