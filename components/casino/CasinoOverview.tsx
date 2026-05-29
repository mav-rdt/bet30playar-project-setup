'use client'

export default function CasinoOverview() {
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
          📋
        </div>
        <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
          Descripción general
        </div>
      </div>
      <div style={{ padding: '24px 28px' }}>
        <div style={{ fontSize: '15px', color: 'var(--gray-1)', lineHeight: 1.75, marginBottom: '16px' }}>
          <p style={{ marginBottom: '16px' }}>
            Betsson Group es un operador sueco fundado en 1963, cotizado en Nasdaq Stockholm. En Argentina, opera bajo{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>licencia LOTBA N° 2021-CR-0078</strong>, lo que lo habilita exclusivamente para captar jugadores residentes en la
            Ciudad Autónoma de Buenos Aires. Su entrada al mercado local se produjo en 2021 como parte de la expansión latinoamericana del grupo.
          </p>
          <p style={{ marginBottom: '16px' }}>
            La plataforma acepta <strong style={{ color: 'var(--white)', fontWeight: 600 }}>MercadoPago y Pago Fácil</strong> como métodos de depósito, con acreditación instantánea. Los retiros se
            procesan vía transferencia bancaria a CVU o CBU en <strong style={{ color: 'var(--white)', fontWeight: 600 }}>24 a 48 horas hábiles</strong> una vez completado el KYC. Este tiempo
            es significativamente mejor que la industria: competidores como 888Casino promedian 3-5 días hábiles.
          </p>
          <p>
            El soporte al cliente opera en español rioplatense (voseo) las 24 horas vía chat en vivo, con tiempos de respuesta verificados de{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>menos de 3 minutos</strong> en horario nocturno argentino.
          </p>
        </div>
      </div>
    </div>
  )
}
