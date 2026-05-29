'use client'

export default function SlotBankroll({ strategies, table }: any) {
  const safeStrategies = Array.isArray(strategies) ? strategies : []
  const safeTable = Array.isArray(table) ? table : []
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
          📊
        </div>
        <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Estrategia de bankroll</h2>
      </div>
      <div style={{ padding: '22px 26px' }}>
        {/* Strategy Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {safeStrategies.map((step: any, i: number) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '16px',
                padding: '16px 18px',
                background: 'var(--surface-2)',
                borderRadius: 'var(--r-md)',
                border: '1px solid var(--gray-3)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-line)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--gray-3)')}
            >
              <div
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--accent-dim)',
                  lineHeight: 1,
                  flexShrink: 0,
                  minWidth: '32px',
                }}
              >
                {step.num ?? step.step}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--white)' }}>{step.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-1)', lineHeight: 1.55 }}>{step.desc ?? step.description}</div>
                {step.tip && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      marginTop: '4px',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      background: 'var(--accent-dim)',
                      border: '1px solid var(--accent-line)',
                      fontSize: '11px',
                      color: 'var(--accent-slot)',
                      fontFamily: 'var(--font-dm-mono)',
                      width: 'fit-content',
                    }}
                  >
                    💡 {step.tip}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bankroll Table */}
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr style={{ background: 'var(--surface-2)' }}>
                <th style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-2)', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--gray-3)' }}>
                  Bankroll
                </th>
                <th style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-2)', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--gray-3)' }}>
                  Apuesta Mín
                </th>
                <th style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-2)', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--gray-3)' }}>
                  Sesión
                </th>
                <th style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-2)', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--gray-3)' }}>
                  Riesgo
                </th>
                <th style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-2)', textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--gray-3)' }}>
                  Recomendación
                </th>
              </tr>
            </thead>
            <tbody>
              {safeTable.map((row: any, i: number) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: '11px 14px',
                      fontSize: '13px',
                      color: 'var(--white)',
                      fontWeight: 500,
                      borderBottom: i < safeTable.length - 1 ? '1px solid rgba(46, 51, 72, 0.5)' : 'none',
                      verticalAlign: 'middle',
                    }}
                  >
                    {row.bankroll ?? row.balance}
                  </td>
                  <td
                    style={{
                      padding: '11px 14px',
                      fontSize: '13px',
                      color: 'var(--gray-1)',
                      borderBottom: i < safeTable.length - 1 ? '1px solid rgba(46, 51, 72, 0.5)' : 'none',
                      verticalAlign: 'middle',
                    }}
                  >
                    {row.min_bet ?? row.stake_recommended}
                  </td>
                  <td
                    style={{
                      padding: '11px 14px',
                      fontSize: '13px',
                      color: 'var(--gray-1)',
                      borderBottom: i < safeTable.length - 1 ? '1px solid rgba(46, 51, 72, 0.5)' : 'none',
                      verticalAlign: 'middle',
                    }}
                  >
                    {row.sessions ?? row.spins_per_session}
                  </td>
                  <td
                    style={{
                      padding: '11px 14px',
                      fontSize: '13px',
                      color:
                        row.risk === 'Crítico'
                          ? 'var(--red)'
                          : row.risk === 'Alto'
                            ? 'var(--orange)'
                            : 'var(--green)',
                      fontFamily: 'var(--font-dm-mono)',
                      borderBottom: i < safeTable.length - 1 ? '1px solid rgba(46, 51, 72, 0.5)' : 'none',
                      verticalAlign: 'middle',
                    }}
                  >
                    {row.risk ?? row.risk_color ?? ''}
                  </td>
                  <td
                    style={{
                      padding: '11px 14px',
                      fontSize: '13px',
                      color: 'var(--gray-1)',
                      fontFamily: 'var(--font-dm-mono)',
                      borderBottom: i < safeTable.length - 1 ? '1px solid rgba(46, 51, 72, 0.5)' : 'none',
                      verticalAlign: 'middle',
                    }}
                  >
                    {row.recommendation ?? row.duration ?? ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
