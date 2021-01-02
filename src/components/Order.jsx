import React from 'react';
import '../styles/components/order.css';

const Order = ({
  handleClickOrderInLine,
  handleClickOrderInProcess,
  handleClickOrderFinish,
  handleClickOrderMoreEasy,
  handleClickOrderMoreHard,
  handleClickOrderMoreRecent,
  handleClickOrderMoreOld,
}) => (
  <div className="orders">
    <h2 className="orders__title">Ordenar por:</h2>
    <div className="orders__container">
      <button
        type="button"
        className="orders__container__button"
        onClick={handleClickOrderInLine}
      >
        En cola
      </button>
      <button
        type="button"
        className="orders__container__button"
        onClick={handleClickOrderInProcess}
      >
        En proceso
      </button>
      <button
        type="button"
        className="orders__container__button"
        onClick={handleClickOrderFinish}
      >
        Terminadas
      </button>
      <button
        type="button"
        className="orders__container__button"
        onClick={handleClickOrderMoreRecent}
      >
        Más resiente
      </button>
      <button
        type="button"
        className="orders__container__button"
        onClick={handleClickOrderMoreOld}
      >
        Más antiguo
      </button>
      <button
        type="button"
        className="orders__container__button"
        onClick={handleClickOrderMoreEasy}
      >
        Más facil
      </button>
      <button
        type="button"
        className="orders__container__button"
        onClick={handleClickOrderMoreHard}
      >
        Más dificil
      </button>
    </div>
  </div>
);

export default Order;
