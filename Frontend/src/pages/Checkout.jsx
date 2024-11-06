import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js'; // Carica la libreria Stripe
import './Checkout.css'; // Stile per la pagina di checkout

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY); // Chiave pubblica di Stripe

const Checkout = () => {
  const [amount, setAmount] = useState(0); // Stato per l'importo del pagamento

  // Funzione per gestire il pagamento con Stripe
  const handlePayment = async () => {
    const stripe = await stripePromise; // Recupera l'istanza di Stripe
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });
    const session = await response.json();

    // Reindirizza a Stripe Checkout
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error.message); // Gestione errori
    }
  };

  return (
    <div className="checkout-container"> {/* Contenitore principale della pagina di checkout */}
      <h1 className="checkout-title">Checkout</h1> {/* Titolo del checkout */}

      {/* Form per l'importo del pagamento */}
      <div className="checkout-form">
        <input
          type="number"
          placeholder="Inserisci l'importo..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // Imposta l'importo inserito
        />
        <button className="checkout-button" onClick={handlePayment}> {/* Bottone di pagamento */}
          Paga con Stripe
        </button>
      </div>

      {/* Riepilogo pagamento */}
      <div className="checkout-summary">
        <h3>Riepilogo</h3>
        <p>Stai per pagare: <strong>{amount} €</strong></p>
      </div>
    </div>
  );
};

export default Checkout;

