import { Router } from 'express';
const router = Router();
import { registerUser, loginUser, getUserProfile, updateProfile } from '../Controllers/userController.js';
import authenticateUser from '../Middleware/auth.js';

// Rotta per la registrazione di un nuovo utente
router.post('/register', registerUser);

// Rotta per il login di un utente
router.post('/login', loginUser);

// Rotta per ottenere i dettagli del profilo utente (solo utenti autenticati)
router.get('/profile', authenticateUser, getUserProfile);

// Rotta per aggiornare il profilo utente
router.put('/profile', authenticateUser, updateProfile);

export default router;
