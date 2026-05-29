'use client'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.wrap}>
        <div style={styles.footerGrid}>
          <div style={styles.footerBrand}>
            <div style={styles.footerLogo}>
              Bet30Play<span style={styles.goldText}>Ar</span>
            </div>
            <p style={styles.footerDesc}>
              Análisis independiente de casinos online para Argentina. Datos verificados, sin publicidad pagada.
            </p>
            <div style={styles.footerDisclaimer}>
              ⚠️ Juego responsable. Si experimentás problemas con el juego, contactá a <strong>SEDRONAR</strong>
            </div>
          </div>

          <div>
            <div style={styles.footerColTitle}>Categorías</div>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>Casinos online</a></li>
              <li><a href="#" style={styles.footerLink}>Tragamonedas</a></li>
              <li><a href="#" style={styles.footerLink}>Bonos y promociones</a></li>
              <li><a href="#" style={styles.footerLink}>Estrategias</a></li>
              <li><a href="#" style={styles.footerLink}>Varianza</a></li>
              <li><a href="#" style={styles.footerLink}>Guías</a></li>
            </ul>
          </div>

          <div>
            <div style={styles.footerColTitle}>Legal</div>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>Términos de uso</a></li>
              <li><a href="#" style={styles.footerLink}>Política de privacidad</a></li>
              <li><a href="#" style={styles.footerLink}>Disclaimer</a></li>
              <li><a href="#" style={styles.footerLink}>Contacto</a></li>
              <li><a href="#" style={styles.footerLink}>Reportar abuso</a></li>
            </ul>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <div style={styles.footerCopyright}>
            © 2026 bet30playar.com. Todos los derechos reservados.
          </div>
          <div style={styles.footerLegal}>
            <a href="#" style={styles.footerLegalLink}>Política de cookies</a>
            <a href="#" style={styles.footerLegalLink}>Política de afiliados</a>
            <span>+18</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    borderTop: '1px solid var(--gray-3)',
    background: 'var(--surface-1)',
    padding: '48px 0 32px',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '48px',
    marginBottom: '40px',
  } as React.CSSProperties,
  footerBrand: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  footerLogo: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.2rem',
    fontWeight: 800,
    color: 'var(--white)',
  },
  goldText: {
    color: 'var(--gold)',
  },
  footerDesc: {
    fontSize: '13px',
    color: 'var(--gray-2)',
    lineHeight: 1.65,
    maxWidth: '320px',
  },
  footerDisclaimer: {
    fontSize: '11px',
    color: 'var(--gray-2)',
    background: 'var(--surface-2)',
    border: '1px solid var(--gray-3)',
    borderRadius: 'var(--r-sm)',
    padding: '10px 14px',
    lineHeight: 1.6,
  },
  footerColTitle: {
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '10px',
    color: 'var(--gray-2)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    marginBottom: '16px',
  },
  footerLinks: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  footerLink: {
    fontSize: '13px',
    color: 'var(--gray-1)',
    textDecoration: 'none',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  footerBottom: {
    borderTop: '1px solid var(--gray-3)',
    paddingTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    color: 'var(--gray-2)',
  } as React.CSSProperties,
  footerCopyright: {},
  footerLegal: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  } as React.CSSProperties,
  footerLegalLink: {
    color: 'var(--gray-2)',
    textDecoration: 'none',
    cursor: 'pointer',
  },
}
