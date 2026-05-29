'use client'

import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { Sparkles, TrendingUp, Trophy, Search } from 'lucide-react'
import { useState, useMemo } from 'react'
import Image from 'next/image'

const gameImages: Record<string, string> = {
  'Sweet Bonanza': '/games/sweet-bonanza.jpg',
  'Gates of Olympus': '/games/gates-of-olympus.jpg',
  'Big Bass Bonanza': '/games/big-bass-bonanza.jpg',
  'Sugar Rush': '/games/sugar-rush.jpg',
  'Starlight Princess': '/games/starlight-princess.jpg',
  'The Dog House': '/games/the-dog-house.jpg',
  'Aviator': '/games/aviator.jpg',
  'Spaceman': '/games/spaceman.jpg',
  'JetX': '/games/jetx.jpg',
  'Crash': '/games/crash.jpg',
}

const categories = [
  {
    icon: Sparkles,
    title: 'Tragamonedas',
    count: '500+',
    description: 'Los mejores slots de proveedores premium',
    href: '/juegos/slots',
    color: 'var(--accent-slot)',
    bgColor: 'rgba(167, 139, 250, 0.1)',
  },
  {
    icon: TrendingUp,
    title: 'Crash Games',
    count: '50+',
    description: 'Juegos de crash con multiplicadores',
    href: '/juegos/crash',
    color: 'var(--green)',
    bgColor: 'var(--green-dim)',
  },
  {
    icon: Trophy,
    title: 'Apuestas Deportivas',
    count: '30+',
    description: 'Fútbol, tenis, basquet y más',
    href: '/juegos/deportes',
    color: 'var(--gold)',
    bgColor: 'var(--gold-dim)',
  },
]

const popularSlots = [
  { name: 'Sweet Bonanza', provider: 'Pragmatic Play', rtp: '96.51%', category: 'Slots' },
  { name: 'Gates of Olympus', provider: 'Pragmatic Play', rtp: '96.50%', category: 'Slots' },
  { name: 'Big Bass Bonanza', provider: 'Pragmatic Play', rtp: '96.71%', category: 'Slots' },
  { name: 'Sugar Rush', provider: 'Pragmatic Play', rtp: '96.50%', category: 'Slots' },
  { name: 'Starlight Princess', provider: 'Pragmatic Play', rtp: '96.50%', category: 'Slots' },
  { name: 'The Dog House', provider: 'Pragmatic Play', rtp: '96.51%', category: 'Slots' },
]

const crashGames = [
  { name: 'Aviator', provider: 'Spribe', type: 'Crash', category: 'Crash' },
  { name: 'Spaceman', provider: 'Pragmatic Play', type: 'Crash', category: 'Crash' },
  { name: 'JetX', provider: 'SmartSoft', type: 'Crash', category: 'Crash' },
  { name: 'Crash', provider: 'BGaming', type: 'Crash', category: 'Crash' },
]

const allGames = [...popularSlots, ...crashGames]

export default function JuegosPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGames = useMemo(() => {
    return allGames.filter(game => 
      game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Explora nuestros juegos</h1>
            <p style={styles.subtitle}>
              Miles de juegos de los mejores proveedores del mundo. Slots, crash games, apuestas deportivas y más.
            </p>
          </div>

          <div style={styles.searchBar}>
            <div style={styles.searchInput}>
              <Search size={20} style={{ color: 'var(--gray-2)' }} />
              <input 
                type="text" 
                placeholder="Buscar juegos..." 
                style={styles.input}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <a key={index} href={category.href} style={styles.categoryCard}>
                <div style={{ ...styles.categoryIcon, background: category.bgColor, color: category.color }}>
                  <category.icon size={32} />
                </div>
                <div style={styles.categoryContent}>
                  <div style={styles.categoryCount}>{category.count}</div>
                  <h2 style={styles.categoryTitle}>{category.title}</h2>
                  <p style={styles.categoryDesc}>{category.description}</p>
                </div>
                <span style={{ ...styles.categoryArrow, color: category.color }}>Ver juegos</span>
              </a>
            ))}
          </div>

          {searchTerm && (
            <>
              <div style={styles.searchResults}>
                <h2 style={styles.sectionTitle}>Resultados de búsqueda: "{searchTerm}"</h2>
                <p style={styles.resultsCount}>Se encontraron {filteredGames.length} juegos</p>
              </div>

              <div style={styles.gamesGrid}>
                {filteredGames.map((game, index) => (
                  <div key={index} style={styles.gameCard}>
                    <div style={styles.gameImage}>
                      {gameImages[game.name] ? (
                        <Image
                          src={gameImages[game.name]}
                          alt={game.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          priority
                        />
                      ) : (
                        <div style={styles.gameImagePlaceholder}>
                          {game.category === 'Slots' ? (
                            <Sparkles size={32} style={{ color: 'var(--accent-slot)' }} />
                          ) : (
                            <TrendingUp size={32} style={{ color: 'var(--green)' }} />
                          )}
                        </div>
                      )}
                    </div>
                    <div style={styles.gameInfo}>
                      <h3 style={styles.gameName}>{game.name}</h3>
                      <p style={styles.gameProvider}>{game.provider}</p>
                      <div style={styles.gameRtp}>{game.category === 'Slots' ? `RTP: ${game.rtp}` : game.type}</div>
                    </div>
                    <a href="https://example.com" style={styles.playBtn} target="_blank" rel="noopener noreferrer">Jugar</a>
                  </div>
                ))}
              </div>

              {filteredGames.length === 0 && (
                <div style={styles.noResults}>
                  <p style={styles.noResultsText}>No se encontraron juegos que coincidan con tu búsqueda.</p>
                </div>
              )}
            </>
          )}

          {!searchTerm && (
            <>
              <section style={styles.section}>
                <div style={styles.sectionHeader}>
                  <h2 style={styles.sectionTitle}>Tragamonedas populares</h2>
                  <a href="/juegos/slots" style={styles.viewAllLink}>Ver todas</a>
                </div>
                <div style={styles.gamesGrid}>
                  {popularSlots.map((game, index) => (
                    <div key={index} style={styles.gameCard}>
                      <div style={styles.gameImage}>
                        {gameImages[game.name] ? (
                          <Image
                            src={gameImages[game.name]}
                            alt={game.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                          />
                        ) : (
                          <div style={styles.gameImagePlaceholder}>
                            <Sparkles size={32} style={{ color: 'var(--accent-slot)' }} />
                          </div>
                        )}
                      </div>
                      <div style={styles.gameInfo}>
                        <h3 style={styles.gameName}>{game.name}</h3>
                        <p style={styles.gameProvider}>{game.provider}</p>
                        <div style={styles.gameRtp}>RTP: {game.rtp}</div>
                      </div>
                      <a href="https://example.com" style={styles.playBtn} target="_blank" rel="noopener noreferrer">Jugar</a>
                    </div>
                  ))}
                </div>
              </section>

              <section style={styles.section}>
                <div style={styles.sectionHeader}>
                  <h2 style={styles.sectionTitle}>Crash Games</h2>
                  <a href="/juegos/crash" style={styles.viewAllLink}>Ver todos</a>
                </div>
                <div style={styles.gamesGrid}>
                  {crashGames.map((game, index) => (
                    <div key={index} style={styles.gameCard}>
                      <div style={styles.gameImage}>
                        {gameImages[game.name] ? (
                          <Image
                            src={gameImages[game.name]}
                            alt={game.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                          />
                        ) : (
                          <div style={{ ...styles.gameImagePlaceholder, background: 'var(--green-dim)' }}>
                            <TrendingUp size={32} style={{ color: 'var(--green)' }} />
                          </div>
                        )}
                      </div>
                      <div style={styles.gameInfo}>
                        <h3 style={styles.gameName}>{game.name}</h3>
                        <p style={styles.gameProvider}>{game.provider}</p>
                        <div style={{ ...styles.gameRtp, color: 'var(--green)' }}>{game.type}</div>
                      </div>
                      <a href="https://example.com" style={{ ...styles.playBtn, background: 'var(--green)' }} target="_blank" rel="noopener noreferrer">Jugar</a>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
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
    marginBottom: '40px',
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
  searchBar: {
    display: 'flex',
    gap: '12px',
    marginBottom: '48px',
    maxWidth: '600px',
    margin: '0 auto 48px',
  },
  searchInput: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 18px',
    borderRadius: '999px',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
  },
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'var(--white)',
    fontSize: '14px',
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '64px',
  } as React.CSSProperties,
  categoryCard: {
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '32px',
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.2s, transform 0.2s',
  },
  categoryIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '72px',
    height: '72px',
    borderRadius: 'var(--r-md)',
    marginBottom: '20px',
  },
  categoryContent: {
    flex: 1,
  },
  categoryCount: {
    fontFamily: 'var(--font-syne)',
    fontSize: '2rem',
    fontWeight: 800,
    color: 'var(--gray-1)',
    marginBottom: '4px',
  },
  categoryTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '8px',
    color: 'var(--white)',
  },
  categoryDesc: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    lineHeight: 1.5,
    marginBottom: '20px',
  },
  categoryArrow: {
    fontSize: '14px',
    fontWeight: 600,
  },
  searchResults: {
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '1px solid var(--gray-3)',
  },
  resultsCount: {
    fontSize: '14px',
    color: 'var(--gray-2)',
    margin: 0,
  },
  section: {
    marginBottom: '64px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  sectionTitle: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  viewAllLink: {
    fontSize: '14px',
    color: 'var(--gold)',
    textDecoration: 'none',
    fontWeight: 500,
  },
  gamesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '20px',
  },
  gameCard: {
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    overflow: 'hidden',
    transition: 'transform 0.2s, border-color 0.2s',
  },
  gameImage: {
    position: 'relative' as const,
    height: '140px',
    background: 'rgba(167, 139, 250, 0.1)',
    overflow: 'hidden',
  },
  gameImagePlaceholder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    background: 'rgba(167, 139, 250, 0.1)',
  },
  gameInfo: {
    padding: '16px',
  },
  gameName: {
    fontFamily: 'var(--font-syne)',
    fontSize: '0.95rem',
    fontWeight: 700,
    marginBottom: '4px',
  },
  gameProvider: {
    fontSize: '12px',
    color: 'var(--gray-2)',
    marginBottom: '8px',
  },
  gameRtp: {
    fontSize: '12px',
    color: 'var(--accent-slot)',
    fontFamily: 'var(--font-dm-mono)',
  },
  playBtn: {
    display: 'block',
    margin: '0 16px 16px',
    padding: '10px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '13px',
    fontWeight: 700,
    textAlign: 'center' as const,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  noResults: {
    textAlign: 'center' as const,
    padding: '60px 20px',
  },
  noResultsText: {
    fontSize: '1.1rem',
    color: 'var(--gray-1)',
  },
}
