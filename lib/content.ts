import 'server-only'
import type { ArPagePayload } from '@/types/content'
import { readdir, readFile } from 'fs/promises'
import path from 'path'
import { getCurrentBrand } from '@/config/brands'

// Папка данных текущего бренда: data/{brand_slug}/
// _market оставлен в сигнатурах для обратной совместимости со старыми
// вызовами getAllSlugs('ar') / getPageBySlug('ar', slug) — не используется.
function getDataDir(): string {
  return path.join(process.cwd(), 'data', getCurrentBrand().brand_slug)
}

export async function getAllSlugs(_market?: string): Promise<string[]> {
  try {
    const dataDir = getDataDir()
    const files = await readdir(dataDir)
    return files
      .filter((f) => f.endsWith('.json') && !f.startsWith('_')) // skip _home.json
      .map((f) => f.replace('.json', ''))
  } catch (error) {
    console.error('[content] Error reading slugs:', error)
    return []
  }
}

export async function getPageBySlug(_market?: string, slug?: string): Promise<ArPagePayload | null> {
  try {
    const dataDir = getDataDir()
    const filePath = path.join(dataDir, `${slug}.json`)
    const fileContent = await readFile(filePath, 'utf-8')
    return JSON.parse(fileContent) as ArPagePayload
  } catch (error) {
    console.error('[content] Error reading page:', error)
    return null
  }
}
