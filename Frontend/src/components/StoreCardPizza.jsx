import React from 'react';
import './StoreCard.css'; // Stile per le card dei negozi (puoi personalizzare)

const StoreCardPizza = ({ store }) => {
  const { name, description, posizione, distanza, cashback, monete } = store; // Destrutturazione delle proprietà del negozio

  return (
    <div className="store-card">
      <h3>{name}</h3> {/* Nome del negozio */}
      <p>{description}</p> {/* Descrizione del negozio */}
      <p>Cashback: {cashback}% </p>
      <p>Monete: {monete}</p> {/* Informazione sul cashback */}
      <p> {posizione} distanza: {distanza}</p> {/* Informazioni su posizione e distanza */}
      <button className="details-btn">Ordina</button> {/* Pulsante per ordinare */}
    </div>
  );
};

export default StoreCardPizza;