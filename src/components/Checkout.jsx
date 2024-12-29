import React from 'react';
import { useCart } from '../context/CartProvider';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Importar Navbar
import Swal from 'sweetalert2'; // Usamos sweetalert2 para la alerta
import '../styles/Checkout.css'; // Importar el archivo de estilos

const Checkout = () => {
  const { cart, isOpen, toggleCart, clearCart, totalItems, totalPrice, removeFromCart } = useCart(); // Obtener carrito, totalItems y totalPrice
  const navigate = useNavigate(); // Hook para la navegación

  // Función para simular el pago exitoso
  const handlePayment = () => {
    // Mostrar alerta de pago exitoso
    Swal.fire({
      title: '¡Pago realizado con éxito!',
      text: 'Tu pedido ha sido procesado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
    }).then(() => {
      // Vaciar el carrito
      clearCart(); // Limpiar el carrito

      // Redirigir a la página principal
      navigate('/');
    });
  };

  return (
    <div className="checkout">
      <Navbar /> {/* Llamamos a la Navbar existente */}

      <div className="container">
        <h2 className="checkout__title">Resumen de tu pedido</h2>

        {cart.length > 0 ? (
          <div className="checkout__summary">
            {/* Columna de resumen de productos */}
            <div className="checkout__column">
              <div className="checkout__card">
                <div className="checkout__card-body">
                  <h4 className="checkout__card-title">Productos en el carrito</h4>
                  <ul className="checkout__product-list">
                    {cart.map((item, index) => (
                      <li key={index} className="checkout__product-item">
                        <div className="checkout__product-item-title">
                          <strong>{item.title}</strong> - {item.price} x {item.quantity}
                        </div>
                        <div>
                          <button 
                            onClick={() => removeFromCart(item.id)} 
                            className="checkout__product-item-button"
                          >
                            Eliminar
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Columna de resumen de precio y cantidad */}
            <div className="checkout__column">
              <div className="checkout__summary-card">
                <div className="checkout__summary-card-body">
                  <h4 className="checkout__card-title">Resumen</h4>
                  <div className="checkout__summary-item">
                    <p><strong>Cantidad de productos:</strong> {totalItems}</p>
                    <p><strong>Total:</strong> US${totalPrice}</p>
                  </div>
                  <button
                    onClick={handlePayment}
                    className="checkout__confirm-button"
                  >
                    Confirmar y pagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning checkout__alert" role="alert">
            No hay productos en el carrito.
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
