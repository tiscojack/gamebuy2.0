import React, { useState, useEffect } from 'react';
import './WalletPage.css';

const WalletPage = () => {
  const [balance, setBalance] = useState(0); // Stato per il saldo del portafoglio
  const [transactions, setTransactions] = useState([]); // Stato per le transazioni
  const [stores, setStores] = useState([]); // Stato per i negozi con punti fedeltà

  useEffect(() => {
    // Simuliamo il recupero del saldo, delle transazioni e dei negozi
    const fetchBalance = async () => {
      setBalance(50); // Simuliamo un saldo
    };

    const fetchTransactions = async () => {
      const userTransactions = [
        { id: 1, description: "Acquisto in Negozio 1", amount: -10 },
        { id: 2, description: "Cashback da Negozio 2", amount: 5 },
        { id: 3, description: "Acquisto in Negozio 3", amount: -15 }
      ];
      setTransactions(userTransactions);
    };

    const fetchStores = async () => {
      const userStores = [
        { id: 1, name: "Negozio 1", points: 100, minPoints: 50 },
        { id: 2, name: "Negozio 2", points: 75, minPoints: 30 },
        { id: 3, name: "Negozio 3", points: 150, minPoints: 100 }
      ];
      setStores(userStores);
    };

    fetchBalance();
    fetchTransactions();
    fetchStores();
  }, []);



  const handleConversion = (storeFrom, storeTo, points) => {
    const pointsToConvert = Math.floor(points / 2); // Conversione con perdita del 50%
    alert(`Hai convertito ${points} punti da ${storeFrom} a ${storeTo}. Ora hai ${pointsToConvert} punti in ${storeTo}.`);
  };

  return (
    <div className="wallet-page">
      <h1>Il tuo portafoglio</h1>

      {/* Sezione 1: Archivio Punti Fedeltà */}
      <div className="points-archive">
        <h2>Archivio Punti Fedeltà</h2>
        <div className="store-cards">
          {stores.map(store => (
            <div key={store.id} className="store-card">
              <h3>{store.name}</h3>
              <p>Punti: {store.points}</p>
              <p>Minimo per riscattare: {store.minPoints}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sezione 2: Cronologia delle Transazioni */}
      <div className="transactions-list">
        <h2>Cronologia delle Transazioni</h2>
        {transactions.map(transaction => (
          <div key={transaction.id} className="transaction-item">
            <p>{transaction.description}</p>
            <p>{transaction.amount} monete</p>
          </div>
        ))}
      </div>

      {/* Sezione 3: Conversione dei Punti Fedeltà */}
      <div className="points-conversion">
        <h2>Converti i tuoi punti fedeltà</h2>
        <p>Seleziona il negozio da cui convertire e il negozio di destinazione</p>
        <select>
          {stores.map(store => (
            <option key={store.id} value={store.name}>
              {store.name}
            </option>
          ))}
        </select>
        <select>
          {stores.map(store => (
            <option key={store.id} value={store.name}>
              {store.name}
            </option>
          ))}
        </select>
        <button
          className="convert-button"
          onClick={() => handleConversion('Negozio 1', 'Negozio 2', 50)}
        >
          Converti
        </button>
      </div>
    </div>
  );
};

export default WalletPage;


