import React, { useState, useEffect } from 'react';
import '../styles/components/tasks.css';
import Task from './Task';
import Search from './Search';
import NewTask from './NewTask';
import Filters from './Filters';
import Order from './Order';
import Loader from '../containers/Loader';

const Tasks = ({ loading, tasks, addTask, handleClickDiscardTask }) => {
  const [tasksSearch, setTasksSearch] = useState([]);
  const [filters, setFilters] = useState(false);
  const [orders, setOrders] = useState(false);

  useEffect(() => {
    setTasksSearch(tasks);
  }, [tasks]);

  const handleChangeSearch = (e) => {
    const filter = tasks.filter((task) =>
      task.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setTasksSearch(filter);
  };

  const handleClickOrderInLine = () => {
    const orderTasks = tasksSearch.slice();
    orderTasks.sort((first, compare) => {
      if (first.status === 'en cola' && compare.status === 'en cola') return 0;
      if (first.status === 'en cola' && compare.status !== 'en cola') return -1;
      if (first.status !== 'en cola' && compare.status === 'en cola') return 1;
      return 0;
    });

    setTasksSearch(orderTasks);
  };

  const handleClickOrderInProcess = () => {
    const orderTasks = tasksSearch.slice();
    orderTasks.sort((first, compare) => {
      if (first.status === 'en proceso' && compare.status === 'en proceso')
        return 0;
      if (first.status === 'en proceso' && compare.status !== 'en proceso')
        return -1;
      if (first.status !== 'en proceso' && compare.status === 'en proceso')
        return 1;
      return 0;
    });

    setTasksSearch(orderTasks);
  };

  const handleClickOrderFinish = () => {
    const orderTasks = tasksSearch.slice();
    orderTasks.sort((first, compare) => {
      if (first.status === 'terminada' && compare.status === 'terminada')
        return 0;
      if (first.status === 'terminada' && compare.status !== 'terminada')
        return -1;
      if (first.status !== 'terminada' && compare.status === 'terminada')
        return 1;
      return 0;
    });

    setTasksSearch(orderTasks);
  };

  const handleClickOrderMoreEasy = () => {
    const orderTasks = tasksSearch.slice();
    orderTasks.sort((first, compare) => {
      if (first.level === compare.level) return 0;
      if (first.level < compare.level) return -1;
      if (first.level > compare.level) return 1;
      return 0;
    });

    setTasksSearch(orderTasks);
  };

  const handleClickOrderMoreHard = () => {
    const orderTasks = tasksSearch.slice();
    orderTasks.sort((first, compare) => {
      if (first.level === compare.level) return 0;
      if (first.level < compare.level) return 1;
      if (first.level > compare.level) return -1;
      return 0;
    });

    setTasksSearch(orderTasks);
  };

  const handleClickOrderMoreRecent = () => {
    const orderTasks = tasksSearch.slice();
    orderTasks.sort(
      (first, compare) =>
        new Date(compare.date_start) - new Date(first.date_start)
    );

    setTasksSearch(orderTasks);
  };

  const handleClickOrderMoreOld = () => {
    const orderTasks = tasksSearch.slice();
    orderTasks.sort(
      (first, compare) =>
        new Date(first.date_start) - new Date(compare.date_start)
    );

    setTasksSearch(orderTasks);
  };

  const handleClickFilters = () => {
    if (!filters) {
      setOrders(false);
    }
    setFilters(!filters);
  };

  const handleClickOrders = () => {
    if (!orders) {
      setFilters(false);
    }
    setOrders(!orders);
  };

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
          <button
            type="button"
            className="tasks__container__header--button"
            onClick={handleClickOrders}
          >
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
      {loading && (
        <div className="tasks__container__loader">
          <Loader />
        </div>
      )}

      {filters && <Filters />}

      {orders && (
        <Order
          handleClickOrderInLine={handleClickOrderInLine}
          handleClickOrderInProcess={handleClickOrderInProcess}
          handleClickOrderFinish={handleClickOrderFinish}
          handleClickOrderMoreEasy={handleClickOrderMoreEasy}
          handleClickOrderMoreHard={handleClickOrderMoreHard}
          handleClickOrderMoreRecent={handleClickOrderMoreRecent}
          handleClickOrderMoreOld={handleClickOrderMoreOld}
        />
      )}

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
