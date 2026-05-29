import { Shield, Lock, UserCheck, Clock, Award, Headphones, Zap, Wallet, Gift, Gamepad2, Trophy } from 'lucide-react'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'
import type { FeatureIcon } from '@/types/brand'

// Маппинг иконок из _home.json → lucide компоненты
const iconMap: Record<FeatureIcon, React.ElementType> = {
  shield:   Shield,
  zap:      Zap,
  wallet:   Wallet,
  gift:     Gift,
  gamepad:  Gamepad2,
  headset:  Headphones,
  trophy:   Trophy,
  lock:     Lock,
}

export default function FeaturesSection() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const features = content.features

  return (
    <section style={styles.section}>
      <div style={styles.wrap}>
        <div style={styles.header}>
          <span style={styles.tag}>Por que confiar en {brand.brand_name}</span>
          <h2 style={styles.title}>Casino online seguro y regulado en Argentina</h2>
          <p style={styles.subtitle}>
            Contamos con licencia oficial, cifrado SSL de 256 bits, verificación KYC y soporte 24/7 para garantizar tu seguridad y entretenimiento
          </p>
        </div>

        <div style={styles.grid}>
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Shield
            return (
              <div key={index} style={styles.card}>
                <div style={styles.iconWrap}>
                  <Icon size={24} />
                </div>
                <h3 style={styles.cardTitle}>{feature.title}</h3>
                <p style={styles.cardDesc}>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '80px 0',
    background: 'var(--surface-1)',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '56px',
  },
  tag: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '999px',
    background: 'var(--gold-dim)',
    border: '1px solid var(--gold-line)',
    color: 'var(--gold)',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '16px',
  },
  title: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 800,
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--gray-1)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  } as React.CSSProperties,
  card: {
    background: 'var(--surface-2)',
    border: '1px solid var(--gray-3)',
    borderRadius: 'var(--r-xl)',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  iconWrap: {
    width: '48px',
    height: '48px',
    borderRadius: 'var(--r-md)',
    background: 'var(--gold-dim)',
    border: '1px solid var(--gold-line)',
    color: 'var(--gold)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
  },
  cardDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
}
