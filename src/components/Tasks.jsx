import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/components/tasks.css';
import Task from './Task';
import Search from './Search';
import Filters from './Filters';

const Tasks = ({ tasks }) => (
  <div className="tasks">
    <div className="tasks__container__header">
      <div className="tasks__container__header--column">
        <div className="tasks__quantity">
          <p>{tasks.length}</p>
        </div>
        <h1 className="tasks__title">Lista de tareas</h1>
      </div>
      <div className="tasks__container__header--column">
        <Link to="/addtask" className="tasks__container__header--button">Agregar tarea</Link>
      </div>
    </div>

    <Search />

    <Filters />

    <div className="tasks__container">
      {tasks.map((task) => (
        <Task key={task.id} data={task} />
      ))}
    </div>
  </div>
);

export default Tasks;
