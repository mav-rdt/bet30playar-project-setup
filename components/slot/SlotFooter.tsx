'use client'

export default function SlotFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--gray-3)',
        background: 'var(--surface-1)',
        padding: '36px 0 24px',
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
          <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', fontWeight: 800 }}>
            Bet30Play<span style={{ color: 'var(--gold)' }}>Ar</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/" style={{ color: 'var(--gray-2)', textDecoration: 'none', fontSize: '12px' }}>
              Inicio
            </a>
            <a href="/casinos" style={{ color: 'var(--gray-2)', textDecoration: 'none', fontSize: '12px' }}>
              Casinos
            </a>
            <a href="/tragamonedas" style={{ color: 'var(--gray-2)', textDecoration: 'none', fontSize: '12px' }}>
              Tragamonedas
            </a>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/privacidad" style={{ color: 'var(--gray-2)', textDecoration: 'none', fontSize: '12px' }}>
              Privacidad
            </a>
            <a href="/terminos" style={{ color: 'var(--gray-2)', textDecoration: 'none', fontSize: '12px' }}>
              Términos
            </a>
          </div>
        </div>
        <div style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--gray-3)', fontSize: '11px', color: 'var(--gray-2)', lineHeight: 1.65 }}>
          <strong>Disclaimer:</strong> Este sitio es de carácter educativo y de análisis. No somos un casino ni facilitamos apuestas. Jugá responsablemente. En Argentina, solo son legales casinos con licencia de LOTBA (CABA), PBA, Córdoba, Misiones y La Pampa. Prohibido para menores de 18 años.
        </div>
      </div>
    </footer>
  )
}
