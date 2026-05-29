'use client'

import { useState } from 'react'

export default function SlotFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: '¿Por qué el RTP de 96.5% se ve bajo comparado a otras slots?',
      a: 'El RTP de 96.5% es competitivo en la industria regulada. Gates of Olympus tiene volatilidad extrema, lo que significa que aunque el RTP sea similar a slots bajas, la varianza es mucho mayor. En sesiones cortas (100 spins), el resultado real puede estar 10-20% arriba o abajo del teórico.',
    },
    {
      q: '¿Cuántas veces debo hacer roll-over del bono antes de retirar?',
      a: 'En casinos argentinos regulados, el wagering típico es 35x-40x el bono. Si recibes 75.000 ARS de bono, necesitás apostar 2.625.000 ARS (35x) antes de poder retirar. Esto requiere ~5.250 spins a 500 ARS promedio, aproximadamente 2-3 horas de juego.',
    },
    {
      q: '¿Debo comprar el bonus o esperar a ganarlo naturalmente?',
      a: 'Recomendamos esperar. La compra de bonus (100x tu apuesta = 50.000 ARS) es útil solo si ya agotaste 100+ spins sin wins significativos. Si compras antes de time 200 apuestas, el costo efectivo es 2-3x superior. Esperar a win natural reduce el gasto en 40-60%.',
    },
    {
      q: '¿Hay trucos o patrones para ganar en Gates of Olympus?',
      a: 'No. Las slots usan RNG (Random Number Generator) certificado por Pragmatic Play. No hay patrones predecibles. Los \"trucos\" son mitos. Lo único que puedes controlar es: bankroll mínimo (100x apuesta), tiempo de sesión máximo (2 hs), y límite de pérdida semanal. El jugador responsable gana a largo plazo solo si el RTP teórico supera su % real de pérdida.',
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
      <div style={{ padding: '18px 26px 16px', borderBottom: '1px solid var(--gray-3)', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: 'var(--r-sm)',
            background: 'var(--accent-dim)',
            border: '1px solid var(--accent-line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            flexShrink: 0,
          }}
        >
          ❓
        </div>
        <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Preguntas frecuentes</h2>
      </div>
      <div style={{ padding: '22px 26px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {faqs.map((faq, i) => (
            <FaqItem key={i} item={faq} index={i} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FaqItem({ item, index, isOpen, onToggle }: any) {
  return (
    <div
      style={{
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-md)',
        background: 'var(--surface-1)',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => !isOpen && (e.currentTarget.style.borderColor = 'var(--accent-line)')}
      onMouseLeave={(e) => !isOpen && (e.currentTarget.style.borderColor = 'var(--gray-3)')}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          padding: '17px 22px',
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
        {item.q}
        <div
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
            color: 'var(--accent-slot)',
            flexShrink: 0,
            transition: 'transform 0.25s',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </div>
      </button>
      <div
        style={{
          padding: isOpen ? '0 22px 18px' : '0 22px',
          maxHeight: isOpen ? '400px' : '0',
          overflow: 'hidden',
          fontSize: '13px',
          color: 'var(--gray-1)',
          lineHeight: 1.7,
          transition: 'max-height 0.3s ease, padding 0.3s ease',
        }}
      >
        {item.a}
      </div>
    </div>
  )
}
