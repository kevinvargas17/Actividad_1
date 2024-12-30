import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importamos SweetAlert2
import MainPage from './Main_Page';// Importamos la pagina principal
import BookDetail from './components/BookDetail';//Importamos el componente del detalle del libro
import { CartProvider } from './context/CartProvider'; // Importamos el contexto del carrito para toda la aplciación
import Checkout from './components/Checkout';//Importamos el componente Checkout

function App() {
  // Estado para controlar la carga de la pagina
  const [loading, setLoading] = useState(true);

  // useEffect para simular la carga de la página durante 5 segundos
  useEffect(() => {
    // Mostrar alerta de "Cargando..."
    Swal.fire({
      title: 'Cargando...',
      text: 'Por favor, espera.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading(); // Muestra el icono de carga
      },
    });

    // Temporizador de 5 segundos
    const timer = setTimeout(() => {
      setLoading(false); // Después de 5 segundos, ocultamos la alerta
      Swal.close(); // Cerramos la alerta
    }, 5000);

    // Limpiamos el temporizador en caso de que el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return null; // Mientras se está cargando, no renderizamos nada más
  }

  return (
    <CartProvider> {/* Proveemos el contexto para toda la app */}
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />  {/* Ruta para la página principal */}
          <Route path="/book/:id" element={<BookDetail />} />  {/* Ruta para el detalle del libro */}
          <Route path="/checkout" element={<Checkout />} /> {/* Ruta para el proceso de compra */}
          {/* Puedes combinar estas rutas si realmente hacen lo mismo */}
          <Route path="/inicio" element={<MainPage />} />
          <Route path="/libros" element={<MainPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;