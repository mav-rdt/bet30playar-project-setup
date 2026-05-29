export function getAccent(contentType: string): string {
  switch (contentType) {
    case 'Casino_Review':
      return 'var(--gold)'
    case 'Slot_Review':
      return 'var(--accent-slot)'
    case 'Strategy':
    case 'Bonus':
      return 'var(--green)'
    default:
      return 'var(--gold)'
  }
}

export function formatCurrency(value: number | null, currency: string = 'ARS', locale: string = 'es-AR'): string {
  if (!value) return '—'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value)
}

export function formatARS(value: number | null): string {
  return formatCurrency(value, 'ARS', 'es-AR')
}

export function formatDate(iso: string, locale: string = 'es-AR'): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}
