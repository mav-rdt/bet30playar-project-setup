import { notFound } from 'next/navigation'
import path from 'path'
import { promises as fs } from 'fs'
import { getCurrentMarket } from '@/config/market'

import SlotNav from '@/components/slot/SlotNav'
import SlotHero from '@/components/slot/SlotHero'
import SlotVerdictStrip from '@/components/slot/SlotVerdictStrip'
import SlotOverview from '@/components/slot/SlotOverview'
import SlotMetrics from '@/components/slot/SlotMetrics'
import SlotBankroll from '@/components/slot/SlotBankroll'
import SlotWhereToPlay from '@/components/slot/SlotWhereToPlay'
import SlotFeatures from '@/components/slot/SlotFeatures'
import SlotFAQ from '@/components/slot/SlotFAQ'
import SlotLastUpdated from '@/components/slot/SlotLastUpdated'
import SlotSimilar from '@/components/slot/SlotSimilar'
import SlotGlossary from '@/components/slot/SlotGlossary'
import SlotFooter from '@/components/slot/SlotFooter'

async function loadSlotBySlug(slug: string) {
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
      if (data.content_type === 'Slot_Review') {
        slugs.push({ slug: f.replace(/\.json$/, '') })
      }
    } catch {
      // skip unreadable files
    }
  }
  return slugs
}

export default async function SlotPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await loadSlotBySlug(slug)

  if (!data) {
    notFound()
  }

  return (
    <>
      <SlotNav slug={slug} />
      <main>
        <SlotHero data={data} />
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
          <SlotVerdictStrip verdict={data.verdict_body} title={data.verdict_title} />
        </div>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '40px 24px 80px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 320px',
              gap: '32px',
              alignItems: 'start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <SlotOverview />
              <SlotMetrics metrics={data.metrics} />
              <SlotBankroll strategies={data.bankroll_strategies} table={data.bankroll_table} />
              <SlotWhereToPlay data={data.where_to_play} />
              <SlotFeatures features={data.features} />
              <SlotFAQ />
            </div>
            <div style={{ position: 'sticky', top: '76px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <SlotLastUpdated date={data.last_refreshed} />
              <SlotSimilar slots={data.similar_slots} />
              <SlotGlossary items={data.glossary} />
            </div>
          </div>
        </div>
      </main>
      <SlotFooter />
    </>
  )
}