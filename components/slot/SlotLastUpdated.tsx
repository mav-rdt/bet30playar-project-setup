'use client'

export default function SlotLastUpdated({ date }: any) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 18px',
        background: 'var(--surface-2)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-md)',
        fontSize: '12px',
        color: 'var(--gray-2)',
      }}
    >
      <div
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: 'var(--green)',
          flexShrink: 0,
          boxShadow: '0 0 0 3px var(--green-dim)',
        }}
      />
      <span>Actualizado: {date}</span>
    </div>
  )
}
