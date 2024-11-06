import React from 'react';
import './Missioni.css';

const MissionPage = () => {
  const handleRedeemClick = (gameId) => {
    // Funzione per simulare il controllo delle missioni completate
    const missionsCompleted = false; // Simuliamo che non siano completate

    if (missionsCompleted) {
      alert("Seleziona il negozio dove riscattare i tuoi punti fedeltà.");
      // Qui potremmo eventualmente aprire una lista dei negozi da cui scegliere
    } else {
      alert("Non hai completato nessuna missione.");
    }
  };

  return (
    <div className="mission-page">
      {/* Sezione 1: Introduzione */}
      <div className="mission-intro">
        <h1>Come funzionano le missioni?</h1>
        <p>
          In questa pagina troverai diversi giochi da svolgere in modalità individuale con una breve descrizione del loro funzionamento e delle ricompense che si ottengono completando le missioni proposte. 
          Ti basterà scaricare l'applicazione e accedere con lo stesso account di GameBuy. Non appena completate le missioni ti basterà cliccare sul pulsante "Riscatta" e poi selezionare il negozio che preferisci per i tuoi punti fedeltà.
        </p>
      </div>

      {/* Sezione 2: Giochi */}
      <div className="games-list">
        <div className="game-card">
          {/* Icona del gioco (placeholder per ora) */}
          <div className="game-icon"></div>

          {/* Dettagli del gioco */}
          <div className="game-details">
            <h3>Nome del Gioco 1</h3>
            <p>
              Questo è un gioco molto avvincente in cui dovrai superare diversi livelli per guadagnare punti fedeltà. Scarica l'app e inizia subito la tua avventura!
            </p>
            <button className="download-button">Scarica</button>
          </div>

          {/* Sezione delle missioni */}
          <div className="mission-list">
            <ul>
              <li>Completa il livello 1 - Guadagna 10 punti fedeltà</li>
              <li>Raggiungi il punteggio di 1000 - Guadagna 20 punti fedeltà</li>
            </ul>
          </div>

          {/* Pulsante per riscattare le missioni */}
          <button
            className="redeem-button"
            onClick={() => handleRedeemClick(1)}
          >
            Riscatta
          </button>
        </div>

        <div className="game-card">
          {/* Icona del gioco (placeholder per ora) */}
          <div className="game-icon"></div>

          {/* Dettagli del gioco */}
          <div className="game-details">
            <h3>Nome del Gioco 2</h3>
            <p>
              Affronta nemici formidabili e completa le missioni per ottenere incredibili ricompense! Scarica il gioco e divertiti con le sfide.
            </p>
            <button className="download-button">Scarica</button>
          </div>

          {/* Sezione delle missioni */}
          <div className="mission-list">
            <ul>
              <li>Vinci 3 battaglie consecutive - Guadagna 15 punti fedeltà</li>
              <li>Raggiungi il livello 5 - Guadagna 25 punti fedeltà</li>
            </ul>
          </div>

          {/* Pulsante per riscattare le missioni */}
          <button
            className="redeem-button"
            onClick={() => handleRedeemClick(2)}
          >
            Riscatta
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
