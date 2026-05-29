'use client'

import { useEffect, useRef, useState } from 'react'

interface RatingBreakdownProps {
  ratings?: Array<{ label: string; score: number }>
}

export default function RatingBreakdown({ ratings }: RatingBreakdownProps) {
  const safeRatings = Array.isArray(ratings) ? ratings : []
  const [barWidths, setBarWidths] = useState<number[]>([])
  const ref = useRef(null)

  useEffect(() => {
    if (safeRatings.length === 0) {
      setBarWidths([])
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBarWidths(safeRatings.map(r => (r.score / 10) * 100))
        observer.unobserve(entry.target)
      }
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [safeRatings])

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '14px 20px',
          borderBottom: '1px solid var(--gray-3)',
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '10px',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        Desglose de puntuación
      </div>
      <div style={{ padding: '8px 20px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {safeRatings.map((rating, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ color: 'var(--gray-1)' }}>{rating.label}</span>
              <span style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--gold)' }}>{rating.score}</span>
            </div>
            <div
              style={{
                height: '4px',
                borderRadius: '2px',
                background: 'var(--surface-3)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: '2px',
                  background: 'linear-gradient(90deg, var(--gold), #f0c84e)',
                  transition: 'width 1s ease',
                  width: `${barWidths[idx] || 0}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}