'use client'

import { useTheme } from '@/lib/theme-context'

export default function Navigation() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const handleThemeChange = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.navInner}>
        <a href="/" style={styles.navLogo}>
          Bet30Play<span style={styles.goldText}>Ar</span>
        </a>
        <ul style={styles.navLinks}>
          <li><a href="#casinos" style={styles.navLink}>Casinos</a></li>
          <li><a href="#slots" style={styles.navLink}>Tragamonedas</a></li>
          <li><a href="#bonuses" style={styles.navLink}>Bonos</a></li>
          <li><a href="#strategies" style={styles.navLink}>Estrategias</a></li>
        </ul>
        <div style={styles.navRight}>
          <button 
            onClick={handleThemeChange}
            style={styles.themeToggle}
            title={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'light' ? '🌙' : '☀️'}
          </button>
          <a href="#" style={styles.navCta}>Ver rankings</a>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
    background: 'rgba(8,10,16,0.85)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--gray-3)',
  },
  navInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 24px',
  },
  navLogo: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.15rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: 'var(--white)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  goldText: {
    color: 'var(--gold)',
  },
  navLinks: {
    display: 'flex',
    gap: '28px',
    listStyle: 'none',
  },
  navLink: {
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--gray-1)',
    textDecoration: 'none',
    letterSpacing: '0.01em',
    transition: 'color 0.2s',
    cursor: 'pointer',
  } as React.CSSProperties,
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  themeToggle: {
    background: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '6px',
    transition: 'background 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  navCta: {
    fontSize: '13px',
    fontWeight: 600,
    padding: '8px 18px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    textDecoration: 'none',
    letterSpacing: '0.02em',
    transition: 'background 0.2s, transform 0.15s',
    whiteSpace: 'nowrap' as const,
    cursor: 'pointer',
  } as React.CSSProperties,
}
