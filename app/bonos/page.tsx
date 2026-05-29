import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { Gift, Percent, Zap, Star, Clock, Info } from 'lucide-react'

export const metadata = {
  title: 'Bonos y Promociones - Bet30',
  description: 'Descubre todos los bonos y promociones disponibles en Bet30',
}

const bonuses = [
  {
    icon: Gift,
    title: 'Bono de bienvenida',
    amount: '$1750',
    extra: '+ 150 giros gratis',
    description: '100% en tu primer deposito hasta $1750 mas 150 giros gratis para tragamonedas seleccionadas.',
    wagering: '35x',
    minDeposit: '$500',
    validity: '30 dias',
    highlight: true,
  },
  {
    icon: Percent,
    title: 'Cashback semanal',
    amount: '15%',
    extra: 'cada lunes',
    description: 'Recupera el 15% de tus perdidas netas cada semana. El cashback se acredita automaticamente.',
    wagering: '1x',
    minDeposit: 'N/A',
    validity: '7 dias',
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Recarga de fin de semana',
    amount: '50%',
    extra: 'sabado y domingo',
    description: 'Obtene un 50% extra en todos tus depositos realizados durante el fin de semana.',
    wagering: '25x',
    minDeposit: '$1000',
    validity: '7 dias',
    highlight: false,
  },
  {
    icon: Star,
    title: 'Programa VIP',
    amount: 'Exclusivo',
    extra: 'beneficios premium',
    description: 'Accede a bonos personalizados, retiros prioritarios y un gestor de cuenta dedicado.',
    wagering: 'Variable',
    minDeposit: 'Por invitacion',
    validity: 'Permanente',
    highlight: false,
  },
]

const promoCode = {
  code: 'BIENVENIDO30',
  description: 'Usa este codigo en tu primer deposito para obtener el bono de bienvenida completo',
}

export default function BonosPage() {
  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.tag}>Promociones</div>
            <h1 style={styles.title}>Bonos y ofertas exclusivas</h1>
            <p style={styles.subtitle}>
              Aprovecha nuestras promociones para maximizar tu experiencia de juego. Todos los bonos estan sujetos a terminos y condiciones.
            </p>
          </div>

          <div style={styles.promoCodeCard}>
            <div style={styles.promoCodeContent}>
              <Gift size={32} style={{ color: 'var(--gold)' }} />
              <div>
                <div style={styles.promoCodeLabel}>Codigo promocional</div>
                <div style={styles.promoCode}>{promoCode.code}</div>
                <div style={styles.promoCodeDesc}>{promoCode.description}</div>
              </div>
            </div>
            <button style={styles.copyBtn}>Copiar codigo</button>
          </div>

          <div style={styles.bonusGrid}>
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                style={{
                  ...styles.bonusCard,
                  ...(bonus.highlight ? styles.bonusCardHighlight : {}),
                }}
              >
                {bonus.highlight && <div style={styles.ribbon}>Mas popular</div>}
                <div style={styles.bonusIcon}>
                  <bonus.icon size={28} />
                </div>
                <div style={styles.bonusAmount}>{bonus.amount}</div>
                <div style={styles.bonusExtra}>{bonus.extra}</div>
                <h3 style={styles.bonusTitle}>{bonus.title}</h3>
                <p style={styles.bonusDesc}>{bonus.description}</p>

                <div style={styles.bonusDetails}>
                  <div style={styles.bonusDetail}>
                    <span style={styles.detailLabel}>Wagering</span>
                    <span style={styles.detailValue}>{bonus.wagering}</span>
                  </div>
                  <div style={styles.bonusDetail}>
                    <span style={styles.detailLabel}>Deposito min.</span>
                    <span style={styles.detailValue}>{bonus.minDeposit}</span>
                  </div>
                  <div style={styles.bonusDetail}>
                    <span style={styles.detailLabel}>Validez</span>
                    <span style={styles.detailValue}>{bonus.validity}</span>
                  </div>
                </div>

                <a href="/registro" style={styles.bonusBtn}>
                  Obtener bono
                </a>
              </div>
            ))}
          </div>

          <div style={styles.termsSection}>
            <div style={styles.termsIcon}>
              <Info size={24} />
            </div>
            <h2 style={styles.termsTitle}>Terminos y condiciones</h2>
            <ul style={styles.termsList}>
              <li>Todos los bonos estan sujetos a requisitos de apuesta (wagering)</li>
              <li>Solo se permite un bono activo a la vez</li>
              <li>Las apuestas en ciertos juegos pueden contribuir de forma diferente al wagering</li>
              <li>Bet30 se reserva el derecho de modificar o cancelar promociones</li>
              <li>Las promociones aplican solo para mayores de 18 anos</li>
            </ul>
            <a href="#" style={styles.termsLink}>Ver terminos completos</a>
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
  tag: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '999px',
    background: 'var(--green-dim)',
    border: '1px solid rgba(45, 217, 143, 0.3)',
    color: 'var(--green)',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '16px',
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
  promoCodeCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 32px',
    borderRadius: 'var(--r-lg)',
    border: '1px dashed var(--gold-line)',
    background: 'var(--gold-dim)',
    marginBottom: '48px',
  } as React.CSSProperties,
  promoCodeContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  promoCodeLabel: {
    fontSize: '12px',
    color: 'var(--gray-2)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '4px',
  },
  promoCode: {
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--gold)',
    letterSpacing: '0.05em',
  },
  promoCodeDesc: {
    fontSize: '13px',
    color: 'var(--gray-1)',
    marginTop: '4px',
  },
  copyBtn: {
    padding: '12px 24px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '14px',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
  },
  bonusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '64px',
  },
  bonusCard: {
    position: 'relative' as const,
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    textAlign: 'center' as const,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  bonusCardHighlight: {
    border: '1px solid var(--gold-line)',
    background: 'linear-gradient(180deg, var(--gold-dim) 0%, var(--surface-2) 50%)',
  },
  ribbon: {
    position: 'absolute' as const,
    top: '20px',
    right: '-35px',
    transform: 'rotate(45deg)',
    padding: '4px 50px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  bonusIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'var(--gold-dim)',
    color: 'var(--gold)',
    margin: '0 auto 16px',
  },
  bonusAmount: {
    fontFamily: 'var(--font-syne)',
    fontSize: '2.5rem',
    fontWeight: 800,
    color: 'var(--gold)',
    lineHeight: 1,
  },
  bonusExtra: {
    fontSize: '14px',
    color: 'var(--gold)',
    marginBottom: '16px',
  },
  bonusTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '12px',
  },
  bonusDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.6,
    marginBottom: '24px',
    flex: 1,
  },
  bonusDetails: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    padding: '16px',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-3)',
    marginBottom: '20px',
  },
  bonusDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
  },
  detailLabel: {
    color: 'var(--gray-2)',
  },
  detailValue: {
    fontWeight: 600,
    color: 'var(--gray-1)',
  },
  bonusBtn: {
    display: 'block',
    padding: '14px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '14px',
    fontWeight: 700,
    textDecoration: 'none',
    textAlign: 'center' as const,
  },
  termsSection: {
    padding: '40px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    textAlign: 'center' as const,
  },
  termsIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: 'var(--surface-3)',
    color: 'var(--gray-1)',
    marginBottom: '20px',
  },
  termsTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '20px',
  },
  termsList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    maxWidth: '600px',
    margin: '0 auto 24px',
    textAlign: 'left' as const,
  },
  termsLink: {
    fontSize: '14px',
    color: 'var(--gold)',
    textDecoration: 'none',
    fontWeight: 500,
  },
}
