'use client'

interface MathAnalysisProps {
  math: any
}

export default function MathAnalysis({ math }: MathAnalysisProps) {
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
          🔬
        </div>
        <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
          Análisis matemático del bono
        </div>
      </div>
      <div style={{ padding: '24px 28px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              background: 'var(--surface-2)',
              borderRadius: 'var(--r-md)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              border: '1px solid var(--gray-3)',
              transition: 'border-color 0.2s',
            }}
          >
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              RTP promedio verificado
            </span>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1, color: 'var(--green)' }}>
              {math.RTP}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--gray-2)' }}>Sobre catálogo Pragmatic + NetEnt</span>
          </div>

          <div
            style={{
              background: 'var(--surface-2)',
              borderRadius: 'var(--r-md)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              border: '1px solid var(--gray-3)',
              transition: 'border-color 0.2s',
            }}
          >
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Bono máximo
            </span>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1, color: 'var(--gold)' }}>
              {math.Max_Bonus_ARS} ARS
            </span>
            <span style={{ fontSize: '11px', color: 'var(--gray-2)' }}>100% del primer depósito</span>
          </div>

          <div
            style={{
              background: 'var(--surface-2)',
              borderRadius: 'var(--r-md)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              border: '1px solid var(--gray-3)',
              transition: 'border-color 0.2s',
            }}
          >
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Wagering
            </span>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1, color: 'var(--green)' }}>
              35x
            </span>
            <span style={{ fontSize: '11px', color: 'var(--gray-2)' }}>Plazo: 30 días calendario</span>
          </div>

          <div
            style={{
              background: 'var(--surface-2)',
              borderRadius: 'var(--r-md)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              border: '1px solid var(--gray-3)',
              transition: 'border-color 0.2s',
            }}
          >
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Depósito mínimo
            </span>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1, color: 'var(--white)' }}>
              {math.Min_Dep_ARS} ARS
            </span>
            <span style={{ fontSize: '11px', color: 'var(--gray-2)' }}>Vía MercadoPago o Pago Fácil</span>
          </div>
        </div>

        <div style={{ fontSize: '15px', color: 'var(--gray-1)', lineHeight: 1.75 }}>
          <p style={{ marginBottom: '16px' }}>
            Con un bono de <strong style={{ color: 'var(--white)', fontWeight: 600 }}>75.000 ARS</strong> y wagering{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>35x</strong>, el monto total a apostar para liberar las ganancias es{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>2.625.000 ARS</strong>. A un ritmo de 5.000 ARS por sesión —ritmo típico de un jugador recreativo—
            se necesitan <strong style={{ color: 'var(--white)', fontWeight: 600 }}>525 sesiones</strong> dentro de 30 días. Esto equivale a 17 sesiones diarias, lo que hace este bono{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>no rentable para la mayoría de los perfiles</strong> a menos que seas un jugador de alto volumen.
          </p>
          <p>
            Sin embargo, en comparación con el mercado regulado argentino, el wagering de 35x de Betsson es el{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>más bajo del segmento LOTBA</strong> (promedio: 42x). El RTP de 96.2% es el más alto verificado en casinos con licencia
            local.
          </p>
        </div>
      </div>
    </div>
  )
}
