import { DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';
import { genSalt, hash, compare } from 'bcrypt';

// Definizione del modello User
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Verifica che l'email sia valida
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: async (user) => {
      // Hash della password prima di salvare nel database
      const salt = await genSalt(10);
      user.password = await hash(user.password, salt);
    },
    beforeUpdate: async (user) => {
      // Hash della password solo se è stata modificata
      if (user.changed('password')) {
        const salt = await genSalt(10);
        user.password = await hash(user.password, salt);
      }
    },
  },
});

// Metodo per verificare la password dell'utente
User.prototype.isValidPassword = async function (password) {
  return await compare(password, this.password);
};

export default User;
