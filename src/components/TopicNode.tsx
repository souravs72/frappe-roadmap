import { Handle, Position, type NodeProps } from '@xyflow/react'

export function TopicNode({ data, selected }: NodeProps) {
  const done = Boolean((data as { done?: boolean }).done)
  const label = String((data as { label?: string }).label ?? '')
  return (
    <div
      className={`min-w-[180px] max-w-[220px] rounded-md border px-3 py-2 text-left shadow-sm ${
        done
          ? 'border-emerald-500 bg-emerald-950/40 text-emerald-100'
          : 'border-[var(--border)] bg-[var(--panel)] text-[var(--text)]'
      } ${selected ? 'ring-2 ring-[var(--accent)]' : ''}`}
    >
      <Handle type="target" position={Position.Top} />
      <div className="text-[13px] font-medium leading-snug">{label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

export function GroupLabelNode({ data }: NodeProps) {
  return (
    <div className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
      {String((data as { label?: string }).label ?? '')}
    </div>
  )
}
