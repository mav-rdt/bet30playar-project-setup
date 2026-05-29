'use client'

export default function SlotSimilar({ slots }: any) {
  const safeSlots = Array.isArray(slots) ? slots : []
  return (
    <div
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--gray-3)', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Tragamonedas similares
      </div>
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {safeSlots.map((slot: any, i: number) => (
          <a
            key={i}
            href={`/tragamonedas/${slot.name.toLowerCase().replace(/\s+/g, '-')}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'inherit',
              padding: '8px',
              borderRadius: 'var(--r-md)',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface-2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--r-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                flexShrink: 0,
                border: '1px solid var(--gray-3)',
              }}
            >
              {slot.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)' }}>{slot.name}</div>
              <div style={{ fontSize: '11px', color: 'var(--green)', fontFamily: 'var(--font-dm-mono)' }}>RTP {slot.rtp}{typeof slot.rtp === 'string' && slot.rtp.endsWith('%') ? '' : '%'}</div>
              <div style={{ fontSize: '11px', color: 'var(--gray-2)' }}>{slot.volatility}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
