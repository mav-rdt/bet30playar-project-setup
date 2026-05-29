import type { Metadata } from 'next'
import MonoBrandNav from '@/components/monobrand/MonoBrandNav'
import MonoBrandHero from '@/components/monobrand/MonoBrandHero'
import FeaturesSection from '@/components/monobrand/FeaturesSection'
import BonusSection from '@/components/monobrand/BonusSection'
import GamesSection from '@/components/monobrand/GamesSection'
import PaymentsSection from '@/components/monobrand/PaymentsSection'
import AppSection from '@/components/monobrand/AppSection'
import MonoBrandFooter from '@/components/monobrand/MonoBrandFooter'
import { getCurrentBrand, getHomeContent } from '@/lib/brand'

export async function generateMetadata(): Promise<Metadata> {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const url = `https://${brand.affiliate_domain}`

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url,
      siteName: brand.brand_name,
      locale: 'es_AR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta.title,
      description: content.meta.description,
    },
  }
}

export default function HomePage() {
  const brand = getCurrentBrand()
  const content = getHomeContent()
  const url = `https://${brand.affiliate_domain}`

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.brand_name,
    url,
    inLanguage: 'es-AR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/juegos?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.brand_name,
    url,
    logo: `${url}${brand.logo_path}`,
    description: content.meta.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url,
    },
    areaServed: 'AR',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <MonoBrandNav brand={brand} hero={content.hero} />
      <main> 
        <FeaturesSection />
        <BonusSection />
        <GamesSection />
        <PaymentsSection />
        <AppSection />
      </main>
      <MonoBrandFooter />
    </>
  )
}
