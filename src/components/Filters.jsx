import React from 'react';
import '../styles/components/filters.css';

const Filters = ({ filtersInput, handleChangeFilterInputs, handleClickFilterInputs }) => (
  <div className="filters">
    <div className="filters__container">
      <label htmlFor="from">De:</label>
      <input
        id="from"
        name="person_create"
        type="text"
        placeholder="Nombre Apellido..."
        value={filtersInput.person_create}
        onChange={handleChangeFilterInputs}
      />
    </div>
    <div className="filters__container">
      <label htmlFor="to">Para:</label>
      <input
        id="to"
        name="person_assigned"
        type="text"
        placeholder="Nombre Apellido..."
        value={filtersInput.person_assigned}
        onChange={handleChangeFilterInputs}
      />
    </div>
    <div className="filters__container">
      <label htmlFor="start">Fecha inicio:</label>
      <input
        id="start"
        name="date_start"
        type="date"
        placeholder=""
        value={filtersInput.date_start}
        onChange={handleChangeFilterInputs}
      />
    </div>
    <div className="filters__container">
      <label htmlFor="finish">Fecha término:</label>
      <input
        id="finish"
        name="date_end"
        type="date"
        placeholder=""
        value={filtersInput.date_end}
        onChange={handleChangeFilterInputs}
      />
    </div>
    <div className="filters__container">
      <label htmlFor="level">Nivel:</label>
      <select
        id="level"
        name="level"
        onChange={handleChangeFilterInputs}
        value={filtersInput.level}
      >
        <option value="1">Nivel 1</option>
        <option value="2">Nivel 2</option>
        <option value="3">Nivel 3</option>
        <option value="4">Nivel 4</option>
        <option value="5">Nivel 5</option>
        <option value="6">Nivel 6</option>
        <option value="7">Nivel 7</option>
        <option value="8">Nivel 8</option>
        <option value="9">Nivel 9</option>
        <option value="10">Nivel 10</option>
      </select>
    </div>
    <div className="filters__container">
      <label htmlFor="state">Estado:</label>
      <select
        id="state"
        name="status"
        onChange={handleChangeFilterInputs}
        value={filtersInput.status}
      >
        <option value="en cola">en cola</option>
        <option value="en proceso">en proceso</option>
        <option value="terminada">terminada</option>
      </select>
    </div>
    <div className="filters__container">
      <label htmlFor="tag">Tag:</label>
      <input
        id="tag"
        name="tag"
        type="text"
        placeholder="tag"
        value={filtersInput.tag}
        onChange={handleChangeFilterInputs}
      />
    </div>
    <button className="filters__button" type="button" onClick={handleClickFilterInputs}>
      Filtrar
    </button>
  </div>
);

export default Filters;
