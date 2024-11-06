//file principale backend per collegare le rotte all'app Express
import express, { json } from 'express';
const app = express();
import userRoutes from './Routes/userRoutes.js';
import storeRoutes from './Routes/storeRoutes.js';
import paymentRoutes from './Routes/paymentRoutes.js';
import walletRoutes from './Routes/walletRoutes.js';

// Middleware per il parsing dei JSON
app.use(json());

// Rotte per gli utenti
app.use('/api/users', userRoutes);

// Rotte per i negozi
app.use('/api/stores', storeRoutes);

// Rotte per i pagamenti
app.use('/api/payments', paymentRoutes);

// Rotte per il portafoglio (cashback)
app.use('/api/wallet', walletRoutes);

// Gestione degli errori generici
app.use((err, req, res, next) => {
  console.error('Errore:', err);
  res.status(500).json({ message: 'Errore del server.' });
});

export default app;
