import Store from '../Models/Store.js';
import mapsServices from '../Services/mapsServices.js';

// Funzione per ottenere tutti i negozi
export async function getAllStores(req, res) {
  try {
    const stores = await Store.findAll();
    res.status(200).json(stores);
  } catch (error) {
    console.error('Errore nel recupero dei negozi:', error.message);
    res.status(500).json({ message: 'Errore del server. Riprova più tardi.' });
  }
}

// Funzione per ottenere negozi in base alla posizione
export async function getStoresByLocation(req, res) {
  try {
    const { lat, lng, radius, keyword } = req.query;

    if (!lat || !lng || !radius) {
      return res.status(400).json({ message: 'Parametri di localizzazione non validi.' });
    }

    // Trova negozi vicini usando le funzioni aggiornate
    const stores = await mapsServices.findNearbyStores(parseFloat(lat), parseFloat(lng), parseInt(radius), keyword);

    res.status(200).json(stores);
  } catch (error) {
    console.error('Errore nel recupero dei negozi per localizzazione:', error.message);
    res.status(500).json({ message: 'Errore del server. Riprova più tardi.' });
  }
}


// Funzione per aggiungere un nuovo negozio
export async function addStore(req, res) {
  try {
    const { name, address, lat, lng } = req.body;

    const newStore = await Store.create({ name, address, lat, lng });

    res.status(201).json({
      message: 'Negozio aggiunto con successo.',
      store: newStore
    });
  } catch (error) {
    console.error('Errore durante l\'aggiunta del negozio:', error.message);
    res.status(500).json({ message: 'Errore del server. Riprova più tardi.' });
  }
}

export async function deleteStore(req, res) {
    //TODO: farla
    res.status(201).json({
      message: 'Negozio rimosso con successo.',
    });
}

export async function getStoreById(req, res) {
  //TODO: farla
  res.status(201).json({
    message: 'Negozio trovato con successo.',
  });
}

export async function updateStore(req, res) {
  //TODO: farla
  res.status(201).json({
    message: 'Negozio aggiornato con successo.',
  });
}

