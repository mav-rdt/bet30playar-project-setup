'use client'

export default function SlotFeatures({ features }: any) {
  const safeFeatures = Array.isArray(features) ? features : []
  return (
    <div
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '18px 26px 16px', borderBottom: '1px solid var(--gray-3)', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: 'var(--r-sm)',
            background: 'var(--accent-dim)',
            border: '1px solid var(--accent-line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            flexShrink: 0,
          }}
        >
          ⭐
        </div>
        <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Características clave</h2>
      </div>
      <div style={{ padding: '22px 26px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {safeFeatures.map((feature: string, i: number) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                padding: '11px 14px',
                background: 'var(--surface-2)',
                borderRadius: 'var(--r-sm)',
                borderLeft: '3px solid var(--accent-slot)',
                fontSize: '13px',
                color: 'var(--gray-1)',
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: 'var(--accent-slot)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}