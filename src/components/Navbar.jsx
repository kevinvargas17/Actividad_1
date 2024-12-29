import React from 'react';
import { useCart } from '../context/CartProvider'; // Usamos el contexto para acceder al carrito
import { Link } from 'react-router-dom';

const Navbar = ({ searchQuery, setSearchQuery, searchType, setSearchType }) => {
  const { cart, toggleCart, totalItems, totalPrice } = useCart();  // Obtenemos los valores de totalItems y totalPrice

  // Formatear el total sin decimales
  const formattedTotalPrice = Math.floor(totalPrice).toLocaleString(); // Esto elimina los decimales y da formato

  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0" style={{ backgroundColor: '#232f3e', color: '#ffffff', padding: '12px 0', zIndex: 999 }}>
      <div className="container-fluid">
        <Link to={'/'}>
          <a className="navbar-brand text-light">Relatos de papel</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/inicio'}>
                <a className="nav-link text-light">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/libros'}>
                <a className="nav-link active text-light" href="#">Libros</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Quienes Somos</a>
            </li>
          </ul>

          <form className="d-flex w-50 mx-auto">
            <div className="input-group">
              <select className="form-select" style={{ maxWidth: '155px' }} value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                <option value="all">Titulo del libro</option>
                <option value="books">Autor</option>
                <option value="electronics">Libro</option>
                <option value="fashion">Codigo</option>
              </select>
              <input type="text" className="form-control" placeholder="Buscar productos" aria-label="Buscar productos" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <button className="btn" type="submit" style={{ backgroundColor: '#ff6600', color: '#ffffff', border: 'none' }}>
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="d-flex align-items-center ms-3">
          <i className="bi bi-person-fill" style={{ fontSize: '22px', color: 'white', marginRight: '10px', cursor: 'pointer' }}></i>
          <a className="text-light me-4" href="#" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none' }}>Mi cuenta</a>
          <div className="d-flex align-items-center" style={{ marginRight: '15px' }}>
            <i className="bi bi-cart-fill" style={{ fontSize: '22px', color: 'white', cursor: 'pointer' }} onClick={toggleCart}></i>
            <span className="ms-1 text-light" style={{ fontSize: '14px', fontWeight: '500' }}>{totalItems}</span>
          </div>
          <div className="d-flex align-items-center ms-3" style={{ fontSize: '16px', fontWeight: '500' }}>
            <span className="me-2 text-light">Total:</span>
            <span className="text-success">COP${formattedTotalPrice}</span> {/* Mostramos el total sin decimales */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
