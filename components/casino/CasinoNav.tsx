'use client'

import Link from 'next/link'

interface CasinoNavProps {
  slug: string
}

export default function CasinoNav({ slug }: CasinoNavProps) {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(8,10,16,0.88)',
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
        <Link href="/" style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--white)', textDecoration: 'none' }}>
          Bet30Play<span style={{ color: 'var(--gold)' }}>Ar</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--gray-2)' }}>
          <Link href="/" style={{ color: 'var(--gray-2)', textDecoration: 'none', transition: 'color 0.2s' }}>
            Inicio
          </Link>
          <span style={{ color: 'var(--gray-3)' }}>/</span>
          <Link href="/" style={{ color: 'var(--gray-2)', textDecoration: 'none', transition: 'color 0.2s' }}>
            Casinos
          </Link>
          <span style={{ color: 'var(--gray-3)' }}>/</span>
          <span style={{ color: 'var(--gray-1)' }}>Betsson Argentina</span>
        </div>
        <a href="#sidebar-cta" style={{ fontSize: '13px', fontWeight: 600, padding: '8px 18px', borderRadius: '999px', background: 'var(--gold)', color: '#000', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background 0.2s' }}>
          Ver bono →
        </a>
      </div>
    </nav>
  )
}
