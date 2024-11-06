//Ecco un esempio di come impostare le relazioni nel file principale dei modelli 
import User, { hasMany } from './User.js';
import Store, { hasMany as _hasMany } from './Store.js';
import Transaction, { belongsTo } from './Transaction.js';
import Wallet, { belongsTo as _belongsTo } from './Wallet.js';

// Relazione 1:N tra User e Transaction
hasMany(Transaction, { foreignKey: 'userId' });
belongsTo(User, { foreignKey: 'userId' });

// Relazione 1:N tra Store e Transaction
_hasMany(Transaction, { foreignKey: 'storeId' });
belongsTo(Store, { foreignKey: 'storeId' });

// Relazione 1:N tra User e Wallet
hasMany(Wallet, { foreignKey: 'userId' });
_belongsTo(User, { foreignKey: 'userId' });

// Relazione 1:N tra Store e Wallet
_hasMany(Wallet, { foreignKey: 'storeId' });
_belongsTo(Store, { foreignKey: 'storeId' });

export default {
  User,
  Store,
  Transaction,
  Wallet,
};
 /*Un utente può avere molte transazioni 
Un negozio può avere molte transazioni.
Un utente può avere molti portafogli (uno per ogni negozio partner).
Un negozio può essere collegato a più portafogli di utenti diversi.*/