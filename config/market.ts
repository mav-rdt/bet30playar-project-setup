export const DEFAULT_MARKET = 'ar'

export function getCurrentMarket(): string {
  return process.env.SITE_MARKET ?? DEFAULT_MARKET
}
