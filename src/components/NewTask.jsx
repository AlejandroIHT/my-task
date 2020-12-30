import React from 'react';
import '../styles/components/newTask.css';

const NewTask = ({ handleClickDiscardTask }) => (
  <div className="newTask">
    <div className="newTask__header__status">
      <p className="newTask__header__status--red">
        <i className="fas fa-circle" />
        <select className="status__select--red" name="select">
          <option className="newTask__header__status__option" value="value1">
            en cola
          </option>
          <option className="newTask__header__status__option" value="value2">
            en proceso
          </option>
        </select>
      </p>
      <p className="newTask__header__status__date">{`2020-07-19`}</p>
    </div>
    <div className="newTask__header">
      <input
        className="newTask__header--name-task"
        type="text"
        placeholder="Nombre de la tarea..."
      />
      <select className="newTask__header--level" name="select">
        <option className="newTask__header__status__option" value="Nivel 1">
          Nivel 1
        </option>
        <option className="newTask__header__status__option" value="Nivel 2">
          Nivel 2
        </option>
        <option className="newTask__header__status__option" value="Nivel 3">
          Nivel 3
        </option>
        <option className="newTask__header__status__option" value="Nivel 4">
          Nivel 4
        </option>
        <option className="newTask__header__status__option" value="Nivel 5">
          Nivel 5
        </option>
        <option className="newTask__header__status__option" value="Nivel 6">
          Nivel 6
        </option>
        <option className="newTask__header__status__option" value="Nivel 7">
          Nivel 7
        </option>
        <option className="newTask__header__status__option" value="Nivel 8">
          Nivel 8
        </option>
        <option className="newTask__header__status__option" value="Nivel 9">
          Nivel 9
        </option>
        <option className="newTask__header__status__option" value="Nivel 10">
          Nivel 10
        </option>
      </select>
    </div>
    <div className="newTask__content">
      <div className="newTask__content__row">
        <p>
          <strong>De: </strong>
        </p>
        <input
          className="newTask__content__row--from"
          type="text"
          placeholder="Nombre Apellido..."
        />
      </div>
      <div className="newTask__content__row">
        <p>
          <strong>Para: </strong>
        </p>
        <input
          className="newTask__content__row--to"
          type="text"
          placeholder="Nombre Apellido..."
        />
      </div>
      <div className="newTask__content__row">
        <p>
          <strong>Fecha término: </strong>
        </p>
        <input className="newTask__content__row--date-finish" type="date" />
      </div>
    </div>
    <div className="newTask__footer">
      <textarea
        name="textarea"
        className="newTask__footer--textarea"
        placeholder="#tags"
      ></textarea>
    </div>
    <div className="newTask__container__button">
      <button
        onClick={handleClickDiscardTask}
        className="button--discard"
        type="button"
      >
        Descartar
      </button>
    </div>
  </div>
);

export default NewTask;
