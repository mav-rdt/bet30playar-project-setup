import { Sparkles, TrendingUp, Trophy } from 'lucide-react'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'
import type { GameCategory } from '@/types/brand'

const categoryMeta: Record<GameCategory, { icon: React.ElementType; href: string; color: string }> = {
  Slots:     { icon: Sparkles,   href: '/juegos/slots',    color: 'var(--accent-slot)' },
  Crash:     { icon: TrendingUp, href: '/juegos/crash',    color: 'var(--green)' },
  Live:      { icon: Trophy,     href: '/juegos/live',     color: 'var(--gold)' },
  Deportes:  { icon: Trophy,     href: '/juegos/deportes', color: 'var(--gold)' },
}

export default function GamesSection() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const { intro, featured } = content.games

  // Группируем игры по категории
  const grouped = featured.reduce<Record<string, string[]>>((acc, game) => {
    if (!acc[game.category]) acc[game.category] = []
    acc[game.category].push(game.name)
    return acc
  }, {})

  const categories = Object.entries(grouped).map(([cat, games]) => ({
    category: cat as GameCategory,
    games,
    meta: categoryMeta[cat as GameCategory] ?? categoryMeta.Slots,
  }))

  return (
    <section style={styles.section}>
      <div style={styles.wrap}>
        <div style={styles.header}>
          <span style={styles.tag}>Variedad de juegos</span>
          <h2 style={styles.title}>Catálogo completo de juegos en {brand.brand_name}</h2>
          <p style={styles.subtitle}>{intro}</p>
        </div>

        <div style={styles.grid}>
          {categories.map(({ category, games, meta }) => {
            const Icon = meta.icon
            return (
              <a key={category} href={meta.href} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={{ ...styles.iconWrap, color: meta.color }}>
                    <Icon size={28} />
                  </div>
                  <div style={styles.count}>{games.length}+</div>
                </div>
                <h3 style={styles.cardTitle}>{category}</h3>
                <div style={styles.popularGames}>
                  {games.slice(0, 4).map((name, i) => (
                    <span key={i} style={styles.gamePill}>{name}</span>
                  ))}
                </div>
                <span style={styles.cardArrow}>Ver juegos →</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '80px 0',
    background: 'var(--surface-1)',
  },
  wrap: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '56px',
  },
  tag: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '999px',
    background: 'rgba(167, 139, 250, 0.1)',
    border: '1px solid rgba(167, 139, 250, 0.3)',
    color: 'var(--accent-slot)',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '16px',
  },
  title: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 800,
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--gray-1)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.2s, transform 0.2s',
    gap: '12px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  iconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: 'var(--r-md)',
    background: 'var(--gold-dim)',
  },
  count: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 800,
    color: 'var(--gray-1)',
  },
  cardTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.4rem',
    fontWeight: 700,
    color: 'var(--white)',
  },
  popularGames: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
    flex: 1,
  },
  gamePill: {
    padding: '6px 12px',
    borderRadius: '999px',
    background: 'var(--surface-3)',
    fontSize: '12px',
    color: 'var(--gray-1)',
    fontWeight: 500,
  },
  cardArrow: {
    fontSize: '14px',
    color: 'var(--gold)',
    fontWeight: 600,
  },
}
