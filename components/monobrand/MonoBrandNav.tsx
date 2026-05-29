// Server Component — читает только brand (нет server-only зависимостей)
import { getCurrentBrand } from '@/config/brands'
import MonoBrandNavClient from './MonoBrandNavClient'

export default function MonoBrandNav() {
  const brand = getCurrentBrand()
  return (
    <MonoBrandNavClient
      brand={brand}
      ctaPrimary="Jugar ahora"
    />
  )
}
