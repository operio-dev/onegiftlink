import { createFileRoute, Link } from "@tanstack/react-router";
import { openCookiePreferences } from "@/components/cookie-banner";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  MessageSquareOff,
  FileSpreadsheet,
  UserMinus,
  Sparkles,
  Truck,
  ShieldCheck,
  Link2,
  Send,
  PackageCheck,
  Gift,
  Copy,
  Play,
  ChevronDown,
  Instagram,
  MapPin,
  Camera,
  ShoppingBag,
  Heart,
  Pill,
  Home,
  Users,
  LayoutGrid,
  Megaphone,
  Settings as SettingsIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ------------------------------- Utilities ------------------------------- */

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

/* --------------------------------- Nav ---------------------------------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src="/logo.png" alt="OneGiftLink" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#problema" className="transition-colors hover:text-foreground">Il problema</a>
          <a href="#come-funziona" className="transition-colors hover:text-foreground">Come funziona</a>
          <a href="#dashboard" className="transition-colors hover:text-foreground">Dashboard</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </nav>
        <a
          href="#beta"
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-foreground px-4 text-[13px] font-medium text-background transition-all hover:bg-foreground/90 hover:shadow-elegant"
        >
          Richiedi l'accesso
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

/* --------------------------------- Hero --------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <SectionEyebrow>Pensato per Growth Marketers e Founders</SectionEyebrow>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
            Basta perdere ore a gestire i{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.65_0.2_255)] bg-clip-text text-transparent">
              regali ai creator
            </span>
            .
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            Trasforma ogni campagna di influencer gifting in un semplice checkout. Mandi un link privato,
            il creator sceglie prodotto, taglia e indirizzo di spedizione da solo. Niente più DM persi su
            Instagram. Niente più fogli Excel.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#beta"
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:brightness-110"
            >
              Richiedi l'accesso anticipato
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#come-funziona"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              <Play className="h-3.5 w-3.5" />
              Scopri come funziona
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Gratis durante la beta · Pronto per Shopify · Attivo in un giorno
          </p>
        </div>

        {/* Split screen mockup */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:mt-20 md:grid-cols-2 md:gap-8 animate-fade-in-soft">
          <BeforeDM />
          <AfterCheckout />
        </div>
      </div>
    </section>
  );
}

function BeforeDM() {
  const messages = [
    { from: "brand", text: "Ciao Sofia! Ti mandiamo la nuova collezione 🎁" },
    { from: "creator", text: "Che meraviglia, grazie!" },
    { from: "brand", text: "Che taglia porti?" },
    { from: "creator", text: "M di solito, ma dipende dai brand 😅" },
    { from: "brand", text: "Mi mandi l'indirizzo?" },
    { from: "creator", text: "Via Roma 12, Milano 20121" },
    { from: "creator", text: "Anzi scusa, posso cambiare colore? Preferisco il nero" },
    { from: "brand", text: "Certo! Nero M confermato?" },
    { from: "creator", text: "Aspetta, indirizzo sbagliato, usa quello nuovo: Via Torino 45" },
  ];
  return (
    <div className="relative">
      <div className="absolute -top-3 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-destructive px-3 py-1 text-[11px] font-medium text-destructive-foreground shadow-elegant">
        <X className="h-3 w-3" />
        Prima: DM infiniti
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <div className="flex items-center justify-between border-b border-border bg-surface/60 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white">
              <Instagram className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[13px] font-semibold leading-tight">@sofia.creates</div>
              <div className="text-[11px] text-muted-foreground">Attiva ora</div>
            </div>
          </div>
          <div className="text-[11px] text-muted-foreground">14:32</div>
        </div>
        <div className="max-h-[420px] space-y-2 overflow-hidden bg-background p-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "brand" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${
                  m.from === "brand"
                    ? "rounded-br-md bg-primary text-primary-foreground"
                    : "rounded-bl-md bg-muted text-foreground"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl rounded-bl-md bg-muted px-3.5 py-2.5">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-muted-foreground" />
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-muted-foreground [animation-delay:0.2s]" />
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-muted-foreground [animation-delay:0.4s]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AfterCheckout() {
  const [color, setColor] = useState(1);
  const [size, setSize] = useState("M");
  return (
    <div className="relative">
      <div className="absolute -top-3 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1 text-[11px] font-medium text-success-foreground shadow-elegant">
        <Check className="h-3 w-3" />
        Dopo: il creator fa tutto in 30 secondi
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success" />
            <span className="text-[11px] font-medium text-muted-foreground">gift.maisonnoir.com</span>
          </div>
          <ShieldCheck className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <div className="space-y-5 bg-background p-5">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Un regalo da
            </div>
            <div className="mt-0.5 text-lg font-bold tracking-tight">MAISON NOIR</div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 aspect-[4/3]">
            <div className="absolute inset-0 grid place-items-center">
              <HoodieIllustration color={color} />
            </div>
            <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-medium text-neutral-700 backdrop-blur">
              Oversized Hoodie
            </div>
          </div>

          <div>
            <div className="mb-2 text-[11px] font-medium text-muted-foreground">Colore</div>
            <div className="flex gap-2">
              {[
                { id: 0, cls: "bg-neutral-100 border-neutral-300" },
                { id: 1, cls: "bg-neutral-900" },
                { id: 2, cls: "bg-[oklch(0.55_0.22_260)]" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  className={`h-7 w-7 rounded-full border-2 transition-all ${c.cls} ${
                    color === c.id ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "border-transparent"
                  }`}
                  aria-label={`Colore ${c.id}`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-[11px] font-medium text-muted-foreground">Taglia</div>
            <div className="grid grid-cols-4 gap-2">
              {["XS", "S", "M", "L"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-9 rounded-lg border text-[13px] font-medium transition-all ${
                    size === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-foreground hover:border-border-strong"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-[11px] font-medium text-muted-foreground">Indirizzo</div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5 text-[13px]">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-foreground">Via Torino 45, 20123 Milano</span>
              <Check className="ml-auto h-3.5 w-3.5 text-success" />
            </div>
          </div>

          <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground text-[14px] font-semibold text-background transition-transform hover:scale-[1.01]">
            Ricevi il tuo regalo 🎁
          </button>
        </div>
      </div>
    </div>
  );
}

function HoodieIllustration({ color }: { color: number }) {
  const fill = color === 0 ? "#f4f4f2" : color === 1 ? "#1a1a1a" : "oklch(0.5 0.2 260)";
  const shadow =
    color === 0 ? "#d4d4d0" : color === 1 ? "#000000" : "oklch(0.38 0.18 260)";
  const highlight =
    color === 0 ? "#ffffff" : color === 1 ? "#2e2e2e" : "oklch(0.62 0.2 260)";
  const stitch =
    color === 0 ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.22)";
  const cordColor = color === 0 ? "#b8b8b4" : "#ececea";

  return (
    <svg
      viewBox="0 0 220 200"
      className="h-40 w-40 drop-shadow-xl transition-all duration-500"
      aria-hidden
    >
      <defs>
        <linearGradient id={`hoodieGrad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={highlight} />
          <stop offset="55%" stopColor={fill} />
          <stop offset="100%" stopColor={shadow} />
        </linearGradient>
        <linearGradient id={`hoodieSleeveL-${color}`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} />
          <stop offset="100%" stopColor={shadow} />
        </linearGradient>
        <linearGradient id={`hoodieSleeveR-${color}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={fill} />
          <stop offset="100%" stopColor={shadow} />
        </linearGradient>
      </defs>

      {/* Left sleeve */}
      <path
        d="M55 70 Q30 82 22 130 Q20 150 30 170 L60 175 Q58 150 62 130 L70 95 Z"
        fill={`url(#hoodieSleeveL-${color})`}
      />
      {/* Right sleeve */}
      <path
        d="M165 70 Q190 82 198 130 Q200 150 190 170 L160 175 Q162 150 158 130 L150 95 Z"
        fill={`url(#hoodieSleeveR-${color})`}
      />
      {/* Cuffs */}
      <rect x="28" y="165" width="34" height="10" rx="3" fill={shadow} />
      <rect x="158" y="165" width="34" height="10" rx="3" fill={shadow} />
      <line x1="30" y1="170" x2="60" y2="170" stroke={highlight} strokeOpacity="0.35" strokeWidth="0.8" />
      <line x1="160" y1="170" x2="190" y2="170" stroke={highlight} strokeOpacity="0.35" strokeWidth="0.8" />

      {/* Body */}
      <path
        d="M60 70 Q70 55 85 50 L135 50 Q150 55 160 70 L168 100 L162 175 Q140 182 110 182 Q80 182 58 175 L52 100 Z"
        fill={`url(#hoodieGrad-${color})`}
      />

      {/* Hem */}
      <path
        d="M58 175 Q110 190 162 175 L162 182 Q110 197 58 182 Z"
        fill={shadow}
      />

      {/* Kangaroo pocket */}
      <path
        d="M78 118 Q110 128 142 118 L138 158 Q110 164 82 158 Z"
        fill={shadow}
        fillOpacity="0.55"
      />
      <line x1="78" y1="118" x2="82" y2="158" stroke={stitch} strokeWidth="0.6" strokeDasharray="1.5 1.5" />
      <line x1="142" y1="118" x2="138" y2="158" stroke={stitch} strokeWidth="0.6" strokeDasharray="1.5 1.5" />
      <line x1="78" y1="118" x2="142" y2="118" stroke={stitch} strokeWidth="0.6" strokeDasharray="1.5 1.5" />

      {/* Hood back */}
      <path
        d="M78 52 Q88 22 110 20 Q132 22 142 52 Q132 62 110 62 Q88 62 78 52 Z"
        fill={shadow}
      />
      {/* Hood front opening */}
      <path
        d="M85 50 Q95 68 110 72 Q125 68 135 50 Q125 60 110 62 Q95 60 85 50 Z"
        fill={highlight}
        fillOpacity="0.15"
      />
      {/* Neck ribbing */}
      <path
        d="M92 60 Q110 70 128 60 L126 72 Q110 80 94 72 Z"
        fill={shadow}
      />

      {/* Drawstrings */}
      <path d="M104 70 Q102 90 100 108" stroke={cordColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M116 70 Q118 92 120 110" stroke={cordColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="110" r="2.2" fill={cordColor} />
      <circle cx="120" cy="112" r="2.2" fill={cordColor} />

      {/* Subtle center seam */}
      <line x1="110" y1="72" x2="110" y2="118" stroke={stitch} strokeWidth="0.5" strokeDasharray="1 2" />

      {/* Shoulder highlights */}
      <path d="M70 62 Q90 55 110 55" stroke={highlight} strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
      <path d="M150 62 Q130 55 110 55" stroke={highlight} strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

/* -------------------------------- Problema ------------------------------- */

function ProblemaSection() {
  const cards = [
    { icon: MessageSquareOff, title: "100+ DM a campagna", desc: "Ogni campagna inizia con le stesse conversazioni ripetitive, sparse tra le inbox del team." },
    { icon: FileSpreadsheet, title: "Caos da Excel", desc: "Copia-incolla a mano tra DM, Notion e Shopify: errori, indirizzi sbagliati e ritardi." },
    { icon: UserMinus, title: "Creator persi per strada", desc: "Ogni passaggio in più fa sparire un altro creator prima ancora che riceva il prodotto." },
  ];
  return (
    <section id="problema" className="border-b border-border bg-surface/50">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Il problema</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Il creator gifting funziona. Il processo no.
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Ogni mese i brand mandano centinaia di prodotti gratis. Ma raccogliere indirizzi, taglie
            e preferenze via Instagram crea un lavoro manuale enorme e inutile.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-surface text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Come funziona ---------------------------- */

function ComeFunziona() {
  const steps = [
    { icon: Link2, title: "Genera un link di gifting privato", desc: "Scegli prodotti, quantità e regole. Esce un checkout brandizzato, senza login per il creator." },
    { icon: Send, title: "Mandalo direttamente ai creator", desc: "Incolla il link nel DM di Instagram, in email o su WhatsApp. Nessun account richiesto." },
    { icon: PackageCheck, title: "Il creator sceglie e conferma", desc: "Seleziona taglia, colore e indirizzo validato. I dati arrivano puliti e pronti per la spedizione." },
  ];
  return (
    <section id="come-funziona" className="border-b border-border">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Come funziona</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Dal DM al prodotto spedito, in pochi secondi.
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-[17px] font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Perché OneGiftLink ------------------------- */

function PerchePlatform() {
  const cards = [
    { icon: Sparkles, title: "Matching assistito dall'AI", desc: "Prodotto, catalogo e indirizzo vengono validati e abbinati in automatico. Le regole si adattano al tuo catalogo e alla logica della campagna. Non un generico form builder." },
    { icon: Truck, title: "Dati pronti per la spedizione", desc: "Gli ordini escono già puliti, con le taglie giuste e gli indirizzi validati. Pronti per il tuo magazzino, senza export manuali né copia-incolla."}, 
    { icon: ShieldCheck, title: "Privacy by design", desc: "I dati del creator sono cifrati e condivisi solo con il tuo brand per la spedizione. Indirizzi validati e richieste di cancellazione onorate all'istante. Conforme al GDPR." },
  ];
  return (
    <section className="border-b border-border bg-surface/50">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Perché OneGiftLink</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Non è un semplice form.
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Abbiamo costruito qualcosa che collega il tuo brand, il tuo store e ogni creator in un
            unico flusso privato. E ti dice cosa succede dopo la spedizione.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-foreground text-background">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              {c.note && (
                <p className="mt-3 rounded-lg border border-dashed border-border bg-surface px-3 py-2 text-[12px] leading-relaxed text-muted-foreground">
                  {c.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Dashboard ------------------------------ */

function DashboardSection() {
  return (
    <section id="dashboard" className="border-b border-border">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>La dashboard</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Una sola schermata per gestire tutte le tue campagne di seeding.
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Non un software complesso. Una dashboard elegante per tenere traccia di inviti,
            riscatti, spedizioni e di chi ricambia con un post.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="absolute -inset-x-8 -inset-y-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-2xl" />
          <DashboardMockup />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Dashboard di esempio con dati dimostrativi.
          </p>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const rows = [
    { name: "Sophie Chen", handle: "@sophie.creates", product: "Oversized Hoodie", size: "M", status: "Riscattato", statusColor: "success", posted: "posted" as const },
    { name: "Maya Alvarez", handle: "@mayaruns", product: "Recovery Set", size: "—", status: "Spedito", statusColor: "primary", posted: "pending" as const },
    { name: "Jordan Kim", handle: "@jordan.kim", product: "Silk Slip Dress", size: "S", status: "Indirizzo confermato", statusColor: "muted", posted: "none" as const },
    { name: "Priya Rao", handle: "@priyaskin", product: "Glow Serum Duo", size: "—", status: "Match AI", statusColor: "purple", posted: "pending" as const },
    { name: "Leo Bianchi", handle: "@leo.wears", product: "Wool Overshirt", size: "L", status: "Riscattato", statusColor: "success", posted: "no" as const },
  ];

  const badgeCls = (c: string) =>
    ({
      success: "bg-success/10 text-success border-success/20",
      primary: "bg-primary/10 text-primary border-primary/20",
      muted: "bg-muted text-muted-foreground border-border",
      purple: "bg-[oklch(0.55_0.22_290)]/10 text-[oklch(0.45_0.22_290)] border-[oklch(0.55_0.22_290)]/20",
    })[c] || "";

  const navItems = [
    { icon: LayoutGrid, label: "Panoramica", active: true, hint: "Overview" },
    { icon: Megaphone, label: "Campagne", active: false, hint: "Seeding" },
    { icon: Users, label: "Creator", active: false, badge: "Score" },
    { icon: Truck, label: "Spedizioni", active: false },
    { icon: SettingsIcon, label: "Impostazioni", active: false },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-surface/70 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-4 rounded-md border border-border bg-background px-3 py-1 text-[11px] text-muted-foreground">
          app.onegiftlink.com / panoramica
        </div>
      </div>

      <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="hidden border-r border-border bg-surface/40 p-3 md:block">
          <div className="flex items-center gap-2 px-2 pb-4 pt-1">
            <img src="/logo.png" alt="OneGiftLink" className="h-6 w-auto" />
          </div>
          <div className="px-2 pb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Menu
          </div>
          <nav className="mt-1 space-y-0.5">
            {navItems.map((n) => (
              <div
                key={n.label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors ${
                  n.active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                <n.icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{n.label}</span>
                {n.badge && (
                  <span className="ml-auto rounded-full border border-border bg-background px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">
                    {n.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6 rounded-lg border border-dashed border-border bg-background/60 p-3">
            <div className="text-[11px] font-medium text-foreground">Beta workspace</div>
            <div className="mt-1 text-[10.5px] leading-snug text-muted-foreground">
              Maison Noir · Piano beta
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0">
          {/* Mobile nav pills */}
          <div className="flex gap-1.5 overflow-x-auto border-b border-border bg-surface/50 px-4 py-2 md:hidden">
            {navItems.map((n) => (
              <span
                key={n.label}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] ${
                  n.active
                    ? "border-primary/30 bg-primary/10 text-primary font-medium"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >
                <n.icon className="h-3 w-3" />
                {n.label}
              </span>
            ))}
          </div>

          {/* Page header */}
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border px-6 py-5 sm:flex sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <h3 className="truncate text-[17px] font-semibold tracking-tight">Panoramica</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" />
                  Live
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Summer Creator Seeding · 250 inviti · Attiva dal 12 giugno
              </p>
            </div>
            <button className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium transition-colors hover:bg-surface">
              <Copy className="h-3.5 w-3.5" />
              Copia link regalo
            </button>
          </div>

          {/* Stats */}
          <div className="grid gap-px border-b border-border bg-border sm:grid-cols-3">
            <StatCard label="Inviti mandati" value="250" sub="Ultimi 30 giorni" />
            <StatCard label="Regali riscattati" value="187" sub="74,8% di riscatto" subColor="success" />
            <StatCard label="Completamento indirizzo" value="94%" sub="+12% vs. manuale" subColor="success" />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-3 text-left font-medium">Creator</th>
                  <th className="px-6 py-3 text-left font-medium">Prodotto</th>
                  <th className="px-6 py-3 text-left font-medium">Taglia</th>
                  <th className="px-6 py-3 text-left font-medium">Stato</th>
                  <th className="px-6 py-3 text-left font-medium">Postato</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-0 transition-colors hover:bg-surface/60"
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary/60 to-primary text-[11px] font-semibold text-primary-foreground">
                          {r.name[0]}
                        </div>
                        <div>
                          <div className="text-[13px] font-medium leading-tight">{r.name}</div>
                          <div className="text-[11px] text-muted-foreground">{r.handle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3.5 text-[13px] text-foreground">{r.product}</td>
                    <td className="px-6 py-3.5 text-[13px] tabular-nums text-muted-foreground">{r.size}</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${badgeCls(r.statusColor)}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-[12px]">
                      {r.posted === "posted" && <span className="inline-flex items-center gap-1 text-success">✅ Postato</span>}
                      {r.posted === "pending" && <span className="inline-flex items-center gap-1 text-muted-foreground">⏳ In attesa</span>}
                      {r.posted === "no" && <span className="inline-flex items-center gap-1 text-destructive">❌ Nessun post</span>}
                      {r.posted === "none" && <span className="text-muted-foreground">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, subColor }: { label: string; value: string; sub: string; subColor?: "success" }) {
  return (
    <div className="bg-card px-6 py-5">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">{value}</div>
      <div className={`mt-1 text-xs ${subColor === "success" ? "text-success font-medium" : "text-muted-foreground"}`}>
        {sub}
      </div>
    </div>
  );
}

/* --------------------------------- Per chi ------------------------------- */

function PerChi() {
  const cards = [
    { icon: Heart, title: "Brand di beauty", desc: "Skincare, makeup, haircare" },
    { icon: ShoppingBag, title: "Brand di moda", desc: "Abbigliamento, accessori, calzature" },
    { icon: Pill, title: "Brand di integratori", desc: "Wellness, vitamine, functional" },
    { icon: Home, title: "Brand lifestyle", desc: "Casa, bevande, prodotti di uso quotidiano" },
    { icon: Users, title: "Agenzie di creator", desc: "Gestione del seeding su larga scala" },
  ];
  return (
    <section className="border-b border-border bg-surface/50">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Per chi è</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Pensato per i brand che spediscono ogni settimana.
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-elegant"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] font-semibold tracking-tight">{c.title}</div>
                <div className="text-[12px] text-muted-foreground">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Beta ---------------------------------- */

function BetaSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="beta" className="border-b border-border">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <SectionEyebrow>Private Beta · Posti limitati</SectionEyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Apriamo OneGiftLink a 5 brand selezionati per la prima beta.
            </h2>
            <p className="mt-4 text-balance text-muted-foreground">
              Lavora direttamente con il team fondatore. Lancia la tua
              prossima campagna di seeding in una frazione del tempo e aumenta la tua conversione con un processo semplicissimo.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Gratis durante la fase Beta",
                "Setup assistito incluso",
                "Canale di feedback diretto col team e supporto 24/7",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px]">
                  <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant md:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                  <Check className="h-7 w-7" strokeWidth={3} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">Candidatura ricevuta.</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Ti scriviamo entro 2 giorni lavorativi. Nel frattempo, prepara la lista dei prossimi
                  creators!
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nome" name="name" placeholder="Giulia Rossi" />
                  <Field label="Email di lavoro" name="email" type="email" placeholder="giulia@brand.com" />
                </div>
                <Field label="Sito del brand" name="site" placeholder="https://ilmiobrand.com" />
                <SelectField
                  label="Volume mensile di regali ai creator"
                  name="volume"
                  options={["Meno di 30", "30 – 100", "100 – 300", "300 – 1.000", "Più di 1.000"]}
                />
                <SelectField
                  label="Piattaforma e-commerce usata"
                  name="platform"
                  options={["Shopify", "WooCommerce", "Altro"]}
                />
                <button
                  type="submit"
                  className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110"
                >
                  Candidati per la beta
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="pt-1 text-center text-[11px] text-muted-foreground">
                  Ci vogliono 30 secondi. Selezione a scorrimento. Niente spam: solo
                  aggiornamenti sul prodotto.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium text-foreground">{label}</span>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium text-foreground">{label}</span>
      <div className="relative">
        <select
          required
          name={name}
          defaultValue=""
          className="h-10 w-full appearance-none rounded-lg border border-input bg-background px-3 pr-9 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="" disabled>Seleziona…</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </label>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */

function FAQ() {
  const items = [
    { q: "OneGiftLink funziona con Shopify?", a: "Sì. In beta l'integrazione è assistita dal team, l'auto-sync arriva subito dopo. Funziona anche con WooCommerce e altri store via export pulito." },
    { q: "Cosa vede il creator?", a: "Una pagina mobile brandizzata, senza login: sceglie prodotto, taglia, colore, indirizzo, conferma. Tempo medio: 30 secondi." },
    { q: "Quanto ci vuole ad attivarlo?", a: "Circa un giorno, con setup assistito dal nostro team." },
    { q: "Che dati raccogliete e con chi li condividete?", a: "Solo i dati necessari alla spedizione, cifrati e condivisi solo con il tuo brand. GDPR-compliant, richieste di cancellazione onorate all'istante." },
    { q: "Il link è usabile più volte?", a: "Configurabile: singolo uso o multiplo, decidi tu per ogni campagna." },
    { q: "Quali brand sono ideali per la beta?", a: "Brand che mandano almeno 30-50 regali al mese ai creator, con voglia di lavorare fianco a fianco con il team fondatore." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-border bg-surface/50">
      <div className="container-page py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Domande frequenti.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {items.map((it, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-surface/50"
              >
                <span className="text-[15px] font-medium tracking-tight text-foreground">{it.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="animate-fade-up px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="bg-background">
      <div className="container-page py-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="OneGiftLink" className="h-7 w-auto" />
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              L'infrastruttura di creator gifting per i brand moderni.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link to="/cookie-policy" className="transition-colors hover:text-foreground">Cookie Policy</Link>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="transition-colors hover:text-foreground"
            >
              Preferenze cookie
            </button>
            <a href="mailto:hello@onegiftlink.com" className="transition-colors hover:text-foreground">
              hello@onegiftlink.com
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} OneGiftLink. Made in Italy.
        </div>
      </div>
    </footer>
  );
}

/* --------------------------------- Page ---------------------------------- */

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <ProblemaSection />
        <ComeFunziona />
        <PerchePlatform />
        <DashboardSection />
        <PerChi />
        <BetaSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

// Silence unused-import warnings for icons kept for future variants.
void Camera;
