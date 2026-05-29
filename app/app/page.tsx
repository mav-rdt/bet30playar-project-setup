import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { Download, Smartphone, CheckCircle, Star, Shield, Zap } from 'lucide-react'

export const metadata = {
  title: 'Descargar App - Bet30',
  description: 'Descarga la aplicacion de Bet30 para Android',
}

const features = [
  { icon: Zap, title: 'Acceso rapido', desc: 'Inicia sesion con un solo toque' },
  { icon: Star, title: 'Todos los juegos', desc: 'Catalogo completo en tu movil' },
  { icon: Shield, title: 'Seguridad total', desc: 'La misma seguridad que en web' },
]

const appBenefits = [
  'Notificaciones de bonos exclusivos',
  'Depositos y retiros desde el movil',
  'Interfaz optimizada para pantallas tactiles',
  'Modo oscuro automatico',
  'Actualizaciones automaticas',
  'Soporte tecnico integrado',
]

export default function AppPage() {
  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.hero}>
            <div style={styles.heroContent}>
              <div style={styles.badge}>
                <Smartphone size={16} />
                Aplicacion movil
              </div>
              <h1 style={styles.title}>Lleva Bet30 siempre contigo</h1>
              <p style={styles.subtitle}>
                Descarga nuestra app y disfruta de la mejor experiencia de casino desde tu dispositivo Android.
              </p>

              <div style={styles.downloadButtons}>
                <a href="#" style={styles.downloadBtn}>
                  <Download size={20} />
                  <div>
                    <span style={styles.downloadSmall}>Descargar para</span>
                    <span style={styles.downloadBig}>Android</span>
                  </div>
                </a>
              </div>

              <div style={styles.featureCards}>
                {features.map((feature, index) => (
                  <div key={index} style={styles.featureCard}>
                    <feature.icon size={20} style={{ color: 'var(--gold)' }} />
                    <div>
                      <div style={styles.featureTitle}>{feature.title}</div>
                      <div style={styles.featureDesc}>{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.phoneContainer}>
              <div style={styles.phoneMockup}>
                <div style={styles.phoneScreen}>
                  <div style={styles.phoneHeader}>
                    <Smartphone size={20} style={{ color: 'var(--gold)' }} />
                    <span style={styles.phoneBrand}>Bet30</span>
                  </div>
                  <div style={styles.phoneContent}>
                    <div style={styles.phoneCard} />
                    <div style={styles.phoneCard} />
                    <div style={styles.phoneCard} />
                    <div style={styles.phoneButton}>Jugar ahora</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.benefitsSection}>
            <h2 style={styles.sectionTitle}>Beneficios de la app</h2>
            <div style={styles.benefitsGrid}>
              {appBenefits.map((benefit, index) => (
                <div key={index} style={styles.benefitItem}>
                  <CheckCircle size={20} style={{ color: 'var(--green)', flexShrink: 0 }} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.installSection}>
            <h2 style={styles.sectionTitle}>Como instalar</h2>
            <div style={styles.stepsGrid}>
              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>1</div>
                <h3 style={styles.stepTitle}>Descarga el archivo</h3>
                <p style={styles.stepDesc}>Haz clic en el boton de descarga correspondiente a tu sistema operativo</p>
              </div>
              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>2</div>
                <h3 style={styles.stepTitle}>Permite la instalacion</h3>
                <p style={styles.stepDesc}>En Android, activa la opcion de fuentes desconocidas en configuracion</p>
              </div>
              <div style={styles.stepCard}>
                <div style={styles.stepNumber}>3</div>
                <h3 style={styles.stepTitle}>Instala y juega</h3>
                <p style={styles.stepDesc}>Abre el archivo descargado, instala la app e inicia sesion</p>
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
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'center',
    marginBottom: '80px',
  } as React.CSSProperties,
  heroContent: {},
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 14px',
    borderRadius: '999px',
    background: 'var(--gold-dim)',
    border: '1px solid var(--gold-line)',
    color: 'var(--gold)',
    fontSize: '13px',
    fontWeight: 600,
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
    marginBottom: '32px',
  },
  downloadButtons: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 24px',
    borderRadius: 'var(--r-md)',
    background: 'var(--gold)',
    color: '#000',
    textDecoration: 'none',
  },
  downloadBtnOutline: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 24px',
    borderRadius: 'var(--r-md)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    color: 'var(--white)',
    textDecoration: 'none',
  },
  downloadSmall: {
    display: 'block',
    fontSize: '11px',
    opacity: 0.7,
  },
  downloadBig: {
    display: 'block',
    fontSize: '16px',
    fontWeight: 700,
  },
  featureCards: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  featureCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-2)',
    border: '1px solid var(--gray-3)',
  },
  featureTitle: {
    fontSize: '14px',
    fontWeight: 600,
  },
  featureDesc: {
    fontSize: '13px',
    color: 'var(--gray-2)',
  },
  phoneContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  phoneMockup: {
    width: '300px',
    height: '600px',
    borderRadius: '44px',
    border: '10px solid var(--surface-3)',
    background: 'var(--surface-2)',
    padding: '16px',
    boxShadow: '0 60px 120px -30px rgba(0,0,0,0.6)',
  },
  phoneScreen: {
    width: '100%',
    height: '100%',
    borderRadius: '32px',
    background: 'var(--black)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  phoneHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '32px',
  },
  phoneBrand: {
    fontFamily: 'var(--font-syne)',
    fontWeight: 800,
    fontSize: '20px',
  },
  phoneContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  phoneCard: {
    height: '100px',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-2)',
    border: '1px solid var(--gray-3)',
  },
  phoneButton: {
    marginTop: 'auto',
    padding: '16px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '14px',
    fontWeight: 700,
    textAlign: 'center' as const,
  },
  benefitsSection: {
    padding: '48px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    marginBottom: '48px',
  },
  sectionTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '32px',
    textAlign: 'center' as const,
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
    color: 'var(--gray-1)',
    padding: '12px 16px',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-3)',
  },
  installSection: {
    textAlign: 'center' as const,
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  } as React.CSSProperties,
  stepCard: {
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    textAlign: 'center' as const,
  },
  stepNumber: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'var(--gold)',
    color: '#000',
    fontFamily: 'var(--font-syne)',
    fontSize: '1.2rem',
    fontWeight: 800,
    marginBottom: '16px',
  },
  stepTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '8px',
  },
  stepDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.5,
  },
}
