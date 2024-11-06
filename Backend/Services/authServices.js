import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

// Funzione per generare il token JWT per l'utente
export const generateToken = (user) => {
  try {
    const token = sign(
      { id: user.id, email: user.email }, // Dati da inserire nel token
      process.env.JWT_SECRET, // Chiave segreta per firmare il token
      { expiresIn: '1h' } // Il token scadrà dopo 1 ora
    );
    return token;
  } catch (error) {
    console.log('Errore dettagliato:', error); // Log completo dell’errore
    console.error('Errore nella generazione del token:', error);
    throw new Error('Errore nella generazione del token.');
  }
};

// Funzione per verificare il token JWT
export const verifyToken = (token) => {
  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error('Errore nella verifica del token:', error);
    throw new Error('Token non valido.');
  }
};


