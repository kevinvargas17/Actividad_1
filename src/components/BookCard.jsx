import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartProvider';
import '../styles/BookCard.css'; // Asegúrate de importar los estilos personalizados

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div className="book-card__col col-12 col-sm-6 col-md-4 col-lg-2">
      <div className="book-card__card h-100 d-flex flex-column position-relative">
        <div className="book-card__image-container d-flex justify-content-center align-items-end">
          <img src={book.image} alt={`Libro ${book.title}`} className="book-card__image" />
        </div>
        <div className="book-card__body card-body p-2 d-flex flex-column justify-content-between">
          <h6 className="book-card__title card-title text-truncate">{book.title}</h6>
          <p className="book-card__edition card-text">{book.edition}</p>
          <p className="book-card__author card-text">{book.author}</p>
          <p className="book-card__rating card-text">{book.rating} ({book.reviews})</p>
          <p className="book-card__format card-text">{book.format}</p>
          <p className="book-card__price card-text text-primary">
            {"COP$" + book.price} <span className="text-muted text-decoration-line-through">{book.originalPrice}</span>
          </p>
          <p className="book-card__delivery card-text">{book.delivery}</p>
          <p className="book-card__options card-text text-muted">{book.options}</p>
          <p className="book-card__other-format card-text">{book.otherFormat}</p>

          <div className="book-card__btn-container">
            <Link to={`/book/${book.id}`}>
              <button className="book-card__view-detail-btn btn btn-outline-light w-100">
                Ver detalle
              </button>
            </Link>
            <button className="book-card__add-btn btn btn-warning w-100 mt-2" onClick={handleAddToCart}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
