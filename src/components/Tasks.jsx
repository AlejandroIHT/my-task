import React, { useState, useEffect } from 'react';
import '../styles/components/tasks.css';
import Task from './Task';
import Search from './Search';
import NewTask from './NewTask';
import Filters from './Filters';

const Tasks = ({ tasks, addTask, handleClickDiscardTask }) => {
  const [tasksSearch, setTasksSearch] = useState([]);
  const [filters, setFilters] = useState(false);

  useEffect(() => {
    setTasksSearch(tasks);
  }, [tasks]);

  const handleChangeSearch = (e) => {
    const filter = tasks.filter((task) =>
      task.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setTasksSearch(filter);
  };

  const handleClickFilters = () => setFilters(!filters);

  return (
    <div className="tasks">
      <div className="tasks__container__header">
        <div className="tasks__container__header--column">
          <div className="tasks__quantity">
            <p>{tasks.length}</p>
          </div>
          <h1 className="tasks__title">Lista de tareas</h1>
        </div>
        <div className="tasks__container__header--column">
          <Search handleChangeSearch={handleChangeSearch} />
          <button type="button" className="tasks__container__header--button">
            <i className="fas fa-sort-amount-down" />
          </button>
          <button
            type="button"
            className="tasks__container__header--button"
            onClick={handleClickFilters}
          >
            <i className="fas fa-filter" />
          </button>
        </div>
      </div>

      {filters && <Filters />}

      <div className="tasks__container">
        {addTask && <NewTask handleClickDiscardTask={handleClickDiscardTask} />}
        {tasksSearch.map((task) => (
          <Task key={task.id} data={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
