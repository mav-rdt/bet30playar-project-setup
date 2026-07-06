import type { Metadata } from 'next'
import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'
import { Download, Smartphone, CheckCircle, Star, Shield, Zap } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const url = `https://${brand.affiliate_domain}`

  return {
    title: `Descargar App de ${brand.brand_name} para Android`,
    description: content.app.body,
    alternates: { canonical: `${url}/app` },
  }
}

export default function AppPage() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const app = content.app

  const highlights = [
    { icon: Zap, title: 'Acceso rápido', desc: 'Iniciá sesión con un solo toque' },
    { icon: Star, title: 'Todos los juegos', desc: 'Catálogo completo en tu móvil' },
    { icon: Shield, title: 'Seguridad total', desc: 'La misma protección que en la web' },
  ]

  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.hero}>
            <div style={styles.heroContent}>
              <div style={styles.badge}>
                <Smartphone size={16} />
                Aplicación móvil
              </div>
              <h1 style={styles.title}>{app.headline}</h1>
              <p style={styles.subtitle}>{app.body}</p>

              <a
                href={brand.affiliate_url}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                style={styles.downloadBtn}
              >
                <Download size={20} />
                Descargar desde {brand.brand_name}
              </a>

              <p style={styles.downloadNote}>
                La descarga se realiza desde el sitio oficial del operador. Juego
                responsable. +18.
              </p>
            </div>

            <div style={styles.highlightsCol}>
              {highlights.map((item, index) => (
                <div key={index} style={styles.highlightCard}>
                  <div style={styles.highlightIcon}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 style={styles.highlightTitle}>{item.title}</h3>
                    <p style={styles.highlightDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Qué incluye la app de {brand.brand_name}
            </h2>
            <div style={styles.benefitsGrid}>
              {app.features.map((feature, index) => (
                <div key={index} style={styles.benefitItem}>
                  <CheckCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span style={styles.benefitText}>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section style={styles.stepsSection}>
            <h2 style={styles.sectionTitle}>Cómo instalar la app en Android</h2>
            <div style={styles.stepsGrid}>
              {[
                { title: 'Andá al sitio oficial', desc: `Ingresá a ${brand.brand_name} desde tu móvil` },
                { title: 'Descargá el APK', desc: 'Buscá la sección de descarga de la app' },
                { title: 'Permití la instalación', desc: 'Habilitá "orígenes desconocidos" si Android lo pide' },
                { title: 'Iniciá sesión y jugá', desc: 'Usá tus credenciales o creá una cuenta nueva' },
              ].map((step, index) => (
                <div key={index} style={styles.stepCard}>
                  <div style={styles.stepNumber}>{index + 1}</div>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div style={styles.ctaWrap}>
            <a
              href={brand.affiliate_url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              style={styles.ctaButton}
            >
              Ir a {brand.brand_name}
            </a>
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
  hero: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr',
    gap: '48px',
    alignItems: 'center',
    marginBottom: '80px',
  },
  heroContent: {},
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '999px',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    fontSize: '13px',
    fontWeight: 600,
    marginBottom: '24px',
  },
  title: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
    fontWeight: 800,
    marginBottom: '20px',
    lineHeight: 1.15,
  },
  subtitle: {
    fontSize: '1.05rem',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
    marginBottom: '32px',
    maxWidth: '540px',
  },
  downloadBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 32px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
    marginBottom: '16px',
  },
  downloadNote: {
    fontSize: '12px',
    color: 'var(--gray-2)',
    lineHeight: 1.5,
  },
  highlightsCol: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  highlightCard: {
    display: 'flex',
    gap: '16px',
    padding: '20px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    alignItems: 'flex-start',
  },
  highlightIcon: {
    flexShrink: 0,
    color: 'var(--gold)',
  },
  highlightTitle: {
    fontSize: '15px',
    fontWeight: 700,
    marginBottom: '6px',
  },
  highlightDesc: {
    fontSize: '13px',
    color: 'var(--gray-1)',
    lineHeight: 1.5,
  },
  section: {
    marginBottom: '72px',
  },
  sectionTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.6rem',
    fontWeight: 800,
    marginBottom: '32px',
    textAlign: 'center' as const,
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
    maxWidth: '820px',
    margin: '0 auto',
  },
  benefitItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px 20px',
    borderRadius: 'var(--r-md)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  benefitText: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.4,
  },
  stepsSection: {
    marginBottom: '72px',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  stepCard: {
    padding: '24px',
    borderRadius: 'var(--r-md)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    textAlign: 'center' as const,
  },
  stepNumber: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'var(--gold)',
    color: '#000',
    fontWeight: 700,
    fontSize: '15px',
    marginBottom: '14px',
  },
  stepTitle: {
    fontSize: '15px',
    fontWeight: 700,
    marginBottom: '8px',
  },
  stepDesc: {
    fontSize: '13px',
    color: 'var(--gray-1)',
    lineHeight: 1.5,
  },
  ctaWrap: {
    textAlign: 'center' as const,
  },
  ctaButton: {
    display: 'inline-block',
    padding: '16px 40px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
  },
}
