import 'server-only'

import type { ArPagePayload } from '@/types/content'
import { readdir, readFile } from 'fs/promises'
import path from 'path'
import { sites } from '@/config/sites'
import { getCurrentMarket, DEFAULT_MARKET } from '@/config/market'

const MARKET_PATTERN = /^[a-z]{2,3}$/

function getDataDir(market?: string): string {
  const m = market ?? getCurrentMarket()
  if (!MARKET_PATTERN.test(m) || !(m in sites)) {
    console.warn(`[content] Unknown or invalid market "${m}", falling back to "${DEFAULT_MARKET}"`)
    return path.join(process.cwd(), 'data', DEFAULT_MARKET)
  }
  return path.join(process.cwd(), 'data', m)
}

export async function getAllSlugs(market?: string): Promise<string[]> {
  try {
    const dataDir = getDataDir(market)
    const files = await readdir(dataDir)
    return files.filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''))
  } catch (error) {
    console.error('[content] Error reading slugs:', error)
    return []
  }
}

export async function getPageBySlug(market?: string, slug?: string): Promise<ArPagePayload | null> {
  try {
    const dataDir = getDataDir(market)
    const filePath = path.join(dataDir, `${slug}.json`)
    const fileContent = await readFile(filePath, 'utf-8')
    return JSON.parse(fileContent) as ArPagePayload
  } catch (error) {
    console.error('[content] Error reading page:', error)
    return null
  }
}
