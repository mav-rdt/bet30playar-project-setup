import type { Metadata } from 'next'
import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'
import {
  Smartphone, CreditCard, Building, Clock, CheckCircle, ShieldCheck,
} from 'lucide-react'

// Icons per payment method name from _home.json
const methodIcons: Record<string, React.ElementType> = {
  'MercadoPago': Smartphone,
  'Ualá':        CreditCard,
  'Pago Fácil':  Building,
  'Rapipago':    Building,
}

export async function generateMetadata(): Promise<Metadata> {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const url = `https://${brand.affiliate_domain}`

  return {
    title: `Depósitos y Retiros en ${brand.brand_name} - Métodos de Pago`,
    description: content.payments.intro,
    alternates: { canonical: `${url}/finanzas` },
  }
}

export default function FinanzasPage() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const methods = content.payments.methods

  const steps = [
    { title: 'Iniciá sesión', desc: `Accedé a tu cuenta de ${brand.brand_name}` },
    { title: 'Andá al cajero', desc: 'Seleccioná depósito o retiro' },
    { title: 'Elegí el método', desc: 'Seleccioná tu método de pago preferido' },
    { title: 'Ingresá el monto', desc: 'Indicá cuánto querés depositar o retirar' },
    { title: 'Confirmá', desc: 'Verificá los datos y confirmá la operación' },
  ]

  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Depósitos y retiros en {brand.brand_name}</h1>
            <p style={styles.subtitle}>{content.payments.intro}</p>
          </div>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Métodos de pago disponibles</h2>
            <div style={styles.methodsGrid}>
              {methods.map((method, index) => {
                const Icon = methodIcons[method.name] ?? CreditCard
                return (
                  <div key={index} style={styles.methodCard}>
                    <div style={styles.methodIcon}>
                      <Icon size={28} />
                    </div>
                    <h3 style={styles.methodName}>{method.name}</h3>
                    <div style={styles.methodDetails}>
                      <div style={styles.methodDetail}>
                        <span style={styles.detailLabel}>Depósito mínimo</span>
                        <span style={styles.detailValue}>
                          ${method.min_ars.toLocaleString('es-AR')} ARS
                        </span>
                      </div>
                      <div style={styles.methodDetail}>
                        <span style={styles.detailLabel}>Velocidad</span>
                        <span style={styles.detailValue}>{method.speed}</span>
                      </div>
                      <div style={styles.methodDetail}>
                        <span style={styles.detailLabel}>Comisión</span>
                        <span style={styles.detailValue}>{method.fee_label}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <p style={styles.methodsNote}>
              Los montos mínimos, tiempos y comisiones pueden variar según las condiciones
              vigentes del operador. Verificá los valores actuales en el cajero de{' '}
              {brand.brand_name} antes de operar.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Cómo depositar o retirar paso a paso</h2>
            <div style={styles.stepsGrid}>
              {steps.map((step, index) => (
                <div key={index} style={styles.stepCard}>
                  <div style={styles.stepNumber}>{index + 1}</div>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={styles.trustSection}>
            <div style={styles.trustItem}>
              <ShieldCheck size={24} style={{ color: 'var(--gold)' }} />
              <div>
                <h3 style={styles.trustTitle}>Transacciones protegidas</h3>
                <p style={styles.trustDesc}>
                  Todas las operaciones se procesan con encriptación SSL.
                </p>
              </div>
            </div>
            <div style={styles.trustItem}>
              <Clock size={24} style={{ color: 'var(--gold)' }} />
              <div>
                <h3 style={styles.trustTitle}>Pagos en pesos argentinos</h3>
                <p style={styles.trustDesc}>
                  Depositá y retirá en ARS con métodos locales, sin conversión de moneda.
                </p>
              </div>
            </div>
            <div style={styles.trustItem}>
              <CheckCircle size={24} style={{ color: 'var(--gold)' }} />
              <div>
                <h3 style={styles.trustTitle}>Soporte 24/7</h3>
                <p style={styles.trustDesc}>
                  Atención en español para resolver cualquier duda sobre tus pagos.
                </p>
              </div>
            </div>
          </section>

          <div style={styles.ctaWrap}>
            <a
              href={brand.affiliate_url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              style={styles.ctaButton}
            >
              Ir al cajero de {brand.brand_name}
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
    maxWidth: '680px',
    margin: '0 auto',
    lineHeight: 1.6,
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
  methodsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },
  methodCard: {
    padding: '28px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  methodIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '52px',
    height: '52px',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-3)',
    color: 'var(--gold)',
    marginBottom: '16px',
  },
  methodName: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '16px',
  },
  methodDetails: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  methodDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    paddingBottom: '10px',
    borderBottom: '1px solid var(--gray-3)',
  },
  detailLabel: {
    color: 'var(--gray-2)',
  },
  detailValue: {
    fontWeight: 600,
    color: 'var(--gray-1)',
    textAlign: 'right' as const,
  },
  methodsNote: {
    fontSize: '13px',
    color: 'var(--gray-2)',
    textAlign: 'center' as const,
    marginTop: '24px',
    maxWidth: '680px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
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
  trustSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    marginBottom: '48px',
  },
  trustItem: {
    display: 'flex',
    gap: '14px',
    alignItems: 'flex-start',
  },
  trustTitle: {
    fontSize: '15px',
    fontWeight: 700,
    marginBottom: '6px',
  },
  trustDesc: {
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
