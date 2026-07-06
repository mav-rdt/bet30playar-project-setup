import type { Metadata } from 'next'
import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'
import type { FeatureIcon } from '@/types/brand'
import {
  Shield, Zap, Wallet, Gift, Gamepad2, Headphones, Trophy, Lock, CheckCircle,
} from 'lucide-react'

// Icon mapping from _home.json feature icons → lucide components
const iconMap: Record<FeatureIcon, React.ElementType> = {
  shield:  Shield,
  zap:     Zap,
  wallet:  Wallet,
  gift:    Gift,
  gamepad: Gamepad2,
  headset: Headphones,
  trophy:  Trophy,
  lock:    Lock,
}

export async function generateMetadata(): Promise<Metadata> {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const url = `https://${brand.affiliate_domain}`
  const bonus = content.bonuses[0]

  const title = bonus
    ? `Registrarse en ${brand.brand_name} - Bono de ${bonus.amount_label}`
    : `Registrarse en ${brand.brand_name}`

  return {
    title,
    description: `Creá tu cuenta en ${brand.brand_name} en menos de 2 minutos. ${content.hero.subtitle}`,
    alternates: { canonical: `${url}/registro` },
  }
}

export default function RegistroPage() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const bonus = content.bonuses[0]

  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Únete a {brand.brand_name} hoy</h1>
            <p style={styles.subtitle}>{content.hero.subtitle}</p>
          </div>

          <div style={styles.content}>
            <div style={styles.benefitsGrid}>
              {content.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] ?? CheckCircle
                return (
                  <div key={index} style={styles.benefitCard}>
                    <div style={styles.benefitIcon}>
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 style={styles.benefitTitle}>{feature.title}</h3>
                      <p style={styles.benefitDesc}>{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={styles.ctaSection}>
              <div style={styles.ctaCard}>
                {bonus && (
                  <div style={styles.bonusHighlight}>
                    <div style={styles.bonusAmount}>{bonus.amount_label}</div>
                    {bonus.wagering && (
                      <div style={styles.bonusPlus}>Wagering: {bonus.wagering}</div>
                    )}
                    <p style={styles.bonusDesc}>{bonus.description}</p>
                  </div>
                )}

                <div style={styles.ctaText}>
                  <p style={styles.mainText}>
                    Es el momento de vivir una experiencia de casino única. Registrate en
                    menos de 2 minutos y reclamá tu bono de bienvenida en {brand.brand_name}.
                  </p>
                  <p style={styles.subText}>
                    Nuestro equipo de atención está disponible 24/7 para ayudarte en cada
                    paso de tu experiencia.
                  </p>
                </div>

                <a
                  href={brand.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  style={styles.ctaButton}
                >
                  Registrarse ahora en {brand.brand_name}
                </a>

                <p style={styles.disclaimer}>
                  Al registrarte, aceptás los términos de servicio y la política de
                  privacidad del operador. Juego responsable. +18.
                </p>
              </div>
            </div>
          </div>

          <div style={styles.infoSection}>
            <h2 style={styles.infoTitle}>Por qué elegir {brand.brand_name}</h2>
            <div style={styles.infos}>
              {content.hero.trust_badges.map((badge, index) => (
                <div key={index} style={styles.infoItem}>
                  <div style={styles.infoNumber}>✓</div>
                  <div>
                    <h3 style={styles.infoItemTitle}>{badge}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <MonoBrandFooter />
    </>
  )
}

const styles = {
  main: {
    padding: '80px 0',
    minHeight: '80vh',
  },
  container: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '64px',
  },
  title: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(2.2rem, 5vw, 3rem)',
    fontWeight: 800,
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1.05rem',
    color: 'var(--gray-1)',
    maxWidth: '620px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '48px',
    alignItems: 'start',
    marginBottom: '80px',
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  benefitCard: {
    display: 'flex',
    gap: '16px',
    padding: '24px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  benefitIcon: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'flex-start',
    color: 'var(--gold)',
  },
  benefitTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '8px',
  },
  benefitDesc: {
    fontSize: '13px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
  ctaSection: {
    position: 'sticky' as const,
    top: '88px',
  },
  ctaCard: {
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gold-line)',
    background: 'var(--surface-2)',
  },
  bonusHighlight: {
    textAlign: 'center' as const,
    padding: '24px',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-3)',
    marginBottom: '24px',
  },
  bonusAmount: {
    fontFamily: 'var(--font-syne)',
    fontSize: '2.4rem',
    fontWeight: 800,
    color: 'var(--gold)',
    lineHeight: 1.1,
  },
  bonusPlus: {
    fontSize: '15px',
    fontWeight: 600,
    color: 'var(--gray-1)',
    marginTop: '8px',
  },
  bonusDesc: {
    fontSize: '13px',
    color: 'var(--gray-2)',
    marginTop: '12px',
    lineHeight: 1.5,
  },
  ctaText: {
    marginBottom: '24px',
  },
  mainText: {
    fontSize: '15px',
    lineHeight: 1.6,
    marginBottom: '12px',
  },
  subText: {
    fontSize: '13px',
    color: 'var(--gray-2)',
    lineHeight: 1.6,
  },
  ctaButton: {
    display: 'block',
    padding: '16px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
    textAlign: 'center' as const,
    marginBottom: '16px',
  },
  disclaimer: {
    fontSize: '12px',
    color: 'var(--gray-2)',
    textAlign: 'center' as const,
    lineHeight: 1.5,
  },
  infoSection: {
    textAlign: 'center' as const,
  },
  infoTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.6rem',
    fontWeight: 800,
    marginBottom: '40px',
  },
  infos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  infoItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    textAlign: 'left' as const,
    padding: '20px',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-2)',
    border: '1px solid var(--gray-3)',
  },
  infoNumber: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    fontWeight: 700,
  },
  infoItemTitle: {
    fontSize: '15px',
    fontWeight: 600,
    lineHeight: 1.4,
  },
}
