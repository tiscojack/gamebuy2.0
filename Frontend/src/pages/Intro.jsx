import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';
//import funImage1 from '../assets/funImage1.png'; // Immagini simpatiche che useremo
//import funImage2 from '../assets/funImage2.png';

const Intro = () => {
  return (
    <div className="intro-container">
      {/* Titolo principale della pagina */}
      <h1 className="intro-title">Come funziona?</h1>

      {/* Prima sezione: Introduzione a GameBuy */}
      <section className="intro-section">
        <h2 className="section-title">Cos'è GameBuy?</h2>
        <p className="section-text">
          GameBuy è una piattaforma innovativa da cui è possibile effettuare pagamenti con i tradzionali metodi di pagamento
          e ricevere percentuali di punti fedeltà presso i negozi che hanno aderito all'iniziativa. 
          Ma non finisce qui: avrai la possibilità di completare missioni e sfidare i tuoi amici per ottenere 
          punti fedeltà da consumare nei tuoi negozi preferiti al checkout del pagamento.
        </p>
        {/*<img src={funImage1} alt="Immagine divertente" className="intro-image" />*/}
        <Link to="/stores">
          <button className="intro-button">Trova i negozi</button>
        </Link>
      </section>

      {/* Seconda sezione: Punti fedeltà */}
      <section className="intro-section">
        <h2 className="section-title">Cosa sono i punti fedeltà?</h2>
        <p className="section-text">
          Ogni negozio, a seguito di ogni acquisto, restituisce una percentuale della spesa in punti fedeltà che potrai
          spendere quando riacquisti in quel negozio. Avrai anche la possibilità di convertire i punti fedeltà da un
          negozio all'altro, ma ne perderai il 50%.
        </p>
      </section>

      <section className="intro-section">
        <h2 className="section-title">Come faccio a sapere cosa ho accumulato?</h2>
        <p className="section-text">
          Nella sezione Portafoglio potrai vedere tutti i punti fedeltà accumulati nei vari negozi e 
          vedrai la cronologia di tutti i pagamenti. Inoltre avrai la possibilità di convertire i punti fedeltà di un negozio
          in punti fedeltà di un altro negozio a tua scelta, perdendo il 50% dei punti.
        </p>
        {/*<img src={funImage1} alt="Immagine divertente" className="intro-image" />*/}
        <Link to="/walletPage">
          <button className="intro-button">Vai al portafoglio</button>
        </Link>
      </section>

      {/* Terza sezione: Missioni */}
      <section className="intro-section">
        <h2 className="section-title">Come funzionano le missioni?</h2>
        <p className="section-text">
          Nella pagina "Missioni" troverai diversi giochi con delle missioni da completare che ti permetteranno di
          guadagnare qualche punto fedeltà extra. Per ulteriori informazioni non ti resta che visitare la pagina.
        </p>
        <Link to="/missioni">
          <button className="intro-button">Vai alle Missioni</button>
        </Link>
      </section>

      {/* Quarta sezione: Sfide */}
      <section className="intro-section">
        <h2 className="section-title">Come funzionano le sfide?</h2>
        <p className="section-text">
          Accedendo alla pagina "Sfide", avrai la possibilità di giocare con i tuoi amici: metterete in palio una quota
          concordata di punti fedeltà e sceglierete uno tra i giochi disponibili, e via alle danze! Il vincitore
          raddoppierà i punti fedeltà del negozio di partenza, mentre il perdente avrà più fortuna la prossima volta.
        </p>
        {/*<img src={funImage2} alt="Immagine divertente" className="intro-image" />*/}
        <Link to="/sfide">
          <button className="intro-button">Vai alle Sfide</button>
        </Link>
      </section>
    </div>
  );
};

export default Intro;
