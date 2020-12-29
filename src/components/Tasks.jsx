import React, { useState } from 'react';
import '../styles/components/tasks.css';
import Task from './Task';
import Search from './Search';
import NewTask from './NewTask';

const Tasks = ({ tasks, addTask }) => (
  <div className="tasks">
    <div className="tasks__container__header">
      <div className="tasks__container__header--column">
        <div className="tasks__quantity">
          <p>{tasks.length}</p>
        </div>
        <h1 className="tasks__title">Lista de tareas</h1>
      </div>
      <div className="tasks__container__header--column">
        <Search />
        <button type="button" className="tasks__container__header--button">
          <i className="fas fa-sort-amount-down" />
        </button>
        <button type="button" className="tasks__container__header--button">
          <i className="fas fa-filter" />
        </button>
      </div>
    </div>

    <div className="tasks__container">
      {addTask && <NewTask />}
      {tasks.map((task) => (
        <Task key={task.id} data={task} />
      ))}
    </div>
  </div>
);

export default Tasks;
