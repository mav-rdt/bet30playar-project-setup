'use client'

import { useState } from 'react'

export default function CasinoFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: '¿Está regulado Betsson en Argentina?',
      a: 'Sí, Betsson opera bajo licencia LOTBA N° 2021-CR-0078, emitida por la Lotería de la Ciudad Autónoma de Buenos Aires. Esta licencia permite captar jugadores residentes en CABA exclusivamente. Es el único regulador provincial de Argentina con poder de enforcement real (inspecciones, multas, cierre de operaciones).',
    },
    {
      q: '¿Cuál es el RTP real de Betsson? ¿Se puede verificar?',
      a: 'El RTP promedio auditado es 96.2%, medido sobre catálogos de Pragmatic Play y NetEnt (los proveedores más solicitados en CABA). Betsson publica auditorías trimestrales en su sitio web. Es el RTP más alto entre operadores regulados argentinos. Nota: RTP es teórico a muy largo plazo; sesiones individuales siempre tendrán varianza.',
    },
    {
      q: '¿Cuánto tiempo tarda retirar ganancias?',
      a: 'Una vez aprobado tu KYC (promedio 24 horas), los retiros vía CVU o CBU se procesan en 24–48 horas hábiles. En comparación: 888Casino promedian 3-5 días, Codere 2-3 días. Betsson es el más rápido del segmento regulado CABA.',
    },
    {
      q: '¿El bono de 75.000 ARS es rentable?',
      a: 'No para la mayoría. El wagering de 35x requiere apostar 2.625.000 ARS total. Un jugador recreativo con 5.000 ARS por sesión necesitaría 525 sesiones en 30 días = 17 sesiones diarias. Pero entre operadores LOTBA, Betsson tiene el wagering más bajo (promedio 42x), así que es la mejor opción si buscas bonus.',
    },
  ]

  return (
    <div
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '20px 28px 16px',
          borderBottom: '1px solid var(--gray-3)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--r-sm)',
            background: 'var(--gold-dim)',
            border: '1px solid var(--gold-line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '15px',
            flexShrink: 0,
          }}
        >
          ❓
        </div>
        <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
          Preguntas frecuentes
        </div>
      </div>
      <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid var(--gray-3)',
              borderRadius: 'var(--r-md)',
              background: 'var(--surface-1)',
              overflow: 'hidden',
              transition: 'border-color 0.2s',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                color: 'var(--white)',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'var(--font-dm-sans)',
                gap: '16px',
              }}
            >
              <span>{faq.q}</span>
              <span
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--gray-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  color: 'var(--gold)',
                  flexShrink: 0,
                  transition: 'transform 0.25s',
                  transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                padding: openIndex === idx ? '0 22px 18px' : '0 22px',
                maxHeight: openIndex === idx ? '400px' : '0',
                overflow: 'hidden',
                fontSize: '13px',
                color: 'var(--gray-1)',
                lineHeight: 1.7,
                transition: 'max-height 0.3s ease, padding 0.3s ease',
              }}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
