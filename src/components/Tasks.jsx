import React from 'react';
import '../styles/components/tasks.css';
import Task from './Task';
import Search from './Search';

const Tasks = ({ tasks }) => (
  <div className="tasks">
    <div className="tasks__container__header">
      <h1 className="tasks__title">Lista de tareas:</h1>
      <div className="tasks__quantity">
        <p>{tasks.length}</p>
      </div>
    </div>

    <Search />

    <div className="tasks__container">
      {tasks.map((task) => (
        <Task key={task.id} data={task} />
      ))}
    </div>
  </div>
);

export default Tasks;
