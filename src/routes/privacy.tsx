import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { openCookiePreferences } from "@/components/cookie-banner";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — OneGiftLink" },
      {
        name: "description",
        content:
          "Informativa privacy di OneGiftLink ai sensi del GDPR: dati raccolti, finalità, base giuridica, retention e diritti dell'interessato.",
      },
      { property: "og:title", content: "Privacy Policy — OneGiftLink" },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <LegalLayout title="Informativa sulla Privacy" updated="Gennaio 2026">
      <p className="lede">
        La presente informativa è resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679
        (GDPR) e descrive come OneGiftLink tratta i dati personali raccolti attraverso questo sito
        web e nell'ambito del servizio di creator gifting durante la fase di private beta.
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        Il Titolare del trattamento è <strong>OneGiftLink</strong> (denominazione provvisoria in
        attesa di costituzione societaria). Fino al completamento della fase di beta, il punto di
        contatto per qualsiasi richiesta relativa alla privacy è:{" "}
        <a href="mailto:privacy@onegiftlink.com">privacy@onegiftlink.com</a>.
      </p>

      <h2>2. Dati personali trattati</h2>
      <p>Trattiamo le seguenti categorie di dati, in base al tuo rapporto con noi:</p>

      <h3>2.1 Visitatori del sito</h3>
      <ul>
        <li>Dati di navigazione (indirizzo IP anonimizzato, tipo di browser, pagine visitate).</li>
        <li>Preferenze relative ai cookie.</li>
      </ul>

      <h3>2.2 Brand che si candidano alla beta</h3>
      <ul>
        <li>Nome e cognome del referente.</li>
        <li>Email di lavoro.</li>
        <li>Sito web del brand.</li>
        <li>Volume mensile di regali ai creator (dato dichiarato).</li>
        <li>Piattaforma e-commerce utilizzata.</li>
      </ul>

      <h3>2.3 Creator destinatari di un regalo (in fase di beta)</h3>
      <ul>
        <li>Nome, cognome ed eventuale handle social forniti dal brand mittente.</li>
        <li>Indirizzo di spedizione (validato tramite provider di address lookup).</li>
        <li>Preferenze di prodotto (taglia, colore, variante scelta).</li>
        <li>Numero di telefono e/o email, se richiesti dal corriere per la spedizione.</li>
      </ul>
      <p>
        I dati del creator sono trattati per conto del brand mittente, che agisce come Titolare
        autonomo del trattamento. OneGiftLink opera in tali casi come <strong>Responsabile del
        trattamento</strong> ex art. 28 GDPR, sulla base di un accordo (DPA) sottoscritto con il
        brand.
      </p>

      <h2>3. Finalità e base giuridica</h2>
      <table>
        <thead>
          <tr>
            <th>Finalità</th>
            <th>Base giuridica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Valutazione della candidatura alla private beta e contatto commerciale</td>
            <td>Misure precontrattuali su richiesta dell'interessato (art. 6.1.b)</td>
          </tr>
          <tr>
            <td>Erogazione del servizio di gifting (checkout, validazione, spedizione)</td>
            <td>Esecuzione del contratto tra brand e OneGiftLink (art. 6.1.b)</td>
          </tr>
          <tr>
            <td>Sicurezza del sito, prevenzione abusi</td>
            <td>Legittimo interesse (art. 6.1.f)</td>
          </tr>
          <tr>
            <td>Cookie analitici e comunicazioni marketing</td>
            <td>Consenso dell'interessato (art. 6.1.a)</td>
          </tr>
          <tr>
            <td>Adempimenti di legge (contabili, fiscali, richieste dell'autorità)</td>
            <td>Obbligo legale (art. 6.1.c)</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Periodo di conservazione (retention)</h2>
      <ul>
        <li>
          <strong>Candidature alla beta non selezionate:</strong> fino a 12 mesi dall'invio, poi
          cancellazione o anonimizzazione.
        </li>
        <li>
          <strong>Dati dei brand clienti:</strong> per tutta la durata del rapporto contrattuale e
          fino a 10 anni dalla cessazione, per obblighi civilistici e fiscali.
        </li>
        <li>
          <strong>Dati dei creator (indirizzi, preferenze):</strong> conservati per il tempo
          strettamente necessario alla spedizione e al tracciamento della consegna, e comunque non
          oltre 90 giorni dalla consegna, salvo istruzioni diverse del brand titolare.
        </li>
        <li>
          <strong>Log di sicurezza:</strong> massimo 12 mesi.
        </li>
        <li>
          <strong>Cookie:</strong> come indicato nella{" "}
          <a href="/cookie-policy">Cookie Policy</a>.
        </li>
      </ul>

      <h2>5. Destinatari e trasferimenti</h2>
      <p>I dati possono essere comunicati a:</p>
      <ul>
        <li>Fornitori di hosting e infrastruttura cloud (all'interno dello Spazio Economico Europeo).</li>
        <li>Provider di email transazionale e comunicazione.</li>
        <li>Provider di validazione indirizzi.</li>
        <li>Corrieri e provider logistici, per il solo scopo della spedizione.</li>
        <li>Consulenti legali, contabili e revisori sottoposti a obbligo di riservatezza.</li>
      </ul>
      <p>
        Non trasferiamo dati personali al di fuori dello Spazio Economico Europeo se non verso paesi
        oggetto di decisione di adeguatezza o previa adozione di garanzie adeguate (Clausole
        Contrattuali Standard).
      </p>

      <h2>6. Diritti dell'interessato</h2>
      <p>
        Puoi esercitare in qualsiasi momento i diritti previsti dagli artt. 15-22 GDPR: accesso,
        rettifica, cancellazione, limitazione, portabilità, opposizione e revoca del consenso. Hai
        inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
        (<a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer">garanteprivacy.it</a>).
      </p>
      <p>
        Per esercitare i tuoi diritti scrivi a{" "}
        <a href="mailto:privacy@onegiftlink.com">privacy@onegiftlink.com</a>. Rispondiamo entro 30
        giorni.
      </p>

      <h2>7. Sicurezza</h2>
      <p>
        Adottiamo misure tecniche e organizzative adeguate: cifratura in transito (TLS) e a riposo,
        controllo degli accessi basato sui ruoli, logging degli eventi rilevanti, backup periodici e
        revisione dei fornitori.
      </p>

      <h2>8. Modifiche</h2>
      <p>
        Ci riserviamo di aggiornare la presente informativa. Le modifiche saranno pubblicate su
        questa pagina con l'indicazione della data di aggiornamento.
      </p>

      <h2>9. Preferenze cookie</h2>
      <p>
        Puoi modificare in ogni momento le tue preferenze sui cookie{" "}
        <button type="button" className="inline-link" onClick={openCookiePreferences}>
          aprendo il pannello dedicato
        </button>
        .
      </p>
    </LegalLayout>
  );
}
