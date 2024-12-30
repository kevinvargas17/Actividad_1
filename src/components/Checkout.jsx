import React from 'react';
import { useCart } from '../context/CartProvider';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CartMenu from './CartMenu';
import Swal from 'sweetalert2';

const Checkout = () => {
  const { cart, isOpen, toggleCart, clearCart, totalItems, totalPrice, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    Swal.fire({
      title: '¡Pago realizado con éxito!',
      text: 'Tu pedido ha sido procesado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
    }).then(() => {
      clearCart();
      navigate('/');
    });
  };

  return (
    <div className="checkout">
      <Navbar />

      <div className="container mt-5">
        <div className="card shadow-sm p-4">
          <h2 className="text-center mb-4">Resumen de tu pedido</h2>

          {cart.length > 0 ? (
            <div className="row">
              <div className="col-md-8">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h4 className="card-title">Productos en el carrito</h4>
                    <ul className="list-group">
                      {cart.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <strong>{item.title}</strong> - {item.price} x {item.quantity}
                          </div>
                          <div>
                            <button 
                              onClick={() => removeFromCart(item.id)} 
                              className="btn btn-outline-danger btn-sm"
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

              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h4 className="card-title">Resumen</h4>
                    <div className="mb-3">
                      <p><strong>Cantidad de productos:</strong> {totalItems}</p>
                      <p><strong>Total:</strong> US${totalPrice}</p>
                    </div>
                    <button
                      onClick={handlePayment}
                      className="btn btn-success w-100"
                      style={{ fontSize: '16px' }}
                    >
                      Confirmar y pagar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="alert alert-warning" role="alert">
              No hay productos en el carrito.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
