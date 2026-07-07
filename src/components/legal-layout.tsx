import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, Gift } from "lucide-react";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
              <Gift className="h-4 w-4" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">OneGiftLink</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Torna alla home
          </Link>
        </div>
      </header>

      <main className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Documento legale
          </span>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Ultimo aggiornamento: {updated}</p>

          <article className="legal-prose mt-10">{children}</article>
        </div>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="container-page py-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} OneGiftLink. Made in Italy.
        </div>
      </footer>
    </div>
  );
}
