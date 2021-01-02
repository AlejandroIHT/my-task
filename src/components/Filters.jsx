import React from 'react';
import '../styles/components/filters.css';

const Filters = () => (
  <div className="filters">
    <div className="filters__container">
      <label htmlFor="">De:</label>
      <input type="text" placeholder="Nombre Apellido..." />
    </div>
    <div className="filters__container">
      <label htmlFor="">Para:</label>
      <input type="text" placeholder="Nombre Apellido..." />
    </div>
    <div className="filters__container">
      <label htmlFor="">Fecha inicio:</label>
      <input type="date" placeholder="" />
    </div>
    <div className="filters__container">
      <label htmlFor="">Fecha término:</label>
      <input type="date" placeholder="" />
    </div>
    <div className="filters__container">
      <label htmlFor="">Nivel:</label>
      <select>
        <option value="1">
          Nivel 1
        </option>
        <option value="2">
          Nivel 2
        </option>
        <option value="3">
          Nivel 3
        </option>
        <option value="4">
          Nivel 4
        </option>
        <option value="5">
          Nivel 5
        </option>
        <option value="6">
          Nivel 6
        </option>
        <option value="7">
          Nivel 7
        </option>
        <option value="8">
          Nivel 8
        </option>
        <option value="9">
          Nivel 9
        </option>
        <option value="10">
          Nivel 10
        </option>
      </select>
    </div>
    <div className="filters__container">
      <label htmlFor="">Estado:</label>
      <select>
        <option value="en cola">
          en cola
        </option>
        <option value="en proceso">
          en proceso
        </option>
        <option value="terminada">
          terminada
        </option>
      </select>
    </div>
    <button className="filters__button" type="button">
      Filtrar
    </button>
  </div>
);

export default Filters;
