import type { Metadata } from 'next'
import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { getCurrentBrand } from '@/lib/brand'
import { Shield, Zap, Lock, Smartphone } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const brand = getCurrentBrand()
  const url = `https://${brand.affiliate_domain}`

  return {
    title: `Iniciar sesión en ${brand.brand_name}`,
    description: `Accedé a tu cuenta de ${brand.brand_name} y continuá jugando desde cualquier dispositivo.`,
    alternates: { canonical: `${url}/login` },
  }
}

export default function LoginPage() {
  const brand = getCurrentBrand()

  const features = [
    {
      icon: Zap,
      title: 'Acceso instantáneo',
      desc: 'Entrá en segundos a tu cuenta y seguí jugando donde lo dejaste',
    },
    {
      icon: Shield,
      title: 'Cuenta protegida',
      desc: 'Tu sesión está protegida con conexión cifrada SSL',
    },
    {
      icon: Smartphone,
      title: 'Jugá en cualquier lugar',
      desc: 'Acceso desde tu navegador o desde la app móvil',
    },
    {
      icon: Lock,
      title: 'Privacidad garantizada',
      desc: 'Tus datos personales y financieros permanecen protegidos',
    },
  ]

  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Bienvenido a {brand.brand_name}</h1>
            <p style={styles.subtitle}>
              Accedé a tu cuenta para continuar disfrutando de los mejores juegos de casino
            </p>
          </div>

          <div style={styles.content}>
            <div style={styles.ctaSection}>
              <div style={styles.ctaCard}>
                <h2 style={styles.cardTitle}>¿Ya sos miembro?</h2>
                <p style={styles.cardSubtitle}>
                  Si ya tenés una cuenta en {brand.brand_name}, accedé directamente al
                  sitio oficial para iniciar sesión con tus credenciales.
                </p>
                <a
                  href={brand.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  style={styles.ctaButton}
                >
                  Iniciar sesión en {brand.brand_name}
                </a>

                <div style={styles.divider}>
                  <span style={styles.dividerText}>¿Todavía no tenés cuenta?</span>
                </div>

                <a href="/registro" style={styles.ctaButtonSecondary}>
                  Crear cuenta nueva
                </a>

                <p style={styles.disclaimer}>
                  Juego responsable. +18. Si tenés problemas para acceder a tu cuenta,
                  contactá al soporte del operador.
                </p>
              </div>
            </div>

            <div style={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} style={styles.featureCard}>
                  <div style={styles.featureIcon}>
                    <feature.icon size={28} />
                  </div>
                  <div>
                    <h3 style={styles.featureTitle}>{feature.title}</h3>
                    <p style={styles.featureDesc}>{feature.desc}</p>
                  </div>
                </div>
              ))}
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
  },
  subtitle: {
    fontSize: '1.05rem',
    color: 'var(--gray-1)',
    maxWidth: '620px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '48px',
    alignItems: 'start',
  },
  ctaSection: {
    position: 'sticky' as const,
    top: '88px',
  },
  ctaCard: {
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gold-line)',
    background: 'var(--surface-2)',
    textAlign: 'center' as const,
  },
  cardTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.4rem',
    fontWeight: 800,
    marginBottom: '12px',
  },
  cardSubtitle: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
    marginBottom: '24px',
  },
  ctaButton: {
    display: 'block',
    padding: '16px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
    marginBottom: '24px',
  },
  divider: {
    position: 'relative' as const,
    marginBottom: '24px',
    borderTop: '1px solid var(--gray-3)',
  },
  dividerText: {
    position: 'relative' as const,
    top: '-11px',
    padding: '0 12px',
    background: 'var(--surface-2)',
    fontSize: '13px',
    color: 'var(--gray-2)',
  },
  ctaButtonSecondary: {
    display: 'block',
    padding: '14px',
    borderRadius: '999px',
    border: '1px solid var(--gold)',
    color: 'var(--gold)',
    fontSize: '14px',
    fontWeight: 700,
    textDecoration: 'none',
    marginBottom: '20px',
  },
  disclaimer: {
    fontSize: '12px',
    color: 'var(--gray-2)',
    lineHeight: 1.5,
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  featureCard: {
    display: 'flex',
    gap: '16px',
    padding: '24px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  featureIcon: {
    flexShrink: 0,
    color: 'var(--gold)',
  },
  featureTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '8px',
  },
  featureDesc: {
    fontSize: '13px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
}
