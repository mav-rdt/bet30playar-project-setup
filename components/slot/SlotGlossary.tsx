'use client'

export default function SlotGlossary({ items }: any) {
  const safeItems = Array.isArray(items) ? items : []
  return (
    <div
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--gray-3)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--gray-3)', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'var(--gray-2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Glosario
      </div>
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {safeItems.map((item: any, i: number) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'var(--accent-slot)', fontWeight: 500 }}>
              {item.term}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--gray-1)', lineHeight: 1.5 }}>{item.def ?? item.definition}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
