import { verifyToken } from '../services/authServices.js';
import User from '../Models/User.js';

// Middleware per autenticare l'utente
const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Token non fornito, accesso negato.' });
  }

  try {
    // Verifica il token
    const decoded = verifyToken(token);

    // Cerca l'utente tramite l'ID
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Utente non trovato, accesso negato.' });
    }

    req.user = user; // Assegna l'utente alla richiesta
    next();
  } catch (error) {
    console.error('Errore durante l\'autenticazione:', error);
    res.status(401).json({ message: 'Token non valido.' });
  }
};

export default authenticateUser;
