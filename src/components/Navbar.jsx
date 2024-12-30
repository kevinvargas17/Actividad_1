import React from 'react';
import { useCart } from '../context/CartProvider'; // Usamos el contexto para acceder al carrito
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Asegúrate de importar el archivo CSS

const Navbar = ({ searchQuery, setSearchQuery, searchType, setSearchType }) => {
  const { cart, toggleCart, totalItems, totalPrice } = useCart();  // Obtenemos los valores de totalItems y totalPrice

  // Formatear el total sin decimales
  const formattedTotalPrice = Math.floor(totalPrice).toLocaleString(); // Esto elimina los decimales y da formato

  return (
    <nav className="navbar navbar-expand-lg navbar__container position-sticky top-0">
      <div className="container-fluid">
        <Link to={'/'}>
          <a className="navbar__brand navbar-brand text-light">Relatos de papel</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar__toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/inicio'}>
                <a className="nav-link navbar__link">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/libros'}>
                <a className="nav-link navbar__link" href="#">Libros</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__link" href="#">Quienes Somos</a>
            </li>
          </ul>

          <form className="navbar__form d-flex">
            <div className="input-group">
              <select className="form-select navbar__search-select" value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                <option value="all">Titulo del libro</option>
                <option value="books">Autor</option>
                <option value="electronics">Libro</option>
                <option value="fashion">Codigo</option>
              </select>
              <input type="text" className="form-control" placeholder="Buscar productos" aria-label="Buscar productos" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <button className="btn navbar__search-btn" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="d-flex align-items-center ms-3">
          <i className="bi bi-person-fill navbar__account-icon"></i>
          <a className="navbar__account-link text-light me-4" href="#">Mi cuenta</a>
          <div className="d-flex align-items-center" style={{ marginRight: '15px' }}>
            <i className="bi bi-cart-fill navbar__cart-icon" onClick={toggleCart}></i>
            <span className="ms-1 text-light" style={{ fontSize: '14px', fontWeight: '500' }}>{totalItems}</span>
          </div>
          <div className="d-flex align-items-center ms-3 navbar__total">
            <span className="me-2 text-light">Total:</span>
            <span className="navbar__total-price">COP${formattedTotalPrice}</span> {/* Mostramos el total sin decimales */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
