import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: 1;
};

const STORAGE_KEY = "ogl_cookie_consent_v1";

export function getStoredConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function saveConsent(consent: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent("ogl:consent-updated", { detail: consent }));
  } catch {
    /* ignore */
  }
}

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!getStoredConsent()) setVisible(true);
    const onOpen = () => {
      setPrefsOpen(true);
      setVisible(true);
    };
    window.addEventListener("ogl:open-cookie-preferences", onOpen);
    return () => window.removeEventListener("ogl:open-cookie-preferences", onOpen);
  }, []);

  if (!mounted || !visible) return null;

  const commit = (c: Omit<Consent, "necessary" | "timestamp" | "version">) => {
    saveConsent({
      necessary: true,
      analytics: c.analytics,
      marketing: c.marketing,
      timestamp: new Date().toISOString(),
      version: 1,
    });
    setVisible(false);
    setPrefsOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-elegant animate-fade-up">
        {!prefsOpen ? (
          <div className="grid gap-4 p-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:p-6">
            <div className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary sm:grid">
              <Cookie className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[15px] font-semibold tracking-tight">Rispettiamo la tua privacy</div>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                Usiamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie
                analitici per capire come viene usato. Puoi accettare, rifiutare o personalizzare le
                tue scelte in qualsiasi momento. Maggiori dettagli nella{" "}
                <Link to="/cookie-policy" className="font-medium text-foreground underline-offset-2 hover:underline">
                  Cookie Policy
                </Link>{" "}
                e nella{" "}
                <Link to="/privacy" className="font-medium text-foreground underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:flex-col sm:items-stretch">
              <button
                onClick={() => commit({ analytics: true, marketing: true })}
                className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                Accetta tutto
              </button>
              <button
                onClick={() => commit({ analytics: false, marketing: false })}
                className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-[13px] font-medium transition-colors hover:bg-surface"
              >
                Rifiuta
              </button>
              <button
                onClick={() => setPrefsOpen(true)}
                className="inline-flex h-9 items-center justify-center rounded-lg px-2 text-[12px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Personalizza
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[15px] font-semibold tracking-tight">Preferenze cookie</div>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  Scegli quali categorie autorizzare. Puoi cambiare idea in ogni momento.
                </p>
              </div>
              <button
                aria-label="Chiudi"
                onClick={() => setPrefsOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 space-y-3">
              <ToggleRow
                title="Necessari"
                desc="Indispensabili al funzionamento del sito (sessione, sicurezza, memorizzazione preferenze). Non richiedono consenso."
                checked
                disabled
              />
              <ToggleRow
                title="Analitici"
                desc="Ci aiutano a capire in forma aggregata come viene usato il sito, per migliorarlo. Attivi solo con il tuo consenso."
                checked={analytics}
                onChange={setAnalytics}
              />
              <ToggleRow
                title="Marketing"
                desc="Usati per misurare campagne di remarketing e attribuzione. Attivi solo con il tuo consenso."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button
                onClick={() => commit({ analytics: false, marketing: false })}
                className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-[13px] font-medium transition-colors hover:bg-surface"
              >
                Rifiuta tutto
              </button>
              <button
                onClick={() => commit({ analytics, marketing })}
                className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                Salva preferenze
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ToggleRow({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-surface/50 p-4">
      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-foreground">{title}</div>
        <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{desc}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
        className={`relative mt-0.5 inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-primary" : "bg-border-strong"
        } ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event("ogl:open-cookie-preferences"));
}
