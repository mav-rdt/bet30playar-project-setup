'use client'

export default function TrustBar() {
  const items = [
    { icon: '📊', label: 'RTP verificado en', value: '18 casinos' },
    { icon: '⚖️', label: 'Solo casinos con licencia', value: 'LOTBA / IPLyC' },
    { icon: '🔄', label: 'Datos actualizados', value: 'semanalmente' },
    { icon: '💬', label: 'Soporte en español', value: 'rioplatense' },
    { icon: '🚫', label: 'Sin publicidad de', value: 'operadores' },
  ]

  return (
    <section style={styles.trustBar}>
      <div style={styles.wrap}>
        <div style={styles.trustBarInner}>
          {items.map((item, i) => (
            <div key={i} style={styles.trustItem}>
              <div style={styles.trustIcon}>{item.icon}</div>
              <div>
                <div style={styles.trustLabel}>{item.label}</div>
                <strong style={styles.trustValue}>{item.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  trustBar: {
    borderTop: '1px solid var(--gray-3)',
    borderBottom: '1px solid var(--gray-3)',
    padding: '18px 0',
    background: 'var(--surface-1)',
    overflow: 'hidden',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
  },
  trustBarInner: {
    display: 'flex',
    gap: '48px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    color: 'var(--gray-1)',
    whiteSpace: 'nowrap' as const,
  } as React.CSSProperties,
  trustIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'var(--surface-2)',
    border: '1px solid var(--gray-3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    flexShrink: 0,
  },
  trustLabel: {
    fontSize: '11px',
    color: 'var(--gray-2)',
  },
  trustValue: {
    color: 'var(--white)',
    fontWeight: 600,
    fontSize: '13px',
  },
}
