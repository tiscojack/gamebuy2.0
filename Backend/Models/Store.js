import { DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';

// Definizione del modello Store
const Store = sequelize.define('Store', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  lng: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true, // Aggiunge createdAt e updatedAt
});

export default Store;
