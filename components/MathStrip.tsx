import { getAllSlugs, getPageBySlug } from '@/lib/content'
import type { ArPagePayload } from '@/types/content'

export default async function MathStrip() {
  const allSlugs = await getAllSlugs()

  const casinoPromises = allSlugs.map(slug => getPageBySlug('ar', slug))
  const casinoData = await Promise.all(casinoPromises)
  
  const casinos = casinoData
    .filter((p): p is ArPagePayload => p !== null && p.content_type === 'Casino_Review')
    .slice(0, 5)

  return (
    <section style={styles.section}>
      <div style={styles.wrap}>
        <div style={styles.mathStripInner}>
          <div style={styles.mathText}>
            <h2 style={styles.mathText_h2}>
              Comparamos la <span style={styles.goldSpan}>matemática</span>, no los logos
            </h2>
            <p style={styles.mathText_p}>
              Cada casino es evaluado en base a datos reales: RTP verificado, estructura de wagering, 
              límites mínimos de depósito y retiro. No nos mueve publicidad de operadores.
            </p>
          </div>

          <table style={styles.mathTable}>
            <thead>
              <tr>
                <th style={styles.mathTable_th}>Casino</th>
                <th style={styles.mathTable_th}>Bono</th>
                <th style={styles.mathTable_th}>Wagering</th>
                <th style={styles.mathTable_th}>RTP</th>
              </tr>
            </thead>
            <tbody>
              {casinos.map((casino) => {
                const bonusValue = casino.validated_math?.Max_Bonus_ARS 
                  ? `${casino.validated_math.Max_Bonus_ARS.toLocaleString('es-AR')} ARS`
                  : '-'
                const wageringValue = casino.validated_math?.Wagering 
                  ? `${casino.validated_math?.Wagering}x`
                  : '-'
                const rtpValue = casino.validated_math?.RTP
                  ? `${casino.validated_math?.RTP}%`
                  : '-'

                // Color based on value
                const getBonusColor = (val: number) => val >= 75000 ? styles.green : styles.red
                const getWageringColor = (val: number) => val <= 35 ? styles.green : val <= 40 ? styles.gold : styles.red
                const getRtpColor = (val: number) => val >= 96 ? styles.gold : styles.red

                return (
                  <tr key={casino.slug}>
                    <td style={styles.mathTable_td}>{casino.entity_name}</td>
                    <td style={{...styles.mathTable_td, ...getBonusColor(casino.validated_math?.Max_Bonus_ARS || 0)}}>{bonusValue}</td>
                    <td style={{...styles.mathTable_td, ...getWageringColor(casino.validated_math?.Wagering || 999)}}>{wageringValue}</td>
                    <td style={{...styles.mathTable_td, ...getRtpColor(casino.validated_math?.RTP || 0)}}>{rtpValue}</td>
                  </tr>
                )
              })}
              {/* Hardcoded additional casinos */}
              <tr>
                <td style={styles.mathTable_td}>Luckia</td>
                <td style={{...styles.mathTable_td, ...styles.green}}>50.000 ARS</td>
                <td style={{...styles.mathTable_td, ...styles.green}}>30x</td>
                <td style={{...styles.mathTable_td, ...styles.gold}}>96.1%</td>
              </tr>
              <tr>
                <td style={styles.mathTable_td}>Codere</td>
                <td style={{...styles.mathTable_td, ...styles.red}}>60.000 ARS</td>
                <td style={{...styles.mathTable_td, ...styles.gold}}>40x</td>
                <td style={{...styles.mathTable_td, ...styles.red}}>95.8%</td>
              </tr>
              <tr>
                <td style={styles.mathTable_td}>888 Casino</td>
                <td style={{...styles.mathTable_td, ...styles.red}}>45.000 ARS</td>
                <td style={{...styles.mathTable_td, ...styles.red}}>50x</td>
                <td style={{...styles.mathTable_td, ...styles.red}}>95.5%</td>
              </tr>
              <tr>
                <td style={styles.mathTable_td}>Sportingbet</td>
                <td style={{...styles.mathTable_td, ...styles.green}}>80.000 ARS</td>
                <td style={{...styles.mathTable_td, ...styles.red}}>45x</td>
                <td style={{...styles.mathTable_td, ...styles.red}}>95.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '56px 0',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  mathStripInner: {
    background: 'var(--surface-1)',
    border: '1px solid var(--gray-3)',
    borderRadius: 'var(--r-xl)',
    padding: '40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    alignItems: 'center',
  } as React.CSSProperties,
  mathText: {},
  mathText_h2: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.8rem',
    fontWeight: 800,
    letterSpacing: '-0.025em',
    marginBottom: '12px',
    lineHeight: 1.2,
  },
  goldSpan: {
    color: 'var(--gold)',
  },
  mathText_p: {
    color: 'var(--gray-1)',
    fontSize: '14px',
    lineHeight: 1.65,
  },
  mathTable: {
    width: '100%',
    borderCollapse: 'collapse' as const,
  },
  mathTable_th: {
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '10px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    color: 'var(--gray-2)',
    textAlign: 'left' as const,
    padding: '8px 12px',
    borderBottom: '1px solid var(--gray-3)',
    fontWeight: 400,
  },
  mathTable_td: {
    padding: '10px 12px',
    fontSize: '13px',
    color: 'var(--gray-1)',
    borderBottom: '1px solid rgba(46,51,72,0.5)',
  },
  green: {
    color: 'var(--green)',
    fontFamily: 'var(--font-dm-mono)',
  },
  red: {
    color: 'var(--red)',
    fontFamily: 'var(--font-dm-mono)',
  },
  gold: {
    color: 'var(--gold)',
    fontFamily: 'var(--font-dm-mono)',
  },
}
