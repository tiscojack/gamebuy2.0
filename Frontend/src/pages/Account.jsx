import React, { useState } from 'react';
import { postData } from './api'; // Importa le funzioni di api.js
import './Account.css';

const Account = () => {
  const [isRegister, setIsRegister] = useState(true); // Stato per gestione del form attivo
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleToggle = () => {
    setIsRegister(!isRegister);
    setMessage(''); // Reset del messaggio al cambio form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isRegister ? '/api/users/register' : '/api/users/login';
      const payload = isRegister ? { name, email, password } : { email, password };

      const response = await postData(endpoint, payload); // Usa la funzione postData per inviare la richiesta
      setMessage(response.message);
      
      if (response.token) {
        localStorage.setItem('token', response.token); // Salva il token in locale se login è avvenuto con successo
      }
    } catch (error) {
      console.log('Errore dettagliato:', error); // Log completo dell’errore
      setMessage(error.response?.data?.message || 'Errore in server');
    }
  };

  return (
    <div className="account-container">
      <h2>{isRegister ? 'Registrazione' : 'Login'}</h2>
      <form onSubmit={handleSubmit} className="account-form">
        {isRegister && (
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">
          {isRegister ? 'Registrati' : 'Accedi'}
        </button>
      </form>
      <p className="toggle-link" onClick={handleToggle}>
        {isRegister ? 'Hai già un account? Accedi' : 'Non hai un account? Registrati'}
      </p>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Account;


