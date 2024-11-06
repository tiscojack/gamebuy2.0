// Middleware per gestire errori generali
const errorHandler = (err, req, res, next) => {
    console.error('Errore:', err);
  
    // Imposta lo stato HTTP (500 di default) e restituisce un messaggio d'errore
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Errore interno del server',
    });
  };
  
  export default { errorHandler };
  