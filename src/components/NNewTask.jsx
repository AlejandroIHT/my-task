import React from 'react';
import '../styles/components/newTask.css';

const NewTask = () => (
  <div className="newTasks">
    <div className="newTasks__container__header">
      <h1 className="newTasks__title">Agregar tarea</h1>
    </div>
    <div className="newTasks__container">
      <div className="newTasks__container__input">
        <input
          type="text"
          className="input--name"
          name="task-name"
          placeholder="Nombre de la tarea..."
        />
      </div>
      <div className="newTasks__container__level">
        <button type="button" className="input__lvl input--lvl-1">
          <p>1</p>
          <p>nivel</p>
        </button>
        <button type="button" className="input__lvl input--lvl-2">
          <p>2</p>
          <p>nivel</p>
        </button>
        <button type="button" className="input__lvl input--lvl-3">
          <p>3</p>
          <p>nivel</p>
        </button>
        <button type="button" className="input__lvl input--lvl-4">
          <p>4</p>
          <p>nivel</p>
        </button>
        <button type="button" className="input__lvl input--lvl-5">
          <p>5</p>
          <p>nivel</p>
        </button>
        <button type="button" className="input__lvl input--lvl-6">
          <p>6</p>
          <p>nivel</p>
        </button>
        <button type="button" className="input__lvl input--lvl-7">
          <p>7</p>
          <p>nivel</p>
        </button>
        <button type="button" className="input__lvl input--lvl-8">
          <p>8</p>
          <p>nivel</p>
        </button>
        <button type="button" className="input__lvl input--lvl-9">
          <p>9</p>
          <p>nivel</p>
        </button>
        <button type="button" className="input__lvl input--lvl-10">
          <p>10</p>
          <p>nivel</p>
        </button>
      </div>
      <div className="newTasks__container__input input--d-inline-flex m-r">
        <label htmlFor="newTask__input--date" className="label--date">
          Fecha de término
        </label>
        <input id="newTask__input--date" type="date" />
      </div>
      <div className="newTasks__container__input input--d-inline-flex m-l">
        <label
          htmlFor="newTask__input--name-create"
          className="label--name--create"
        >
          Nombre del solicitante
        </label>
        <input id="newTask__input--name-create" type="text" placeholder="Nombre Apellido..." />
      </div>
      <div className="newTasks__container__input">
        <label
          htmlFor="newTask__input--name-assigned"
          className="label--name--assigned"
        >
          Nombre del asignado
        </label>
        <input id="newTask__input--name-assigned" type="text" placeholder="Nombre Apellido..." />
      </div>
      <div className="newTasks__container__input">
        <label htmlFor="newTask__input--state" className="label--state">
          Estado
        </label>
        <input id="newTask__input--state" type="text" />
      </div>
      <div className="newTasks__container__input">
        <label htmlFor="newTask__input--tags" className="label--tags">
          Tags
        </label>
        <input id="newTask__input--tags" type="text" />
      </div>
    </div>
  </div>
);

export default NewTask;
