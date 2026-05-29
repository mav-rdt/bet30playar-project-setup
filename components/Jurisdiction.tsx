'use client'

export default function Jurisdiction() {
  const jurisdictions = [
    {
      active: true,
      flag: '🏛️',
      name: 'CABA · LOTBA',
      authority: 'LOTERÍA DE LA CIUDAD DE BUENOS AIRES',
      desc: 'Regulación integral para casinos online operando desde la capital argentina.',
      features: [
        'Licencia oficial requerida',
        'RTP mínimo 96%',
        'Depósito mínimo verificado',
        'Retiros en pesos hasta 500.000 ARS',
      ],
    },
    {
      active: false,
      flag: '🏘️',
      name: 'PBA · IPLyC',
      authority: 'INSTITUTO PROVINCIAL DE LOTERÍAS Y CASINOS',
      desc: 'Regulación de juegos de azar en la Provincia de Buenos Aires.',
      features: [
        'Licencia provincial complementaria',
        'Verificación de operadores',
        'Protección al jugador local',
        'Retiros según límites provinciales',
      ],
    },
  ]

  return (
    <section style={styles.section}>
      <div style={styles.wrap}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Jurisdicciones verificadas</h2>
        </div>

        <div style={styles.jurGrid}>
          {jurisdictions.map((jur) => (
            <div
              key={jur.name}
              style={{
                ...styles.jurCard,
                ...(jur.active ? styles.jurCardActive : {}),
              }}
            >
              <div style={styles.jurFlag}>{jur.flag}</div>
              <h3 style={styles.jurName}>{jur.name}</h3>
              <div style={styles.jurAuthority}>{jur.authority}</div>
              <p style={styles.jurDesc}>{jur.desc}</p>
              <ul style={styles.jurFeatures}>
                {jur.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
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
  jurGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  } as React.CSSProperties,
  jurCard: {
    background: 'var(--surface-1)',
    border: '1px solid var(--gray-3)',
    borderRadius: 'var(--r-xl)',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  jurCardActive: {
    borderColor: 'var(--gold-line)',
    background: 'linear-gradient(135deg, rgba(232,184,75,0.04) 0%, var(--surface-1) 100%)',
  },
  jurFlag: {
    fontSize: '2.5rem',
  },
  jurName: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.3rem',
    fontWeight: 800,
  },
  jurAuthority: {
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '11px',
    color: 'var(--gold)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  },
  jurDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
  jurFeatures: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  jurFeaturesLi: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    color: 'var(--gray-1)',
  },
  jurFeaturesBefore: {
    color: 'var(--gold)',
    fontWeight: 700,
    flexShrink: 0,
  },
}

// Add li styling via component
function JurFeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li style={styles.jurFeaturesLi}>
      <span style={styles.jurFeaturesBefore}>→</span>
      {children}
    </li>
  )
}
