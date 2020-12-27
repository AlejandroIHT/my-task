import React from 'react';
import '../styles/components/search.css';

const Search = () => (
  <div className="search">
    <input
      id="search"
      className="search__input"
      type="text"
      placeholder="Nombre de la tarea..."
    />
    <label className="tasks__search__container" htmlFor="search" />
    <i className="fas fa-search" />
  </div>
);

export default Search;
