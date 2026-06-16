// app/robots.ts
import type { MetadataRoute } from 'next'
import { getCurrentBrand } from '@/config/brands'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${getCurrentBrand().affiliate_domain}`
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/login', '/registro'], // auth-страницы — не в индекс
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
