// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import { getCurrentBrand } from '@/config/brands'

// Slot_Review рендерится на /slots/{slug}; всё прочее ловит app/[slug] → /{slug}
function pathForPage(slug: string, contentType: string): string {
  return contentType === 'Slot_Review' ? `/slots/${slug}` : `/${slug}`
}

// Статические страницы, существующие в каждом бренде (app/*)
const STATIC_ROUTES: Array<{ route: string; priority: number; cf: 'daily' | 'weekly' | 'monthly' }> = [
  { route: '',                 priority: 1.0, cf: 'daily'   },
  { route: '/bonos',           priority: 0.8, cf: 'weekly'  },
  { route: '/juegos',          priority: 0.7, cf: 'weekly'  },
  { route: '/juegos/slots',    priority: 0.7, cf: 'weekly'  },
  { route: '/juegos/crash',    priority: 0.7, cf: 'weekly'  },
  { route: '/juegos/deportes', priority: 0.7, cf: 'weekly'  },
  { route: '/finanzas',        priority: 0.6, cf: 'monthly' },
  { route: '/app',             priority: 0.5, cf: 'monthly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const brand = getCurrentBrand()
  const baseUrl = `https://${brand.affiliate_domain}`
  const dataDir = path.join(process.cwd(), 'data', brand.brand_slug)

  // 1. Статические маршруты
  const entries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${baseUrl}${r.route}`,
    lastModified: new Date(),
    changeFrequency: r.cf,
    priority: r.priority,
  }))

  // 2. Динамические контент-страницы из data/{brand_slug}/*.json
  let files: string[] = []
  try {
    files = await fs.readdir(dataDir)
  } catch {
    files = [] // папки ещё нет (бренд без контента) — отдаём только статику
  }

  for (const file of files) {
    if (!file.endsWith('.json') || file.startsWith('_')) continue // skip _home.json
    const slug = file.replace(/\.json$/, '')
    try {
      const raw = await fs.readFile(path.join(dataDir, file), 'utf-8')
      const data = JSON.parse(raw)
      entries.push({
        url: `${baseUrl}${pathForPage(slug, data.content_type || '')}`,
        lastModified: data.last_refreshed ? new Date(data.last_refreshed) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    } catch {
      // битый/нечитаемый файл — пропускаем
    }
  }

  return entries
}
