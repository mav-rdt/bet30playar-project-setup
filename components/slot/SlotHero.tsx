'use client'

export default function SlotHero({ data }: any) {
  const safeData = data ?? {}
  const tags = Array.isArray(safeData.tags) ? safeData.tags : []
  const quickStats = Array.isArray(safeData.quick_stats) ? safeData.quick_stats : []
  const emoji = safeData.emoji ?? '🎰'
  const rtp = safeData.rtp ?? '--'
  const provider = safeData.provider ?? ''
  const description = safeData.description ?? ''

  return (
    <section
      style={{
        padding: '48px 0 0',
        borderBottom: '1px solid var(--gray-3)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: '48px',
            alignItems: 'start',
            paddingBottom: '40px',
          }}
        >
          {/* LEFT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Slot Identity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--r-lg)',
                  background: 'linear-gradient(135deg, #2d1b69, #4c1d95)',
                  border: '1px solid var(--accent-line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.2rem',
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {emoji}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 30% 30%, rgba(167,139,250,0.3), transparent 60%)',
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {tags[0] && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 600,
                        background: 'var(--accent-dim)',
                        color: 'var(--accent-slot)',
                        border: '1px solid var(--accent-line)',
                      }}
                    >
                      {tags[0]}
                    </span>
                  )}
                  {tags[1] && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 600,
                        background: 'rgba(251, 146, 60, 0.1)',
                        color: 'var(--orange)',
                        border: '1px solid rgba(251, 146, 60, 0.22)',
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--orange)' }} />
                      {tags[1]}
                    </span>
                  )}
                  {tags[2] && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 600,
                        background: 'var(--green-dim)',
                        color: 'var(--green)',
                        border: '1px solid rgba(45, 217, 143, 0.2)',
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--green)' }} />
                      {tags[2]}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    background: 'var(--green-dim)',
                    border: '1px solid rgba(45, 217, 143, 0.2)',
                    width: 'fit-content',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: 'var(--gray-2)',
                        fontFamily: 'var(--font-dm-mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '2px',
                      }}
                    >
                      RTP verificado
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-mono)',
                        fontSize: '1.3rem',
                        fontWeight: 500,
                        color: 'var(--green)',
                        lineHeight: 1,
                      }}
                    >
                      {rtp}%
                    </span>
                  </div>
                  {provider && <span style={{ fontSize: '12px', color: 'var(--gray-1)' }}>{provider}</span>}
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              Gates of Olympus Argentina:{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--accent-slot)' }}>RTP real, estrategia</em>
              <br />y gestión de bankroll
            </h1>

            {/* Description */}
            {description && (
              <p style={{ fontSize: '15px', color: 'var(--gray-1)', lineHeight: 1.7, maxWidth: '580px', fontWeight: 300 }}>
                {description}
              </p>
            )}

            {/* CTA Bar */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', paddingTop: '4px' }}>
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '999px',
                  background: 'var(--accent-slot)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s, transform 0.15s, boxShadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.85'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(167, 139, 250, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                ¿Dónde jugar con MercadoPago? →
              </button>
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 22px',
                  borderRadius: '999px',
                  border: '1px solid var(--gray-3)',
                  color: 'var(--gray-1)',
                  background: 'transparent',
                  fontSize: '15px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-1)'
                  e.currentTarget.style.color = 'var(--white)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-3)'
                  e.currentTarget.style.color = 'var(--gray-1)'
                }}
              >
                Ver estrategia
              </button>
            </div>
          </div>

          {/* RIGHT - Quick Stats */}
          <SlotQuickStats stats={quickStats} />
        </div>
      </div>
    </section>
  )
}

function SlotQuickStats({ stats }: any) {
  const safeStats = Array.isArray(stats) ? stats : []
  return (
    <div
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--accent-line)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
        position: 'sticky',
        top: '76px',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(167,139,250,.15), rgba(167,139,250,.05))',
          padding: '18px 22px',
          borderBottom: '1px solid var(--gray-3)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '10px',
            color: 'var(--accent-slot)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '6px',
          }}
        >
          Stats Verificadas
        </div>
        <div style={{ fontSize: '13px', color: 'var(--gray-1)' }}>
          <strong style={{ color: 'var(--white)' }}>Gates of Olympus</strong>
        </div>
      </div>
      {safeStats.map((stat: any, i: number) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '13px 22px',
            borderBottom: i < safeStats.length - 1 ? '1px solid rgba(46, 51, 72, 0.55)' : 'none',
          }}
        >
          <div style={{ fontSize: '13px', color: 'var(--gray-2)' }}>{stat.label}</div>
          <div
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '14px',
              fontWeight: 500,
              color:
                stat.color === 'green'
                  ? 'var(--green)'
                  : stat.color === 'orange'
                    ? 'var(--orange)'
                    : stat.color === 'purple'
                      ? 'var(--accent-slot)'
                      : 'var(--white)',
            }}
          >
            {stat.value}
          </div>
        </div>
      ))}
      <div style={{ padding: '14px 18px', background: 'var(--surface-2)', borderTop: '1px solid var(--gray-3)' }}>
        <div style={{ fontSize: '11px', color: 'var(--gray-2)', textAlign: 'center', lineHeight: 1.5 }}>
          Datos verificados por Pragmatic Play · Mayo 2026
        </div>
      </div>
    </div>
  )
}