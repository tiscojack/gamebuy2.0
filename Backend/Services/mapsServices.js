import axios from 'axios';
import { getAllStores } from '../Controllers/storeController.js';

// Funzione per trovare negozi vicini (simulata con Haversine)
const findNearbyStores = async (latitude, longitude, radius = 5000, keyword = '') => {
  try {
    const allStores = await getAllStores(); // Funzione simulata per ottenere tutti i negozi

    // Filtra i negozi in base alla distanza calcolata con Haversine
    const nearbyStores = allStores
      .filter(store => {
        const distance = calculateHaversineDistance(latitude, longitude, store.latitude, store.longitude);
        return distance <= radius / 1000; // Confronta con raggio in km
      })
      .map(store => ({
        name: store.name,
        address: store.address,
        latitude: store.latitude,
        longitude: store.longitude,
        distance: calculateHaversineDistance(latitude, longitude, store.latitude, store.longitude).toFixed(2) + ' km'
      }));

    return nearbyStores;
  } catch (error) {
    console.error('Errore nella ricerca dei negozi:', error);
    throw new Error('Impossibile trovare negozi vicini.');
  }
};

// Funzione per ottenere le coordinate di un indirizzo tramite Geocode.xyz
const getCoordinatesFromAddress = async (address) => {
  try {
    const response = await axios.get('https://geocode.xyz', {
      params: {
        locate: address,
        json: 1
      }
    });

    if (response.data.error) {
      throw new Error('Errore durante la geocodifica dell\'indirizzo.');
    }

    return {
      latitude: parseFloat(response.data.latt),
      longitude: parseFloat(response.data.longt)
    };
  } catch (error) {
    console.error('Errore durante la geocodifica dell\'indirizzo:', error);
    throw new Error('Errore nel recupero delle coordinate.');
  }
};

// Formula di Haversine per calcolare la distanza tra due coordinate
const calculateHaversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Raggio della Terra in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distanza in km
};

export default { findNearbyStores, getCoordinatesFromAddress, calculateHaversineDistance };
