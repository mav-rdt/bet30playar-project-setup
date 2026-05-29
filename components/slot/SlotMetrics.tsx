'use client'

export default function SlotMetrics({ metrics }: any) {
  const safeMetrics = metrics ?? {}
  const rtpValue = safeMetrics.rtp?.value ?? '--'
  const volValue = safeMetrics.volatilidad?.value ?? '--'
  const hitFreqValue = safeMetrics.hit_freq?.value ?? '--'
  const maxMultiValue = safeMetrics.max_multi?.value ?? '--'

  return (
    <div
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '18px 26px 16px', borderBottom: '1px solid var(--gray-3)', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: 'var(--r-sm)',
            background: 'var(--accent-dim)',
            border: '1px solid var(--accent-line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            flexShrink: 0,
          }}
        >
          🔬
        </div>
        <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Métricas verificadas</h2>
      </div>
      <div style={{ padding: '22px 26px' }}>
        {/* Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px' }}>
          <div
            style={{
              background: 'var(--surface-2)',
              borderRadius: 'var(--r-md)',
              padding: '14px 16px',
              border: '1px solid var(--gray-3)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-line)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--gray-3)')}
          >
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '5px' }}>
              RTP
            </div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.4rem', fontWeight: 500, lineHeight: 1, color: 'var(--green)' }}>
              {rtpValue}%
            </div>
          </div>
          <div
            style={{
              background: 'var(--surface-2)',
              borderRadius: 'var(--r-md)',
              padding: '14px 16px',
              border: '1px solid var(--gray-3)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-line)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--gray-3)')}
          >
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '5px' }}>
              Volatilidad
            </div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.4rem', fontWeight: 500, lineHeight: 1, color: 'var(--orange)' }}>
              {volValue}
            </div>
          </div>
          <div
            style={{
              background: 'var(--surface-2)',
              borderRadius: 'var(--r-md)',
              padding: '14px 16px',
              border: '1px solid var(--gray-3)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-line)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--gray-3)')}
          >
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '5px' }}>
              Hit Frequency
            </div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.4rem', fontWeight: 500, lineHeight: 1, color: 'var(--orange)' }}>
              {hitFreqValue}
            </div>
          </div>
          <div
            style={{
              background: 'var(--surface-2)',
              borderRadius: 'var(--r-md)',
              padding: '14px 16px',
              border: '1px solid var(--gray-3)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-line)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--gray-3)')}
          >
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '5px' }}>
              Max Multiplicador
            </div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.4rem', fontWeight: 500, lineHeight: 1, color: 'var(--accent-slot)' }}>
              {maxMultiValue}
            </div>
          </div>
        </div>

        {/* Risk Meter */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '18px',
            background: 'var(--surface-2)',
            borderRadius: 'var(--r-md)',
            border: '1px solid rgba(251, 146, 60, 0.22)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Nivel de Riesgo
            </div>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '14px', color: 'var(--orange)', fontWeight: 500 }}>
              Alto — 8/10
            </div>
          </div>
          <div style={{ height: '6px', background: 'var(--surface-3)', borderRadius: '3px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                borderRadius: '3px',
                background: 'linear-gradient(90deg, var(--green), var(--orange), var(--red))',
                width: '75%',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--gray-2)' }}>
            <span>Bajo</span>
            <span>Moderado</span>
            <span>Alto</span>
          </div>
        </div>

        <p style={{ fontSize: '15px', color: 'var(--gray-1)', lineHeight: 1.75, marginTop: '20px' }}>
          La volatilidad alta de Gates of Olympus significa que esperes <strong>giros secos prolongados</strong> (5-10+ sin wins). El Hit Frequency de ~23% indica que ganas 1 de cada 4-5 giros, p...
        </p>
      </div>
    </div>
  )
}