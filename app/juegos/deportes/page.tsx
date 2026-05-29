import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { Trophy, Star, Clock, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Apuestas Deportivas - Bet30',
  description: 'Apuestas deportivas en Bet30 - Futbol, tenis, basquet y mas',
}

const sports = [
  { name: 'Futbol', icon: '⚽', events: '500+', popular: true },
  { name: 'Tenis', icon: '🎾', events: '200+', popular: true },
  { name: 'Basquet', icon: '🏀', events: '150+', popular: true },
  { name: 'eSports', icon: '🎮', events: '100+', popular: false },
  { name: 'Boxeo', icon: '🥊', events: '50+', popular: false },
  { name: 'MMA', icon: '🤼', events: '40+', popular: false },
]

const liveMatches = [
  { 
    sport: 'Futbol', 
    league: 'Liga Argentina', 
    team1: 'River Plate', 
    team2: 'Boca Juniors', 
    score: '2 - 1',
    time: '67\'',
    odds1: '2.10',
    oddsX: '3.40',
    odds2: '3.80'
  },
  { 
    sport: 'Tenis', 
    league: 'ATP Masters', 
    team1: 'C. Alcaraz', 
    team2: 'J. Sinner', 
    score: '6-4, 3-2',
    time: 'Set 2',
    odds1: '1.85',
    oddsX: '-',
    odds2: '2.05'
  },
  { 
    sport: 'Basquet', 
    league: 'NBA', 
    team1: 'Lakers', 
    team2: 'Celtics', 
    score: '89 - 95',
    time: 'Q4 5:32',
    odds1: '2.20',
    oddsX: '-',
    odds2: '1.70'
  },
]

const features = [
  { icon: Clock, title: 'Apuestas en vivo', desc: 'Apuesta mientras el partido esta en curso' },
  { icon: TrendingUp, title: 'Mejores cuotas', desc: 'Las cuotas mas competitivas del mercado' },
  { icon: Star, title: 'Cashout', desc: 'Retira tu apuesta antes de que termine el evento' },
]

export default function DeportesPage() {
  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.iconBadge}>
              <Trophy size={32} />
            </div>
            <h1 style={styles.title}>Apuestas Deportivas</h1>
            <p style={styles.subtitle}>
              Apuesta en los mejores eventos deportivos del mundo. Futbol, tenis, basquet y mucho mas.
            </p>
          </div>

          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <feature.icon size={24} style={{ color: 'var(--gold)' }} />
                <div>
                  <h3 style={styles.featureTitle}>{feature.title}</h3>
                  <p style={styles.featureDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Deportes disponibles</h2>
            <div style={styles.sportsGrid}>
              {sports.map((sport, index) => (
                <a key={index} href="#" style={{ ...styles.sportCard, ...(sport.popular ? styles.sportCardPopular : {}) }}>
                  <div style={styles.sportIcon}>{sport.icon}</div>
                  <div style={styles.sportInfo}>
                    <h3 style={styles.sportName}>{sport.name}</h3>
                    <p style={styles.sportEvents}>{sport.events} eventos</p>
                  </div>
                  {sport.popular && <div style={styles.popularBadge}>Popular</div>}
                </a>
              ))}
            </div>
          </section>

          <section style={styles.section}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>En vivo ahora</h2>
              <div style={styles.liveBadge}>
                <span style={styles.liveDot} />
                LIVE
              </div>
            </div>
            <div style={styles.liveGrid}>
              {liveMatches.map((match, index) => (
                <div key={index} style={styles.matchCard}>
                  <div style={styles.matchHeader}>
                    <span style={styles.matchLeague}>{match.league}</span>
                    <span style={styles.matchTime}>{match.time}</span>
                  </div>
                  <div style={styles.matchTeams}>
                    <div style={styles.matchTeam}>{match.team1}</div>
                    <div style={styles.matchScore}>{match.score}</div>
                    <div style={styles.matchTeam}>{match.team2}</div>
                  </div>
                  <div style={styles.matchOdds}>
                    <button style={styles.oddBtn}>
                      <span style={styles.oddLabel}>1</span>
                      <span style={styles.oddValue}>{match.odds1}</span>
                    </button>
                    {match.oddsX !== '-' && (
                      <button style={styles.oddBtn}>
                        <span style={styles.oddLabel}>X</span>
                        <span style={styles.oddValue}>{match.oddsX}</span>
                      </button>
                    )}
                    <button style={styles.oddBtn}>
                      <span style={styles.oddLabel}>2</span>
                      <span style={styles.oddValue}>{match.odds2}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle}>Empieza a apostar ahora</h2>
            <p style={styles.ctaDesc}>Registrate y recibe un bono de bienvenida para tus apuestas deportivas</p>
            <a href="/registro" style={styles.ctaBtn}>Registrarse</a>
          </div>
        </div>
      </main>
      <MonoBrandFooter />
    </>
  )
}

const styles = {
  main: {
    padding: '80px 0',
  },
  container: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '48px',
  },
  iconBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    marginBottom: '24px',
  },
  title: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: 800,
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--gray-1)',
    lineHeight: 1.7,
    maxWidth: '550px',
    margin: '0 auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '64px',
  } as React.CSSProperties,
  featureCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '24px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  featureTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  featureDesc: {
    fontSize: '13px',
    color: 'var(--gray-2)',
  },
  section: {
    marginBottom: '64px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  sectionTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '24px',
  },
  liveBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 14px',
    borderRadius: '999px',
    background: 'rgba(240, 82, 82, 0.1)',
    color: 'var(--red)',
    fontSize: '12px',
    fontWeight: 700,
  },
  liveDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--red)',
    animation: 'pulse 1.5s infinite',
  },
  sportsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '16px',
  },
  sportCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    textDecoration: 'none',
    color: 'inherit',
    position: 'relative' as const,
  },
  sportCardPopular: {
    border: '1px solid var(--gold-line)',
  },
  sportIcon: {
    fontSize: '2rem',
  },
  sportInfo: {},
  sportName: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
  },
  sportEvents: {
    fontSize: '12px',
    color: 'var(--gray-2)',
  },
  popularBadge: {
    position: 'absolute' as const,
    top: '8px',
    right: '8px',
    padding: '4px 8px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '10px',
    fontWeight: 700,
  },
  liveGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '20px',
  },
  matchCard: {
    padding: '24px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  matchHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  matchLeague: {
    fontSize: '12px',
    color: 'var(--gray-2)',
  },
  matchTime: {
    fontSize: '12px',
    color: 'var(--red)',
    fontWeight: 600,
  },
  matchTeams: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  matchTeam: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
    flex: 1,
  },
  matchScore: {
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '1.2rem',
    fontWeight: 700,
    color: 'var(--gold)',
    padding: '0 16px',
  },
  matchOdds: {
    display: 'flex',
    gap: '12px',
  },
  oddBtn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '4px',
    padding: '12px',
    borderRadius: 'var(--r-md)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-3)',
    cursor: 'pointer',
  },
  oddLabel: {
    fontSize: '11px',
    color: 'var(--gray-2)',
  },
  oddValue: {
    fontSize: '14px',
    fontWeight: 700,
    color: 'var(--gold)',
    fontFamily: 'var(--font-dm-mono)',
  },
  ctaSection: {
    textAlign: 'center' as const,
    padding: '64px',
    borderRadius: 'var(--r-lg)',
    background: 'linear-gradient(180deg, var(--gold-dim) 0%, var(--surface-2) 100%)',
    border: '1px solid var(--gold-line)',
  },
  ctaTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.8rem',
    fontWeight: 800,
    marginBottom: '12px',
  },
  ctaDesc: {
    fontSize: '1rem',
    color: 'var(--gray-1)',
    marginBottom: '24px',
  },
  ctaBtn: {
    display: 'inline-flex',
    padding: '16px 32px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
  },
}
