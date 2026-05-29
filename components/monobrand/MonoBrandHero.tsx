import { Shield, Download, Gift, Gamepad2, Wallet } from 'lucide-react'
import type { Brand, HomeHero } from '@/types/brand'

interface MonoBrandHeroProps {
  brand: Brand
  hero: HomeHero
}

export default function MonoBrandHero({ brand, hero }: MonoBrandHeroProps) {
  return (
    <section style={styles.hero}>
      <div style={styles.heroGlow} />
      <div style={styles.wrap}>
        <div style={styles.eyebrow}>
          <span style={styles.eyebrowIcon}>
            <Shield size={14} />
          </span>
          {hero.eyebrow}
        </div>

        <h1 style={styles.h1}>
          <span style={styles.brandName}>{brand.brand_name}</span> {hero.h1_suffix}
        </h1>

        <div style={styles.heroActions}>
          <a
            href={brand.affiliate_url}
            style={styles.btnPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.cta_primary}
          </a>
          <a
            href={brand.affiliate_url}
            style={styles.btnGhost}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.cta_secondary}
          </a>
        </div>

        <div style={styles.quickLinks}>
          <a href="/app" style={styles.quickLink}>
            <Download size={18} />
            <span>Descargar App</span>
          </a>
          <a href="/bonos" style={styles.quickLink}>
            <Gift size={18} />
            <span>Bonos</span>
          </a>
          <a href="/juegos" style={styles.quickLink}>
            <Gamepad2 size={18} />
            <span>Juegos</span>
          </a>
          <a href="/finanzas" style={styles.quickLink}>
            <Wallet size={18} />
            <span>Depositar</span>
          </a>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    position: 'relative' as const,
    padding: '120px 0 80px',
    overflow: 'hidden',
    textAlign: 'center' as const,
  },
  heroGlow: {
    content: '""',
    position: 'absolute' as const,
    top: '-100px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '1000px',
    height: '600px',
    background: 'radial-gradient(ellipse at center, rgba(232,184,75,0.12) 0%, transparent 70%)',
    pointerEvents: 'none' as const,
  },
  wrap: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative' as const,
    zIndex: 1,
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px 6px 10px',
    borderRadius: '999px',
    border: '1px solid var(--gold-line)',
    background: 'var(--gold-dim)',
    fontSize: '12px',
    fontWeight: 500,
    color: 'var(--gold)',
    letterSpacing: '0.03em',
    marginBottom: '32px',
  },
  eyebrowIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    marginBottom: '20px',
  },
  brandName: {
    color: 'var(--gold)',
  },
  heroSub: {
    fontSize: '1.15rem',
    color: 'var(--gray-1)',
    maxWidth: '500px',
    margin: '0 auto 40px',
    lineHeight: 1.6,
    fontWeight: 300,
  },
  heroActions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    marginBottom: '60px',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 32px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontWeight: 700,
    fontSize: '15px',
    textDecoration: 'none',
    transition: 'transform 0.15s, box-shadow 0.2s',
    letterSpacing: '0.01em',
  },
  btnGhost: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 28px',
    borderRadius: '999px',
    border: '1px solid var(--gray-3)',
    color: 'var(--gray-1)',
    background: 'transparent',
    fontSize: '15px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s',
  },
  quickLinks: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  quickLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    borderRadius: 'var(--r-md)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    color: 'var(--gray-1)',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'border-color 0.2s, background 0.2s',
  },
}
