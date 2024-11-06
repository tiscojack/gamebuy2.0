import axios from 'axios';

// Funzione per creare un pagamento con SumUp
const createPayment = async (amount, currency, description) => {
  try {
    const response = await axios.post('https://api.sumup.com/v0.1/checkouts', {
      amount, // Importo in euro
      currency, // Valuta (es. EUR)
      description, // Descrizione del pagamento
      pay_to_email: process.env.SUMUP_ACCOUNT_EMAIL, // Email del merchant associato a SumUp
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.SUMUP_ACCESS_TOKEN}`, // Access token di SumUp
      }
    });

    return response.data;
  } catch (error) {
    console.error('Errore nella creazione del pagamento con SumUp:', error);
    throw new Error('Errore durante il pagamento.');
  }
};

export default { createPayment };

