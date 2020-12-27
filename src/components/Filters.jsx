import React from 'react';
import '../styles/components/filters.css';

const Filters = () => (
  <div className="filters">
    <div className="filters__container">
      <div className="filters__icon">
        <i className="fas fa-filter" />
        <p>Filtar por:</p>
      </div>
      <div className="filters__inputs">
        <div className="filters__inputs--status">
          <div className="status__container--in-line">
            <i className="fas fa-circle" />
            <button className="status--in-line" type="button">
              En cola
            </button>
          </div>
          <div className="status__container--in-process">
            <i className="fas fa-circle" />
            <button className="status--in-process" type="button">
              En proceso
            </button>
          </div>
          <div className="status__container--finished">
            <i className="fas fa-circle" />
            <button className="status--finished" type="button">
              Terminadas
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="filters__container">
      <div className="filters__icon">
        <i className="fas fa-sort-amount-down" />
        <p>Ordenar por:</p>
      </div>
      <div className="filters__inputs">
        <div className="filters__inputs--order">
          <div className="order__container--level">
            <button className="order--level" type="button">
              Nivel
            </button>
            <i className="fas fa-sort" />
          </div>
          <div className="order__container--old">
            <button className="order--old" type="button">
              Mas antiguo
            </button>
            <i className="fas fa-sort" />
          </div>
          <div className="order__container--new">
            <button className="order--new" type="button">
              Más reciente
            </button>
            <i className="fas fa-sort" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Filters;
