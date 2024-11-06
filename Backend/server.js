import app from './app.js';
import sequelize from './Config/db.js';

// Impostazioni della porta
const PORT = process.env.PORT || 3000;

// Funzione per avviare il server e collegarsi al database
const startServer = async () => {
  try {
    // Verifica connessione al database
    await sequelize.authenticate();
    console.log('Connessione al database stabilita correttamente.');

    // Sincronizza i modelli con il database
    await sequelize.sync(); // Usa { force: true } per resettare il db ad ogni avvio (solo in fase di sviluppo)
    console.log('Modelli sincronizzati con il database.');

    // Avvia il server sulla porta specificata
    app.listen(PORT, () => {
      console.log(`Server avviato sulla porta ${PORT}`);
    });
  } catch (error) {
    console.error('Errore durante l\'avvio del server:', error);
    process.exit(1); // Termina il processo in caso di errore critico
  }
};

// Avvio del server
startServer();
