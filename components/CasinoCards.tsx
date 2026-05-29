import { getAllSlugs, getPageBySlug } from '@/lib/content'
import type { ArPagePayload } from '@/types/content'

export default async function CasinoCards() {
  const allSlugs = await getAllSlugs()

  const casinoPromises = allSlugs.map(slug => getPageBySlug('ar', slug))
  const casinoData = await Promise.all(casinoPromises)
  
  const casinos = casinoData
    .filter((p): p is ArPagePayload => p !== null && p.content_type === 'Casino_Review')
    .slice(0, 3)

  if (casinos.length === 0) {
    return null
  }

  const featured = casinos[0]
  const regular = casinos.slice(1)

  const featuredData = {
    logo: featured.entity_name?.charAt(0).toUpperCase() || 'B',
    name: featured.entity_name || 'Casino',
    score: featured.score?.toString() || '9.4',
    desc: featured.description || '',
    rtp: `${featured.validated_math?.RTP}%`,
    wagering: `${featured.validated_math?.Wagering}x`,
    minDep: `${featured.validated_math?.Min_Dep_ARS} ARS`,
    bonus: `Hasta ${featured.validated_math?.Max_Bonus_ARS?.toLocaleString('es-AR')} ARS`,
    wagering30: `${featured.validated_math?.Wagering}x/30días`,
    retiroMin: '1.000 ARS',
    jurisdiction: featured.tags?.[0] || 'CABA·LOTBA',
    gateways: featured.gateways_list || [],
  }

  return (
    <section style={styles.section} id="casinos">
      <div style={styles.wrap}>
        <div style={styles.sectionHeader}>
          <div>
            <span style={styles.sectionTag}>Ranking 2026</span>
            <h2 style={styles.sectionTitle}>Mejores casinos online en Argentina</h2>
          </div>
          <a href="#" style={styles.sectionLink}>Ver todos →</a>
        </div>

        <div style={styles.casinoGrid}>
          {/* Featured Card */}
          <div style={styles.casinoCardFeatured}>
            <div style={styles.featuredLeft}>
              <div style={styles.cardTop}>
                <div style={styles.cardLogo}>{featuredData.logo}</div>
                <div style={styles.cardScore}>
                  <div style={styles.scoreNum}>{featuredData.score}</div>
                  <div style={styles.scoreLabel}>Rating</div>
                </div>
              </div>

              <div>
                <h3 style={styles.cardName}>{featuredData.name}</h3>
                <p style={styles.cardDesc}>{featuredData.desc}</p>
              </div>

              <div style={styles.cardMetrics}>
                <div style={styles.metric}>
                  <div style={styles.metricLabel}>RTP</div>
                  <div style={{ ...styles.metricValue, color: 'var(--green)' }}>
                    {featuredData.rtp}
                  </div>
                </div>
                <div style={styles.metric}>
                  <div style={styles.metricLabel}>Wagering</div>
                  <div style={{ ...styles.metricValue, color: 'var(--gold)' }}>
                    {featuredData.wagering}
                  </div>
                </div>
                <div style={styles.metric}>
                  <div style={styles.metricLabel}>Dep.mín</div>
                  <div style={styles.metricValue}>{featuredData.minDep}</div>
                </div>
              </div>

              <div style={styles.cardGateways}>
                {featuredData.gateways.map((gw) => (
                  <div key={gw} style={styles.gwPill}>
                    <div style={styles.gwDot} />
                    {gw}
                  </div>
                ))}
              </div>

              <div style={styles.cardCta}>
                <button style={styles.cardBtn}>Jugar ahora →</button>
                <span style={styles.cardBonusTag}>{featuredData.bonus}</span>
              </div>
            </div>

            <div style={styles.featuredRight}>
              <div style={styles.featuredRightTitle}>Detalles</div>
              <div style={styles.featuredMetric}>
                <div style={styles.featuredMetricLabel}>Bono</div>
                <div style={styles.featuredMetricVal}>{featuredData.bonus}</div>
              </div>
              <div style={styles.featuredMetric}>
                <div style={styles.featuredMetricLabel}>Wagering</div>
                <div style={styles.featuredMetricVal}>{featuredData.wagering30}</div>
              </div>
              <div style={styles.featuredMetric}>
                <div style={styles.featuredMetricLabel}>Dep.mín</div>
                <div style={styles.featuredMetricVal}>{featuredData.minDep}</div>
              </div>
              <div style={styles.featuredMetric}>
                <div style={styles.featuredMetricLabel}>Retiro mín</div>
                <div style={styles.featuredMetricVal}>{featuredData.retiroMin}</div>
              </div>
              <div style={styles.featuredMetric}>
                <div style={styles.featuredMetricLabel}>Jurisdicción</div>
                <div style={styles.featuredMetricVal}>{featuredData.jurisdiction}</div>
              </div>
            </div>

            <div style={styles.featuredBadge}>Editor&apos;s Pick</div>
          </div>

          {/* Regular Cards */}
          {regular.map((casino) => {
            const regularData = {
              logo: casino.entity_name?.charAt(0).toUpperCase() || 'C',
              name: casino.entity_name || 'Casino',
              score: casino.score?.toString() || '8.9',
              desc: casino.description || '',
              rtp: `${casino.validated_math?.RTP}%`,
              wagering: `${casino.validated_math?.Wagering}x`,
              minDep: `${casino.validated_math?.Min_Dep_ARS} ARS`,
              gateways: casino.gateways_list || [],
            }
            return (
              <div key={casino.slug} style={styles.casinoCard}>
                <div style={styles.cardTop}>
                  <div style={styles.cardLogo}>{regularData.logo}</div>
                  <div style={styles.cardScore}>
                    <div style={styles.scoreNum}>{regularData.score}</div>
                    <div style={styles.scoreLabel}>Rating</div>
                  </div>
                </div>

                <div>
                  <h3 style={styles.cardName}>{regularData.name}</h3>
                  <p style={styles.cardDesc}>{regularData.desc}</p>
                </div>

                <div style={styles.cardMetrics}>
                  <div style={styles.metric}>
                    <div style={styles.metricLabel}>RTP</div>
                    <div style={{ ...styles.metricValue, color: 'var(--green)' }}>
                      {regularData.rtp}
                    </div>
                  </div>
                  <div style={styles.metric}>
                    <div style={styles.metricLabel}>Wagering</div>
                    <div style={{ ...styles.metricValue, color: 'var(--gold)' }}>
                      {regularData.wagering}
                    </div>
                  </div>
                  <div style={styles.metric}>
                    <div style={styles.metricLabel}>Dep.mín</div>
                    <div style={styles.metricValue}>{regularData.minDep}</div>
                  </div>
                </div>

                <div style={styles.cardGateways}>
                  {regularData.gateways.map((gw) => (
                    <div key={gw} style={styles.gwPill}>
                      <div style={styles.gwDot} />
                      {gw}
                    </div>
                  ))}
                </div>

                <div style={styles.cardCta}>
                  <button style={styles.cardBtn}>Jugar ahora →</button>
                </div>
              </div>
            )
          })}

          {/* Hardcoded Codere Card */}
          <div style={styles.casinoCard}>
            <div style={styles.cardTop}>
              <div style={styles.cardLogo}>C</div>
              <div style={styles.cardScore}>
                <div style={styles.scoreNum}>8.9</div>
                <div style={styles.scoreLabel}>Rating</div>
              </div>
            </div>

            <div>
              <h3 style={styles.cardName}>Codere</h3>
              <p style={styles.cardDesc}>Operador español con licencia en Argentina</p>
            </div>

            <div style={styles.cardMetrics}>
              <div style={styles.metric}>
                <div style={styles.metricLabel}>RTP</div>
                <div style={{ ...styles.metricValue, color: 'var(--green)' }}>
                  95.8%
                </div>
              </div>
              <div style={styles.metric}>
                <div style={styles.metricLabel}>Wagering</div>
                <div style={{ ...styles.metricValue, color: 'var(--gold)' }}>
                  40x
                </div>
              </div>
              <div style={styles.metric}>
                <div style={styles.metricLabel}>Dep.mín</div>
                <div style={styles.metricValue}>500 ARS</div>
              </div>
            </div>

            <div style={styles.cardGateways}>
              <div style={styles.gwPill}>
                <div style={styles.gwDot} />
                MercadoPago
              </div>
              <div style={styles.gwPill}>
                <div style={styles.gwDot} />
                Ualá
              </div>
            </div>

            <div style={styles.cardCta}>
              <button style={styles.cardBtn}>Jugar ahora →</button>
            </div>
          </div>

          {/* Hardcoded Luckia Card */}
          <div style={styles.casinoCard}>
            <div style={styles.cardTop}>
              <div style={styles.cardLogo}>L</div>
              <div style={styles.cardScore}>
                <div style={styles.scoreNum}>8.6</div>
                <div style={styles.scoreLabel}>Rating</div>
              </div>
            </div>

            <div>
              <h3 style={styles.cardName}>Luckia</h3>
              <p style={styles.cardDesc}>Plataforma con juegos en vivo y tragamonedas</p>
            </div>

            <div style={styles.cardMetrics}>
              <div style={styles.metric}>
                <div style={styles.metricLabel}>RTP</div>
                <div style={{ ...styles.metricValue, color: 'var(--green)' }}>
                  96.1%
                </div>
              </div>
              <div style={styles.metric}>
                <div style={styles.metricLabel}>Wagering</div>
                <div style={{ ...styles.metricValue, color: 'var(--gold)' }}>
                  30x
                </div>
              </div>
              <div style={styles.metric}>
                <div style={styles.metricLabel}>Dep.mín</div>
                <div style={styles.metricValue}>1.000 ARS</div>
              </div>
            </div>

            <div style={styles.cardGateways}>
              <div style={styles.gwPill}>
                <div style={styles.gwDot} />
                MercadoPago
              </div>
              <div style={styles.gwPill}>
                <div style={styles.gwDot} />
                Rapipago
              </div>
              <div style={styles.gwPill}>
                <div style={styles.gwDot} />
                CBU
              </div>
            </div>

            <div style={styles.cardCta}>
              <button style={styles.cardBtn}>Jugar ahora →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '72px 0 0',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: '32px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--gray-3)',
  } as React.CSSProperties,
  sectionTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
  },
  sectionTag: {
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '11px',
    color: 'var(--gold)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    display: 'block',
    marginBottom: '8px',
  },
  sectionLink: {
    fontSize: '13px',
    color: 'var(--gray-2)',
    textDecoration: 'none',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  casinoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '16px',
  } as React.CSSProperties,
  casinoCard: {
    background: 'var(--surface-1)',
    border: '1px solid var(--gray-3)',
    borderRadius: 'var(--r-xl)',
    padding: '24px',
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  } as React.CSSProperties,
  casinoCardFeatured: {
    gridColumn: '1 / -1',
    background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--surface-1) 100%)',
    border: '1px solid var(--gold-line)',
    borderRadius: 'var(--r-xl)',
    padding: '24px',
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    gap: '32px',
    alignItems: 'flex-start',
    transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  } as React.CSSProperties,
  featuredLeft: {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  featuredRight: {
    width: '240px',
    flexShrink: 0,
    background: 'var(--surface-3)',
    borderRadius: 'var(--r-lg)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '14px',
  },
  featuredBadge: {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    padding: '4px 12px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  },
  featuredRightTitle: {
    fontSize: '11px',
    color: 'var(--gray-2)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    fontFamily: 'var(--font-dm-mono)',
  },
  featuredMetric: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '3px',
    paddingBottom: '12px',
    borderBottom: '1px solid var(--gray-3)',
  },
  featuredMetricLabel: {
    fontSize: '11px',
    color: 'var(--gray-2)',
  },
  featuredMetricVal: {
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '1.2rem',
    fontWeight: 500,
    color: 'var(--gold)',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLogo: {
    width: '48px',
    height: '48px',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-2)',
    border: '1px solid var(--gray-3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    fontWeight: 800,
    fontFamily: 'var(--font-syne)',
    color: 'var(--gold)',
    letterSpacing: '-0.05em',
  },
  cardScore: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    gap: '2px',
  },
  scoreNum: {
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '1.5rem',
    fontWeight: 500,
    color: 'var(--gold)',
    lineHeight: 1,
  },
  scoreLabel: {
    fontSize: '10px',
    color: 'var(--gray-2)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  cardName: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.1rem',
    fontWeight: 700,
    letterSpacing: '-0.01em',
  },
  cardDesc: {
    fontSize: '13px',
    color: 'var(--gray-1)',
    lineHeight: 1.55,
  },
  cardMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1px',
    background: 'var(--gray-3)',
    borderRadius: 'var(--r-sm)',
    overflow: 'hidden',
  } as React.CSSProperties,
  metric: {
    background: 'var(--surface-2)',
    padding: '10px 12px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '3px',
  },
  metricLabel: {
    fontSize: '10px',
    color: 'var(--gray-2)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: 'var(--font-dm-mono)',
  },
  metricValue: {
    fontSize: '14px',
    fontWeight: 700,
    color: 'var(--white)',
    lineHeight: 1,
  },
  cardGateways: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap' as const,
  },
  gwPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '4px 10px',
    borderRadius: '999px',
    background: 'var(--green-dim)',
    border: '1px solid rgba(45,217,143,0.2)',
    fontSize: '11px',
    fontWeight: 600,
    color: 'var(--green)',
  },
  gwDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    background: 'var(--green)',
  },
  cardCta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '4px',
  },
  cardBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '9px 20px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '13px',
    fontWeight: 700,
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s',
  } as React.CSSProperties,
  cardBonusTag: {
    fontSize: '12px',
    color: 'var(--gray-1)',
    fontFamily: 'var(--font-dm-mono)',
  },
}
