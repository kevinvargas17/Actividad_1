// SearchBar.jsx
import React from 'react';

const SearchBar = ({ 
  searchType, 
  setSearchType, 
  searchQuery, 
  setSearchQuery 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí tu lógica de búsqueda, si la necesitas
  };

  return (
    <form className="navbar__form d-flex" onSubmit={handleSubmit}>
      <div className="input-group">
        <select
          className="form-select navbar__search-select"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="all">Titulo del libro</option>
          <option value="books">Autor</option>
          <option value="electronics">Libro</option>
          <option value="fashion">Codigo</option>
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos"
          aria-label="Buscar productos"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn navbar__search-btn" type="submit">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
