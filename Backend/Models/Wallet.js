import { DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

// Definizione del modello Wallet
const Wallet = sequelize.define('Wallet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  storeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Stores',
      key: 'id',
    },
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0, // Il saldo iniziale è zero
  },
}, {
  timestamps: true, // Aggiunge createdAt e updatedAt
});

export default Wallet;
