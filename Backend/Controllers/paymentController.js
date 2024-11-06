import Transaction from '../Models/Transaction.js';
import Wallet from '../Models/Wallet.js';

// Funzione per creare un pagamento con Stripe
export async function createPayment(req, res) {
  try {
    const { amount, currency } = req.body;

    // Crea il payment intent su Stripe
    const paymentIntent = await createPaymentIntent(amount, currency);

    res.status(200).json(paymentIntent);
  } catch (error) {
    console.error('Errore durante la creazione del pagamento:', error.message);
    res.status(500).json({ message: 'Errore del server. Riprova più tardi.' });
  }
}

// Funzione per completare un pagamento e aggiungere cashback
export async function completePayment(req, res) {
  try {
    const { paymentId, amount, storeId } = req.body;

    // Verifica il pagamento completato su Stripe
    // Aggiunge una transazione e cashback

    // Esempio di creazione di una transazione
    const transaction = await Transaction.create({
      userId: req.user.id,
      storeId: storeId,
      amount: amount,
      status: 'completed'
    });

    // Assegna cashback (ad esempio il 5% dell'importo)
    const cashback = amount * 0.05;

    // Aggiorna il portafoglio utente
    await Wallet.increment('balance', { by: cashback, where: { userId: req.user.id, storeId: storeId } });

    res.status(200).json({
      message: 'Pagamento completato con successo.',
      transaction: transaction,
      cashback: cashback
    });
  } catch (error) {
    console.error('Errore durante il completamento del pagamento:', error.message);
    res.status(500).json({ message: 'Errore del server. Riprova più tardi.' });
  }
}

export async function getPaymentStatus(req, res) {
  //TODO: farla
  res.status(201).json({
    message: 'Negozio trovato con successo.',
  });
}

export async function processPayment(req, res) {
  //TODO: farla
  res.status(201).json({
    message: 'Negozio trovato con successo.',
  });
}



