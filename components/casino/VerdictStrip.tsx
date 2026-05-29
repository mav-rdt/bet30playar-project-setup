'use client'

interface VerdictStripProps {
  verdict?: string
  title?: string
}

export default function VerdictStrip({ verdict, title }: VerdictStripProps) {
  const safeVerdict = typeof verdict === 'string' ? verdict : ''
  const safeTitle = typeof title === 'string' ? title : ''
  const parts = safeVerdict.split(/(\*\*[^*]+\*\*)/g)

  return (
    <div
      style={{
        margin: '32px 0 0',
        padding: '24px 32px',
        background: 'linear-gradient(135deg, rgba(45,217,143,0.06) 0%, var(--surface-1) 100%)',
        border: '1px solid rgba(45,217,143,0.2)',
        borderRadius: 'var(--r-xl)',
        display: 'flex',
        gap: '24px',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: 'var(--r-md)',
          background: 'var(--green-dim)',
          border: '1px solid rgba(45,217,143,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          flexShrink: 0,
        }}
      >
        ✅
      </div>
      <div>
        <div
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '10px',
            color: 'var(--green)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '4px',
          }}
        >
          {safeTitle}
        </div>
        <div
          style={{
            fontSize: '14px',
            color: 'var(--gray-1)',
            lineHeight: 1.65,
          }}
        >
          {parts.map((part, idx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={idx} style={{ color: 'var(--white)' }}>
                  {part.slice(2, -2)}
                </strong>
              )
            }
            return part
          })}
        </div>
      </div>
    </div>
  )
}