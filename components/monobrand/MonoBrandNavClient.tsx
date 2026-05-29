'use client'

import { useTheme } from '@/lib/theme-context'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import type { Brand } from '@/types/brand'

const navLinks = [
  { href: '/login', label: 'Iniciar sesion' },
  { href: '/registro', label: 'Registrarse' },
  { href: '/app', label: 'App' },
  { href: '/bonos', label: 'Bonos' },
  { href: '/juegos', label: 'Juegos' },
  { href: '/finanzas', label: 'Finanzas' },
]

interface Props {
  brand: Brand
  ctaPrimary?: string
}

export default function MonoBrandNavClient({ brand, ctaPrimary = 'Jugar ahora' }: Props) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleThemeChange = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const isLight = resolvedTheme === 'light'

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: isLight ? 'rgba(255,255,255,0.95)' : 'rgba(8,10,16,0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${isLight ? '#e5e7eb' : 'var(--gray-3)'}`,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        maxWidth: '1180px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          aria-label={brand.brand_name}>
          <Image
            src={brand.logo_path}
            alt={brand.brand_name}
            width={100}
            height={32}
            priority
            style={{ height: '32px', width: 'auto' }}
          />
        </a>

        <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontSize: '14px',
                fontWeight: 500,
                color: isLight ? '#374151' : 'var(--gray-1)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color 0.2s',
              }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={handleThemeChange}
            style={{
              background: isLight ? '#f3f4f6' : 'var(--surface-2)',
              border: `1px solid ${isLight ? '#e5e7eb' : 'var(--gray-3)'}`,
              borderRadius: '6px',
              padding: '8px',
              cursor: 'pointer',
              color: isLight ? '#374151' : 'var(--gray-1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            title={`Cambiar a modo ${resolvedTheme === 'light' ? 'oscuro' : 'claro'}`}
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href={brand.affiliate_url || '/registro'} style={{
            fontSize: '14px',
            fontWeight: 700,
            padding: '10px 20px',
            borderRadius: '999px',
            background: 'var(--gold)',
            color: '#000',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'transform 0.15s',
          }}>
            {ctaPrimary}
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: isLight ? '#374151' : 'var(--white)',
              cursor: 'pointer',
              padding: '8px',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{
          display: 'none',
          flexDirection: 'column',
          gap: '4px',
          padding: '16px 24px 24px',
          borderTop: `1px solid ${isLight ? '#e5e7eb' : 'var(--gray-3)'}`,
          background: isLight ? '#fff' : 'var(--surface-1)',
        }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{
              display: 'block',
              padding: '12px 0',
              fontSize: '15px',
              fontWeight: 500,
              color: isLight ? '#374151' : 'var(--gray-1)',
              textDecoration: 'none',
              borderBottom: `1px solid ${isLight ? '#e5e7eb' : 'var(--gray-3)'}`,
            }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
