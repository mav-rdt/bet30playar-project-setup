'use client'

interface CasinoHeroProps {
  data: any
}

export default function CasinoHero({ data }: CasinoHeroProps) {
  const starCount = 5
  const score = typeof data?.score === 'number' ? data.score : 0
  const scoreMax = typeof data?.score_max === 'number' ? data.score_max : 5
  const filledStars = Math.round(score)
  const tags = Array.isArray(data?.tags) ? data.tags : []
  const gateways = Array.isArray(data?.gateways)
    ? data.gateways
    : Array.isArray(data?.gateways_list)
      ? data.gateways_list
      : typeof data?.validated_gateways === 'string'
        ? data.validated_gateways
            .split(',')
            .map((value: string) => value.trim())
            .filter(Boolean)
        : []
  const sidebarMetrics = Array.isArray(data?.sidebar_metrics) ? data.sidebar_metrics : []
  const brandLetter = data?.brand_letter ?? (data?.entity_name ? data.entity_name[0] : '?')
  const headline = data?.h1 ?? 'Casino review'
  const description = data?.description ?? data?.intro ?? data?.meta_description ?? ''
  const bonusArs = data?.bonus_ars ?? data?.validated_math?.Max_Bonus_ARS ?? ''
  const bonusLabel = data?.bonus_label ?? ''

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
          top: '-100px',
          right: '-100px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(232,184,75,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '48px',
            alignItems: 'start',
            paddingBottom: '40px',
          }}
        >
          {/* LEFT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Brand Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: 'var(--r-lg)',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--gold-line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-syne)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--gold)',
                  flexShrink: 0,
                }}
              >
                {brandLetter}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {tags.length > 0 && (
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {tags.map((tag: string, idx: number) => {
                      let tagStyle = {}
                      if (tag === 'Licencia LOTBA vigente') {
                        tagStyle = {
                          background: 'var(--green-dim)',
                          color: 'var(--green)',
                          border: '1px solid rgba(45,217,143,0.2)',
                        }
                      } else if (tag === 'Casino Review') {
                        tagStyle = {
                          background: 'var(--gold-dim)',
                          color: 'var(--gold)',
                          border: '1px solid var(--gold-line)',
                        }
                      } else {
                        tagStyle = {
                          background: 'var(--surface-2)',
                          color: 'var(--gray-1)',
                          border: '1px solid var(--gray-3)',
                        }
                      }
                      return (
                        <span
                          key={idx}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '3px 10px',
                            borderRadius: '999px',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.04em',
                            ...tagStyle,
                          }}
                        >
                          {tag === 'Licencia LOTBA vigente' && (
                            <span
                              style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: 'var(--green)',
                              }}
                            />
                          )}
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {Array(starCount)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} style={{ fontSize: '16px', color: i < filledStars ? 'var(--gold)' : 'var(--gray-3)' }}>
                          ★
                        </span>
                      ))}
                  </div>
                  <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '1.4rem', fontWeight: 500, color: 'var(--gold)', marginLeft: '6px' }}>
                    {score}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--gray-2)' }}>/ {scoreMax} · Puntuación editorial</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              {headline}
            </h1>

            {/* Description */}
            {description && (
              <p style={{ fontSize: '15px', color: 'var(--gray-1)', lineHeight: 1.7, maxWidth: '600px', fontWeight: 300 }}>
                {description}
              </p>
            )}

            {/* Gateways */}
            {gateways.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: 'var(--gray-2)', fontFamily: 'var(--font-dm-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Acepta:
                </span>
                {gateways.map((gw: string, idx: number) => (
                  <span
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 12px',
                      borderRadius: '999px',
                      background: 'var(--green-dim)',
                      border: '1px solid rgba(45,217,143,0.2)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--green)',
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--green)' }} />
                    {gw}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Bar */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', paddingTop: '4px' }}>
              <a
                href="#"
                style={{
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
                }}
              >
                Ir al sitio oficial →
              </a>
              <a
                href="#analisis"
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
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                Leer análisis completo
              </a>
            </div>

            {/* Note */}
            <span style={{ fontSize: '11px', color: 'var(--gray-2)', fontFamily: 'var(--font-dm-mono)' }}>
              +18 · Jugá responsablemente · Solo residentes CABA
            </span>
          </div>

          {/* SIDEBAR CARD */}
          <div
            id="sidebar-cta"
            style={{
              background: 'var(--surface-1)',
              border: '1px solid var(--gold-line)',
              borderRadius: 'var(--r-xl)',
              overflow: 'hidden',
              position: 'sticky',
              top: '76px',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, var(--surface-2), var(--surface-3))',
                padding: '20px 24px',
                borderBottom: '1px solid var(--gray-3)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                Bono de bienvenida auditado
              </div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1.1 }}>
                {bonusArs} ARS
              </div>
              <div style={{ fontSize: '12px', color: 'var(--gray-1)', marginTop: '2px' }}>
                {bonusLabel}
              </div>
            </div>
            {sidebarMetrics.length > 0 && (
              <div style={{ padding: '4px 0' }}>
                {sidebarMetrics.map((metric: any, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 24px',
                      borderBottom: idx === sidebarMetrics.length - 1 ? 'none' : '1px solid rgba(46,51,72,0.6)',
                    }}
                  >
                    <span style={{ fontSize: '13px', color: 'var(--gray-2)' }}>{metric.label}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-mono)',
                        fontSize: '14px',
                        fontWeight: 500,
                        color:
                          metric.color === 'green'
                            ? 'var(--green)'
                            : metric.color === 'gold'
                              ? 'var(--gold)'
                              : 'var(--white)',
                      }}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div style={{ padding: '16px 20px', background: 'var(--surface-2)', borderTop: '1px solid var(--gray-3)' }}>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '13px',
                  borderRadius: '999px',
                  background: 'var(--gold)',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  marginBottom: '8px',
                  transition: 'background 0.2s',
                }}
              >
                Obtener bono →
              </button>
              <div style={{ fontSize: '11px', color: 'var(--gray-2)', textAlign: 'center', lineHeight: 1.4 }}>
                Datos actualizados 2 mayo 2026 · +18 años
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}