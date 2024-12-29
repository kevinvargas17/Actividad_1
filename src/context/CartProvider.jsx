import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  // Estado para los productos en el carrito
  const [isOpen, setIsOpen] = useState(false);  // Estado para el menú lateral

  // Función para agregar productos al carrito o incrementar su cantidad si ya existe
  const addToCart = (product) => {
    setCart(prevCart => {
      // Buscar si el producto ya existe en el carrito
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        // Si existe, incrementamos la cantidad
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Incrementar cantidad
            : item
        );
      } else {
        // Si no existe, agregamos el producto con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Función para abrir y cerrar el carrito
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  // Función para aumentar la cantidad de un producto
  const increaseQuantity = (id) => {
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item // Incrementa la cantidad
      )
    );
  };

  // Función para disminuir la cantidad de un producto
  const decreaseQuantity = (id) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === id && item.quantity > 1 // Solo disminuye si la cantidad es mayor que 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // Calcular el total de productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  // Calcular el total de la compra
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isOpen, toggleCart, increaseQuantity, decreaseQuantity, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook para usar el contexto en cualquier componente
export const useCart = () => {
  return useContext(CartContext);
};
