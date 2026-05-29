import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { ArrowDownCircle, ArrowUpCircle, Shield, Clock, CheckCircle, CreditCard, Building, Smartphone, Bitcoin } from 'lucide-react'

export const metadata = {
  title: 'Depositos y Retiros - Bet30',
  description: 'Metodos de pago disponibles para depositos y retiros en Bet30',
}

const depositMethods = [
  { icon: Smartphone, name: 'MercadoPago', time: 'Instantaneo', min: '$500', max: '$100.000', fee: 'Gratis' },
  { icon: CreditCard, name: 'Uala', time: 'Instantaneo', min: '$500', max: '$50.000', fee: 'Gratis' },
  { icon: Building, name: 'Transferencia bancaria', time: '1-24 horas', min: '$1.000', max: 'Sin limite', fee: 'Gratis' },
  { icon: CreditCard, name: 'Pago Facil', time: 'Instantaneo', min: '$500', max: '$30.000', fee: 'Gratis' },
  { icon: CreditCard, name: 'Rapipago', time: 'Instantaneo', min: '$500', max: '$30.000', fee: 'Gratis' },
  { icon: Bitcoin, name: 'Crypto (USDT)', time: 'Instantaneo', min: '$1.000', max: 'Sin limite', fee: 'Gratis' },
]

const withdrawMethods = [
  { icon: Building, name: 'CVU/CBU', time: '1-24 horas', min: '$1.000', max: '$500.000', fee: 'Gratis' },
  { icon: Smartphone, name: 'MercadoPago', time: '1-24 horas', min: '$1.000', max: '$100.000', fee: 'Gratis' },
  { icon: Bitcoin, name: 'Crypto (USDT)', time: '1-2 horas', min: '$5.000', max: 'Sin limite', fee: 'Red' },
]

const steps = [
  { title: 'Inicia sesion', desc: 'Accede a tu cuenta de Bet30' },
  { title: 'Ve a Cajero', desc: 'Selecciona deposito o retiro' },
  { title: 'Elige el metodo', desc: 'Selecciona tu metodo preferido' },
  { title: 'Ingresa el monto', desc: 'Indica cuanto queres depositar/retirar' },
  { title: 'Confirma', desc: 'Verifica los datos y confirma' },
]

export default function FinanzasPage() {
  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Depositos y retiros</h1>
            <p style={styles.subtitle}>
              Multiples metodos de pago locales para depositar y retirar de forma segura. Sin comisiones ocultas.
            </p>
          </div>

          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <ArrowDownCircle size={24} style={{ color: 'var(--green)' }} />
              <div style={styles.statValue}>Instantaneo</div>
              <div style={styles.statLabel}>Depositos</div>
            </div>
            <div style={styles.statCard}>
              <ArrowUpCircle size={24} style={{ color: 'var(--gold)' }} />
              <div style={styles.statValue}>{'< 24h'}</div>
              <div style={styles.statLabel}>Retiros</div>
            </div>
            <div style={styles.statCard}>
              <Shield size={24} style={{ color: 'var(--accent-slot)' }} />
              <div style={styles.statValue}>SSL</div>
              <div style={styles.statLabel}>Seguridad</div>
            </div>
            <div style={styles.statCard}>
              <CreditCard size={24} style={{ color: 'var(--orange)' }} />
              <div style={styles.statValue}>Gratis</div>
              <div style={styles.statLabel}>Comisiones</div>
            </div>
          </div>

          <section style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionIcon}>
                <ArrowDownCircle size={24} />
              </div>
              <h2 style={styles.sectionTitle}>Metodos de deposito</h2>
            </div>
            <div style={styles.methodsTable}>
              <div style={styles.tableHeader}>
                <span>Metodo</span>
                <span>Tiempo</span>
                <span>Minimo</span>
                <span>Maximo</span>
                <span>Comision</span>
              </div>
              {depositMethods.map((method, index) => (
                <div key={index} style={styles.tableRow}>
                  <div style={styles.methodName}>
                    <method.icon size={20} style={{ color: 'var(--gold)' }} />
                    <span>{method.name}</span>
                  </div>
                  <span style={styles.methodTime}>{method.time}</span>
                  <span>{method.min}</span>
                  <span>{method.max}</span>
                  <span style={styles.methodFree}>{method.fee}</span>
                </div>
              ))}
            </div>
          </section>

          <section style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={{ ...styles.sectionIcon, background: 'var(--gold-dim)', color: 'var(--gold)' }}>
                <ArrowUpCircle size={24} />
              </div>
              <h2 style={styles.sectionTitle}>Metodos de retiro</h2>
            </div>
            <div style={styles.methodsTable}>
              <div style={styles.tableHeader}>
                <span>Metodo</span>
                <span>Tiempo</span>
                <span>Minimo</span>
                <span>Maximo</span>
                <span>Comision</span>
              </div>
              {withdrawMethods.map((method, index) => (
                <div key={index} style={styles.tableRow}>
                  <div style={styles.methodName}>
                    <method.icon size={20} style={{ color: 'var(--gold)' }} />
                    <span>{method.name}</span>
                  </div>
                  <span style={styles.methodTime}>{method.time}</span>
                  <span>{method.min}</span>
                  <span>{method.max}</span>
                  <span style={styles.methodFree}>{method.fee}</span>
                </div>
              ))}
            </div>
          </section>

          <section style={styles.howToSection}>
            <h2 style={styles.howToTitle}>Como depositar o retirar</h2>
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

          <section style={styles.faqSection}>
            <h2 style={styles.faqTitle}>Preguntas frecuentes</h2>
            <div style={styles.faqGrid}>
              <div style={styles.faqCard}>
                <h3 style={styles.faqQuestion}>Cuanto tarda un retiro?</h3>
                <p style={styles.faqAnswer}>Los retiros se procesan en menos de 24 horas habiles. Los retiros en crypto pueden ser mas rapidos.</p>
              </div>
              <div style={styles.faqCard}>
                <h3 style={styles.faqQuestion}>Hay comisiones?</h3>
                <p style={styles.faqAnswer}>No cobramos comisiones por depositos ni retiros. Solo los retiros en crypto tienen el costo de la red.</p>
              </div>
              <div style={styles.faqCard}>
                <h3 style={styles.faqQuestion}>Cual es el minimo para retirar?</h3>
                <p style={styles.faqAnswer}>El monto minimo de retiro es de $1.000 ARS para la mayoria de los metodos.</p>
              </div>
              <div style={styles.faqCard}>
                <h3 style={styles.faqQuestion}>Necesito verificar mi cuenta?</h3>
                <p style={styles.faqAnswer}>Si, para retirar necesitas completar la verificacion KYC. Es un proceso simple y rapido.</p>
              </div>
            </div>
          </section>
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
    maxWidth: '600px',
    margin: '0 auto',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '64px',
  } as React.CSSProperties,
  statCard: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '12px',
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    textAlign: 'center' as const,
  },
  statValue: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 800,
  },
  statLabel: {
    fontSize: '13px',
    color: 'var(--gray-2)',
  },
  section: {
    marginBottom: '48px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  },
  sectionIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: 'var(--r-md)',
    background: 'var(--green-dim)',
    color: 'var(--green)',
  },
  sectionTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.4rem',
    fontWeight: 700,
  },
  methodsTable: {
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    overflow: 'hidden',
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
    gap: '16px',
    padding: '16px 24px',
    background: 'var(--surface-3)',
    fontSize: '12px',
    fontWeight: 600,
    color: 'var(--gray-2)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  } as React.CSSProperties,
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
    gap: '16px',
    padding: '20px 24px',
    borderTop: '1px solid var(--gray-3)',
    alignItems: 'center',
    fontSize: '14px',
    color: 'var(--gray-1)',
  } as React.CSSProperties,
  methodName: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontWeight: 500,
    color: 'var(--white)',
  },
  methodTime: {
    color: 'var(--green)',
    fontWeight: 500,
  },
  methodFree: {
    color: 'var(--green)',
    fontWeight: 600,
  },
  howToSection: {
    padding: '48px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    marginBottom: '48px',
    textAlign: 'center' as const,
  },
  howToTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '32px',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '24px',
  } as React.CSSProperties,
  stepCard: {
    textAlign: 'center' as const,
  },
  stepNumber: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--gold)',
    color: '#000',
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 800,
    marginBottom: '12px',
  },
  stepTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '0.95rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  stepDesc: {
    fontSize: '13px',
    color: 'var(--gray-2)',
  },
  faqSection: {
    textAlign: 'center' as const,
  },
  faqTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '32px',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    textAlign: 'left' as const,
  } as React.CSSProperties,
  faqCard: {
    padding: '24px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  faqQuestion: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '8px',
  },
  faqAnswer: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
  },
}
