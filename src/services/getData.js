import { useState, useEffect } from 'react';
import books from '../data/booksData'; // Asegúrate de que la ruta sea correcta

export const getData = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Simula una llamada a un servicio o API
    setTimeout(() => {
      // Simula obtener datos de un servicio
      setDatos(books); // Asigna los datos de libros a los estados
    }, 1000); // Simulamos un retraso de 1 segundo (puedes ajustarlo según sea necesario)
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  return datos;
};
