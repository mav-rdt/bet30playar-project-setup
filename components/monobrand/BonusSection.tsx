import { Gift, Percent, Zap, Star } from 'lucide-react'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'

// Первый бонус в списке считается highlight (самый популярный)
export default function BonusSection() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const bonuses = content.bonuses

  return (
    <section style={styles.section}>
      <div style={styles.wrap}>
        <div style={styles.header}>
          <span style={styles.tag}>Promociones</span>
          <h2 style={styles.title}>Bonos y ofertas especiales</h2>
          <p style={styles.subtitle}>
            Aprovecha nuestras promociones exclusivas y maximiza tu experiencia de juego en {brand.brand_name}
          </p>
        </div>

        <div style={styles.grid}>
          {bonuses.map((bonus, index) => {
            const isHighlight = index === 0
            return (
              <div
                key={index}
                style={{
                  ...styles.card,
                  ...(isHighlight ? styles.cardHighlight : {}),
                }}
              >
                {isHighlight && <div style={styles.ribbon}>Mas popular</div>}
                <div style={styles.iconWrap}>
                  <Gift size={24} />
                </div>
                <div style={styles.amount}>{bonus.amount_label || `$${bonus.amount_ars.toLocaleString('es-AR')}`}</div>
                <h3 style={styles.cardTitle}>{bonus.title}</h3>
                <p style={styles.cardDesc}>{bonus.description}</p>
                {bonus.wagering && (
                  <p style={styles.wagering}>Wagering: {bonus.wagering}</p>
                )}
                <a href={brand.affiliate_url} target="_blank" rel="noopener noreferrer" style={styles.cardLink}>
                  {bonus.cta || 'Reclamar bono'}
                </a>
              </div>
            )
          })}
        </div>

        <div style={styles.cta}>
          <a href="/bonos" style={styles.ctaBtn}>
            Ver todas las promociones
          </a>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '80px 0',
    background: 'var(--black)',
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
    background: 'var(--green-dim)',
    border: '1px solid rgba(45, 217, 143, 0.3)',
    color: 'var(--green)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
  card: {
    position: 'relative' as const,
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    textAlign: 'center' as const,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  cardHighlight: {
    border: '1px solid var(--gold-line)',
    background: 'linear-gradient(180deg, var(--gold-dim) 0%, var(--surface-2) 100%)',
  },
  ribbon: {
    position: 'absolute' as const,
    top: '16px',
    right: '-32px',
    transform: 'rotate(45deg)',
    padding: '4px 40px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  iconWrap: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    margin: '0 auto 8px',
  },
  amount: {
    fontFamily: 'var(--font-syne)',
    fontSize: '2rem',
    fontWeight: 800,
    color: 'var(--gold)',
  },
  cardTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.1rem',
    fontWeight: 700,
  },
  cardDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
  wagering: {
    fontSize: '12px',
    color: 'var(--gray-2)',
    fontFamily: 'var(--font-dm-mono)',
  },
  cardLink: {
    marginTop: '8px',
    fontSize: '13px',
    color: 'var(--gold)',
    textDecoration: 'none',
    fontWeight: 600,
  },
  cta: {
    textAlign: 'center' as const,
    marginTop: '48px',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    borderRadius: '999px',
    border: '1px solid var(--gold-line)',
    background: 'transparent',
    color: 'var(--gold)',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
  },
}
