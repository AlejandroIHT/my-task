import React from 'react';
import '../styles/components/newTask.css';

import Tag from './Tag';

const NewTask = () => (
  <div className="newTask">
    <div className="newTask__header__status">
      <p className="newTask__header__status--red">
        <i className="fas fa-circle" />
        <select className="status__select--red" name="select">
          <option className="newTask__header__status__option" value="value1">en cola</option>
          <option className="newTask__header__status__option" value="value2">en proceso</option>
        </select>
      </p>
      <p className="newTask__header__status__date">{`2020-07-19`}</p>
    </div>
    <div className="newTask__header">
      <h2 className="newTask__header__title">{`Nombre de la tarea`}</h2>
      <p className="newTask__header__level">{`nivel: 8`}</p>
    </div>
    <div className="newTask__content">
      <div className="newTask__content__row">
        <p>
          <strong>De: </strong> {`Alejandro Herrera`}
        </p>
      </div>
      <div className="newTask__content__row">
        <p>
          <strong>Para: </strong>
          {`Maximiliano Opitz`}
        </p>
      </div>
      <div className="newTask__content__row">
        <p>
          <strong>Fecha término: </strong>
          {`2020-12-07`}
        </p>
      </div>
    </div>
    <div className="newTask__footer">
      <Tag tag="tags" />
    </div>
  </div>
);

export default NewTask;
