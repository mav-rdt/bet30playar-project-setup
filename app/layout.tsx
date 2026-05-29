import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-context'
import { getSiteConfig } from '@/config/sites'
import { getCurrentBrand, getBrandCssVars } from '@/lib/brand'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
})

export async function generateMetadata(): Promise<Metadata> {
  const brand = getCurrentBrand()
  const site = getSiteConfig()
  const url = `https://${brand.affiliate_domain}`

  const marketLabel =
    site.market === 'ar' ? 'Argentina' :
    site.market === 'br' ? 'Brasil' :
    site.market === 'mx' ? 'México' : site.market.toUpperCase()

  return {
    metadataBase: new URL(url),
    title: {
      default: `${brand.brand_name} — Casino en línea ${marketLabel}`,
      template: `%s | ${brand.brand_name}`,
    },
    description: `${brand.brand_name}: casino online con licencia ${brand.license_label}. Slots, crash games y apuestas deportivas. Bonos en pesos y métodos de pago locales.`,
    keywords: `${brand.brand_name}, casino en línea, apuestas deportivas, slots, casino argentina, juegos online`,
    openGraph: {
      type: 'website',
      url,
      siteName: brand.brand_name,
      locale: site.locale.replace('-', '_'),
    },
    icons: {
      icon: '/icon.svg',
    },
    alternates: {
      canonical: url,
    },
    robots: { index: true, follow: true },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const site = getSiteConfig()
  const brandVars = getBrandCssVars()

  return (
    <html
      lang={site.lang}
      data-theme="dark"
      style={{
        '--font-syne': syne.style.fontFamily,
        '--font-dm-sans': dmSans.style.fontFamily,
        '--font-dm-mono': dmMono.style.fontFamily,
        ...brandVars,
      } as React.CSSProperties}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'system';
                let resolved = 'dark';
                if (theme === 'system') {
                  resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                } else {
                  resolved = theme;
                }
                document.documentElement.setAttribute('data-theme', resolved);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
