import React from 'react';
import { useParams } from 'react-router-dom'; // Usamos useParams para obtener el id del libro
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartProvider';
import CartMenu from '../components/CartMenu';
import books from '../data/booksData';
import { Link } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();  // Obtiene el ID del libro desde la URL
  const { cart, isOpen, toggleCart, addToCart } = useCart(); 

  // Buscar el libro usando el ID
  const book = books.find((book) => book.id === parseInt(id)); // Convierte el id a un número para la comparación

  // Si el libro no existe, muestra un mensaje de error
  if (!book) {
    return <div>Libro no encontrado</div>;
  }

  // Función para manejar el agregado al carrito
  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      quantity: 1, // La cantidad inicial es 1
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row w-100 shadow rounded-lg p-4" style={{ backgroundColor: '#ffffff', margin: '0 auto' }}>
          
          {/* Columna de imagen */}
          <div className="col-md-3 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <img 
              src={book.image} 
              alt={book.title} 
              className="img-fluid rounded shadow" 
              style={{ 
                width: '100%', // Hacemos que la imagen ocupe el 100% del espacio disponible
                maxWidth: '600px', // Limita el tamaño máximo de la imagen
                height: 'auto', // Mantiene la proporción
              }} 
            />
          </div>

          {/* Columna de detalles del libro y botones */}
          <div className="col-md-6">
            <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: 'bold' }}>{book.title}</h1>
            <h4 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', color: '#666' }}>Por {book.author}</h4>

            {/* Rating */}
            <div className="d-flex justify-content-start align-items-center my-3">
              <span className="text-warning" style={{ fontSize: '1.5rem' }}>
                {'★'.repeat(Math.round(book.rating))}
              </span>
              <span className="ml-2" style={{ fontSize: '1.2rem', color: '#888' }}>({book.reviews} reseñas)</span>
            </div>

            <p className="h4 text-primary my-3" style={{ fontFamily: 'Arial, sans-serif' }}>Precio: ${book.price}</p>

            {/* Descripción */}
            <p style={{ fontFamily: 'Arial, sans-serif', color: '#444', lineHeight: '1.6' }}>{book.description}</p>

            {/* Opciones de compra */}
            <div className="my-3">
              <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', color: '#333' }}>Opciones de compra:</h5>
              <ul>
                {book.options.map((option, index) => (
                  <li key={index} style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', color: '#555' }}>{option}</li>
                ))}
              </ul>
            </div>

            {/* Información adicional */}
            <div className="my-3">
              <p style={{ fontFamily: 'Arial, sans-serif', color: '#444' }}><strong>Género:</strong> {book.genre}</p>
              <p style={{ fontFamily: 'Arial, sans-serif', color: '#444' }}><strong>ISBN:</strong> {book.isbn}</p>
            </div>
          </div>

          {/* Nueva columna para el Envío Gratis, Stock disponible, y Botones */}
          <div className="col-md-3">
            {/* Envío Gratis */}
            <div className="mb-3">
              <p style={{ color: 'green', fontWeight: 'bold', fontSize: '1rem' }}>Envío gratis a todo el país</p>
              <p style={{ fontSize: '0.9rem' }}>Conoce los tiempos y las formas de envío.</p>
            </div>

            {/* Stock disponible */}
            <div className="mb-3">
              <p><strong>Stock disponible</strong></p>
              <select className="form-select" aria-label="Cantidad disponible">
                <option value="1">1 unidad (+{book.stock} disponibles)</option>
              </select>
            </div>

            {/* Botones de acción */}
            <div className="d-flex flex-column align-items-start">
            <Link to={'/checkout'}>
            <button className="btn btn-primary mb-2 rounded-pill px-4 py-2" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem' }}>Comprar ahora</button>
            </Link>
              <button 
                className="btn btn-outline-secondary rounded-pill px-4 py-2" 
                style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem' }} 
                onClick={handleAddToCart} // Agrega el libro al carrito
              >
                Agregar al carrito
              </button>
            </div>

            {/* Información del vendedor */}
            <div className="mt-3">
              <p>Vendido por <strong>MUNDIALDELIBROS</strong></p>
              <p>MercadoLíder | <strong>+10mil ventas</strong></p>
            </div>
          </div>
        </div>

        {/* Menú lateral del carrito */}
        <CartMenu cart={cart} isOpen={isOpen} toggleCart={toggleCart} />
      </div>
    </>
  );
};

export default BookDetail;
