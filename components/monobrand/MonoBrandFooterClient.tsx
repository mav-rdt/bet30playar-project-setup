'use client'

import { AlertTriangle } from 'lucide-react'
import type { Brand } from '@/types/brand'

interface Props {
  brand: Brand
}

export default function MonoBrandFooterClient({ brand }: Props) {
  return (
    <footer style={styles.footer}>
      <div style={styles.wrap}>
        <div style={styles.footerGrid}>
          <div style={styles.footerBrand}>
            <div style={styles.footerLogo}>
              {brand.brand_name}
            </div>
            <p style={styles.footerDesc}>
              Tu casino online de confianza en Argentina. Juegos, bonos y la mejor experiencia de apuestas.
            </p>
            <div style={styles.footerDisclaimer}>
              <AlertTriangle size={14} style={{ flexShrink: 0 }} />
              <span>Juego responsable. +18. Si experimentas problemas con el juego, contacta a <strong>SEDRONAR</strong></span>
            </div>
          </div>

          <div>
            <div style={styles.footerColTitle}>Cuenta</div>
            <ul style={styles.footerLinks}>
              <li><a href="/login" style={styles.footerLink}>Iniciar sesion</a></li>
              <li><a href="/registro" style={styles.footerLink}>Registrarse</a></li>
              <li><a href="/seguridad" style={styles.footerLink}>Seguridad</a></li>
            </ul>
          </div>

          <div>
            <div style={styles.footerColTitle}>Juegos</div>
            <ul style={styles.footerLinks}>
              <li><a href="/juegos/slots" style={styles.footerLink}>Tragamonedas</a></li>
              <li><a href="/juegos/crash" style={styles.footerLink}>Crash Games</a></li>
              <li><a href="/juegos/deportes" style={styles.footerLink}>Apuestas deportivas</a></li>
            </ul>
          </div>

          <div>
            <div style={styles.footerColTitle}>Finanzas</div>
            <ul style={styles.footerLinks}>
              <li><a href="/finanzas" style={styles.footerLink}>Depositar</a></li>
              <li><a href="/finanzas" style={styles.footerLink}>Retirar</a></li>
              <li><a href="/bonos" style={styles.footerLink}>Bonos y promociones</a></li>
            </ul>
          </div>

          <div>
            <div style={styles.footerColTitle}>App</div>
            <ul style={styles.footerLinks}>
              <li><a href="/app" style={styles.footerLink}>Descargar Android</a></li>
            </ul>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <div style={styles.footerCopyright}>
            © {new Date().getFullYear()} {brand.brand_name}. Todos los derechos reservados.
          </div>
          <div style={styles.footerLegal}>
            <span style={styles.badge}>+18</span>
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
    padding: '64px 0 32px',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr repeat(4, 1fr)',
    gap: '40px',
    marginBottom: '48px',
  } as React.CSSProperties,
  footerBrand: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  footerLogo: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 800,
    color: 'var(--gold)',
  },
  footerDesc: {
    fontSize: '14px',
    color: 'var(--gray-2)',
    lineHeight: 1.65,
    maxWidth: '280px',
  },
  footerDisclaimer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '12px',
    color: 'var(--orange)',
    background: 'rgba(251, 147, 60, 0.1)',
    border: '1px solid rgba(251, 147, 60, 0.2)',
    borderRadius: 'var(--r-sm)',
    padding: '12px 14px',
    lineHeight: 1.5,
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
  badge: {
    padding: '4px 10px',
    borderRadius: '999px',
    background: 'var(--red)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 700,
  },
}
