import { Router } from 'express';
const router = Router();
import { processPayment, getPaymentStatus } from '../Controllers/paymentController.js';
import authenticateUser from '../Middleware/auth.js';

// Rotta per processare un pagamento (e dare cashback)
router.post('/process', authenticateUser, processPayment);

// Rotta per ottenere lo stato di una transazione
router.get('/:transactionId', authenticateUser, getPaymentStatus);

export default router;
