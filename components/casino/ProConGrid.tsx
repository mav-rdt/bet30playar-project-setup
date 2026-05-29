'use client'

export default function ProConGrid() {
  const pros = [
    'Wagering más bajo del segmento LOTBA (35x vs 42x promedio)',
    'RTP verificado 96.2% — mejor de operadores regulados argentinos',
    'KYC ultra-rápido (~24 hs) sin papeleos innecesarios',
    'Retiros en CVU en 24–48 hs sin demoras administrativas',
    'Soporte en voseo rioplatense con tiempos <3 min de respuesta',
  ]

  const cons = [
    'Catálogo de slots más reducido vs Codere (1.800 vs 2.300 juegos)',
    'Sin opción de retiro en criptomonedas (solo CVU/CBU)',
    'Límite de retiro diario de 50.000 ARS (inferior a competencia)',
    'Depósito mínimo 500 ARS (adecuado pero igual a Codere)',
  ]

  return (
    <div
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '20px 28px 16px',
          borderBottom: '1px solid var(--gray-3)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--r-sm)',
            background: 'var(--gold-dim)',
            border: '1px solid var(--gold-line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15px',
            flexShrink: 0,
          }}
        >
          ⚖️
        </div>
        <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
          Pros y contras
        </div>
      </div>
      <div style={{ padding: '24px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'var(--font-dm-mono)',
                marginBottom: '4px',
                color: 'var(--green)',
              }}
            >
              Ventajas
            </div>
            {pros.map((pro, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  background: 'var(--green-dim)',
                  border: '1px solid rgba(45,217,143,0.15)',
                  color: 'var(--gray-1)',
                }}
              >
                <span style={{ fontWeight: 700, flexShrink: 0, marginTop: '1px', color: 'var(--green)' }}>+</span>
                <span>{pro}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'var(--font-dm-mono)',
                marginBottom: '4px',
                color: 'var(--red)',
              }}
            >
              Desventajas
            </div>
            {cons.map((con, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: 'var(--r-sm)',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  background: 'var(--red-dim)',
                  border: '1px solid rgba(240,82,82,0.15)',
                  color: 'var(--gray-1)',
                }}
              >
                <span style={{ fontWeight: 700, flexShrink: 0, marginTop: '1px', color: 'var(--red)' }}>−</span>
                <span>{con}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
