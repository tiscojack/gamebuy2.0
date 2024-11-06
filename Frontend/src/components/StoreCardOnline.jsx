import React from 'react';
import './StoreCard.css'; // Stile per le card dei negozi (puoi personalizzare)

const StoreCardOnline = ({ store }) => {
  const { name, description, cashback, monete } = store; // Destrutturazione delle proprietà del negozio

  return (
    <div className="store-card">
      <h3>{name}</h3> {/* Nome del negozio */}
      <p>{description}</p> {/* Descrizione del negozio */}
      <p>Cashback: {cashback}% </p>
      <p>Monete: {monete}</p> {/* Informazione sul cashback */}
      <button className="details-btn">Link al sito</button> {/* Pulsante per accedere al sito dell e-commerce */}
    </div>
  );
};

export default StoreCardOnline;
