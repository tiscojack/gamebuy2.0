import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Per usare le variabili di ambiente da .env

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false, // Disabilita il logging delle query in produzione
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connessione al database riuscita.');
  } catch (error) {
    console.error('Errore durante la connessione al database:', error.message);
    process.exit(1); // Termina il processo in caso di errore critico
  }
};

export default sequelize;
export { connectDB };
