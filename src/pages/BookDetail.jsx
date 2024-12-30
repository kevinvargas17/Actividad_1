import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartProvider';
import CartMenu from '../components/CartMenu';
import books from '../data/booksData';
import { Link } from 'react-router-dom';
import '../styles/BookDetail.css'; // Asegúrate de importar los estilos personalizados

const BookDetail = () => {
  const { id } = useParams();  
  const { cart, isOpen, toggleCart, addToCart } = useCart(); 

  const book = books.find((book) => book.id === parseInt(id)); 

  if (!book) {
    return <div>Libro no encontrado</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      quantity: 1,
    });
  };

  return (
    <>
      <Navbar />
      <div className="book-detail container mt-3">
        <div className="book-detail__row row w-100 shadow rounded-lg p-4">
          
          <div className="book-detail__image-col col-md-3 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <img 
              src={book.image} 
              alt={book.title} 
              className="book-detail__image img-fluid rounded shadow" 
            />
          </div>

          <div className="book-detail__info-col col-md-6">
            <h1 className="book-detail__title">{book.title}</h1>
            <h4 className="book-detail__author">Por {book.author}</h4>

            <div className="book-detail__rating d-flex justify-content-start align-items-center my-3">
              <span className="book-detail__rating-stars text-warning">
                {'★'.repeat(Math.round(book.rating))}
              </span>
              <span className="book-detail__reviews ml-2">({book.reviews} reseñas)</span>
            </div>

            <p className="book-detail__price h4 text-primary my-3">Precio: ${book.price}</p>

            <p className="book-detail__description">{book.description}</p>

            <div className="book-detail__purchase-options my-3">
              <h5 className="book-detail__purchase-title">Opciones de compra:</h5>
              <ul className="book-detail__options-list">
                {book.options.map((option, index) => (
                  <li key={index} className="book-detail__option">{option}</li>
                ))}
              </ul>
            </div>

            <div className="book-detail__additional-info my-3">
              <p><strong>Género:</strong> {book.genre}</p>
              <p><strong>ISBN:</strong> {book.isbn}</p>
            </div>
          </div>

          <div className="book-detail__action-col col-md-3">
            <div className="book-detail__shipping mb-3">
              <p className="book-detail__free-shipping">Envío gratis a todo el país</p>
              <p className="book-detail__shipping-info">Conoce los tiempos y las formas de envío.</p>
            </div>

            <div className="book-detail__stock mb-3">
              <p><strong>Stock disponible</strong></p>
              <select className="form-select" aria-label="Cantidad disponible">
                <option value="1">1 unidad (+{book.stock} disponibles)</option>
              </select>
            </div>

            <div className="book-detail__action-buttons d-flex flex-column align-items-start">
              <Link to={'/checkout'}>
                <button className="book-detail__buy-now btn btn-primary mb-2 rounded-pill px-4 py-2">Comprar ahora</button>
              </Link>
              <button 
                className="book-detail__add-to-cart btn btn-outline-secondary rounded-pill px-4 py-2" 
                onClick={handleAddToCart}
              >
                Agregar al carrito
              </button>
            </div>

            <div className="book-detail__seller-info mt-3">
              <p>Vendido por <strong>MUNDIALDELIBROS</strong></p>
              <p>MercadoLíder | <strong>+10mil ventas</strong></p>
            </div>
          </div>
        </div>

        <CartMenu cart={cart} isOpen={isOpen} toggleCart={toggleCart} />
      </div>
    </>
  );
};

export default BookDetail;
