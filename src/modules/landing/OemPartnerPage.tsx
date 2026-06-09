/* =====================================================
   LAIMS OEM Partner Program – Landing Page
   =====================================================
   Funnel: Hero → Story (Maschine→Software→Prozesse) →
   Vorteile → Was LAIMS leistet (8 Module) →
   Partnermodelle (Referral/Reseller/Bundle/OEM) →
   Wirtschaftlicher Nutzen → Endkundennutzen →
   Marktzugang → Pilot-Roadmap → FAQ → CTA → Footer
   ===================================================== */

import type { FC } from 'hono/jsx'

const SITE_URL = 'https://www.laims-app.com'
const OG_IMAGE = `${SITE_URL}/static/img/og-image.png`
const APP_BASE = (typeof process !== 'undefined' && process.env.VITE_APP_BASE_URL) || 'https://www.laims-app.com'

/* ---------- Daten ---------- */

const MODULES = [
  { icon: 'fa-address-book', title: 'CRM & Kundenverwaltung', desc: 'Strukturierte Kundendaten und Kommunikation an einem Ort.' },
  { icon: 'fa-file-signature', title: 'Angebote & Aufträge', desc: 'Sauberer kaufmännischer Prozess von der Anfrage bis zum Auftrag.' },
  { icon: 'fa-industry', title: 'Produktion', desc: 'Klare Produktionssteuerung und transparente Statusverwaltung.' },
  { icon: 'fa-pen-ruler', title: 'Editor & Druckdaten', desc: 'Bessere Datenqualität und spürbar weniger Fehler.' },
  { icon: 'fa-file-invoice', title: 'Dokumente', desc: 'Angebote, Rechnungen, Lieferscheine und Gutschriften – automatisiert.' },
  { icon: 'fa-warehouse', title: 'Lager & Versand', desc: 'Bessere operative Kontrolle über Bestände und Auslieferung.' },
  { icon: 'fa-cart-shopping', title: 'Commerce / Orderportal', desc: 'Digitale Kundenbestellungen über ein eigenes Orderportal.' },
  { icon: 'fa-robot', title: 'Schnittstellen & AI Operator', desc: 'Verbindung zu Systemen und zukünftige Automatisierung.' },
]

const PARTNER_MODELS = [
  {
    id: 'referral',
    badge: 'Einstieg',
    icon: 'fa-handshake-angle',
    title: 'Referral Partner',
    tagline: 'Empfehlen & profitieren',
    desc: 'Sie empfehlen LAIMS an passende Kunden weiter. TOPO / LAIMS übernimmt Verkauf, Demo, Setup und Betreuung.',
    fit: 'Geeignet für einen einfachen Einstieg mit geringer operativer Verantwortung.',
    effort: 1,
    points: ['Minimaler Aufwand', 'Provision pro Empfehlung', 'Kein eigener Support nötig'],
  },
  {
    id: 'reseller',
    badge: 'Aktiv',
    icon: 'fa-store',
    title: 'Reseller Partner',
    tagline: 'Verkaufen & betreuen',
    desc: 'Sie verkaufen LAIMS aktiv mit und erhalten eine definierte Marge oder Umsatzbeteiligung.',
    fit: 'Geeignet für Händler mit aktivem Vertrieb und Beratungsanspruch.',
    effort: 2,
    points: ['Definierte Marge', 'Eigene Vertriebshoheit', 'Beratung & Upselling'],
  },
  {
    id: 'bundle',
    badge: 'Beliebt',
    icon: 'fa-box-open',
    title: 'Bundle Partner',
    tagline: 'Kombinieren & wachsen',
    desc: 'LAIMS wird direkt mit Maschinen- oder Equipmentpaketen kombiniert – z. B. DTF-System + RIP + Schulung + LAIMS Workflow.',
    fit: 'Geeignet für Komplettpakete für Einsteiger oder Wachstumsbetriebe.',
    effort: 3,
    points: ['Höhere Abschlussquote', 'Komplettpaket-Angebot', 'Mehr Umsatz pro Deal'],
  },
  {
    id: 'oem',
    badge: 'Strategisch',
    icon: 'fa-layer-group',
    title: 'OEM / Whitelabel Partner',
    tagline: 'Ihre Marke. Unsere Lösung.',
    desc: 'LAIMS wird als Ihre Lösung oder unter gemeinsamer Marke angeboten – z. B. „Partner Workflow Suite powered by LAIMS".',
    fit: 'Geeignet für strategische Partner mit großem Kundenstamm.',
    effort: 4,
    points: ['Eigenes Branding', 'Maximale Wertschöpfung', 'Strategische Partnerschaft'],
  },
]

const PARTNER_BENEFITS = [
  { icon: 'fa-arrow-trend-up', title: 'Neue Erlösmodelle', desc: 'Software, Setup, Schulung und laufende Lizenzen schaffen zusätzliche, wiederkehrende Umsätze – statt rein projektbezogener Hardwareverkäufe.' },
  { icon: 'fa-people-arrows', title: 'Stärkere Kundenbindung', desc: 'Bleiben Sie auch nach dem Maschinenverkauf im operativen Alltag Ihrer Kunden präsent und unverzichtbar.' },
  { icon: 'fa-medal', title: 'Differenzierung', desc: 'Heben Sie sich vom Wettbewerb ab – als Digitalisierungspartner statt reinem Maschinenlieferanten.' },
  { icon: 'fa-bullseye', title: 'Höhere Abschlussquote', desc: 'Komplettpakete aus Maschine + Software + Workflow erhöhen die Abschlusswahrscheinlichkeit deutlich.' },
]

const REVENUE_STREAMS = [
  { icon: 'fa-rocket', label: 'Setup- & Einführungspakete' },
  { icon: 'fa-repeat', label: 'Monatliche Softwarelizenzen' },
  { icon: 'fa-chalkboard-user', label: 'Schulungen & Workshops' },
  { icon: 'fa-headset', label: 'Supportpakete' },
  { icon: 'fa-lightbulb', label: 'Prozessberatung' },
  { icon: 'fa-handshake', label: 'Gemeinsame Kundenprojekte' },
  { icon: 'fa-puzzle-piece', label: 'Upgrades & Erweiterungsmodule' },
]

const CUSTOMER_BENEFITS = [
  { icon: 'fa-hand-sparkles', title: 'Weniger manuelle Arbeit' },
  { icon: 'fa-circle-check', title: 'Weniger Fehler' },
  { icon: 'fa-calendar-check', title: 'Bessere Planung' },
  { icon: 'fa-gauge-high', title: 'Schnellere Abwicklung' },
  { icon: 'fa-award', title: 'Mehr Professionalität' },
  { icon: 'fa-eye', title: 'Volle Übersicht' },
  { icon: 'fa-expand', title: 'Skalierbarkeit' },
  { icon: 'fa-chart-line', title: 'Höhere Auslastung' },
]

const GO_TO_MARKET = [
  { icon: 'fa-desktop', label: 'Gemeinsame Demos' },
  { icon: 'fa-video', label: 'Webinare' },
  { icon: 'fa-tent', label: 'Messeauftritte' },
  { icon: 'fa-tags', label: 'Bundle-Angebote' },
  { icon: 'fa-star', label: 'Referenzkunden' },
  { icon: 'fa-graduation-cap', label: 'Schulungen' },
  { icon: 'fa-palette', label: 'Co-Branding' },
  { icon: 'fa-bullhorn', label: 'Gemeinsame Kampagnen' },
]

const PILOT_STEPS = [
  { n: '1', title: 'Auswahl', desc: '2–5 passende Kundenprojekte gemeinsam identifizieren.' },
  { n: '2', title: 'Setup & Schulung', desc: 'LAIMS einrichten, Team und Kunden onboarden.' },
  { n: '3', title: 'Pilotbetrieb', desc: '3–6 Monate echte Projekte begleiten und Resonanz messen.' },
  { n: '4', title: 'Skalierung', desc: 'Passendes Partnermodell festlegen und ausrollen.' },
]

const FAQ = [
  { q: 'Müssen wir die Software selbst supporten?', a: 'Nein. Im Referral-Modell übernimmt LAIMS Verkauf, Demo, Setup und Betreuung vollständig. In tieferen Modellen (Reseller, OEM) entscheiden Sie selbst, wie viel Sie übernehmen möchten – mit entsprechend höherer Wertschöpfung.' },
  { q: 'Passt LAIMS zu unseren bestehenden Maschinen?', a: 'LAIMS ist herstellerunabhängig und deckt den gesamten Geschäftsprozess ab – von DTF/DTG über Stickmaschinen bis Transferpressen, Plotter und RIP-Systeme. Schnittstellen verbinden LAIMS mit bestehenden Systemen.' },
  { q: 'Wie schnell können wir starten?', a: 'Wir empfehlen einen Pilot mit 2–5 Kundenprojekten über 3–6 Monate. So validieren Sie Marktresonanz, Verkaufsargumentation und das passende Partnermodell – ohne großes Risiko.' },
  { q: 'Können wir LAIMS unter eigener Marke anbieten?', a: 'Ja. Im OEM-/Whitelabel-Modell bieten Sie LAIMS als Ihre Lösung oder unter gemeinsamer Marke an, z. B. als „Partner Workflow Suite powered by LAIMS".' },
]

/* ---------- CSS ---------- */

const CUSTOM_CSS = `
:root { --lime:#84cc16; --navy:#0a0f1e; }
html { scroll-behavior: smooth; }
body { -webkit-font-smoothing: antialiased; }
::selection { background: rgba(132,204,22,.3); }

@keyframes floatY { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-14px) } }
@keyframes pulseGlow { 0%,100%{ opacity:.5 } 50%{ opacity:.9 } }
@keyframes dashFlow { to { stroke-dashoffset: -1000; } }
@keyframes shimmer { 0%{ background-position: -200% 0 } 100%{ background-position: 200% 0 } }

.float { animation: floatY 6s ease-in-out infinite; }
.float-slow { animation: floatY 9s ease-in-out infinite; }
.flow-line { stroke-dasharray: 8 10; animation: dashFlow 24s linear infinite; }
.glow-pulse { animation: pulseGlow 5s ease-in-out infinite; }

.text-gradient { background: linear-gradient(90deg,#a3e635,#84cc16 55%,#65a30d); -webkit-background-clip:text; background-clip:text; color:transparent; }
.shimmer { background: linear-gradient(110deg,#1e2a4a 8%,#27365e 18%,#1e2a4a 33%); background-size:200% 100%; animation: shimmer 6s linear infinite; }

.reveal { opacity:0; transform: translateY(28px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
.reveal.in { opacity:1; transform:none; }
.reveal-d1{ transition-delay:.08s } .reveal-d2{ transition-delay:.16s } .reveal-d3{ transition-delay:.24s } .reveal-d4{ transition-delay:.32s }

.card-hover { transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s, border-color .35s; }
.card-hover:hover { transform: translateY(-6px); }

.grid-bg {
  background-image:
    linear-gradient(rgba(132,204,22,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(132,204,22,.05) 1px, transparent 1px);
  background-size: 44px 44px;
}
.mask-fade { -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 50%, transparent 100%); mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 50%, transparent 100%); }

@media (prefers-reduced-motion: reduce){
  .float,.float-slow,.flow-line,.glow-pulse,.shimmer{ animation:none !important }
  .reveal{ opacity:1 !important; transform:none !important }
  html{ scroll-behavior:auto }
}
`

const SCHEMA_ORG = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'OEM Partner Program',
  provider: { '@type': 'Organization', name: 'LAIMS', url: SITE_URL, brand: 'LAIMS', parentOrganization: { '@type': 'Organization', name: 'TOPO GmbH' } },
  name: 'LAIMS OEM Partner Program',
  description: 'Digitale Komplettlösungen für Händler von Print Equipment, Maschinen und Produktionssystemen. Vom Maschinenverkauf zur digitalen Produktionslösung.',
  areaServed: 'DACH',
  audience: { '@type': 'BusinessAudience', name: 'Händler von Print Equipment, DTF/DTG-Systemen, Stickmaschinen, Transferpressen, Plottern und RIP-Systemen' },
})

const BUILD_VERSION = 'oem-1.0.0'

export const OemPartnerPage: FC = () => {
  return (
    <html lang="de">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="laims-build" content={BUILD_VERSION} />
        <title>LAIMS OEM Partner Program – Vom Maschinenverkauf zur digitalen Produktionslösung</title>
        <meta name="description" content="Werden Sie LAIMS OEM-Partner: Bieten Sie Ihren Kunden nicht nur Maschinen, sondern ein vollständiges digitales Betriebssystem für die Textilveredelung. Neue Erlösmodelle, stärkere Kundenbindung, echte Differenzierung." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL + '/oempartner'} />

        {/* Open Graph */}
        <meta property="og:site_name" content="LAIMS" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL + '/oempartner'} />
        <meta property="og:title" content="LAIMS OEM Partner Program" />
        <meta property="og:description" content="Vom Maschinenverkauf zur digitalen Produktionslösung. Gemeinsam mit starken Partnern digitale Komplettlösungen für Textilveredler schaffen." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LAIMS OEM Partner Program" />
        <meta name="twitter:description" content="Vom Maschinenverkauf zur digitalen Produktionslösung." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <meta name="theme-color" content="#0a0f1e" />
        <link rel="icon" href="/favicon.ico" />

        {/* Lokal gehostete Assets – DSGVO-konform, keine Drittquellen */}
        <link rel="preload" as="font" type="font/woff2" href="/static/fonts/inter/inter-latin-wght-normal.woff2" crossorigin="anonymous" />
        <link rel="stylesheet" href="/static/fonts/inter/inter.css" />
        <link rel="stylesheet" href="/static/fonts/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/static/css/tailwind.css" />
        <style dangerouslySetInnerHTML={{ __html: CUSTOM_CSS }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA_ORG }} />
      </head>

      <body class="bg-navy-950 font-sans antialiased text-gray-200 overflow-x-hidden">

        {/* ====== NAVIGATION ====== */}
        <nav id="oem-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between gap-4 h-16 lg:h-20">
              <a href="/landing" class="flex items-center shrink-0">
                <img src="/static/img/laims-logo-white.svg" alt="LAIMS – Software für Textilveredelung" class="w-[120px] sm:w-[150px] lg:w-[170px] h-auto" />
              </a>
              <div class="hidden lg:flex items-center gap-8">
                <a href="#chance" class="text-sm text-white/70 hover:text-white transition-colors">Die Chance</a>
                <a href="#leistung" class="text-sm text-white/70 hover:text-white transition-colors">Was LAIMS leistet</a>
                <a href="#modelle" class="text-sm text-white/70 hover:text-white transition-colors">Partnermodelle</a>
                <a href="#nutzen" class="text-sm text-white/70 hover:text-white transition-colors">Wirtschaftlichkeit</a>
                <a href="#pilot" class="text-sm text-white/70 hover:text-white transition-colors">Pilot</a>
              </div>
              <div class="flex items-center gap-3">
                <a href="#kontakt" class="inline-flex items-center gap-2 whitespace-nowrap px-4 sm:px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-navy-900 font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40">
                  Partner werden
                  <i class="fas fa-arrow-right text-xs"></i>
                </a>
                <button type="button" aria-label="Menü" class="lg:hidden text-white/70 hover:text-white p-2" onclick="toggleOemMenu()">
                  <i class="fas fa-bars text-lg"></i>
                </button>
              </div>
            </div>
            <div id="oem-mobile-menu" class="hidden lg:hidden pb-4 border-t border-white/10 mt-2 pt-4">
              <div class="flex flex-col gap-3">
                <a href="#chance" class="text-sm text-white/70 hover:text-white py-1">Die Chance</a>
                <a href="#leistung" class="text-sm text-white/70 hover:text-white py-1">Was LAIMS leistet</a>
                <a href="#modelle" class="text-sm text-white/70 hover:text-white py-1">Partnermodelle</a>
                <a href="#nutzen" class="text-sm text-white/70 hover:text-white py-1">Wirtschaftlichkeit</a>
                <a href="#pilot" class="text-sm text-white/70 hover:text-white py-1">Pilot</a>
              </div>
            </div>
          </div>
        </nav>

        {/* ====== HERO ====== */}
        <section class="relative min-h-screen flex items-center bg-navy-950 overflow-hidden pt-24 pb-16">
          {/* Background */}
          <div class="absolute inset-0">
            <div class="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"></div>
            <div class="absolute inset-0 grid-bg mask-fade opacity-60"></div>
            <div class="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-lime-500/10 rounded-full blur-[120px] glow-pulse"></div>
            <div class="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-navy-500/20 rounded-full blur-[100px] glow-pulse"></div>
            {/* dekorative Ecken wie im Executive Paper */}
            <div class="absolute top-0 right-0 w-0 h-0 border-t-[180px] border-t-lime-500/15 border-l-[180px] border-l-transparent"></div>
          </div>

          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text */}
              <div class="reveal in">
                <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-300 text-xs font-semibold tracking-wide uppercase mb-6">
                  <i class="fas fa-handshake"></i> LAIMS OEM Partner Program
                </span>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
                  Vom Maschinen&shy;verkauf<br />zur <span class="text-gradient">digitalen Produktions&shy;lösung.</span>
                </h1>
                <p class="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
                  Gemeinsam mit starken Partnern digitale Komplettlösungen für Textilveredler schaffen – ein System, das
                  <span class="text-white font-semibold"> Prozesse verbindet</span>,
                  <span class="text-white font-semibold"> Zeit spart</span> und
                  <span class="text-white font-semibold"> Wachstum ermöglicht</span>.
                </p>
                <div class="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-lime-500 hover:bg-lime-400 text-navy-900 font-bold rounded-xl transition-all shadow-xl shadow-lime-500/25 hover:shadow-lime-500/40 hover:-translate-y-0.5">
                    Jetzt OEM-Partner werden <i class="fas fa-rocket"></i>
                  </a>
                  <a href="#leistung" class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold rounded-xl transition-all">
                    Was LAIMS leistet
                  </a>
                </div>
                <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50">
                  <span class="inline-flex items-center gap-2"><i class="fas fa-circle-check text-lime-400"></i> Wiederkehrende Umsätze</span>
                  <span class="inline-flex items-center gap-2"><i class="fas fa-circle-check text-lime-400"></i> Stärkere Kundenbindung</span>
                  <span class="inline-flex items-center gap-2"><i class="fas fa-circle-check text-lime-400"></i> Herstellerunabhängig</span>
                </div>
              </div>

              {/* Visual: Maschine → LAIMS → Prozesse */}
              <div class="relative reveal in reveal-d2">
                <div class="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8 backdrop-blur-sm shadow-2xl">
                  <div class="flex items-center justify-between gap-3">
                    {/* Maschine */}
                    <div class="flex-1 text-center float">
                      <div class="mx-auto w-16 h-16 rounded-2xl bg-navy-800/80 border border-white/10 flex items-center justify-center text-2xl text-white/80">
                        <i class="fas fa-print"></i>
                      </div>
                      <p class="mt-3 text-xs text-white/60 font-medium leading-tight">Maschinen<br/>& Anlagen</p>
                    </div>
                    <i class="fas fa-arrow-right text-lime-400 text-sm shrink-0"></i>
                    {/* LAIMS */}
                    <div class="flex-1 text-center">
                      <div class="mx-auto w-20 h-20 rounded-2xl bg-lime-500/15 border border-lime-500/40 flex items-center justify-center glow-pulse">
                        <span class="font-extrabold text-lime-300 tracking-wider text-sm">LAIMS</span>
                      </div>
                      <p class="mt-3 text-xs text-lime-300/80 font-semibold leading-tight">Die Plattform</p>
                    </div>
                    <i class="fas fa-arrow-right text-lime-400 text-sm shrink-0"></i>
                    {/* Prozesse */}
                    <div class="flex-1 text-center float-slow">
                      <div class="mx-auto w-16 h-16 rounded-2xl bg-navy-800/80 border border-white/10 flex items-center justify-center text-2xl text-white/80">
                        <i class="fas fa-diagram-project"></i>
                      </div>
                      <p class="mt-3 text-xs text-white/60 font-medium leading-tight">Vernetzte<br/>Prozesse</p>
                    </div>
                  </div>

                  {/* Mini-Dashboard */}
                  <div class="mt-7 rounded-2xl bg-navy-950/70 border border-white/10 p-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Dashboard</span>
                      <span class="inline-flex items-center gap-1 text-[10px] text-lime-300"><span class="w-1.5 h-1.5 rounded-full bg-lime-400 glow-pulse"></span> Live</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2 mb-3">
                      <div class="rounded-lg bg-white/5 p-2.5">
                        <p class="text-[10px] text-white/40">Aufträge</p>
                        <p class="text-lg font-bold text-white">128 <span class="text-[10px] text-lime-400 font-semibold">+16%</span></p>
                      </div>
                      <div class="rounded-lg bg-white/5 p-2.5">
                        <p class="text-[10px] text-white/40">In Produktion</p>
                        <p class="text-lg font-bold text-white">72</p>
                      </div>
                      <div class="rounded-lg bg-white/5 p-2.5">
                        <p class="text-[10px] text-white/40">Versand heute</p>
                        <p class="text-lg font-bold text-white">24</p>
                      </div>
                    </div>
                    {/* Sparkline */}
                    <svg viewBox="0 0 300 60" class="w-full h-12">
                      <polyline class="flow-line" fill="none" stroke="#84cc16" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                        points="0,48 30,42 60,46 90,32 120,36 150,24 180,28 210,16 240,20 270,10 300,12" />
                      <polygon fill="url(#sg)" opacity="0.18" points="0,48 30,42 60,46 90,32 120,36 150,24 180,28 210,16 240,20 270,10 300,12 300,60 0,60" />
                      <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#84cc16"/><stop offset="1" stop-color="#84cc16" stop-opacity="0"/></linearGradient></defs>
                    </svg>
                  </div>
                </div>
                {/* floating badge */}
                <div class="absolute -bottom-4 -left-4 rounded-2xl bg-lime-500 text-navy-900 px-4 py-3 shadow-xl float hidden sm:block">
                  <p class="text-xs font-semibold leading-tight">Maschine · Software<br/>· Workflow in <span class="underline decoration-2">einem System</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* scroll hint */}
          <a href="#chance" class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors">
            <i class="fas fa-chevron-down text-xl animate-bounce"></i>
          </a>
        </section>

        {/* ====== AUSGANGSLAGE → CHANCE ====== */}
        <section id="chance" class="relative py-24 bg-white text-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-14 items-start">
              {/* Problem */}
              <div class="reveal">
                <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  <span class="w-8 h-px bg-gray-300"></span> Die Ausgangslage
                </span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
                  Ihre Kunden kaufen Maschinen.<br />Der Alltag bleibt <span class="text-red-500">fragmentiert.</span>
                </h2>
                <p class="mt-5 text-gray-600 leading-relaxed">
                  Händler verkaufen hochwertige Technik – DTF/DTG-Systeme, Stickmaschinen, Transferpressen, Plotter und RIP-Systeme.
                  Der operative Alltag vieler Kunden läuft jedoch weiter über Insellösungen.
                </p>
                <ul class="mt-6 space-y-3">
                  {['Getrennte Systeme & manuelle Listen', 'E-Mail-Kommunikation statt Workflow', 'Unstrukturierte Druckdaten', 'Individuelle Kalkulation', 'Wenig durchgängige Produktionssteuerung'].map((t) => (
                    <li class="flex items-start gap-3 text-gray-700">
                      <i class="fas fa-xmark mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-red-100 text-red-500 text-xs"></i>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chance */}
              <div class="reveal reveal-d2 rounded-3xl bg-navy-950 text-white p-8 sm:p-10 relative overflow-hidden">
                <div class="absolute -top-16 -right-16 w-56 h-56 bg-lime-500/20 rounded-full blur-3xl"></div>
                <span class="relative inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-300 mb-4">
                  <span class="w-8 h-px bg-lime-500/50"></span> Die Chance für OEM-Partner
                </span>
                <h3 class="relative text-2xl sm:text-3xl font-extrabold leading-snug">
                  Vom Maschinenlieferanten zum <span class="text-gradient">strategischen Digitalisierungspartner.</span>
                </h3>
                <p class="relative mt-5 text-white/70 leading-relaxed">
                  Mit LAIMS bieten Sie Ihren Kunden nicht nur Maschinen, sondern ein vollständiges
                  digitales Betriebssystem für die Textilveredelung – von der Anfrage bis zur Abrechnung.
                </p>
                <div class="relative mt-7 grid sm:grid-cols-2 gap-3">
                  {['Zusätzliche Erlösquellen', 'Stärkere Kundenbindung', 'Differenzierung im Wettbewerb', 'Höhere Abschlussquote', 'Wiederkehrende Umsätze', 'Zugang zum Kundenalltag'].map((t) => (
                    <div class="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5">
                      <i class="fas fa-check text-lime-400 text-sm"></i>
                      <span class="text-sm text-white/85">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== PARTNERVORTEILE (Bento) ====== */}
        <section class="relative py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white overflow-hidden">
          <div class="absolute inset-0 grid-bg opacity-30 mask-fade"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-14 reveal">
              <span class="text-xs font-bold uppercase tracking-wider text-lime-300">Ihre Vorteile als Partner</span>
              <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold">Warum sich die Partnerschaft <span class="text-gradient">rechnet</span></h2>
              <p class="mt-4 text-white/60">Vier Hebel, die aus Maschinenverkäufen ein wiederkehrendes, skalierbares Geschäft machen.</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PARTNER_BENEFITS.map((b, i) => (
                <div class={`reveal reveal-d${i % 4 + 1} card-hover rounded-2xl bg-white/[0.04] border border-white/10 hover:border-lime-500/40 p-6 group`}>
                  <div class="w-12 h-12 rounded-xl bg-lime-500/15 border border-lime-500/30 flex items-center justify-center text-lime-300 text-xl mb-4 group-hover:scale-110 transition-transform">
                    <i class={`fas ${b.icon}`}></i>
                  </div>
                  <h3 class="font-bold text-lg text-white">{b.title}</h3>
                  <p class="mt-2 text-sm text-white/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== WAS LAIMS LEISTET (8 Module) ====== */}
        <section id="leistung" class="relative py-24 bg-white text-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-14 reveal">
              <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Was LAIMS leistet</span>
              <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold text-navy-900">Ein System. <span class="text-lime-600">Alle Prozesse.</span></h2>
              <p class="mt-4 text-gray-600">LAIMS verbindet zentrale Unternehmensbereiche und begleitet den Kunden von der Anfrage über die Produktion bis zur Abrechnung.</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {MODULES.map((m, i) => (
                <div class={`reveal reveal-d${i % 4 + 1} card-hover rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-lime-300 hover:shadow-xl hover:shadow-lime-500/10 p-6 group`}>
                  <div class="w-12 h-12 rounded-xl bg-navy-900 group-hover:bg-lime-500 flex items-center justify-center text-white group-hover:text-navy-900 text-xl mb-4 transition-colors">
                    <i class={`fas ${m.icon}`}></i>
                  </div>
                  <h3 class="font-bold text-navy-900">{m.title}</h3>
                  <p class="mt-2 text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== PARTNERMODELLE ====== */}
        <section id="modelle" class="relative py-24 bg-navy-950 text-white overflow-hidden">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-500/8 rounded-full blur-[120px]"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-6 reveal">
              <span class="text-xs font-bold uppercase tracking-wider text-lime-300">Flexible Partnerschaftsmodelle</span>
              <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold">Wählen Sie Ihre <span class="text-gradient">Flughöhe</span></h2>
              <p class="mt-4 text-white/60">Vier Modelle – von der einfachen Empfehlung bis zur strategischen Whitelabel-Partnerschaft. Je tiefer die Integration, desto höher Ihre Wertschöpfung.</p>
            </div>

            {/* Aufwand/Wertschöpfung-Achse */}
            <div class="hidden sm:flex items-center justify-between max-w-3xl mx-auto mb-10 text-[11px] uppercase tracking-wider text-white/40 reveal">
              <span><i class="fas fa-feather mr-1"></i> Geringer Aufwand</span>
              <div class="flex-1 mx-4 h-px bg-gradient-to-r from-white/10 via-lime-500/40 to-lime-500/80"></div>
              <span class="text-lime-300"><i class="fas fa-gem mr-1"></i> Maximale Wertschöpfung</span>
            </div>

            <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {PARTNER_MODELS.map((p, i) => (
                <div class={`reveal reveal-d${i % 4 + 1} card-hover relative rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-lime-500/50 p-6 flex flex-col`}>
                  <span class="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-lime-500/15 text-lime-300 border border-lime-500/30">{p.badge}</span>
                  <div class="w-14 h-14 rounded-2xl bg-navy-800 border border-white/10 flex items-center justify-center text-2xl text-lime-300 mb-4">
                    <i class={`fas ${p.icon}`}></i>
                  </div>
                  <h3 class="font-extrabold text-lg text-white">{p.title}</h3>
                  <p class="text-sm text-lime-300/80 font-medium">{p.tagline}</p>
                  <p class="mt-3 text-sm text-white/65 leading-relaxed">{p.desc}</p>

                  <ul class="mt-4 space-y-2">
                    {p.points.map((pt) => (
                      <li class="flex items-center gap-2 text-xs text-white/70">
                        <i class="fas fa-check text-lime-400"></i> {pt}
                      </li>
                    ))}
                  </ul>

                  <div class="mt-5 pt-4 border-t border-white/10">
                    <p class="text-xs text-white/50 leading-relaxed italic">{p.fit}</p>
                    {/* Wertschöpfungs-Indikator */}
                    <div class="mt-3 flex items-center gap-1.5">
                      <span class="text-[10px] text-white/40 mr-1">Wertschöpfung</span>
                      {[1, 2, 3, 4].map((lvl) => (
                        <span class={`h-1.5 flex-1 rounded-full ${lvl <= p.effort ? 'bg-lime-400' : 'bg-white/10'}`}></span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p class="text-center text-sm text-white/50 mt-10 reveal">
              <i class="fas fa-circle-info text-lime-400 mr-1.5"></i>
              Nicht sicher, welches Modell passt? Wir finden es gemeinsam im Erstgespräch heraus.
            </p>
          </div>
        </section>

        {/* ====== WIRTSCHAFTLICHER NUTZEN ====== */}
        <section id="nutzen" class="relative py-24 bg-gradient-to-b from-gray-50 to-white text-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-14 items-center">
              <div class="reveal">
                <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Wirtschaftlicher Nutzen</span>
                <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
                  Sieben Erlösquellen aus <span class="text-lime-600">einer Partnerschaft</span>
                </h2>
                <p class="mt-4 text-gray-600 leading-relaxed">
                  Statt einmaliger, projektbezogener Hardwareverkäufe entsteht ein Portfolio aus
                  wiederkehrenden und ausbaufähigen Umsätzen – über den gesamten Kundenlebenszyklus.
                </p>
                <div class="mt-8 grid sm:grid-cols-2 gap-3">
                  {REVENUE_STREAMS.map((r) => (
                    <div class="flex items-center gap-3 rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3">
                      <span class="w-9 h-9 rounded-lg bg-lime-500/10 flex items-center justify-center text-lime-600">
                        <i class={`fas ${r.icon}`}></i>
                      </span>
                      <span class="text-sm font-medium text-navy-900">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Erlös-Visualisierung */}
              <div class="reveal reveal-d2">
                <div class="rounded-3xl bg-navy-950 text-white p-8 relative overflow-hidden">
                  <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-lime-500/15 rounded-full blur-3xl"></div>
                  <p class="relative text-xs uppercase tracking-wider text-white/40 font-semibold mb-2">Umsatzlogik</p>
                  <h3 class="relative text-xl font-bold mb-6">Vom Einmalumsatz zum Lifetime-Value</h3>
                  <div class="relative space-y-4">
                    <div>
                      <div class="flex justify-between text-sm mb-1.5"><span class="text-white/60">Nur Hardware (einmalig)</span><span class="text-white/40">Projektbezogen</span></div>
                      <div class="h-3 rounded-full bg-white/10 overflow-hidden"><div class="h-full w-1/3 bg-white/30 rounded-full"></div></div>
                    </div>
                    <div>
                      <div class="flex justify-between text-sm mb-1.5"><span class="text-white">+ Setup & Schulung</span><span class="text-lime-300">+ Marge</span></div>
                      <div class="h-3 rounded-full bg-white/10 overflow-hidden"><div class="h-full w-1/2 bg-lime-500/60 rounded-full"></div></div>
                    </div>
                    <div>
                      <div class="flex justify-between text-sm mb-1.5"><span class="text-white">+ Lizenzen & Support (laufend)</span><span class="text-lime-300 font-semibold">wiederkehrend</span></div>
                      <div class="h-3 rounded-full bg-white/10 overflow-hidden"><div class="h-full w-full bg-gradient-to-r from-lime-500 to-lime-400 rounded-full glow-pulse"></div></div>
                    </div>
                  </div>
                  <div class="relative mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                    <i class="fas fa-arrow-trend-up text-lime-400 text-2xl"></i>
                    <p class="text-sm text-white/70">Wiederkehrende Umsätze <span class="text-white font-semibold">statt</span> rein projektbezogener Hardwareverkäufe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== ENDKUNDENNUTZEN ====== */}
        <section class="relative py-24 bg-navy-900 text-white overflow-hidden">
          <div class="absolute inset-0 grid-bg opacity-20 mask-fade"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-14 reveal">
              <span class="text-xs font-bold uppercase tracking-wider text-lime-300">Nutzen für den Endkunden</span>
              <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold">Was Ihre Kunden <span class="text-gradient">gewinnen</span></h2>
              <p class="mt-4 text-white/60">Je zufriedener der Kunde mit dem Gesamtsystem, desto stärker die Bindung an Sie als Partner.</p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {CUSTOMER_BENEFITS.map((b, i) => (
                <div class={`reveal reveal-d${i % 4 + 1} text-center rounded-2xl bg-white/[0.04] border border-white/10 hover:border-lime-500/40 card-hover p-6`}>
                  <div class="mx-auto w-12 h-12 rounded-full bg-lime-500/15 flex items-center justify-center text-lime-300 text-xl mb-3">
                    <i class={`fas ${b.icon}`}></i>
                  </div>
                  <p class="text-sm font-semibold text-white/90">{b.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== MARKTZUGANG ====== */}
        <section class="relative py-20 bg-white text-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-12 reveal">
              <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Gemeinsamer Marktzugang</span>
              <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold text-navy-900">Wir gehen <span class="text-lime-600">gemeinsam</span> in den Markt</h2>
            </div>
            <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto reveal reveal-d1">
              {GO_TO_MARKET.map((g) => (
                <span class="inline-flex items-center gap-2 rounded-full bg-gray-50 border border-gray-200 hover:border-lime-400 hover:bg-lime-50 transition-colors px-5 py-2.5 text-sm font-medium text-navy-900">
                  <i class={`fas ${g.icon} text-lime-600`}></i> {g.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ====== PILOT-ROADMAP ====== */}
        <section id="pilot" class="relative py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-white overflow-hidden">
          <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/20 to-transparent"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-14 reveal">
              <span class="text-xs font-bold uppercase tracking-wider text-lime-300">Ihr risikoarmer Start</span>
              <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold">Gemeinsamer Pilot in <span class="text-gradient">4 Schritten</span></h2>
              <p class="mt-4 text-white/60">3–6 Monate, 2–5 Kundenprojekte. So validieren wir Marktresonanz, Verkaufsargumentation und das passende Partnermodell.</p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PILOT_STEPS.map((s, i) => (
                <div class={`reveal reveal-d${i % 4 + 1} relative rounded-2xl bg-white/[0.04] border border-white/10 p-6`}>
                  <div class="w-12 h-12 rounded-xl bg-lime-500 text-navy-900 font-extrabold text-lg flex items-center justify-center mb-4">{s.n}</div>
                  <h3 class="font-bold text-white">{s.title}</h3>
                  <p class="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                  {i < PILOT_STEPS.length - 1 ? (
                    <i class="fas fa-arrow-right hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 text-lime-400/60 text-sm"></i>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== FAQ ====== */}
        <section class="relative py-24 bg-white text-gray-800">
          <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 reveal">
              <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Häufige Fragen</span>
              <h2 class="mt-3 text-3xl sm:text-4xl font-extrabold text-navy-900">Sie haben Fragen? <span class="text-lime-600">Wir Antworten.</span></h2>
            </div>
            <div class="space-y-3">
              {FAQ.map((f) => (
                <div class="reveal rounded-2xl border border-gray-200 overflow-hidden bg-gray-50/50">
                  <button type="button" class="oem-faq-btn w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-navy-900 hover:bg-gray-50 transition-colors">
                    <span>{f.q}</span>
                    <i class="fas fa-chevron-down text-lime-600 transition-transform shrink-0"></i>
                  </button>
                  <div class="oem-faq-panel hidden px-6 pb-5 text-gray-600 leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CTA / KONTAKT ====== */}
        <section id="kontakt" class="relative py-24 bg-navy-950 text-white overflow-hidden">
          <div class="absolute inset-0">
            <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[140px] glow-pulse"></div>
            <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-navy-500/20 rounded-full blur-[120px]"></div>
          </div>
          <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 border border-white/10 p-8 sm:p-12 grid lg:grid-cols-2 gap-12 items-center shadow-2xl">
              {/* Pitch */}
              <div class="reveal">
                <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-300 text-xs font-semibold uppercase tracking-wide mb-5">
                  <i class="fas fa-rocket"></i> Jetzt OEM-Partner werden
                </span>
                <h2 class="text-3xl sm:text-4xl font-extrabold leading-tight">
                  Verkaufen Sie nicht mehr nur Maschinen –<br />sondern <span class="text-gradient">produktive Produktionssysteme.</span>
                </h2>
                <p class="mt-5 text-white/70 leading-relaxed">
                  Lassen Sie uns in einem kurzen Gespräch klären, welches Partnermodell zu Ihrem Geschäft passt
                  und wie ein gemeinsamer Pilot aussehen könnte.
                </p>
                <div class="mt-7 space-y-3 text-sm">
                  <a href="https://laims-app.com/oempartner" class="flex items-center gap-3 text-white/80 hover:text-lime-300 transition-colors">
                    <i class="fas fa-globe w-5 text-lime-400"></i> laims-app.com/oempartner
                  </a>
                  <p class="flex items-center gap-3 text-white/80"><i class="fas fa-building w-5 text-lime-400"></i> TOPO GmbH · Software für die Textilveredelung</p>
                </div>
              </div>

              {/* Formular */}
              <form id="oem-form" class="reveal reveal-d2 rounded-2xl bg-white p-6 sm:p-7 text-gray-800">
                <input type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">Firma *</label>
                    <input name="company" required type="text" class="w-full rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 px-4 py-2.5 text-sm outline-none transition" placeholder="Ihr Unternehmen" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">Name *</label>
                    <input name="name" required type="text" class="w-full rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 px-4 py-2.5 text-sm outline-none transition" placeholder="Ihr Name" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">E-Mail *</label>
                    <input name="email" required type="email" class="w-full rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 px-4 py-2.5 text-sm outline-none transition" placeholder="name@firma.de" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">Telefon</label>
                    <input name="phone" type="tel" class="w-full rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 px-4 py-2.5 text-sm outline-none transition" placeholder="optional" />
                  </div>
                </div>
                <div class="mt-4">
                  <label class="block text-xs font-semibold text-gray-500 mb-1.5">Interessantes Modell / Nachricht</label>
                  <textarea name="message" rows={3} class="w-full rounded-xl border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 px-4 py-2.5 text-sm outline-none transition resize-none" placeholder="z. B. Reseller oder Bundle Partner – wir verkaufen DTF-Systeme …"></textarea>
                </div>
                <button type="submit" class="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime-500 hover:bg-lime-400 text-navy-900 font-bold rounded-xl transition-all shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40">
                  <span class="oem-form-label">Anfrage senden</span>
                  <i class="fas fa-paper-plane text-sm"></i>
                </button>
                <p id="oem-form-msg" class="mt-3 text-sm text-center hidden"></p>
                <p class="mt-3 text-[11px] text-gray-400 text-center">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Kontaktaufnahme zu.</p>
              </form>
            </div>
          </div>
        </section>

        {/* ====== FOOTER ====== */}
        <footer class="bg-navy-950 border-t border-white/10 text-white/60">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
              <div class="flex items-center gap-4">
                <img src="/static/img/laims-logo-white.svg" alt="LAIMS" class="w-[130px] h-auto" />
                <span class="hidden md:inline-block w-px h-8 bg-white/10"></span>
                <span class="text-sm">Software für die Textilveredelung</span>
              </div>
              <div class="flex items-center gap-6 text-sm">
                <a href="/landing" class="hover:text-white transition-colors">Zur Produktseite</a>
                <a href="#kontakt" class="hover:text-white transition-colors">Partner werden</a>
                <a href="https://laims-app.com" class="hover:text-white transition-colors">laims-app.com</a>
              </div>
            </div>
            <div class="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
              <p>© {String(new Date().getFullYear())} TOPO GmbH · LAIMS OEM Partner Program</p>
              <p>Händler verkaufen nicht mehr nur Maschinen – sondern produktive, digitale Produktionssysteme.</p>
            </div>
          </div>
        </footer>

        <script src="/static/js/oem-partner.js" defer></script>
      </body>
    </html>
  )
}
