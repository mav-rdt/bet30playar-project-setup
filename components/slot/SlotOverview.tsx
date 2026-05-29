'use client'

export default function SlotOverview() {
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
          📋
        </div>
        <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Descripción general</h2>
      </div>
      <div style={{ padding: '22px 26px' }}>
        <p style={{ fontSize: '15px', color: 'var(--gray-1)', lineHeight: 1.75, marginBottom: '14px' }}>
          <strong style={{ color: 'var(--white)' }}>Gates of Olympus</strong> es una slot de volatilidad extremadamente alta diseñada por Pragmatic Play. Usa el sistema <strong>Cluster Pays</strong>: sin paylines tradicionales, ganas cuando 5+ símbolos iguales se tocan horizontal o verticalmente.
        </p>
        <p style={{ fontSize: '15px', color: 'var(--gray-1)', lineHeight: 1.75, marginBottom: '14px' }}>
          El juego ofrece multiplicadores en cascada: cada win dispara una cascada donde símbolos caen, multiplicándose hasta 5.000x. Con un RTP certificado de 96.5% y Hit Frequency de ~23%, es una máquina pensada para sesiones cortas y bankroll alto.
        </p>
        <p style={{ fontSize: '15px', color: 'var(--gray-1)', lineHeight: 1.75 }}>
          La opción de compra de bonus (100x tu apuesta) permite acceder a giros gratis garantizados, pero aumenta significativamente el costo por sesión si no esperas wins naturales previos.
        </p>
      </div>
    </div>
  )
}
