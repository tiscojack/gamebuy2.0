import { Router } from 'express';
const router = Router();
import { getWallet } from '../Controllers/walletController.js';
import authenticateUser from '../Middleware/auth.js';

// Rotta per ottenere il saldo cashback di un utente per un negozio
router.get('/', authenticateUser, getWallet);

export default router;
