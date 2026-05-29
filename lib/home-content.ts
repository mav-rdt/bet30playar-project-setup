// lib/home-content.ts
import 'server-only'
import fs from 'fs'
import path from 'path'
import type { HomeContent } from '@/types/brand'
import { getCurrentBrand } from '@/config/brands'

let cached: HomeContent | null = null

export function getHomeContent(): HomeContent {
  if (cached) return cached

  const brand = getCurrentBrand()
  const filePath = path.join(process.cwd(), 'data', brand.brand_slug, '_home.json')

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `[home-content] Missing _home.json for brand "${brand.brand_slug}". ` +
      `Expected at: ${filePath}. Run workflow 04 to generate.`
    )
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  cached = JSON.parse(raw) as HomeContent
  return cached
}
