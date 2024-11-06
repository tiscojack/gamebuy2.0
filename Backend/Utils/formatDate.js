// Funzione per formattare una data in formato leggibile
const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('it-IT', options);
  };
  
  module.exports = { formatDate };
  