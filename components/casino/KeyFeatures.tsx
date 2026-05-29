'use client'

export default function KeyFeatures() {
  const features = [
    'Operador sueco con 60 años de trayectoria (fundado 1963, cotizado Nasdaq)',
    'Licencia LOTBA vigente — regulación local 100% transparente',
    'Wagering más bajo de CABA (35x) + RTP máximo auditado (96.2%)',
    'Soporte 24/7 en español rioplatense con respuesta <3 minutos',
    'KYC ultra-rápido (24 hs) y retiros en CVU en 24–48 hs hábiles',
    'Depósitos vía MercadoPago instantáneo (sin comisiones adicionales)',
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
          ⭐
        </div>
        <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
          Características clave
        </div>
      </div>
      <div style={{ padding: '24px 28px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                padding: '12px 16px',
                background: 'var(--surface-2)',
                borderRadius: 'var(--r-sm)',
                borderLeft: '3px solid var(--gold)',
                fontSize: '14px',
                color: 'var(--gray-1)',
                lineHeight: 1.55,
              }}
            >
              <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
