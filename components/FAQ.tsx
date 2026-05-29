'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: '¿Puedo jugar en casino online en Argentina legalmente?',
      a: 'Sí, en Argentina hay una regulación clara. Los casinos con licencia LOTBA (Ciudad Autónoma de Buenos Aires) o IPLyC (Provincia de Buenos Aires) operan legalmente. Todos los casinos en nuestro ranking tienen licencia verificada.',
    },
    {
      q: '¿Qué significa el wagering y cómo lo calculo?',
      a: 'El wagering es la cantidad de veces que debes apostar el bono antes de poder retirarlo. Ejemplo: si recibís un bono de 1.000 pesos con 35x wagering, debes apostar 35.000 pesos en total. En nuestro análisis solo incluimos juegos que cuentan el 100% hacia wagering.',
    },
    {
      q: '¿Por qué algunos casinos no aceptan MercadoPago para retiros?',
      a: 'Algunos operadores usan billeteras internas o métodos limitados. MercadoPago tiene restricciones en ciertos países. Verificamos qué métodos de retiro aceptan depósitos y cuál es el mínimo para cada uno.',
    },
    {
      q: '¿Qué es el RTP y por qué importa?',
      a: 'RTP (Return to Player) es el porcentaje teórico de lo que un juego devuelve a largo plazo. Un RTP de 96% significa que en 100 pesos apostados, en promedio se devuelven 96. Verificamos que cada casino tenga RTP publicado y auditable.',
    },
  ]

  return (
    <section style={styles.section}>
      <div style={styles.wrap}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Preguntas frecuentes</h2>
        </div>

        <div style={styles.faqList}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                ...styles.faqItem,
                ...(openIndex === i ? styles.faqItemOpen : {}),
              }}
            >
              <button
                style={styles.faqQ}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span style={styles.faqQText}>{faq.q}</span>
                <div
                  style={{
                    ...styles.faqIcon,
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s',
                  }}
                >
                  +
                </div>
              </button>
              <div
                style={{
                  ...styles.faqA,
                  maxHeight: openIndex === i ? '400px' : '0px',
                  padding: openIndex === i ? '0 24px 20px' : '0 24px',
                }}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '72px 0',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 1,
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: '32px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--gray-3)',
  } as React.CSSProperties,
  sectionTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2px',
  },
  faqItem: {
    border: '1px solid var(--gray-3)',
    borderRadius: 'var(--r-md)',
    background: 'var(--surface-1)',
    overflow: 'hidden',
    transition: 'border-color 0.2s',
  },
  faqItemOpen: {},
  faqQ: {
    width: '100%',
    textAlign: 'left' as const,
    background: 'none',
    border: 'none',
    padding: '20px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    color: 'var(--white)',
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: 'var(--font-dm-sans)',
    gap: '16px',
  } as React.CSSProperties,
  faqQText: {
    lineHeight: 1.4,
  },
  faqIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'var(--surface-2)',
    border: '1px solid var(--gray-3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: 'var(--gold)',
    flexShrink: 0,
  },
  faqA: {
    overflow: 'hidden',
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.7,
    transition: 'max-height 0.3s ease, padding 0.3s ease',
  } as React.CSSProperties,
}
