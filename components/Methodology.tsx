'use client'

export default function Methodology() {
  const steps = [
    { num: '01', icon: '🔬', title: 'Verificación matemática', desc: 'Auditoría de RTP, volatilidad y algoritmos de payout' },
    { num: '02', icon: '⚖️', title: 'Auditoría de licencias', desc: 'Validación de regulaciones LOTBA, IPLyC y jurisdicciones' },
    { num: '03', icon: '💳', title: 'Test de pagos locales', desc: 'Verificación de métodos: MercadoPago, Ualá, Pago Fácil' },
    { num: '04', icon: '🔄', title: 'Actualización semanal', desc: 'Monitoreo continuo de cambios en términos y bonos' },
  ]

  return (
    <section style={styles.section}>
      <div style={styles.wrap}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Cómo analizamos</h2>
        </div>

        <div style={styles.methodGrid}>
          {steps.map((step) => (
            <div key={step.num} style={styles.methodCard}>
              <div style={styles.methodNum}>{step.num}</div>
              <div style={styles.methodIcon}>{step.icon}</div>
              <h3 style={styles.methodTitle}>{step.title}</h3>
              <p style={styles.methodDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '72px 0',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: '32px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--gray-3)',
  } as React.CSSProperties,
  sectionTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
  },
  methodGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
  } as React.CSSProperties,
  methodCard: {
    background: 'var(--surface-1)',
    border: '1px solid var(--gray-3)',
    borderRadius: 'var(--r-lg)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '14px',
    transition: 'border-color 0.2s',
  },
  methodNum: {
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '2rem',
    fontWeight: 500,
    color: 'var(--gray-3)',
    lineHeight: 1,
  },
  methodIcon: {
    width: '40px',
    height: '40px',
    borderRadius: 'var(--r-sm)',
    background: 'var(--gold-dim)',
    border: '1px solid var(--gold-line)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
  },
  methodTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
  },
  methodDesc: {
    fontSize: '13px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
}
