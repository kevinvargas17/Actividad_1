// Navbar.jsx
import React from 'react';
import { useCart } from '../context/CartProvider';
import { Link } from 'react-router-dom';
import RightNav from './Navbar/RightNav';
import SearchBar from './Navbar/SearchBar';
import '../styles/Navbar.css'; // Asegúrate de importar el archivo CSS

const Navbar = ({ 
  searchQuery, 
  setSearchQuery, 
  searchType, 
  setSearchType 
}) => {
  const { cart, toggleCart, totalItems, totalPrice } = useCart();

  // Formatear el total sin decimales
  const formattedTotalPrice = Math.floor(totalPrice).toLocaleString();

  return (
    <nav className="navbar navbar-expand-lg navbar__container position-sticky top-0">
      <div className="container-fluid">
        <Link to={'/'}>
          {/* Solo usa <Link> o <a>, pero no ambos a la vez. */}
          <a className="navbar__brand navbar-brand text-light">Relatos de papel</a>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar__toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/inicio'} className="nav-link navbar__link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/libros'} className="nav-link navbar__link">
                Libros
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__link" href="#">
                Quienes Somos
              </a>
            </li>
          </ul>

          {/* PASAR setSearchType y setSearchQuery */}
          <SearchBar
            searchType={searchType}
            setSearchType={setSearchType}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <RightNav 
          toggleCart={toggleCart} 
          totalItems={totalItems} 
          formattedTotalPrice={formattedTotalPrice} 
        />
      </div>
    </nav>
  );
};

export default Navbar;
