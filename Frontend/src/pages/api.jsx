import axios from 'axios';

// Configura l'istanza di Axios per fare richieste al backend
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // URL base dell'API backend (configurabile nell'.env)
  timeout: 5000, // Timeout per ogni richiesta (5 secondi)
});

// Funzione generica per fare richieste GET
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Errore nella richiesta GET:', error);
    throw error;
  }
};

// Funzione generica per fare richieste POST
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Errore nella richiesta POST:', error);
    throw error;
  }
};

// Funzione per fare richieste PUT (per aggiornamenti)
export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Errore nella richiesta PUT:', error);
    throw error;
  }
};

// Funzione per fare richieste DELETE
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Errore nella richiesta DELETE:', error);
    throw error;
  }
};
