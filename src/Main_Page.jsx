import React, { useState } from 'react';
import CartMenu from './components/CartMenu';
import Navbar from './components/Navbar';
import { useCart } from './context/CartProvider';
import Filters from './components/Filters';
import BookList from './components/BookList';
import books from './data/booksData';

const MainPage = () => {
  const { cart, isOpen, toggleCart, addToCart } = useCart(); 

  // Estado de búsqueda
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('all');  // Estado para manejar el tipo de búsqueda

  // Filtrar los libros solo si la opción seleccionada es "Título del libro"
  const filteredBooks = books.filter(book => {
    if (searchType === 'all') {
      return book.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <div>
      <Navbar 
        cart={cart} 
        toggleCart={toggleCart} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        searchType={searchType}
        setSearchType={setSearchType} 
      />
      <div className="container-fluid mt-3">
        <div className="row">
          <Filters />
          <BookList books={filteredBooks} addToCart={addToCart} />
        </div>
      </div>

      {/* Menú lateral del carrito */}
      <CartMenu cart={cart} isOpen={isOpen} toggleCart={toggleCart} />
    </div>
  );
};

export default MainPage;
