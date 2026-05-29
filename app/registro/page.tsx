import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { CheckCircle, Shield, Zap, Trophy, Users } from 'lucide-react'

export const metadata = {
  title: 'Registrarse - Bet30',
  description: 'Únete a Bet30 y comienza a jugar ahora',
}

const benefits = [
  {
    icon: Trophy,
    title: 'Bono de bienvenida',
    desc: '$1750 + 150 giros gratis en tu primer depósito'
  },
  {
    icon: Zap,
    title: 'Juegos sin límites',
    desc: 'Acceso a 500+ slots, crash games y apuestas deportivas'
  },
  {
    icon: Shield,
    title: 'Seguro y confiable',
    desc: 'Licencia oficial verificada con los más altos estándares de seguridad'
  },
  {
    icon: Users,
    title: 'Comunidad activa',
    desc: 'Miles de jugadores confían en Bet30 cada día'
  },
  {
    icon: CheckCircle,
    title: 'Retiros rápidos',
    desc: 'Procesa tus ganancias en minutos sin complicaciones'
  },
  {
    icon: Zap,
    title: 'Soporte 24/7',
    desc: 'Equipo de atención en español disponible siempre para ti'
  },
]

export default function RegistroPage() {
  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Únete a Bet30 hoy</h1>
            <p style={styles.subtitle}>
              Miles de jugadores ya disfrutan de los mejores juegos de casino. ¡Tú también puedes!
            </p>
          </div>

          <div style={styles.content}>
            <div style={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} style={styles.benefitCard}>
                  <div style={styles.benefitIcon}>
                    <benefit.icon size={32} />
                  </div>
                  <div>
                    <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                    <p style={styles.benefitDesc}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.ctaSection}>
              <div style={styles.ctaCard}>
                <div style={styles.bonusHighlight}>
                  <div style={styles.bonusAmount}>$1750</div>
                  <div style={styles.bonusPlus}>+ 150 giros gratis</div>
                  <p style={styles.bonusDesc}>Bono de bienvenida para nuevos jugadores</p>
                </div>

                <div style={styles.ctaText}>
                  <p style={styles.mainText}>
                    Es el momento de vivir una experiencia de casino única. Regístrate en menos de 2 minutos y reclama tu bono de bienvenida.
                  </p>
                  <p style={styles.subText}>
                    Nuestro equipo de expertos está disponible 24/7 para ayudarte en cada paso de tu experiencia.
                  </p>
                </div>

                <a href="https://example.com" style={styles.ctaButton}>
                  Registrarse ahora en Bet30
                </a>

                <p style={styles.disclaimer}>
                  Al registrarte, aceptas nuestros términos de servicio y política de privacidad. Juega responsablemente.
                </p>
              </div>
            </div>
          </div>

          <div style={styles.infoSection}>
            <h2 style={styles.infoTitle}>Por qué elegir Bet30</h2>
            <div style={styles.infos}>
              <div style={styles.infoItem}>
                <div style={styles.infoNumber}>✓</div>
                <div>
                  <h3 style={styles.infoItemTitle}>Variedad sin igual</h3>
                  <p style={styles.infoItemText}>Más de 500 juegos de los mejores proveedores mundiales como Pragmatic Play, NetEnt y Evolution Gaming</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoNumber}>✓</div>
                <div>
                  <h3 style={styles.infoItemTitle}>Seguridad garantizada</h3>
                  <p style={styles.infoItemText}>Protección con encriptación SSL 256-bit, verificación KYC y autenticación de dos factores</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoNumber}>✓</div>
                <div>
                  <h3 style={styles.infoItemTitle}>Promociones constantemente</h3>
                  <p style={styles.infoItemText}>Acceso a bonos semanales, free spins y promociones exclusivas para miembros VIP</p>
                </div>
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
    minHeight: '80vh',
  },
  container: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '64px',
  },
  title: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(2.2rem, 5vw, 3rem)',
    fontWeight: 800,
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--gray-1)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '48px',
    alignItems: 'start',
    marginBottom: '64px',
  } as React.CSSProperties,
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  benefitCard: {
    display: 'flex',
    gap: '16px',
    padding: '24px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  benefitIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    borderRadius: 'var(--r-md)',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    flexShrink: 0,
  },
  benefitTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  benefitDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.5,
  },
  ctaSection: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  ctaCard: {
    padding: '40px',
    borderRadius: 'var(--r-lg)',
    border: '2px solid var(--gold)',
    background: 'linear-gradient(180deg, var(--gold-dim) 0%, var(--surface-2) 100%)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },
  bonusHighlight: {
    textAlign: 'center' as const,
    paddingBottom: '16px',
    borderBottom: '1px solid var(--gold-line)',
  },
  bonusAmount: {
    fontFamily: 'var(--font-syne)',
    fontSize: '3rem',
    fontWeight: 800,
    color: 'var(--gold)',
    lineHeight: 1,
  },
  bonusPlus: {
    fontSize: '1.2rem',
    color: 'var(--gold)',
    fontWeight: 600,
    marginTop: '8px',
  },
  bonusDesc: {
    fontSize: '13px',
    color: 'var(--gray-2)',
    marginTop: '12px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  ctaText: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  mainText: {
    fontSize: '1rem',
    color: 'var(--white)',
    lineHeight: 1.7,
    fontWeight: 500,
  },
  subText: {
    fontSize: '0.95rem',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
  ctaButton: {
    padding: '18px 32px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '16px',
    fontWeight: 700,
    textDecoration: 'none',
    textAlign: 'center' as const,
    transition: 'transform 0.15s, box-shadow 0.2s',
    cursor: 'pointer',
    display: 'block',
  },
  disclaimer: {
    fontSize: '12px',
    color: 'var(--gray-2)',
    textAlign: 'center' as const,
    lineHeight: 1.5,
  },
  infoSection: {
    borderTop: '1px solid var(--gray-3)',
    paddingTop: '64px',
  },
  infoTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '2rem',
    fontWeight: 800,
    textAlign: 'center' as const,
    marginBottom: '48px',
    letterSpacing: '-0.02em',
  },
  infos: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px',
  },
  infoItem: {
    display: 'flex',
    gap: '20px',
  },
  infoNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    fontSize: '1.4rem',
    fontWeight: 700,
    flexShrink: 0,
  },
  infoItemTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '8px',
  },
  infoItemText: {
    fontSize: '1rem',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
}
