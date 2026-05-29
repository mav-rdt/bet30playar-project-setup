import { getCurrentMarket, DEFAULT_MARKET } from './market'

export interface SiteConfig {
  market: string
  locale: string
  currency: string
  currencyLocale: string
  lang: string
  siteName: string
  siteDescription: string
  accentColor: string
  dataDir: string
  domain: string
}

export const sites: Record<string, SiteConfig> = {
  ar: {
    market: 'ar',
    locale: 'es-AR',
    currency: 'ARS',
    currencyLocale: 'es-AR',
    lang: 'es',
    siteName: 'bet30playar.com',
    siteDescription: 'iGaming Affiliate Platform - Argentina',
    accentColor: 'var(--accent-slot)',
    dataDir: 'ar',
    domain: 'bet30playar.com',
  },
  br: {
    market: 'br',
    locale: 'pt-BR',
    currency: 'BRL',
    currencyLocale: 'pt-BR',
    lang: 'pt',
    siteName: 'bet30playbr.com',
    siteDescription: 'iGaming Affiliate Platform - Brasil',
    accentColor: 'var(--accent-slot)',
    dataDir: 'br',
    domain: 'bet30playbr.com',
  },
  mx: {
    market: 'mx',
    locale: 'es-MX',
    currency: 'MXN',
    currencyLocale: 'es-MX',
    lang: 'es',
    siteName: 'bet30playmx.com',
    siteDescription: 'iGaming Affiliate Platform - México',
    accentColor: 'var(--accent-slot)',
    dataDir: 'mx',
    domain: 'bet30playmx.com',
  },
}

export function getSiteConfig(): SiteConfig {
  const market = getCurrentMarket()
  if (!(market in sites)) {
    console.warn(`[config] Unknown market "${market}", falling back to "${DEFAULT_MARKET}"`)
    return sites[DEFAULT_MARKET]
  }
  return sites[market]
}
