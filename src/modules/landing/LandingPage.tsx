/* =====================================================
   LAIMS Landing Page V2 – Verbesserte Entry-Experience
   =====================================================
   Funnel: Hero → Trust Bar → Nutzen → So funktioniert's →
   Produkt → Testimonials → Pricing → Add-ons → FAQ → CTA
   ===================================================== */

import type { FC } from 'hono/jsx'

const SITE_URL = 'https://www.laims-app.com'
const OG_IMAGE = `${SITE_URL}/static/img/og-image.png`

export const LandingPage: FC = () => {
  return (
    <html lang="de">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="laims-build" content={BUILD_VERSION} />
        <title>LAIMS – Textilveredelungs-ERP für professionelle Betriebe</title>
        <meta name="description" content="LAIMS ist die Cloud-Software für Textilveredelung: Aufträge, Produktion, Versand und Faktura in einem System. Gebaut für Siebdruck, DTG, DTF, Stickerei. 14 Tage kostenlos testen." />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL + '/'} />

        {/* Open Graph (Facebook, LinkedIn, WhatsApp, Slack, …) */}
        <meta property="og:site_name" content="LAIMS" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL + '/'} />
        <meta property="og:title" content="LAIMS – Die Cloud-Software für Textilveredelung" />
        <meta property="og:description" content="Aufträge, Produktion, Versand und Faktura in einem System. Gebaut für Siebdruck, DTG, DTF, Stickerei & Sublimation. 14 Tage kostenlos testen." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="LAIMS – Cloud-ERP für Textilveredelungsbetriebe" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LAIMS – Die Cloud-Software für Textilveredelung" />
        <meta name="twitter:description" content="Aufträge, Produktion, Versand und Faktura in einem System. 14 Tage kostenlos testen." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="LAIMS – Cloud-ERP für Textilveredelungsbetriebe" />

        {/* Theme color für mobile Browser */}
        <meta name="theme-color" content="#1a2744" />

        {/* Lokal gehostete Assets – DSGVO-konform, keine Drittquellen */}
        <link rel="preload" as="font" type="font/woff2" href="/static/fonts/inter/inter-latin-wght-normal.woff2" crossorigin="anonymous" />
        <link rel="stylesheet" href="/static/fonts/inter/inter.css" />
        <link rel="stylesheet" href="/static/fonts/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/static/css/tailwind.css" />
        <style dangerouslySetInnerHTML={{__html: CUSTOM_CSS}} />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: SCHEMA_ORG}} />
        <script dangerouslySetInnerHTML={{__html: `window.__LAIMS_API_BASE__ = "${process.env.VITE_API_BASE_URL || 'http://localhost:3002'}"; window.__LAIMS_APP_BASE__ = "${process.env.VITE_APP_BASE_URL || 'http://localhost:3001'}"; window.__LAIMS_TURNSTILE_SITE_KEY__ = "${process.env.TURNSTILE_SITE_KEY || ''}";`}} />
        {/* Cloudflare Turnstile – wird nur geladen, wenn ein Site-Key gesetzt ist. */}
        {process.env.TURNSTILE_SITE_KEY ? (
          <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
        ) : null}
      </head>
      <body class="bg-white font-sans antialiased text-gray-800">

        {/* ====== NAVIGATION ====== */}
        <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="landing-nav">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 h-16 lg:h-20">
              <a href="/landing" class="flex items-center">
                <img src="/static/img/laims-logo-white.png" alt="LAIMS – Software für Textilveredelung" class="w-[140px] sm:w-[160px] lg:w-[200px] h-auto" />
              </a>
              <div class="hidden md:flex items-center gap-8">
                <a href="#nutzen" class="text-sm text-white/70 hover:text-white transition-colors">Nutzen</a>
                <a href="#so-funktionierts" class="text-sm text-white/70 hover:text-white transition-colors">So funktioniert's</a>
                <a href="#produkt" class="text-sm text-white/70 hover:text-white transition-colors">Produkt</a>
                <a href="#preise" class="-sm text-white/70 hover:text-white transition-colors">Preise</a>
                <a href="#faq" class="text-sm text-white/70 hover:text-white transition-colors">FAQ</a>
              </div>
              <div class="flex items-center gap-3">
                <a href={`${process.env.VITE_APP_BASE_URL}/login`} target="_blank" rel="noopener noreferrer" class="hidden sm:inline-flex text-sm text-white/70 hover:text-white transition-colors font-medium px-4 py-2">
                  Anmelden
                </a>
                <a href="#preise" class="inline-flex items-center gap-2 whitespace-nowrap px-3 sm:px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-navy-900 font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-lime-500/20 hover:shadow-lime-500/30">
                  Kostenlos testen
                </a>
                {/* Mobile menu button */}
                <button type="button" class="md:hidden text-white/70 hover:text-white p-2" onclick="toggleMobileMenu()">
                  <i class="fas fa-bars text-lg"></i>
                </button>
              </div>
            </div>
            {/* Mobile menu */}
            <div id="mobile-menu" class="hidden md:hidden pb-4 border-t border-white/10 mt-2 pt-4">
              <div class="flex flex-col gap-3">
                <a href="#nutzen" class="text-sm text-white/70 hover:text-white transition-colors py-1">Nutzen</a>
                <a href="#so-funktionierts" class="text-sm text-white/70 hover:text-white transition-colors py-1">So funktioniert's</a>
                <a href="#produkt" class="text-sm text-white/70 hover:text-white transition-colors py-1">Produkt</a>
                <a href="#preise" class="text-sm text-white/70 hover:text-white transition-colors py-1">Preise</a>
                <a href="#faq" class="text-sm text-white/70 hover:text-white transition-colors py-1">FAQ</a>
                <a href={`${process.env.VITE_APP_BASE_URL}/login`} target="_blank" rel="noopener noreferrer" class="text-sm text-white/70 hover:text-white transition-colors py-1 sm:hidden">Anmelden</a>
              </div>
            </div>
          </div>
        </nav>

        {/* ====== HERO ====== */}
        <section class="relative min-h-screen flex items-center bg-navy-950 overflow-hidden pt-20">
          {/* Background */}
          <div class="absolute inset-0">
            <div class="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"></div>
            <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M0 0h60v60H0z&quot; fill=&quot;none&quot;/%3E%3Cpath d=&quot;M30 0v60M0 30h60&quot; stroke=&quot;%23fff&quot; stroke-width=&quot;0.5&quot;/%3E%3C/svg%3E'); background-size: 60px 60px;"></div>
            <div class="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-lime-500/8 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-navy-500/15 rounded-full blur-[80px]"></div>
          </div>

          {/* Hinweis: Diese Landing-Page-Quelldatei wurde beim Upload abgeschnitten.
              Sie dient hier als valider Platzhalter. Der vollständige Quellcode des
              Nutzers kann diese Datei jederzeit ersetzen. Die OEM-Partner-Seite
              (/oempartner) ist davon unabhängig und voll funktionsfähig. */}
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <img src="/static/img/laims-logo-white.svg" alt="LAIMS" class="w-[200px] h-auto mx-auto mb-8" />
            <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Die Cloud-Software für <span style="color:#84cc16">Textilveredelung</span>
            </h1>
            <p class="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
              Aufträge, Produktion, Versand und Faktura in einem System – gebaut für
              Siebdruck, DTG, DTF, Stickerei &amp; Sublimation.
            </p>
            <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/oempartner" class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-lime-500 hover:bg-lime-400 text-navy-900 font-bold rounded-xl transition-all shadow-xl shadow-lime-500/25">
                Zum OEM Partner Program →
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}

const BUILD_VERSION = 'landing-placeholder'

const CUSTOM_CSS = `:root{--lime:#84cc16}html{scroll-behavior:smooth}::selection{background:rgba(132,204,22,.3)}`

const SCHEMA_ORG = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LAIMS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Cloud-ERP für Textilveredelung – Siebdruck, DTG, DTF, Stickerei, Sublimation.',
})
