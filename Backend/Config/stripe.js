import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Per usare le variabili di ambiente da .env
const sumupApiUrl = 'https://api.sumup.com/v0.1/checkouts'; // URL API di SumUp

const createPayment = async (amount, currency, description) => {
  try {
    const response = await axios.post(sumupApiUrl, {
      amount: amount,
      currency: currency,
      description: description,
      pay_to_email: process.env.SUMUP_ACCOUNT_EMAIL, // Email del merchant
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.SUMUP_ACCESS_TOKEN}`, // Access token per SumUp
      }
    });

    return response.data;
  } catch (error) {
    console.error('Errore durante la creazione del pagamento con SumUp:', error.message);
    throw new Error('Errore nel processo di pagamento. Riprova più tardi.');
  }
};

export default { createPayment };

