import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Per gestire il routing tra le pagine
import Navbar from './components/Navbar'; // La nostra barra di navigazione
import Home from './pages/Home'; // La pagina principale
import SearchStores from './pages/SearchStores'; // Pagina di ricerca dei negozi
import PayWithCoins from './pages/PayWithCoins'; // Nuova pagina per Paga con moneta
import AddToWallet from './pages/AddToWallet'; // Nuova pagina per Aggiungi a Wallet
import WalletPage from './pages/WalletPage'; // Pagina per visualizzare il portafoglio
import Wallet from './pages/Wallet'; // Pagina per visualizzare il portafoglio
import Intro from './pages/Intro'; // Pagina introduttiva funzionamento app
import Partnership from './pages/Partnership'; // Pagina per partnership
import Missioni from './pages/Missioni'; // Pagina per missioni individuali
import Sfide from './pages/Sfide'; // Pagina per sfide
import './App.css'; // Eventuale CSS globale

// Account non va TODO: vedere perchè


// Componente principale dell'app
function App() {
  return (
    <div className="App">
      <Navbar /> {/* Barra di navigazione sempre visibile */}
      <Routes>
        {/* Configurazione delle rotte per le diverse pagine */}
        <Route path="/" element={<Home />} /> {/* Pagina principale */}
        <Route path="/stores" element={<SearchStores />} /> {/* Ricerca negozi */}
        <Route path="/pay-with-coins" element={<PayWithCoins />} /> {/* Nuova pagina: Paga con moneta */}
        <Route path="/add-to-wallet" element={<AddToWallet />} /> {/* Nuova pagina: Aggiungi a Wallet */}
        <Route path="/walletPage" element={<WalletPage />} /> {/* archivio momentaneo */}
        <Route path="/wallet" element={<Wallet />} /> {/* Portafoglio */}
        <Route path="/intro" element={<Intro />} /> {/* Spiegazioni introduttive */}
        <Route path="/partnership" element={<Partnership />} /> {/* Richiesta Partnership */}
        <Route path="/missioni" element={<Missioni />} /> {/* Pagina per missioni individuali*/}
        <Route path="/sfide" element={<Sfide />} /> {/* Pagina per sfide*/}
      </Routes>
    </div>
  );
}

export default App;
