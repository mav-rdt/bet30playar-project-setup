'use client'

import Link from 'next/link'

export default function CasinoFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--gray-3)',
        background: 'var(--surface-1)',
        padding: '40px 0 28px',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            color: 'var(--gray-2)',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <Link
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
          </Link>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'var(--gray-2)', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }}>
              Sobre nosotros
            </a>
            <a href="#" style={{ color: 'var(--gray-2)', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }}>
              Metodología
            </a>
            <a href="#" style={{ color: 'var(--gray-2)', textDecoration: 'none', fontSize: '12px', transition: 'color 0.2s' }}>
              Contacto
            </a>
          </div>
        </div>
        <div
          style={{
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid var(--gray-3)',
            fontSize: '11px',
            color: 'var(--gray-2)',
            lineHeight: 1.65,
          }}
        >
          <p>
            Este análisis es solo con fines informativos. No constituye asesoramiento financiero ni recomendación de apuestas. El juego puede causar adicción. Si experimentas problemas con el juego,
            contacta a <strong>Jugadores Anónimos (Argentina)</strong> o el NCPG (EEUU). Solo para mayores de 18 años. Bet30PlayAr no tiene asociación oficial con operadores listados.
          </p>
        </div>
      </div>
    </footer>
  )
}
