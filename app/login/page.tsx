import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { Shield, Zap, Lock, Smartphone } from 'lucide-react'

export const metadata = {
  title: 'Iniciar sesión - Bet30',
  description: 'Accede a tu cuenta de Bet30 y comienza a jugar',
}

const features = [
  {
    icon: Zap,
    title: 'Acceso instantáneo',
    desc: 'Entra en segundos a tu cuenta y comienza a jugar',
  },
  {
    icon: Shield,
    title: 'Protección máxima',
    desc: 'Tu cuenta está protegida con encriptación 256-bit y 2FA',
  },
  {
    icon: Smartphone,
    title: 'Juega en cualquier lugar',
    desc: 'Acceso desde tu navegador o descargando nuestra app Android',
  },
  {
    icon: Lock,
    title: 'Privacidad garantizada',
    desc: 'Tus datos personales y financieros están completamente seguros',
  },
]

export default function LoginPage() {
  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Bienvenido a Bet30</h1>
            <p style={styles.subtitle}>
              Accede a tu cuenta para continuar disfrutando de los mejores juegos de casino
            </p>
          </div>

          <div style={styles.content}>
            <div style={styles.ctaSection}>
              <div style={styles.ctaCard}>
                <h2 style={styles.cardTitle}>Ya eres miembro?</h2>
                <p style={styles.cardSubtitle}>
                  Si ya tienes una cuenta en Bet30, accede directamente a nuestro sitio principal para iniciar sesión con tus credenciales.
                </p>

                <div style={styles.cardHighlight}>
                  <p style={styles.highlightText}>
                    ✓ Tu cuenta está completamente protegida<br/>
                    ✓ Acceso a todos tus bonos y ganancias<br/>
                    ✓ Historial de juegos y transacciones disponible<br/>
                    ✓ Métodos de pago seguros
                  </p>
                </div>

                <a href="https://example.com" style={styles.ctaButton}>
                  Iniciar sesión en Bet30
                </a>

                <p style={styles.disclaimer}>
                  Al ingresar utilizas nuestros términos de servicio y aceptas la política de privacidad
                </p>
              </div>
            </div>

            <div style={styles.featuresSection}>
              <h2 style={styles.featuresTitle}>Ventajas de tu cuenta</h2>
              <div style={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <div key={index} style={styles.featureCard}>
                    <div style={styles.featureIcon}>
                      <feature.icon size={28} />
                    </div>
                    <h3 style={styles.featureTitle}>{feature.title}</h3>
                    <p style={styles.featureDesc}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.infoSection}>
            <h2 style={styles.infoTitle}>Preguntas frecuentes</h2>
            <div style={styles.faqGrid}>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>¿Olvidé mi contraseña?</h3>
                <p style={styles.faqAnswer}>Puedes recuperar tu contraseña desde el sitio de Bet30 usando la opción "Olvidé mi contraseña" en el login</p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>¿Es seguro ingresar mis datos?</h3>
                <p style={styles.faqAnswer}>Sí, utilizamos encriptación SSL 256-bit y verificación KYC para garantizar la máxima seguridad</p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>¿Puedo cambiar mi usuario?</h3>
                <p style={styles.faqAnswer}>No, el usuario es permanente. Pero puedes actualizar otros datos de tu perfil en la sección de configuración</p>
              </div>
              <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>¿Hay límites de apuesta?</h3>
                <p style={styles.faqAnswer}>Puedes establecer límites de apuesta en tu cuenta. También te recomendamos jugar responsablemente</p>
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
    gridTemplateColumns: '1fr 1.2fr',
    gap: '48px',
    alignItems: 'start',
    marginBottom: '64px',
  } as React.CSSProperties,
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
  cardTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.8rem',
    fontWeight: 800,
    color: 'var(--white)',
  },
  cardSubtitle: {
    fontSize: '1rem',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
  cardHighlight: {
    padding: '20px',
    borderRadius: 'var(--r-md)',
    background: 'rgba(0,0,0,0.2)',
    borderLeft: '4px solid var(--gold)',
  },
  highlightText: {
    fontSize: '14px',
    color: 'var(--white)',
    lineHeight: 1.8,
    margin: 0,
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
  featuresSection: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '28px',
  },
  featuresTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.6rem',
    fontWeight: 700,
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
  },
  featureCard: {
    padding: '20px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  featureIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '52px',
    height: '52px',
    borderRadius: 'var(--r-md)',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
  },
  featureTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.05rem',
    fontWeight: 700,
    margin: 0,
  },
  featureDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.5,
    margin: 0,
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
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
  } as React.CSSProperties,
  faqItem: {
    padding: '24px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  faqQuestion: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '12px',
  },
  faqAnswer: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
    margin: 0,
  },
}
