export interface MathData {
  RTP: number | null
  Min_Dep_ARS: number | null
  Max_Bonus_ARS: number | null
  Wagering: number | null
}

export interface FaqItem {
  q: string
  a: string
}

export interface SidebarMetric {
  label: string
  value: string
  color?: string
}

export interface RatingBreakdownItem {
  label: string
  score: number
}

export interface ArPagePayload {
  slug: string
  content_type: string
  entity_name?: string
  h1?: string
  meta_title?: string
  meta_description?: string
  intro?: string
  math_breakdown?: string
  local_advantage?: string
  vs_competitor?: string
  features?: string[]
  faq?: FaqItem[]
  validated_math?: MathData
  validated_gateways?: string
  validated_jurisdiction?: string
  flags?: string[]
  source_image_url?: string
  cdn_image_url?: string
  competitor_url?: string
  last_refreshed?: string
  schema_jsonld?: object
  faq_schema?: object

  // Display fields used by homepage and review pages
  score?: number
  score_max?: number
  brand_letter?: string
  description?: string
  tags?: string[]
  gateways_list?: string[]
  bonus_ars?: string
  bonus_label?: string
  sidebar_metrics?: SidebarMetric[]
  verdict_title?: string
  verdict_body?: string
  rating_breakdown?: RatingBreakdownItem[]
}
