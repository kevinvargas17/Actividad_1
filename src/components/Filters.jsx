import React from 'react';

const Filters = () => {
  return (
    <div className="col-md-2">
      <div className="bg-light p-2 border rounded">
        <h6>Filtrar por</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-dark">Literatura y Ficción</a></li>
          <li><a href="#" className="text-dark">Autoayuda</a></li>
          <li><a href="#" className="text-dark">Misterio y Suspenso</a></li>
          <li><a href="#" className="text-dark">Religión y Espiritualidad</a></li>
          <li><a href="#" className="text-dark">Ciencia Ficción</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
