import { notFound } from 'next/navigation'
import path from 'path'
import { promises as fs } from 'fs'
import { getCurrentBrand } from '@/config/brands'

import CasinoNav from '@/components/casino/CasinoNav'
import CasinoHero from '@/components/casino/CasinoHero'
import VerdictStrip from '@/components/casino/VerdictStrip'
import CasinoOverview from '@/components/casino/CasinoOverview'
import MathAnalysis from '@/components/casino/MathAnalysis'
import ProConGrid from '@/components/casino/ProConGrid'
import PaymentMethods from '@/components/casino/PaymentMethods'
import KeyFeatures from '@/components/casino/KeyFeatures'
import CasinoFAQ from '@/components/casino/CasinoFAQ'
import LastUpdated from '@/components/casino/LastUpdated'
import RatingBreakdown from '@/components/casino/RatingBreakdown'
import CompareRanking from '@/components/casino/CompareRanking'
import CasinoFooter from '@/components/casino/CasinoFooter'

async function loadCasinoBySlug(slug: string) {
  const market = getCurrentMarket()
  const filePath = path.join(process.cwd(), 'data', market, `${slug}.json`)

  try {
    const raw = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const market = getCurrentMarket()
  const dirPath = path.join(process.cwd(), 'data', market)
  let files: string[]
  try {
    files = await fs.readdir(dirPath)
  } catch {
    return []
  }

  const slugs: { slug: string }[] = []
  for (const f of files.filter((f) => f.endsWith('.json'))) {
    try {
      const raw = await fs.readFile(path.join(dirPath, f), 'utf-8')
      const data = JSON.parse(raw)
      if (data.content_type === 'Casino_Review') {
        slugs.push({ slug: f.replace(/\.json$/, '') })
      }
    } catch {
      // skip unreadable files
    }
  }
  return slugs
}

export default async function CasinoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await loadCasinoBySlug(slug)

  if (!data) {
    notFound()
  }

  return (
    <>
      <CasinoNav slug={slug} />
      <main>
        <CasinoHero data={data} />
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
          <VerdictStrip verdict={data.verdict_body} title={data.verdict_title} />
        </div>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '40px 24px 80px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '32px',
              alignItems: 'start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <CasinoOverview />
              <MathAnalysis math={data.validated_math} />
              <ProConGrid />
              <PaymentMethods />
              <KeyFeatures />
              <CasinoFAQ />
            </div>
            <div style={{ position: 'sticky', top: '76px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <LastUpdated date={data.last_refreshed} />
              <RatingBreakdown ratings={data.rating_breakdown} />
              <CompareRanking active={data.entity_name || 'Casino'} />
            </div>
          </div>
        </div>
      </main>
      <CasinoFooter />
    </>
  )
}
