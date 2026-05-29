# Adding a new market

## Steps

1. **Add market config** to `config/sites.ts`:
   ```typescript
   cl: {
     market: 'cl',
     locale: 'es-CL',
     currency: 'CLP',
     currencyLocale: 'es-CL',
     lang: 'es',
     siteName: 'bet30playcl.com',
     siteDescription: 'iGaming Affiliate Platform - Chile',
     accentColor: 'var(--accent-slot)',
     dataDir: 'cl',
     domain: 'bet30playcl.com',
   }
   ```

2. **Create data directory** `data/cl/` and add JSON files

3. **In Vercel**: create new project from same repo, set env var:
   ```
   SITE_MARKET=cl
   ```

4. **Deploy** 🚀

## Current markets

| Market | Country   | Currency | Locale  |
|--------|-----------|----------|---------|
| ar     | Argentina | ARS      | es-AR   |
| br     | Brazil    | BRL      | pt-BR   |
| mx     | Mexico    | MXN      | es-MX   |
