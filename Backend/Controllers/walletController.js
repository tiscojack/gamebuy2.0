import Wallet from '../Models/Wallet.js';

// Funzione per ottenere il saldo cashback dell'utente
export async function getWallet(req, res) {
  try {
    const wallet = await Wallet.findAll({ where: { userId: req.user.id } });

    if (!wallet) {
      return res.status(404).json({ message: 'Nessun portafoglio trovato.' });
    }

    res.status(200).json(wallet);
  } catch (error) {
    console.error('Errore nel recuperare il portafoglio:', error.message);
    res.status(500).json({ message: 'Errore del server. Riprova più tardi.' });
  }
}
