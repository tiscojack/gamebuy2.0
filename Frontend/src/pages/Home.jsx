import React from 'react';
import { Link } from 'react-router-dom'; // Per creare i link di navigazione
import './Home.css'; // Importa lo stile personalizzato

const Home = () => {
  return (
    <div className="hero-section">
      {/* Sezione principale dell'home page */}
      <h1 className="hero-title">Benvenuti nella nostra Cashback App!</h1>
      <p className="hero-subtitle">Acquista nei nostri negozi partner e guadagna monete da spendere per il prossimo acquisto.</p>
      
      {/* Link per navigare alle altre pagine */}
      <div className="home-links">
        <Link to="/stores" className="hero-button">Cerca negozi partner</Link>
        <Link to="/wallet" className="hero-button">Visualizza il tuo portafoglio</Link>
      </div>

      {/* Sezione aggiuntiva per le features */}
      <div className="features">
        <div className="feature-box">
          <h3>Offerte esclusive</h3>
          <p>Scopri offerte uniche con i nostri negozi partner.</p>
        </div>
        <div className="feature-box">
          <h3>Cashback immediato</h3>
          <p>Ricevi monete istantanee su ogni acquisto.</p>
        </div>
        <div className="feature-box">
          <h3>Portafoglio digitale</h3>
          <p>Gestisci i tuoi guadagni e usali per i prossimi acquisti.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

