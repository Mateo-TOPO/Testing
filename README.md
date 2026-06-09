# LAIMS Landing Page & OEM Partner Program

Cloud-ERP Website für Textilveredelungsbetriebe (Siebdruck, DTG, DTF, Stickerei, Sublimation)
mit eigener **OEM-Partner-Seite**.

## Stack

Hono + JSX (SSR) · Cloudflare Pages/Workers · Vite · Tailwind CSS · TypeScript

## Seiten / Routen

| Route | Beschreibung |
|---|---|
| `/landing` (und `*`) | Produkt-Landing-Page |
| **`/oempartner`** | **OEM Partner Program** – „Vom Maschinenverkauf zur digitalen Produktionslösung" |
| `POST /api/enterprise/inquiry` | Kontakt-/Partner-Anfrage per E-Mail (SMTP, nodemailer) |
| `GET /api/public/*` | Proxy auf das LAIMS-Backend (`VITE_API_BASE_URL`) |

## Schlüsseldateien

- `src/index.tsx` — Routing, API-Proxy, renderToString
- `src/modules/landing/LandingPage.tsx` — Produkt-Landing-Page (SSR)
- `src/modules/landing/OemPartnerPage.tsx` — **OEM-Partner-Seite (SSR)**
- `public/static/js/oem-partner.js` — Interaktivität der OEM-Seite (Nav, Scroll-Reveal, FAQ, Formular)
- `public/static/css/tailwind.css` — kompiliertes Tailwind
- `public/static/fonts/` — lokal gehostete Schriften (Inter) & Icons (FontAwesome) – DSGVO-konform

## Die OEM-Partner-Seite

Der Funnel folgt dem LAIMS OEM Partner Executive Paper:

> Hero → Ausgangslage/Chance → Partnervorteile → Was LAIMS leistet (8 Module) →
> Partnermodelle (Referral · Reseller · Bundle · OEM/Whitelabel) →
> Wirtschaftlicher Nutzen → Endkundennutzen → Marktzugang → Pilot-Roadmap → FAQ → CTA/Kontakt

Design: navy/lime-Brand-System, animierter Hero mit Maschine→LAIMS→Prozesse-Story,
Mini-Dashboard, interaktive Partnermodell-Karten mit Wertschöpfungs-Indikator,
Scroll-Reveal-Animationen und ein Partner-Kontaktformular (nutzt die bestehende
Enterprise-Inquiry-Route).

## Env-Variablen

| Variable | Beschreibung | Default |
|---|---|---|
| `VITE_API_BASE_URL` | Backend-API | `http://localhost:3002` |
| `VITE_APP_BASE_URL` | LAIMS-App (Register/Login-Links) | `http://localhost:3001` |

SMTP / Turnstile siehe `.env.example`.

## Befehle

```bash
npm install
npm run build:css                 # Tailwind → public/static/css/tailwind.css
npx vite --host 0.0.0.0 --port 3000   # Dev-Server (SSR)
# danach: http://localhost:3000/oempartner
```

> Hinweis: `src/modules/landing/LandingPage.tsx` wurde beim Upload abgeschnitten und
> hier als valider, schlanker Platzhalter wiederhergestellt (verlinkt auf `/oempartner`).
> Der vollständige Original-Quellcode kann diese Datei jederzeit ersetzen – die
> OEM-Seite ist davon unabhängig.
