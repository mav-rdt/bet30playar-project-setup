'use client'

import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { Sparkles, Star, Percent, Search } from 'lucide-react'
import { useState, useMemo } from 'react'
import Image from 'next/image'

const slotImages: Record<string, string> = {
  'Sweet Bonanza': '/games/sweet-bonanza.jpg',
  'Gates of Olympus': '/games/gates-of-olympus.jpg',
  'Big Bass Bonanza': '/games/big-bass-bonanza.jpg',
  'Sugar Rush': '/games/sugar-rush.jpg',
  'Starlight Princess': '/games/starlight-princess.jpg',
  'The Dog House': '/games/the-dog-house.jpg',
}

const slots = [
  { name: 'Sweet Bonanza', provider: 'Pragmatic Play', rtp: '96.51%', volatility: 'Alta', featured: true },
  { name: 'Gates of Olympus', provider: 'Pragmatic Play', rtp: '96.50%', volatility: 'Alta', featured: true },
  { name: 'Big Bass Bonanza', provider: 'Pragmatic Play', rtp: '96.71%', volatility: 'Media', featured: true },
  { name: 'Sugar Rush', provider: 'Pragmatic Play', rtp: '96.50%', volatility: 'Alta', featured: false },
  { name: 'Starlight Princess', provider: 'Pragmatic Play', rtp: '96.50%', volatility: 'Alta', featured: false },
  { name: 'The Dog House', provider: 'Pragmatic Play', rtp: '96.51%', volatility: 'Alta', featured: false },
  { name: 'Book of Dead', provider: 'Play n GO', rtp: '96.21%', volatility: 'Alta', featured: false },
  { name: 'Starburst', provider: 'NetEnt', rtp: '96.09%', volatility: 'Baja', featured: false },
  { name: 'Gonzo Quest', provider: 'NetEnt', rtp: '95.97%', volatility: 'Media', featured: false },
  { name: 'Reactoonz', provider: 'Play n GO', rtp: '96.51%', volatility: 'Alta', featured: false },
  { name: 'Fire Joker', provider: 'Play n GO', rtp: '96.15%', volatility: 'Alta', featured: false },
  { name: 'Wolf Gold', provider: 'Pragmatic Play', rtp: '96.01%', volatility: 'Media', featured: false },
  { name: 'Mustang Gold', provider: 'Pragmatic Play', rtp: '96.53%', volatility: 'Alta', featured: false },
  { name: 'Aztec Blazes', provider: 'Pragmatic Play', rtp: '96.20%', volatility: 'Media', featured: false },
  { name: 'Pyramid King', provider: 'NetEnt', rtp: '96.87%', volatility: 'Alta', featured: false },
]

const providers = ['Todos', 'Pragmatic Play', 'NetEnt', 'Play n GO', 'Microgaming', 'Red Tiger']
const volatilities = ['Todas', 'Baja', 'Media', 'Alta']

export default function SlotsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProvider, setSelectedProvider] = useState('Todos')
  const [selectedVolatility, setSelectedVolatility] = useState('Todas')

  const filteredSlots = useMemo(() => {
    return slots.filter(slot => {
      const matchSearch = slot.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchProvider = selectedProvider === 'Todos' || slot.provider === selectedProvider
      const matchVolatility = selectedVolatility === 'Todas' || slot.volatility === selectedVolatility
      return matchSearch && matchProvider && matchVolatility
    })
  }, [searchTerm, selectedProvider, selectedVolatility])

  return (
    <>
      <MonoBrandNav />
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.iconBadge}>
              <Sparkles size={32} />
            </div>
            <h1 style={styles.title}>Tragamonedas</h1>
            <p style={styles.subtitle}>
              Más de 500 slots de los mejores proveedores del mundo. Encuentra tu juego favorito.
            </p>
          </div>

          <div style={styles.filters}>
            <div style={styles.searchInput}>
              <Search size={20} style={{ color: 'var(--gray-2)' }} />
              <input 
                type="text" 
                placeholder="Buscar tragamonedas..." 
                style={styles.input}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Proveedor</label>
              <select 
                style={styles.select}
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
              >
                {providers.map((p, i) => (
                  <option key={i} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div style={styles.filterGroup}>
              <label style={styles.filterLabel}>Volatilidad</label>
              <select 
                style={styles.select}
                value={selectedVolatility}
                onChange={(e) => setSelectedVolatility(e.target.value)}
              >
                {volatilities.map((v, i) => (
                  <option key={i} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={styles.resultsInfo}>
            Mostrando <strong>{filteredSlots.length}</strong> tragamonedas
          </div>

          <div style={styles.gamesGrid}>
            {filteredSlots.map((slot, index) => (
              <div key={index} style={styles.gameCard}>
                {slot.featured && <div style={styles.featuredBadge}><Star size={12} /> Popular</div>}
                <div style={styles.gameImage}>
                  {slotImages[slot.name] ? (
                    <Image
                      src={slotImages[slot.name]}
                      alt={slot.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  ) : (
                    <div style={styles.gameImagePlaceholder}>
                      <Sparkles size={40} style={{ color: 'var(--accent-slot)' }} />
                    </div>
                  )}
                </div>
                <div style={styles.gameInfo}>
                  <h3 style={styles.gameName}>{slot.name}</h3>
                  <p style={styles.gameProvider}>{slot.provider}</p>
                  <div style={styles.gameStats}>
                    <div style={styles.gameStat}>
                      <Percent size={14} />
                      <span>RTP: {slot.rtp}</span>
                    </div>
                    <div style={styles.gameVolatility}>{slot.volatility}</div>
                  </div>
                </div>
                <a href="https://example.com" style={styles.playBtn} target="_blank" rel="noopener noreferrer">Jugar ahora</a>
              </div>
            ))}
          </div>

          {filteredSlots.length === 0 && (
            <div style={styles.noResults}>
              <p style={styles.noResultsText}>No se encontraron juegos que coincidan con tu búsqueda.</p>
              <p style={styles.noResultsSubtext}>Intenta con otros filtros o términos de búsqueda.</p>
            </div>
          )}

          <div style={styles.loadMore}>
            <button style={styles.loadMoreBtn}>Cargar más juegos</button>
          </div>
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
    marginBottom: '48px',
  },
  iconBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: 'rgba(167, 139, 250, 0.1)',
    color: 'var(--accent-slot)',
    marginBottom: '24px',
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
    maxWidth: '500px',
    margin: '0 auto',
  },
  filters: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
    flexWrap: 'wrap' as const,
    alignItems: 'flex-end',
  },
  searchInput: {
    flex: 1,
    minWidth: '280px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 18px',
    borderRadius: 'var(--r-md)',
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
  filterGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '6px',
  },
  filterLabel: {
    fontSize: '12px',
    color: 'var(--gray-2)',
    fontWeight: 500,
  },
  select: {
    padding: '14px 18px',
    borderRadius: 'var(--r-md)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    color: 'var(--white)',
    fontSize: '14px',
    minWidth: '160px',
    cursor: 'pointer',
  },
  resultsInfo: {
    fontSize: '14px',
    color: 'var(--gray-1)',
    marginBottom: '24px',
  },
  gamesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '24px',
    marginBottom: '48px',
  },
  gameCard: {
    position: 'relative' as const,
    borderRadius: 'var(--r-lg)',
    border: '1px solid var(--gray-3)',
    background: 'var(--surface-2)',
    overflow: 'hidden',
    transition: 'transform 0.2s, border-color 0.2s',
  },
  featuredBadge: {
    position: 'absolute' as const,
    top: '12px',
    left: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '6px 10px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '11px',
    fontWeight: 700,
    zIndex: 1,
  },
  gameImage: {
    position: 'relative' as const,
    height: '180px',
    background: 'rgba(167, 139, 250, 0.08)',
    overflow: 'hidden',
  },
  gameImagePlaceholder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    background: 'rgba(167, 139, 250, 0.08)',
  },
  gameInfo: {
    padding: '20px',
  },
  gameName: {
    fontFamily: 'var(--font-syne)',
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '6px',
  },
  gameProvider: {
    fontSize: '13px',
    color: 'var(--gray-2)',
    marginBottom: '16px',
  },
  gameStats: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameStat: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: 'var(--accent-slot)',
    fontFamily: 'var(--font-dm-mono)',
  },
  gameVolatility: {
    padding: '4px 10px',
    borderRadius: '999px',
    background: 'var(--surface-3)',
    fontSize: '11px',
    fontWeight: 600,
    color: 'var(--gray-1)',
  },
  playBtn: {
    display: 'block',
    margin: '0 20px 20px',
    padding: '12px',
    borderRadius: '999px',
    background: 'var(--gold)',
    color: '#000',
    fontSize: '14px',
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
    marginBottom: '8px',
  },
  noResultsSubtext: {
    fontSize: '14px',
    color: 'var(--gray-2)',
  },
  loadMore: {
    textAlign: 'center' as const,
    marginTop: '48px',
  },
  loadMoreBtn: {
    padding: '14px 32px',
    borderRadius: '999px',
    border: '1px solid var(--gray-3)',
    background: 'transparent',
    color: 'var(--gray-1)',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
}
