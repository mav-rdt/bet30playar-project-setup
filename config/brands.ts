// config/brands.ts
import type { Brand } from '@/types/brand'

// TODO[branding]: на старте все бренды на едином золотом цвете.
// Когда заказчик пришлёт фирменные цвета — менять primary_color / _dim / _line
// для конкретного бренда.

const GOLD = {
  primary_color: '#E8B84B',
  primary_color_dim: 'rgba(232, 184, 75, 0.10)',
  primary_color_line: 'rgba(232, 184, 75, 0.30)',
}

export const brands: Record<string, Brand> = {
  'casino-victoria': {
    brand_slug: 'casino-victoria',
    brand_name: 'Casino Victoria',
    market: 'ar',
    domain: 'casinovictoria.com.ar',
    affiliate_domain: 'casinovictoriawinar.com',
    affiliate_url: 'https://example.com/casino-victoria',
    logo_path: '/logos/casino-victoria.webp',
    jurisdiction_license: 'CABA_LOTBA',
    license_label: 'LOTBA',
    ...GOLD,
  },
  'bet30': {
    brand_slug: 'bet30',
    brand_name: 'Bet30',
    market: 'ar',
    domain: 'bet30.com.ar',
    affiliate_domain: 'bet30vipar.com',
    affiliate_url: 'https://example.com/bet30',
    logo_path: '/logos/bet30.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'bwin': {
    brand_slug: 'bwin',
    brand_name: 'bwin',
    market: 'ar',
    domain: 'bwin.com.ar',
    affiliate_domain: 'bwinonlinear.com',
    affiliate_url: 'https://example.com/bwin',
    logo_path: '/logos/bwin.webp',
    jurisdiction_license: 'CABA_LOTBA',
    license_label: 'LOTBA',
    ...GOLD,
  },
  'bplay': {
    brand_slug: 'bplay',
    brand_name: 'Bplay',
    market: 'ar',
    domain: 'bplay.com.ar',
    affiliate_domain: 'bplaywinar.com',
    affiliate_url: 'https://example.com/bplay',
    logo_path: '/logos/bplay.webp',
    jurisdiction_license: 'PBA_IPLyC',
    license_label: 'IPLyC',
    ...GOLD,
  },
  'betwarrior': {
    brand_slug: 'betwarrior',
    brand_name: 'BetWarrior',
    market: 'ar',
    domain: 'betwarrior.com.ar',
    affiliate_domain: 'betwarriorgamear.com',
    affiliate_url: 'https://example.com/betwarrior',
    logo_path: '/logos/betwarrior.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'aguero-casino': {
    brand_slug: 'aguero-casino',
    brand_name: 'Agüero Casino',
    market: 'ar',
    domain: 'aguerocasino.com.ar',
    affiliate_domain: 'aguerocasinowinar.com',
    affiliate_url: 'https://example.com/aguero-casino',
    logo_path: '/logos/aguero-casino.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'betbox': {
    brand_slug: 'betbox',
    brand_name: 'Betbox',
    market: 'ar',
    domain: 'betbox.com.ar',
    affiliate_domain: 'betboxplayar.com',
    affiliate_url: 'https://example.com/betbox',
    logo_path: '/logos/betbox.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'betfun': {
    brand_slug: 'betfun',
    brand_name: 'Betfun',
    market: 'ar',
    domain: 'betfun.com.ar',
    affiliate_domain: 'betfunwinar.com',
    affiliate_url: 'https://example.com/betfun',
    logo_path: '/logos/betfun.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'casino-de-mendoza': {
    brand_slug: 'casino-de-mendoza',
    brand_name: 'Casino de Mendoza',
    market: 'ar',
    domain: 'casinodemendoza.com.ar',
    affiliate_domain: 'casinodemendozaar.com',
    affiliate_url: 'https://example.com/casino-de-mendoza',
    logo_path: '/logos/casino-de-mendoza.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'celu-apuestas': {
    brand_slug: 'celu-apuestas',
    brand_name: 'Celu Apuestas',
    market: 'ar',
    domain: 'celuapuestas.com.ar',
    affiliate_domain: 'celuapuestaswinar.com',
    affiliate_url: 'https://example.com/celu-apuestas',
    logo_path: '/logos/celu-apuestas.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'jugabet': {
    brand_slug: 'jugabet',
    brand_name: 'Jugabet',
    market: 'ar',
    domain: 'jugabet.com.ar',
    affiliate_domain: 'jugabetgamear.com',
    affiliate_url: 'https://example.com/jugabet',
    logo_path: '/logos/jugabet.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'konabet': {
    brand_slug: 'konabet',
    brand_name: 'Konabet',
    market: 'ar',
    domain: 'konabet.com.ar',
    affiliate_domain: 'konabetvipar.com',
    affiliate_url: 'https://example.com/konabet',
    logo_path: '/logos/konabet.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'masterbets365': {
    brand_slug: 'masterbets365',
    brand_name: 'MasterBets365',
    market: 'ar',
    domain: 'masterbets365.com.ar',
    affiliate_domain: 'masterbets365ar.com',
    affiliate_url: 'https://example.com/masterbets365',
    logo_path: '/logos/masterbets365.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
  'mercadopago-casino': {
    brand_slug: 'mercadopago-casino',
    brand_name: 'MercadoPago Casino',
    market: 'ar',
    domain: 'mercadopagocasino.com.ar',
    affiliate_domain: 'mercadopagocasinoargentina.com',
    affiliate_url: 'https://example.com/mercadopago-casino',
    logo_path: '/logos/mercadopago-casino.webp',
    jurisdiction_license: 'All_Argentina',
    license_label: 'Sin licencia nacional',
    ...GOLD,
  },
}

const DEFAULT_BRAND_SLUG = 'casino-victoria'

export function getCurrentBrand(): Brand {
  const slug = process.env.BRAND_SLUG || DEFAULT_BRAND_SLUG
  const brand = brands[slug]
  if (!brand) {
    throw new Error(
      `[brand] Unknown BRAND_SLUG="${slug}". Available: ${Object.keys(brands).join(', ')}`
    )
  }
  return brand
}

export function getAllBrandSlugs(): string[] {
  return Object.keys(brands)
}
