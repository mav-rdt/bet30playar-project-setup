'use client'

export default function SlotVerdictStrip({ verdict, title }: any) {
  return (
    <div
      style={{
        margin: '32px 0 0',
        padding: '22px 28px',
        background: 'linear-gradient(135deg, var(--accent-dim), var(--surface-1))',
        border: '1px solid var(--accent-line)',
        borderRadius: 'var(--r-xl)',
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: 'var(--r-md)',
          background: 'var(--accent-dim)',
          border: '1px solid var(--accent-line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          flexShrink: 0,
        }}
      >
        💜
      </div>
      <div>
        <div
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '10px',
            color: 'var(--accent-slot)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '4px',
          }}
        >
          {title ?? ''}
        </div>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--gray-1)',
            lineHeight: 1.65,
          }}
        >
          {(verdict ?? '').split('**').map((part: string, i: number) => (
            i % 2 === 0 ? part : <strong key={i} style={{ color: 'var(--white)' }}>{part}</strong>
          ))}
        </p>
      </div>
    </div>
  )
}
