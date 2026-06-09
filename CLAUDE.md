# LAIMS Landing Page

Cloud-ERP Landing Page für Textilveredelungsbetriebe (Siebdruck, DTG, DTF, Stickerei, Sublimation).

## Stack

Hono + JSX (SSR) · Cloudflare Pages/Workers · Vite · Tailwind CSS (CDN) · TypeScript

## Schlüsseldateien

- `src/index.tsx` — Routing, API-Proxy, renderToString
- `src/modules/landing/LandingPage.tsx` — gesamte Landing Page (eine Datei, SSR)
- `public/static/js/landing-checkout.js` — Checkout-Flow (client-seitig)

## Env-Variablen

| Variable | Beschreibung | Default |
|---|---|---|
| `VITE_API_BASE_URL` | Backend-API | `http://localhost:3002` |
| `VITE_APP_BASE_URL` | LAIMS-App (Register/Login-Links) | `http://localhost:3001` |

## Befehle

```bash
pnpm dev        # Dev-Server
pnpm build      # Vite-Build → dist/
pnpm preview    # Wrangler Pages auf dist/
pnpm deploy     # build + wrangler pages deploy dist
```

## Navigation

Hero → Trust Bar → Probleme → So funktioniert's → Produkt → Testimonials → Preise → Add-ons → FAQ → CTA  
Anchors: `#produkt` `#preise` `#faq` `#addons`

## Docs (nur bei Bedarf einlesen)

| Datei | Einlesen wenn... |
|---|---|
| [`docs/api.md`](docs/api.md) | du an API-Feldern, `DYNAMIC_PACKAGES_SCRIPT` oder Paket-Rendering arbeitest |
| [`docs/pricing.md`](docs/pricing.md) | du an Preiskarten, Farben, Buttons, Slugs oder Checkout arbeitest |
| [`docs/architecture.md`](docs/architecture.md) | du die Rendering-Pipeline, Konstanten oder globale JS-Objekte verstehen musst |
