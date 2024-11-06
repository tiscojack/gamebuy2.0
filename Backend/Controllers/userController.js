import bcrypt from 'bcrypt';
import User from '../Models/User.js';
import {generateToken} from '../services/authServices.js'; // Modifica per usare authServices aggiornato

// Funzione per registrare un nuovo utente
export async function registerUser(req, res) {
  try {
    const { email, password, name } = req.body;

    // Verifica se l'utente esiste già
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Utente già registrato con questa email.' });
    }

    // Cripta la password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea il nuovo utente
    const newUser = await User.create({ email, password: hashedPassword, name });

    // Genera un token JWT
    const token = generateToken(newUser);

    res.status(201).json({
      message: 'Registrazione completata con successo.',
      user: newUser,
      token
    });
  } catch (error) {
    console.error('Errore durante la registrazione:', error.message);
    res.status(500).json({ message: 'Errore del server. Riprova più tardi.' });
  }
}

// Funzione per autenticare un utente (login)
export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Trova l'utente per email
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenziali non valide.' });
    }

    // Genera il token JWT
    const token = generateToken(user);

    res.status(200).json({
      message: 'Login effettuato con successo.',
      user,
      token
    });
  } catch (error) {
    console.error('Errore durante il login:', error.message);
    res.status(500).json({ message: 'Errore del server. Riprova più tardi.' });
  }
}

// Funzione per ottenere i dati dell'utente autenticato
export async function getUserProfile(req, res) {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'Utente non trovato.' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Errore durante il recupero del profilo utente:', error.message);
    res.status(500).json({ message: 'Errore del server. Riprova più tardi.' });
  }
}

// Funzione per aggiornare un profilo (TODO!!)
export async function updateProfile(req, res) {

  
}

