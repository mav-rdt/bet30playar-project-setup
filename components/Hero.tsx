'use client'

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroGlow} />
      <div style={styles.wrap}>
        <div style={styles.eyebrow}>
          <span style={styles.eyebrowDot}>🇦🇷</span>
          Análisis independiente · Datos verificados · 2026
        </div>

        <h1 style={styles.h1}>
          Casinos online para jugadores argentinos con{' '}
          <em style={styles.emGold}>matemática real</em>
        </h1>

        <p style={styles.heroSub}>
          RTP verificado, vagering sin letra chica, bonos en pesos. Sin publicidad paga.
        </p>

        <div style={styles.heroActions}>
          <button style={styles.btnPrimary}>Ver los mejores casinos →</button>
          <button style={styles.btnGhost}>Cómo analizamos</button>
        </div>

        <div style={styles.heroPayments}>
          <span style={styles.paymentLabel}>Métodos de pago:</span>
          {['MercadoPago', 'Ualá', 'Pago Fácil', 'Rapipago', 'CVU/CBU'].map((method) => (
            <div key={method} style={styles.pill}>
              <div style={styles.pillDot} />
              {method}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    position: 'relative',
    padding: '100px 0 80px',
    overflow: 'hidden',
  } as React.CSSProperties,
  heroGlow: {
    content: '""',
    position: 'absolute',
    top: '-60px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    height: '500px',
    background: 'radial-gradient(ellipse at center, rgba(232,184,75,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  } as React.CSSProperties,
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '5px 14px 5px 6px',
    borderRadius: '999px',
    border: '1px solid var(--gold-line)',
    background: 'var(--gold-dim)',
    fontSize: '12px',
    fontWeight: 500,
    color: 'var(--gold)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    marginBottom: '28px',
  } as React.CSSProperties,
  eyebrowDot: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '11px',
    fontWeight: 700,
  },
  h1: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(2.6rem, 6vw, 5rem)',
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: '-0.035em',
    maxWidth: '820px',
    marginBottom: '24px',
  } as React.CSSProperties,
  emGold: {
    fontStyle: 'normal',
    color: 'var(--gold)',
  },
  heroSub: {
    fontSize: '1.1rem',
    color: 'var(--gray-1)',
    maxWidth: '540px',
    lineHeight: 1.6,
    marginBottom: '40px',
    fontWeight: 300,
  },
  heroActions: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
    marginBottom: '56px',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontWeight: 700,
    fontSize: '15px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
    letterSpacing: '0.01em',
  } as React.CSSProperties,
  btnGhost: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 24px',
    borderRadius: '999px',
    border: '1px solid var(--gray-3)',
    color: 'var(--gray-1)',
    background: 'transparent',
    fontSize: '15px',
    fontWeight: 500,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'border-color 0.2s, color 0.2s',
  } as React.CSSProperties,
  heroPayments: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap' as const,
  },
  paymentLabel: {
    fontSize: '12px',
    color: 'var(--gray-2)',
    fontFamily: 'var(--font-dm-mono)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    marginRight: '4px',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '5px 12px',
    borderRadius: '999px',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    fontSize: '12px',
    fontWeight: 500,
    color: 'var(--gray-1)',
  },
  pillDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--green)',
  },
}
