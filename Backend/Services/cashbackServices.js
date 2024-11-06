import { findOne, create } from '../Models/Wallet';

// Funzione per calcolare e assegnare cashback
const calculateCashback = async (userId, storeId, amount) => {
  try {
    // Calcola il cashback (ad esempio, il 5% dell'importo)
    const cashbackAmount = amount * 0.05;

    // Trova il portafoglio dell'utente per quel negozio
    let wallet = await findOne({ where: { userId, storeId } });

    // Se non esiste, crea un nuovo portafoglio
    if (!wallet) {
      wallet = await create({ userId, storeId, balance: 0 });
    }

    // Aggiorna il saldo con il nuovo cashback
    wallet.balance += cashbackAmount;
    await wallet.save();

    return wallet;
  } catch (error) {
    console.error('Errore nel calcolo del cashback:', error);
    throw new Error('Errore nell\'assegnazione del cashback.');
  }
};

export default { calculateCashback };
