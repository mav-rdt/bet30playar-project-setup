'use client'

export default function LastUpdated({ date }: { date: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 20px',
        background: 'var(--surface-2)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-md)',
        fontSize: '12px',
        color: 'var(--gray-2)',
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--green)',
          flexShrink: 0,
          boxShadow: '0 0 0 3px var(--green-dim)',
        }}
      />
      <span>Verificado el {date}</span>
    </div>
  )
}
