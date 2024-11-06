import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import StoreCardOnline from '../components/StoreCardOnline';
import StoreCard from '../components/StoreCardPizza';
import './Searchstores.css';

const SearchStores = () => {
  const [stores, setStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('e-commerce');
  const [location, setLocation] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 41.9028, lng: 12.4964 }); // Centro iniziale (Roma)
  const [mapZoom, setMapZoom] = useState(10);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(''); // Stato per la chiave API di Google Maps

  // Recupera i negozi (mock)
  useEffect(() => {
    const fetchStores = async () => {
      const storeData = [
        { id: 1, name: "Negozio 1", description: "Negozio di elettronica", cashback: 5, monete: 300, lat: 41.9028, lng: 12.4964 }, // Roma
        { id: 2, name: "Negozio 2", description: "Negozio di abbigliamento", cashback: 10, monete: 200, lat: 45.4642, lng: 9.1900 }, // Milano
        { id: 3, name: "Negozio 3", description: "Negozio di scarpe", cashback: 3, monete: 100, lat: 40.8518, lng: 14.2681 }, // Napoli
      ];
      setStores(storeData);
    };

    fetchStores();
  }, []);

  // Recupera la chiave API di Google Maps dal backend
  useEffect(() => {
    const fetchApiKey = async () => {
      const response = await fetch('/api/google-maps-key'); // Effettua la richiesta al tuo backend
      const data = await response.json();
      setGoogleMapsApiKey(data.apiKey); // Imposta la chiave API nello stato
    };

    fetchApiKey();
  }, []);

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  return (
    <div className="search-container">
      <div className="view-toggle">
        <button 
          className={`toggle-button ${viewMode === 'e-commerce' ? 'active' : ''}`} 
          onClick={() => setViewMode('e-commerce')}
        >
          E-commerce
        </button>
        <button 
          className={`toggle-button ${viewMode === 'asporto' ? 'active' : ''}`} 
          onClick={() => setViewMode('asporto')}
        >
          Asporto
        </button>
      </div>

      <div className="search-bar">
        {viewMode === 'e-commerce' ? (
          <input 
            type="text"
            placeholder="Cerca per nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        ) : (
          <input 
            type="text"
            placeholder="Inserisci la tua posizione..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        )}
      </div>

      {viewMode === 'e-commerce' ? (
        <div className="store-list">
          {filteredStores.map(store => (
            <StoreCardOnline key={store.id} store={store} />  
          ))}
        </div>
      ) : (
        <div className="asporto-section">
          <div className="search-map">
            {googleMapsApiKey && ( // Carica la mappa solo se abbiamo la chiave API
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={mapCenter}
                  zoom={mapZoom}
                >
                  {filteredStores.map(store => (
                    <Marker
                      key={store.id}
                      position={{ lat: store.lat, lng: store.lng }}
                      title={store.name}
                    />
                  ))}
                </GoogleMap>
              </LoadScript>
            )}
          </div>
          <div className="store-list">
            {filteredStores.map(store => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchStores;
