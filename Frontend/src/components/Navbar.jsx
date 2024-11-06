import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // Recupera il nome utente, potrebbe venire da uno stato, contesto o da un API
  const userName = "Mario"; // Sostituisci con il metodo reale per ottenere il nome utente
  
  // Prendiamo l'iniziale del nome utente
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Cashback App</Link> {/* Link alla Home */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/stores">Negozi</Link></li>
        <li><Link to="/intro">Come funziona?</Link></li>
        <li><Link to="/partnership">Partnership</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/walletPage">Portafoglio</Link></li>
        <li><Link to="/wallet">Carte</Link></li>
        <li><Link to="/missioni">Missioni</Link></li>
        <li><Link to="/sfide">Sfide</Link></li>
      </ul>
      
      {/* Bottone circolare con l'iniziale del nome utente */}
      <div className="account-button">
        <Link to="/account">
          <div className="account-circle">
            {userInitial}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

