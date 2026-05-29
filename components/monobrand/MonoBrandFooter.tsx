// Server Component — сам читает brand
import { getCurrentBrand } from '@/config/brands'
import MonoBrandFooterClient from './MonoBrandFooterClient'

export default function MonoBrandFooter() {
  const brand = getCurrentBrand()
  return <MonoBrandFooterClient brand={brand} />
}
