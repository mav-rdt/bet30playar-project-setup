import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { TrendingUp, Flame, Zap, Clock, Users } from 'lucide-react'

export const metadata = {
  title: 'Crash Games - Bet30',
  description: 'Los mejores juegos de crash en Bet30 - Aviator, Spaceman y mas',
}

const crashGames = [
  {
    name: 'Aviator',
    provider: 'Spribe',
    description: 'El juego de crash mas popular. Mira como el avion sube y retira antes de que se vaya.',
    maxMultiplier: 'x10.000+',
    players: '50.000+',
    featured: true,
  },
  {
    name: 'Spaceman',
    provider: 'Pragmatic Play',
    description: 'Un astronauta en el espacio. El multiplicador sube mientras el cohete vuela.',
    maxMultiplier: 'x5.000+',
    players: '30.000+',
    featured: true,
  },
  {
    name: 'JetX',
    provider: 'SmartSoft',
    description: 'Apuesta en multiples jets simultaneamente y multiplica tus ganancias.',
    maxMultiplier: 'x10.000+',
    players: '20.000+',
    featured: false,
  },
  {
    name: 'Crash',
    provider: 'BGaming',
    description: 'La version clasica del juego de crash con grafico simple y directo.',
    maxMultiplier: 'x1.000.000',
    players: '15.000+',
    featured: false,
  },
  {
    name: 'Lucky Jet',
    provider: '1WIN',
    description: 'Un hombre con jetpack vuela hacia arriba. Retira antes de que caiga.',
    maxMultiplier: 'x200+',
    players: '25.000+',
    featured: false,
  },
  {
    name: 'Plinko',
    provider: 'BGaming',
    description: 'Suelta la bola y mira como rebota hacia multiplicadores.',
    maxMultiplier: 'x1000',
    players: '40.000+',
    featured: false,
  },
]

const howItWorks = [
  { icon: Zap, title: 'Apuesta', desc: 'Coloca tu apuesta antes de que comience la ronda' },
  { icon: TrendingUp, title: 'Mira subir', desc: 'El multiplicador aumenta con el tiempo' },
  { icon: Clock, title: 'Retira', desc: 'Presiona el boton de retirar antes del crash' },
]

export default function CrashPage() {
  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.iconBadge}>
              <TrendingUp size={32} />
            </div>
            <h1 style={styles.title}>Crash Games</h1>
            <p style={styles.subtitle}>
              Juegos de crash emocionantes con multiplicadores increibles. Retira a tiempo y multiplica tu apuesta.
            </p>
          </div>

          <div style={styles.howItWorks}>
            <h2 style={styles.sectionTitle}>Como jugar</h2>
            <div style={styles.howItWorksGrid}>
              {howItWorks.map((step, index) => (
                <div key={index} style={styles.howItWorksCard}>
                  <div style={styles.stepNumber}>{index + 1}</div>
                  <step.icon size={28} style={{ color: 'var(--green)', marginBottom: '16px' }} />
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.gamesGrid}>
            {crashGames.map((game, index) => (
              <div key={index} style={{ ...styles.gameCard, ...(game.featured ? styles.gameCardFeatured : {}) }}>
                {game.featured && (
                  <div style={styles.featuredBadge}>
                    <Flame size={14} />
                    Popular
                  </div>
                )}
                <div style={styles.gameImage}>
                  <TrendingUp size={48} style={{ color: 'var(--green)' }} />
                </div>
                <div style={styles.gameInfo}>
                  <h3 style={styles.gameName}>{game.name}</h3>
                  <p style={styles.gameProvider}>{game.provider}</p>
                  <p style={styles.gameDescription}>{game.description}</p>
                  <div style={styles.gameStats}>
                    <div style={styles.gameStat}>
                      <TrendingUp size={14} />
                      <span>{game.maxMultiplier}</span>
                    </div>
                    <div style={styles.gameStat}>
                      <Users size={14} />
                      <span>{game.players}</span>
                    </div>
                  </div>
                </div>
                <a href="#" style={styles.playBtn}>Jugar ahora</a>
              </div>
            ))}
          </div>

          <div style={styles.tipsSection}>
            <h2 style={styles.sectionTitle}>Consejos para jugar</h2>
            <div style={styles.tipsGrid}>
              <div style={styles.tipCard}>
                <h3 style={styles.tipTitle}>Establece un limite</h3>
                <p style={styles.tipDesc}>Define cuanto estas dispuesto a apostar antes de empezar a jugar.</p>
              </div>
              <div style={styles.tipCard}>
                <h3 style={styles.tipTitle}>Usa auto-cashout</h3>
                <p style={styles.tipDesc}>Configura un multiplicador objetivo para retirar automaticamente.</p>
              </div>
              <div style={styles.tipCard}>
                <h3 style={styles.tipTitle}>No persigas perdidas</h3>
                <p style={styles.tipDesc}>Si perdiste, no aumentes tus apuestas para intentar recuperar.</p>
              </div>
              <div style={styles.tipCard}>
                <h3 style={styles.tipTitle}>Juega responsable</h3>
                <p style={styles.tipDesc}>Recuerda que los crash games son de azar. Juega por diversion.</p>
              </div>
            </div>
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
    background: 'var(--green-dim)',
    color: 'var(--green)',
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
  sectionTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 700,
    textAlign: 'center' as const,
    marginBottom: '32px',
  },
  howItWorks: {
    marginBottom: '64px',
  },
  howItWorksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  } as React.CSSProperties,
  howItWorksCard: {
    textAlign: 'center' as const,
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    position: 'relative' as const,
  },
  stepNumber: {
    position: 'absolute' as const,
    top: '16px',
    left: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'var(--green)',
    color: '#000',
    fontSize: '13px',
    fontWeight: 700,
  },
  stepTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '8px',
  },
  stepDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
  },
  gamesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '24px',
    marginBottom: '64px',
  },
  gameCard: {
    position: 'relative' as const,
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    overflow: 'hidden',
  },
  gameCardFeatured: {
    border: '1px solid rgba(45, 217, 143, 0.3)',
    background: 'linear-gradient(180deg, var(--green-dim) 0%, var(--surface-2) 50%)',
  },
  featuredBadge: {
    position: 'absolute' as const,
    top: '16px',
    left: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 12px',
    borderRadius: '999px',
    background: 'var(--green)',
    color: '#000',
    fontSize: '12px',
    fontWeight: 700,
    zIndex: 1,
  },
  gameImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '160px',
    background: 'var(--green-dim)',
  },
  gameInfo: {
    padding: '24px',
  },
  gameName: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  gameProvider: {
    fontSize: '13px',
    color: 'var(--gray-2)',
    marginBottom: '12px',
  },
  gameDescription: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.5,
    marginBottom: '16px',
  },
  gameStats: {
    display: 'flex',
    gap: '16px',
  },
  gameStat: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: 'var(--green)',
    fontFamily: 'var(--font-dm-mono)',
  },
  playBtn: {
    display: 'block',
    margin: '0 24px 24px',
    padding: '14px',
    borderRadius: '999px',
    background: 'var(--green)',
    color: '#000',
    fontSize: '14px',
    fontWeight: 700,
    textAlign: 'center' as const,
    textDecoration: 'none',
  },
  tipsSection: {},
  tipsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },
  tipCard: {
    padding: '24px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  tipTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '8px',
  },
  tipDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.5,
  },
}
