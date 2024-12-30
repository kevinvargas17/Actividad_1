// RightNav.jsx
import React from 'react';

const RightNav = ({ toggleCart, totalItems , formattedTotalPrice }) => {
  return (
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
  );
};

export default RightNav;
