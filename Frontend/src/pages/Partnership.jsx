import React from 'react';
import './Partnership.css';

const Partnership = () => {
  return (
    <div className="partnership-container">
      <h1 className="partnership-title">Unisciti a GameBuy: Espandi la Tua Attività!</h1>

      {/* Sezione 1: Introduzione */}
      <section className="partnership-section">
        <h2 className="section-title">Perché diventare nostro partner?</h2>
        <p className="section-text">
          Aderendo a GameBuy, avrai la possibilità di aumentare la visibilità del tuo negozio e di fidelizzare i clienti
          come mai prima d'ora. La nostra piattaforma innovativa consente ai clienti di guadagnare punti fedeltà ogni
          volta che acquistano, invogliandoli a tornare per spendere i loro punti.
        </p>
      </section>

      {/* Sezione 2: Vantaggi per tutti i negozi */}
      <section className="partnership-section">
        <h2 className="section-title">Vantaggi per il tuo negozio</h2>
        <ul className="section-list">
          <li>Maggiore visibilità: sarai presente nella nostra piattaforma usata da migliaia di utenti ogni giorno.</li>
          <li>Fidelizzazione del cliente: i punti fedeltà invogliano i clienti a tornare più volte.</li>
          <li>Promozioni mirate: offri promozioni esclusive per attirare nuovi clienti.</li>
          <li>Gestione facile: tutto gestito in modo intuitivo attraverso la nostra dashboard.</li>
        </ul>
      </section>

      {/* Sezione 3: Vantaggi specifici per il cibo da asporto */}
      <section className="partnership-section">
        <h2 className="section-title">Vantaggi extra per chi offre cibo da asporto</h2>
        <p className="section-text">
          Se hai un'attività che vende cibo da asporto, la partnership con GameBuy ti garantisce un vantaggio unico.
          Grazie ai nostri programmi di fidelizzazione, i clienti saranno invogliati a ordinare regolarmente e ad
          accumulare punti da spendere nei tuoi menù. Più ordini, più vantaggi per i tuoi clienti, e per te!
        </p>
        <ul className="section-list">
          <li>Ordini ripetuti: i clienti torneranno più spesso per sfruttare i punti fedeltà.</li>
          <li>Promozioni speciali: puoi creare promozioni settimanali o mensili per invogliare gli ordini regolari.</li>
          <li>Facilità di conversione: i clienti potranno convertire i punti fedeltà da altre attività per usarli nel tuo locale.</li>
        </ul>
      </section>

      {/* Sezione 4: Call to Action */}
      <section className="partnership-section">
        <h2 className="section-title">Vuoi saperne di più?</h2>
        <p className="section-text">
          Contattaci oggi stesso per maggiori informazioni su come unirti a GameBuy e iniziare a beneficiare dei nostri
          programmi di fidelizzazione!
        </p>
        <button className="partnership-button" onClick={() => window.location = 'mailto:info@gamebuy.com'}>
          Contattaci
        </button>
      </section>
    </div>
  );
};

export default Partnership;
