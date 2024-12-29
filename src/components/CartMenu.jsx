import React from 'react';
import { useCart } from '../context/CartProvider';
import { Link } from 'react-router-dom';
import '../styles/CartMenu.css'; // Importa el archivo de estilos

const CartMenu = () => {
  const { cart, isOpen, toggleCart, increaseQuantity, decreaseQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  // Formatear el total sin decimales
  const formattedTotalPrice = totalPrice.toLocaleString(); // Esto formatea el total como número sin decimales

  return (
    <div className={`cart-menu ${isOpen ? 'cart-menu--open' : ''}`}>
      {/* Barra superior del carrito */}
      <div className="cart-menu__header">
        <button onClick={toggleCart} className="cart-menu__header-button">
          <i className="bi bi-x" style={{ fontSize: '20px', color: '#333' }}></i> {/* Ícono de cerrar */}
        </button>
        <h3 className="cart-menu__header-title">Carrito de compras</h3>
        <div className="cart-menu__header-space"></div> {/* Espacio para balancear el diseño */}
      </div>

      {/* Información del carrito: cantidad y total */}
      <div className="cart-menu__info">
        <div className="cart-menu__info-item">
          <p><strong>Cantidad de productos:</strong> {totalItems}</p>
          <p><strong>Total:</strong> COP${formattedTotalPrice}</p> {/* Total con formato */}
        </div>
      </div>

      {/* Lista de productos en el carrito */}
      <ul className="cart-menu__list">
        {cart.length > 0 ? cart.map((item, index) => (
          <li key={index} className="cart-menu__item">
            <div className="cart-menu__item-title">
              {item.title} - COP${item.price} {/* Mostrar el precio ya limpio */}
            </div>
            <div className="cart-menu__item-actions">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className={`cart-menu__item-button ${item.quantity <= 1 ? 'cart-menu__item-button--disabled' : ''}`}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="cart-menu__item-button"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="cart-menu__item-button cart-menu__item-button--delete"
              >
                Eliminar
              </button>
            </div>
          </li>
        )) : (
          <li>No hay productos en el carrito.</li>
        )}
      </ul>

      {/* Botón para continuar con el pago */}
      <Link to={'/checkout'}>
        <button className="cart-menu__checkout-button">
          Continuar con el pago
        </button>
      </Link>
    </div>
  );
};

export default CartMenu;
