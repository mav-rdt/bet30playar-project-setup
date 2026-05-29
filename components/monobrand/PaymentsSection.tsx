import { ArrowDownCircle, ArrowUpCircle, Clock, Shield } from 'lucide-react'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'

const features = [
  { icon: ArrowDownCircle, title: 'Depositos instantaneos', description: 'Tu saldo se acredita al instante con la mayoria de los metodos' },
  { icon: ArrowUpCircle,   title: 'Retiros rapidos',       description: 'Procesa tus retiros en menos de 24 horas' },
  { icon: Clock,           title: 'Sin limites ocultos',   description: 'Retira tus ganancias sin restricciones injustas' },
  { icon: Shield,          title: 'Transacciones seguras', description: 'Todas las operaciones estan protegidas con SSL' },
]

export default function PaymentsSection() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const { intro, methods } = content.payments

  return (
    <section style={styles.section}>
      <div style={styles.wrap}>
        <div style={styles.header}>
          <span style={styles.tag}>Finanzas</span>
          <h2 style={styles.title}>Depositos y retiros sin complicaciones en {brand.brand_name}</h2>
          <p style={styles.subtitle}>{intro}</p>
        </div>

        <div style={styles.content}>
          <div style={styles.methodsCard}>
            <h3 style={styles.methodsTitle}>Metodos de pago disponibles</h3>
            <div style={styles.methodsGrid}>
              {methods.map((method, index) => (
                <div key={index} style={styles.methodCard}>
                  <div style={styles.methodHeader}>
                    <div style={styles.methodDot} />
                    <span style={styles.methodName}>{method.name}</span>
                  </div>
                  <div style={styles.methodMeta}>
                    <div style={styles.methodRow}>
                      <span style={styles.methodLabel}>Mínimo:</span>
                      <span style={styles.methodValue}>${method.min_ars.toLocaleString('es-AR')} ARS</span>
                    </div>
                    <div style={styles.methodRow}>
                      <span style={styles.methodLabel}>Velocidad:</span>
                      <span style={styles.methodValue}>{method.speed}</span>
                    </div>
                    <div style={styles.methodRow}>
                      <span style={styles.methodLabel}>Comisión:</span>
                      <span style={styles.methodValue}>{method.fee_label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.methodsCta}>
              <a href="/finanzas" style={styles.methodsLink}>
                Ver todos los metodos →
              </a>
            </div>
          </div>

          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  <feature.icon size={20} />
                </div>
                <div>
                  <h4 style={styles.featureTitle}>{feature.title}</h4>
                  <p style={styles.featureDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
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
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    alignItems: 'start',
  } as React.CSSProperties,
  methodsCard: {
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  methodsTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '20px',
  },
  methodsGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    marginBottom: '20px',
  },
  methodCard: {
    padding: '16px',
    borderRadius: 'var(--r-md)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-3)',
  },
  methodHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '10px',
  },
  methodDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--green)',
  },
  methodName: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--white)',
  },
  methodMeta: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  methodRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
  },
  methodLabel: {
    color: 'var(--gray-2)',
  },
  methodValue: {
    color: 'var(--gray-1)',
    fontFamily: 'var(--font-dm-mono)',
  },
  methodsCta: {
    paddingTop: '16px',
    borderTop: '1px solid var(--gray-3)',
  },
  methodsLink: {
    fontSize: '14px',
    color: 'var(--gold)',
    textDecoration: 'none',
    fontWeight: 500,
  },
  featuresGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  featureCard: {
    display: 'flex',
    gap: '16px',
    padding: '20px',
    borderRadius: 'var(--r-md)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  featureIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: 'var(--r-sm)',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    flexShrink: 0,
  },
  featureTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '0.95rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  featureDesc: {
    fontSize: '13px',
    color: 'var(--gray-1)',
    lineHeight: 1.5,
  },
}
