import React from 'react';
import { Link } from 'react-router-dom';  // Importamos Link de React Router
import { useCart } from '../context/CartProvider';  // Importamos el contexto del carrito
import '../styles/index.css';  // Asegúrate de importar los estilos personalizados

const BookCard = ({ book }) => {
  const { addToCart } = useCart();  // Usamos el hook useCart para acceder a addToCart

  // Función para manejar el clic en el botón "Agregar"
  const handleAddToCart = () => {
    addToCart(book);  // Llamamos a la función addToCart con el producto actual
  };

  

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
      <div className="card h-100 d-flex flex-column position-relative">
        <div className="d-flex justify-content-center align-items-end" style={{ backgroundColor: '#e9ecef', height: '300px' }}>
          <img src={book.image} alt={`Libro ${book.title}`} style={{ maxHeight: '290px', objectFit: 'contain' }} />
        </div>
        <div className="card-body p-2 d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
          <h6 className="card-title text-truncate" style={{ fontSize: '14px', marginBottom: '8px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {book.title}
          </h6>
          <p className="card-text" style={{ fontSize: '12px', marginBottom: '4px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {book.edition}
          </p>
          <p className="card-text" style={{ fontSize: '12px', marginBottom: '4px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {book.author}
          </p>
          <p className="card-text" style={{ fontSize: '12px', marginBottom: '4px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {book.rating} ({book.reviews})
          </p>
          <p className="card-text" style={{ fontSize: '12px', marginBottom: '4px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {book.format}
          </p>
          <p className="card-text text-primary" style={{ fontSize: '14px', marginBottom: '4px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {"COP$" + book.price} <span className="text-muted text-decoration-line-through" style={{ fontSize: '12px' }}>{book.originalPrice}</span>
          </p>
          <p className="card-text" style={{ fontSize: '12px', marginBottom: '4px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {book.delivery}
          </p>
          <p className="card-text text-muted" style={{ fontSize: '12px', marginBottom: '4px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {book.options}
          </p>
          <p className="card-text" style={{ fontSize: '12px', marginBottom: '4px', wordWrap: 'break-word', whiteSpace: 'normal' }}>
            {book.otherFormat}
          </p>

          {/* Contenedor para los botones "Ver detalle" y "Agregar" */}
          <div className="btn-container">
            {/* Botón "Ver detalle" envuelto en Link */}
            <Link to={`/book/${book.id}`}>
              <button 
                className="btn btn-outline-light w-100" 
                id="viewDetailBtn"
              >
                Ver detalle
              </button>
            </Link>

            {/* Botón "Agregar" */}
            <button 
              className="btn btn-warning w-100 mt-2" 
              onClick={handleAddToCart}  // Añadimos el producto al carrito
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
