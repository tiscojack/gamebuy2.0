import React from 'react';
import './Wallet.css'; // Eventuale stile per il portafoglio

const Wallet = ({ balance, storeName }) => {
  return (
    <div className="wallet">
      <h2>Il tuo portafoglio</h2>
      <p>Saldo attuale: {balance} monete</p> {/* Mostra il saldo */}
      {storeName && (
        <button className="spend-btn">
          Spendi in {storeName}
        </button>
      )} {/* Pulsante per spendere in un negozio specifico */}
    </div>
  );
};

export default Wallet;
