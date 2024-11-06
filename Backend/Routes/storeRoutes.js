import { Router } from 'express';
const router = Router();
import { getAllStores, getStoreById, addStore, updateStore, deleteStore } from '../Controllers/storeController.js';
import authenticateUser from '../Middleware/auth.js';

// Rotta per ottenere la lista di tutti i negozi (filtrabile)
router.get('/', authenticateUser, getAllStores);

// Rotta per ottenere i dettagli di un negozio specifico
router.get('/:id', authenticateUser, getStoreById);

// Rotta per aggiungere un nuovo negozio (eventuale admin route)
router.post('/', authenticateUser, addStore);

// Rotta per aggiornare i dettagli di un negozio esistente
router.put('/:id', authenticateUser, updateStore);

// Rotta per eliminare un negozio
router.delete('/:id', authenticateUser, deleteStore);

export default router;
