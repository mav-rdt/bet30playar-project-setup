export type JurisdictionLicense = 'CABA_LOTBA' | 'PBA_IPLyC' | 'All_Argentina'
export type Market = 'ar' | 'br' | 'mx'

export interface Brand {
  brand_slug: string
  brand_name: string
  market: Market
  domain: string
  affiliate_domain: string
  affiliate_url: string
  logo_path: string
  primary_color: string
  primary_color_dim: string
  primary_color_line: string
  jurisdiction_license: JurisdictionLicense
  license_label: string
}

export interface HomeMeta {
  title: string
  description: string
}

export interface HomeHero {
  eyebrow: string
  h1_suffix: string
  subtitle: string
  cta_primary: string
  cta_secondary: string
  trust_badges: string[]
}

export interface HomeBonus {
  title: string
  amount_ars: number
  amount_label: string
  wagering: string
  description: string
  cta: string
  slug_ref?: string
}

export type FeatureIcon =
  | 'shield' | 'zap' | 'wallet' | 'gift'
  | 'gamepad' | 'headset' | 'trophy' | 'lock'

export interface HomeFeature {
  icon: FeatureIcon
  title: string
  description: string
}

export type PaymentMethodName = 'MercadoPago' | 'Ualá' | 'Pago Fácil' | 'Rapipago'

export interface HomePayment {
  name: PaymentMethodName
  min_ars: number
  speed: string
  fee_label: string
}

export type GameCategory = 'Slots' | 'Crash' | 'Live' | 'Deportes'

export interface HomeGame {
  name: string
  category: GameCategory
  rtp?: number | null
  slug_ref?: string
}

export interface HomeAppSection {
  headline: string
  body: string
  features: string[]
}

export interface HomeFaq {
  q: string
  a: string
}

export interface HomeFooter {
  tagline: string
  responsible_gaming_note: string
}

export interface HomeContent {
  brand_slug: string
  generated_at: string
  meta: HomeMeta
  hero: HomeHero
  bonuses: HomeBonus[]
  features: HomeFeature[]
  payments: {
    intro: string
    methods: HomePayment[]
  }
  games: {
    intro: string
    featured: HomeGame[]
  }
  app: HomeAppSection
  faq: HomeFaq[]
  footer: HomeFooter
}
