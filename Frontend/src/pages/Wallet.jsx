import React from 'react';
import { Link } from 'react-router-dom'; // Per creare i link di navigazione
import './Wallet.css'; // CSS personalizzato

const WalletPage = () => {
  return (
    <><hr />
    <div className="wallet-container">
      <h1>Wallet</h1>

      {/* Sezione per l'account */}
      <Link to="/account" className="account">
        A
      </Link>

      {/* Sezione per la VISA e i dati */}
      <div className="visa-dati">
        <p>Carta</p>
      </div>

      {/* Istruzioni */}
      <p className="instruction">Avvicina al lettore</p>

      {/* Pulsanti per pagare con moneta e aggiungere a wallet */}
      <Link to="/pay-with-coins" className="btn-moneta">Paga con moneta</Link>
      <Link to="/add-to-wallet" className="btn-aggiungi">+ Aggiungi a Wallet</Link>
    </div></>
  );
};

export default WalletPage;
