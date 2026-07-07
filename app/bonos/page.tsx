// app/bonos/page.tsx
import type { Metadata } from 'next'
import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'
import { Gift, Info } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const url = `https://${brand.affiliate_domain}`
  const bonus = content.bonuses[0]

  return {
    title: bonus
      ? `Bonos y Promociones de ${brand.brand_name} - ${bonus.amount_label}`
      : `Bonos y Promociones de ${brand.brand_name}`,
    description: `Descubrí todos los bonos y promociones disponibles en ${brand.brand_name}: montos, wagering y condiciones verificadas.`,
    alternates: { canonical: `${url}/bonos` },
  }
}

export default function BonosPage() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const bonuses = content.bonuses

  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.tag}>Promociones</div>
            <h1 style={styles.title}>Bonos y ofertas de {brand.brand_name}</h1>
            <p style={styles.subtitle}>
              Aprovechá las promociones de {brand.brand_name} para maximizar tu
              experiencia de juego. Todos los bonos están sujetos a términos y
              condiciones del operador.
            </p>
          </div>

          <div style={styles.bonusGrid}>
            {bonuses.map((bonus, index) => {
              const isHighlight = index === 0
              return (
                <div
                  key={index}
                  style={{
                    ...styles.bonusCard,
                    ...(isHighlight ? styles.bonusCardHighlight : {}),
                  }}
                >
                  {isHighlight && <div style={styles.ribbon}>Más popular</div>}
                  <div style={styles.bonusIcon}>
                    <Gift size={28} />
                  </div>
                  <div style={styles.bonusAmount}>
                    {bonus.amount_label || `$${bonus.amount_ars.toLocaleString('es-AR')}`}
                  </div>
                  <h3 style={styles.bonusTitle}>{bonus.title}</h3>
                  <p style={styles.bonusDesc}>{bonus.description}</p>

                  {bonus.wagering && (
                    <div style={styles.bonusDetails}>
                      <div style={styles.bonusDetail}>
                        <span style={styles.detailLabel}>Wagering</span>
                        <span style={styles.detailValue}>{bonus.wagering}</span>
                      </div>
                    </div>
                  )}

                  <a href="/registro" style={styles.bonusBtn}>
                    {bonus.cta || 'Obtener bono'}
                  </a>
                </div>
              )
            })}
          </div>

          <div style={styles.termsSection}>
            <div style={styles.termsIcon}>
              <Info size={24} />
            </div>
            <h2 style={styles.termsTitle}>Términos y condiciones</h2>
            <ul style={styles.termsList}>
              <li>Todos los bonos están sujetos a requisitos de apuesta (wagering)</li>
              <li>Solo se permite un bono activo a la vez</li>
              <li>Las apuestas en ciertos juegos pueden contribuir de forma diferente al wagering</li>
              <li>{brand.brand_name} se reserva el derecho de modificar o cancelar promociones</li>
              <li>Las promociones aplican solo para mayores de 18 años</li>
              <li>Los montos y condiciones pueden variar; verificá la oferta vigente en el sitio oficial</li>
            </ul>
            <a
              href={brand.affiliate_url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              style={styles.termsLink}
            >
              Ver términos completos en {brand.brand_name}
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
    fontSize: '2.2rem',
    fontWeight: 800,
    color: 'var(--gold)',
    lineHeight: 1.1,
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
    fontSize: '14px',
    color: 'var(--gray-1)',
  },
  termsLink: {
    fontSize: '14px',
    color: 'var(--gold)',
    textDecoration: 'none',
    fontWeight: 500,
  },
}
