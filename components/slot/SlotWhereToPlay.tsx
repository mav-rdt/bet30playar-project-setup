'use client'

export default function SlotWhereToPlay({ data }: any) {
  const safeData = Array.isArray(data) ? data : []
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
          🎰
        </div>
        <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Dónde jugar</h2>
      </div>
      <div style={{ padding: '22px 26px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {safeData.map((casino: any, i: number) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'var(--surface-2)',
                borderRadius: 'var(--r-md)',
                border: '1px solid var(--gray-3)',
                transition: 'border-color 0.2s, background 0.15s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-line)'
                e.currentTarget.style.background = 'var(--surface-3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--gray-3)'
                e.currentTarget.style.background = 'var(--surface-2)'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--r-sm)',
                  background: 'var(--surface-3)',
                  border: '1px solid var(--gray-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: '14px',
                  color: 'var(--gold)',
                  flexShrink: 0,
                }}
              >
                {(casino.name ?? casino.casino).charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)' }}>{casino.name ?? casino.casino}</div>
                <div style={{ fontSize: '11px', color: 'var(--gray-2)' }}>{casino.bonus}</div>
              </div>
              {casino.badge && (
                <div
                  style={{
                    padding: '3px 8px',
                    borderRadius: '999px',
                    background: 'var(--green-dim)',
                    border: '1px solid rgba(45, 217, 143, 0.2)',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: 'var(--green)',
                  }}
                >
                  {casino.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
