import React, { useState } from 'react';
import './Sfide.css';

const ChallengePage = ({ availableGames = [], availableShops = [], userPoints = {} }) => {
    const [selectedGame, setSelectedGame] = useState(null);
    const [betPoints, setBetPoints] = useState(0);
    const [selectedShop, setSelectedShop] = useState(null);
    const [selectedMode, setSelectedMode] = useState(null);
    const [generatedLink, setGeneratedLink] = useState(null);
  
    const handleGameSelection = (game) => {
      setSelectedGame(game);
    };
  
    const handlePointsChange = (e) => {
      setBetPoints(Number(e.target.value));
    };
  
    const handleShopSelection = (shop) => {
      setSelectedShop(shop);
    };
  
    const handleModeSelection = (mode) => {
      setSelectedMode(mode);
    };
  
    const generateChallengeLink = () => {
      if (selectedGame && betPoints >= 0 && selectedShop && selectedMode) {
        const link = `https://example.com/challenge?game=${selectedGame}&points=${betPoints}&shop=${selectedShop}&mode=${selectedMode}`;
        setGeneratedLink(link);
      } else {
        alert("Compila tutti i campi per generare il link della sfida.");
      }
    };
  
    const shareOnWhatsapp = () => {
      if (generatedLink) {
        const whatsappLink = `https://api.whatsapp.com/send?text=Partecipa alla mia sfida su ${selectedGame}! Link: ${generatedLink}`;
        window.open(whatsappLink, '_blank');
      } else {
        alert("Genera prima il link per condividere la sfida.");
      }
    };
  
    // Verifica che `availableShops` e `userPoints` siano definiti
    const filteredShops = availableShops && userPoints
      ? availableShops.filter((shop) => userPoints[shop] >= betPoints)
      : [];
  
    return (
      <div className="challenge-page">
        {/* Sezione 1: Introduzione */}
        <div className="challenge-intro">
          <h1>Come funzionano le sfide?</h1>
          <p>
            In questa sezione potrai organizzare delle sfide con i tuoi amici. Tutto ciò che dovrai fare è scegliere uno tra i giochi disponibili, 
            scegliere la quota di partecipazione, ovvero i punti fedeltà in palio (anche 0 se vuoi fare un'amichevole) e per finire potrai scegliere 
            la modalità di svolgimento della sfida. A questo punto si genererà un link da mandare su Whatsapp al tuo amico e il gioco è fatto, siete 
            pronti a partire! Il vincitore raddoppierà la quota iniziale, mentre il perdente se la caverà meglio la prossima volta...
          </p>
        </div>
  
        {/* Sezione 2: Impostazione sfida */}
        <div className="challenge-setup">
          {/* Selezione del gioco */}
          <div className="challenge-row">
            <h3>Scegli un gioco</h3>
            <div className="game-buttons">
              {availableGames.length > 0 ? (
                availableGames.map((game) => (
                  <button
                    key={game}
                    className={`game-button ${selectedGame === game ? 'selected' : ''}`}
                    onClick={() => handleGameSelection(game)}
                  >
                    {game}
                  </button>
                ))
              ) : (
                <p>Nessun gioco disponibile.</p>
              )}
            </div>
          </div>
  
          {/* Selezione dei punti e del negozio */}
          <div className="challenge-row">
            <h3>Quanti punti fedeltà vuoi puntare?</h3>
            <input
              type="number"
              value={betPoints}
              onChange={handlePointsChange}
              min="0"
            />
            <div className="shop-buttons">
              {filteredShops.length > 0 ? (
                filteredShops.map((shop) => (
                  <button
                    key={shop}
                    className={`shop-button ${selectedShop === shop ? 'selected' : ''}`}
                    onClick={() => handleShopSelection(shop)}
                  >
                    {shop}
                  </button>
                ))
              ) : (
                <p>Nessun negozio disponibile.</p>
              )}
            </div>
          </div>
  
          {/* Selezione della modalità */}
          <div className="challenge-row">
            <h3>Scegli la modalità della sfida</h3>
            <div className="mode-buttons">
              {['Partita secca', 'Al meglio dei 3', 'Al meglio dei 5'].map((mode) => (
                <button
                  key={mode}
                  className={`mode-button ${selectedMode === mode ? 'selected' : ''}`}
                  onClick={() => handleModeSelection(mode)}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
  
          {/* Generazione e condivisione del link */}
          <div className="challenge-row">
            <button className="generate-link-button" onClick={generateChallengeLink}>
              Genera link sfida
            </button>
  
            {generatedLink && (
              <div className="challenge-link">
                <p>Link generato: <a href={generatedLink} target="_blank" rel="noopener noreferrer">{generatedLink}</a></p>
                <button className="whatsapp-share-button" onClick={shareOnWhatsapp}>
                  Condividi su WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ChallengePage;
  
  
