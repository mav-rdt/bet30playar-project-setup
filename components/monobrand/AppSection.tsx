import { Smartphone, Download, CheckCircle } from 'lucide-react'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'

export default function AppSection() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const { headline, body, features: appFeatures } = content.app

  return (
    <section style={styles.section}>
      <div style={styles.wrap}>
        <div style={styles.content}>
          <div style={styles.textContent}>
            <span style={styles.tag}>App movil</span>
            <h2 style={styles.title}>{headline}</h2>
            <p style={styles.subtitle}>{body}</p>

            <ul style={styles.featureList}>
              {appFeatures.map((feature, index) => (
                <li key={index} style={styles.featureItem}>
                  <CheckCircle size={18} style={{ color: 'var(--green)', flexShrink: 0 }} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div style={styles.buttons}>
              <a href="/app" style={styles.btnPrimary}>
                <Download size={18} />
                Descargar para Android
              </a>
            </div>
          </div>

          <div style={styles.phoneContainer}>
            <div style={styles.phoneMockup}>
              <div style={styles.phoneScreen}>
                <div style={styles.phoneHeader}>
                  <Smartphone size={20} style={{ color: 'var(--gold)' }} />
                  <span style={styles.phoneBrand}>{brand.brand_name}</span>
                </div>
                <div style={styles.phoneContent}>
                  <div style={styles.phoneCard} />
                  <div style={styles.phoneCard} />
                  <div style={styles.phoneCard} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '80px 0',
    background: 'var(--surface-1)',
    overflow: 'hidden',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'center',
  } as React.CSSProperties,
  textContent: {
    maxWidth: '500px',
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
    lineHeight: 1.6,
    marginBottom: '32px',
  },
  featureList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    marginBottom: '32px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
    color: 'var(--gray-1)',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '12px',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 24px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontWeight: 700,
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'transform 0.15s',
  },
  phoneContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneMockup: {
    width: '280px',
    height: '560px',
    borderRadius: '40px',
    border: '8px solid var(--surface-3)',
    background: 'var(--surface-2)',
    padding: '16px',
    boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
  },
  phoneScreen: {
    width: '100%',
    height: '100%',
    borderRadius: '28px',
    background: 'var(--black)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  phoneHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '24px',
  },
  phoneBrand: {
    fontFamily: 'var(--font-syne)',
    fontWeight: 800,
    fontSize: '18px',
    color: 'var(--gold)',
  },
  phoneContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  phoneCard: {
    height: '100px',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-2)',
    border: '1px solid var(--gray-3)',
  },
}
