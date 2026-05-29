import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { Shield, Lock, UserCheck, Smartphone, Eye, Key, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Seguridad - Bet30',
  description: 'Conoce las medidas de seguridad de Bet30 para proteger tu cuenta',
}

const securityMeasures = [
  {
    icon: Lock,
    title: 'Cifrado SSL 256-bit',
    description: 'Todas las comunicaciones entre tu dispositivo y nuestros servidores estan protegidas con el mas alto nivel de cifrado disponible.',
  },
  {
    icon: Smartphone,
    title: 'Autenticacion de dos factores (2FA)',
    description: 'Anade una capa extra de seguridad a tu cuenta activando la verificacion en dos pasos.',
  },
  {
    icon: UserCheck,
    title: 'Verificacion KYC',
    description: 'El proceso de verificacion de identidad asegura que solo tu puedas acceder a tus fondos.',
  },
  {
    icon: Eye,
    title: 'Monitoreo 24/7',
    description: 'Nuestros sistemas detectan y previenen actividades sospechosas en tiempo real.',
  },
  {
    icon: Key,
    title: 'Contrasenas seguras',
    description: 'Requerimos contrasenas fuertes y las almacenamos con hash de ultima generacion.',
  },
  {
    icon: Shield,
    title: 'Proteccion de datos',
    description: 'Cumplimos con las regulaciones de proteccion de datos para mantener tu informacion segura.',
  },
]

const tips = [
  'Nunca compartas tu contrasena con nadie',
  'Activa la autenticacion de dos factores',
  'Usa una contrasena unica para tu cuenta',
  'Cierra sesion cuando uses dispositivos compartidos',
  'Verifica que la URL sea correcta antes de iniciar sesion',
  'Manten tu dispositivo actualizado',
]

export default function SeguridadPage() {
  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.iconBadge}>
              <Shield size={32} />
            </div>
            <h1 style={styles.title}>Seguridad de tu cuenta</h1>
            <p style={styles.subtitle}>
              En Bet30 nos tomamos muy en serio la seguridad de nuestros jugadores. Conoce las medidas que implementamos para proteger tu cuenta y tu dinero.
            </p>
          </div>

          <div style={styles.grid}>
            {securityMeasures.map((measure, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.cardIcon}>
                  <measure.icon size={24} />
                </div>
                <h3 style={styles.cardTitle}>{measure.title}</h3>
                <p style={styles.cardDesc}>{measure.description}</p>
              </div>
            ))}
          </div>

          <div style={styles.tipsSection}>
            <div style={styles.tipsContent}>
              <h2 style={styles.tipsTitle}>Consejos de seguridad</h2>
              <ul style={styles.tipsList}>
                {tips.map((tip, index) => (
                  <li key={index} style={styles.tipItem}>
                    <div style={styles.tipNumber}>{index + 1}</div>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.alertCard}>
              <div style={styles.alertIcon}>
                <AlertTriangle size={24} />
              </div>
              <h3 style={styles.alertTitle}>Reportar actividad sospechosa</h3>
              <p style={styles.alertDesc}>
                Si detectas alguna actividad inusual en tu cuenta, contactanos inmediatamente. Nuestro equipo de soporte esta disponible 24/7.
              </p>
              <a href="#" style={styles.alertBtn}>Contactar soporte</a>
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
    maxWidth: '700px',
    margin: '0 auto 64px',
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
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '24px',
    marginBottom: '64px',
  },
  card: {
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  cardIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    borderRadius: 'var(--r-md)',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    marginBottom: '20px',
  },
  cardTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.15rem',
    fontWeight: 700,
    marginBottom: '12px',
  },
  cardDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
  tipsSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '32px',
    alignItems: 'start',
  } as React.CSSProperties,
  tipsContent: {
    padding: '40px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  tipsTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.4rem',
    fontWeight: 700,
    marginBottom: '24px',
  },
  tipsList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  tipItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontSize: '14px',
    color: 'var(--gray-1)',
  },
  tipNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    fontSize: '13px',
    fontWeight: 700,
    flexShrink: 0,
  },
  alertCard: {
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid rgba(240, 82, 82, 0.3)',
    background: 'rgba(240, 82, 82, 0.05)',
  },
  alertIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    borderRadius: 'var(--r-md)',
    background: 'rgba(240, 82, 82, 0.1)',
    color: 'var(--red)',
    marginBottom: '20px',
  },
  alertTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.15rem',
    fontWeight: 700,
    marginBottom: '12px',
  },
  alertDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
    marginBottom: '20px',
  },
  alertBtn: {
    display: 'inline-flex',
    padding: '12px 24px',
    borderRadius: '999px',
    background: 'var(--red)',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
  },
}
