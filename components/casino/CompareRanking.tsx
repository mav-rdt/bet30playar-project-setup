'use client'

interface CompareRankingProps {
  active: string
}

export default function CompareRanking({ active }: CompareRankingProps) {
  const casinos = [
    { pos: '1', name: 'Betsson', score: '9.4' },
    { pos: '2', name: 'Codere', score: '8.9' },
    { pos: '3', name: 'Luckia', score: '8.6' },
    { pos: '4', name: '888Casino', score: '8.2' },
  ]

  return (
    <div
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '14px 20px',
          borderBottom: '1px solid var(--gray-3)',
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '10px',
          color: 'var(--gray-2)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        Ranking de casinos
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {casinos.map((casino, idx) => (
          <a
            key={idx}
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 20px',
              borderBottom: idx === casinos.length - 1 ? 'none' : '1px solid rgba(46,51,72,0.5)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background 0.15s',
              background: casino.name === active ? 'var(--gold-dim)' : 'transparent',
              borderColor: casino.name === active ? 'var(--gold-line)' : 'inherit',
            }}
            onMouseEnter={(e) => {
              if (casino.name !== active) {
                e.currentTarget.style.background = 'var(--surface-2)'
              }
            }}
            onMouseLeave={(e) => {
              if (casino.name !== active) {
                e.currentTarget.style.background = 'transparent'
              }
            }}
          >
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--gray-2)', width: '16px', flexShrink: 0 }}>
              {casino.pos}
            </span>
            <span style={{ fontSize: '13px', fontWeight: 500, flex: 1, color: casino.name === active ? 'var(--gold)' : 'inherit' }}>
              {casino.name}
            </span>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'var(--gold)' }}>
              {casino.score}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
