'use client'

export default function PaymentMethods() {
  const methods = [
    { name: 'MercadoPago', deposit: 'Instantáneo', withdrawal: '24–48 hs', min: '500 ARS' },
    { name: 'Pago Fácil', deposit: '15-30 min', withdrawal: 'No disponible', min: '500 ARS' },
    { name: 'CVU / CBU', deposit: 'N/A', withdrawal: '24–48 hs', min: '1.000 ARS' },
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
          💳
        </div>
        <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
          Ventaja local: pagos
        </div>
      </div>
      <div style={{ padding: '24px 28px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-2)', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--gray-3)', background: 'var(--surface-2)' }}>
                Método
              </th>
              <th style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-2)', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--gray-3)', background: 'var(--surface-2)' }}>
                Depósito
              </th>
              <th style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-2)', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--gray-3)', background: 'var(--surface-2)' }}>
                Retiro
              </th>
              <th style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-2)', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--gray-3)', background: 'var(--surface-2)' }}>
                Mínimo
              </th>
            </tr>
          </thead>
          <tbody>
            {methods.map((method, idx) => (
              <tr key={idx}>
                <td style={{ padding: '12px 14px', fontSize: '13px', color: 'var(--white)', fontWeight: 500, borderBottom: idx === methods.length - 1 ? 'none' : '1px solid rgba(46,51,72,0.5)', verticalAlign: 'middle' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)' }} />
                    {method.name}
                  </span>
                </td>
                <td style={{ padding: '12px 14px', fontSize: '13px', color: 'var(--gray-1)', borderBottom: idx === methods.length - 1 ? 'none' : '1px solid rgba(46,51,72,0.5)', verticalAlign: 'middle' }}>
                  <span style={{ fontFamily: 'var(--font-dm-mono)', color: method.deposit === 'Instantáneo' ? 'var(--green)' : 'inherit' }}>
                    {method.deposit}
                  </span>
                </td>
                <td style={{ padding: '12px 14px', fontSize: '13px', color: 'var(--gray-1)', borderBottom: idx === methods.length - 1 ? 'none' : '1px solid rgba(46,51,72,0.5)', verticalAlign: 'middle' }}>
                  <span style={{ fontFamily: 'var(--font-dm-mono)', color: method.withdrawal === '24–48 hs' ? 'var(--green)' : 'inherit' }}>
                    {method.withdrawal}
                  </span>
                </td>
                <td style={{ padding: '12px 14px', fontSize: '13px', color: 'var(--gray-1)', borderBottom: idx === methods.length - 1 ? 'none' : '1px solid rgba(46,51,72,0.5)', verticalAlign: 'middle' }}>
                  {method.min}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
