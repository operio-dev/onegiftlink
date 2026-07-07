import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { openCookiePreferences } from "@/components/cookie-banner";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyPage,
  head: () => ({
    meta: [
      { title: "Cookie Policy — OneGiftLink" },
      {
        name: "description",
        content:
          "Informativa sui cookie utilizzati da OneGiftLink: categorie, finalità, durata e come gestire il consenso.",
      },
      { property: "og:title", content: "Cookie Policy — OneGiftLink" },
      { property: "og:url", content: "/cookie-policy" },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
});

function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="Gennaio 2026">
      <p className="lede">
        Questa Cookie Policy descrive le tipologie di cookie e tecnologie simili utilizzate su
        onegiftlink.com, le finalità di utilizzo e come puoi gestire il tuo consenso, in conformità
        con il GDPR e le linee guida del Garante privacy dell'8 maggio 2021.
      </p>

      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati salvano sul tuo dispositivo per
        memorizzare informazioni relative alla navigazione. Tecnologie simili includono localStorage,
        sessionStorage e pixel di tracciamento.
      </p>

      <h2>2. Categorie di cookie utilizzate</h2>

      <h3>2.1 Cookie tecnici necessari</h3>
      <p>
        Indispensabili al funzionamento del sito e alla memorizzazione delle tue preferenze. Non
        richiedono consenso.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Finalità</th>
            <th>Durata</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ogl_cookie_consent_v1</td>
            <td>Memorizza le tue preferenze sui cookie</td>
            <td>12 mesi</td>
          </tr>
          <tr>
            <td>Cookie di sessione</td>
            <td>Sicurezza, bilanciamento del carico</td>
            <td>Sessione</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Cookie analitici</h3>
      <p>
        Ci aiutano a capire in forma aggregata come viene utilizzato il sito, per migliorarne
        contenuti e prestazioni. Attivi solo previo tuo consenso. In fase di beta possiamo attivare
        un provider di web analytics configurato per anonimizzare l'IP e senza profilazione
        cross-site.
      </p>

      <h3>2.3 Cookie di marketing</h3>
      <p>
        Utilizzati per misurare l'efficacia delle campagne di remarketing e l'attribuzione. Attivi
        solo previo tuo consenso esplicito. Attualmente non integriamo pixel di marketing di terze
        parti; qualora venissero introdotti, aggiorneremo questa tabella prima dell'attivazione.
      </p>

      <h2>3. Come gestire il consenso</h2>
      <p>
        Al primo accesso ti viene mostrato un banner con le opzioni <em>Accetta tutto</em>,{" "}
        <em>Rifiuta</em> e <em>Personalizza</em>. La tua scelta viene memorizzata e potrai
        modificarla in qualsiasi momento{" "}
        <button type="button" className="inline-link" onClick={openCookiePreferences}>
          aprendo il pannello preferenze
        </button>
        .
      </p>
      <p>
        Puoi inoltre disabilitare i cookie direttamente dalle impostazioni del tuo browser. La
        disattivazione dei cookie tecnici può compromettere il corretto funzionamento del sito.
      </p>

      <h2>4. Trasferimenti extra-UE</h2>
      <p>
        I fornitori attualmente in uso operano all'interno dello Spazio Economico Europeo. Qualora
        in futuro attivassimo servizi che comportano trasferimenti extra-UE, adotteremo garanzie
        adeguate ai sensi degli artt. 44 e ss. GDPR e aggiorneremo questa informativa.
      </p>

      <h2>5. Contatti</h2>
      <p>
        Per domande sulla presente Cookie Policy scrivi a{" "}
        <a href="mailto:privacy@onegiftlink.com">privacy@onegiftlink.com</a>. Per la disciplina
        completa del trattamento vedi la <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalLayout>
  );
}
