'use client'

export default function SlotNav({ slug }: { slug: string }) {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(8, 10, 16, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--gray-3)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '1.1rem',
            fontWeight: 800,
            color: 'var(--white)',
            textDecoration: 'none',
          }}
        >
          Bet30Play<span style={{ color: 'var(--gold)' }}>Ar</span>
        </a>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: 'var(--gray-2)',
          }}
        >
          <a href="/" style={{ color: 'var(--gray-2)', textDecoration: 'none' }}>
            Inicio
          </a>
          <span style={{ color: 'var(--gray-3)' }}>/</span>
          <a href="/tragamonedas" style={{ color: 'var(--gray-2)', textDecoration: 'none' }}>
            Tragamonedas
          </a>
          <span style={{ color: 'var(--gray-3)' }}>/</span>
          <span style={{ color: 'var(--gray-1)' }}>{slug}</span>
        </div>
        <a
          href="#donde-jugar"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            padding: '8px 18px',
            borderRadius: '999px',
            background: 'var(--accent-slot)',
            color: '#fff',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          ¿Dónde jugar?
        </a>
      </div>
    </nav>
  )
}
