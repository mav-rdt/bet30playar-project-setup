// lib/brand.ts
import type * as React from 'react'
import { getCurrentBrand } from '@/config/brands'
import { getSiteConfig, type SiteConfig } from '@/config/sites'
import { getHomeContent } from '@/lib/home-content'
import type { Brand, HomeContent } from '@/types/brand'

export { getCurrentBrand, getHomeContent }
export type { Brand, HomeContent }

/**
 * Связка brand + site (market). Когда нужен и брендовый домен,
 * и locale/currency рынка одновременно.
 */
export function getBrandContext(): { brand: Brand; site: SiteConfig } {
  return {
    brand: getCurrentBrand(),
    site: getSiteConfig(),
  }
}

/**
 * CSS-переменные для инжекта в :root через layout.tsx.
 * Подменяет --gold на primary_color текущего бренда.
 */
export function getBrandCssVars(): React.CSSProperties {
  const brand = getCurrentBrand()
  return {
    '--gold': brand.primary_color,
    '--gold-dim': brand.primary_color_dim,
    '--gold-line': brand.primary_color_line,
  } as React.CSSProperties
}
