import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Main_Page';
import BookDetail from './pages/BookDetail';
import { CartProvider } from './context/CartProvider'; // Proveemos el contexto para toda la app
import Checkout from './components/Checkout';

function App() {
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
