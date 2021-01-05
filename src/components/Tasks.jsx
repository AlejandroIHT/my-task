import React, { useState, useEffect } from 'react';
import '../styles/components/tasks.css';
import Task from './Task';
import Search from './Search';
import NewTask from './NewTask';
import Filters from './Filters';
import Order from './Order';
import Loader from '../containers/Loader';
import CreateTasksCorrect from './CreateTasksCorrect';

const Tasks = ({
  loading,
  setLoading,
  tasks,
  addTask,
  setAddTask,
  handleClickDiscardTask,
  setReLoading,
}) => {
  const [tasksSearch, setTasksSearch] = useState([]);
  const [filters, setFilters] = useState(false);
  const [orders, setOrders] = useState(false);
  const [successCreateTask, setSuccessCreateTask] = useState(false);
  const [filtersInput, setFiltersInput] = useState({
    status: '',
    level: null,
    person_create: '',
    person_assigned: '',
    date_start: '',
    date_end: '',
    tag: '',
  });

  useEffect(() => {
    setTasksSearch(tasks);
  }, [tasks]);

  useEffect(() => {
    if (successCreateTask) setTimeout(() => setSuccessCreateTask(false), 2000);
  }, [successCreateTask]);

  const handleClickFilterInputs = () => {
    let arrayFilter = tasks.slice();
    if (filtersInput.status) {
      arrayFilter = arrayFilter.filter(
        (key) => key.status === filtersInput.status
      );
    }
    if (filtersInput.level) {
      arrayFilter = arrayFilter.filter(
        (key) => key.level === filtersInput.level
      );
    }
    if (filtersInput.person_create) {
      arrayFilter = arrayFilter.filter(
        (key) =>
          key.person_create.toUpperCase() ===
          filtersInput.person_create.toUpperCase()
      );
    }
    if (filtersInput.person_assigned) {
      arrayFilter = arrayFilter.filter(
        (key) =>
          key.person_assigned.toUpperCase() ===
          filtersInput.person_assigned.toUpperCase()
      );
    }
    if (filtersInput.date_start) {
      arrayFilter = arrayFilter.filter(
        (key) => key.date_start === filtersInput.date_start
      );
    }
    if (filtersInput.date_end) {
      arrayFilter = arrayFilter.filter(
        (key) => key.date_end === filtersInput.date_end
      );
    }
    if (filtersInput.tag) {
      arrayFilter = arrayFilter.filter((key) => {
        const filterTag = key.tags.filter(
          (tag) => tag.toUpperCase() === filtersInput.tag.toUpperCase()
        );
        if (filterTag.length === 0) return false;
        return true;
      });
    }
    setTasksSearch(arrayFilter);
  };

  const handleChangeFilterInputs = (e) => {
    setFiltersInput({ ...filtersInput, [e.target.name]: e.target.value });
  };

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

  const handleClickSuccess = () => {
    setSuccessCreateTask(false);
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

      {filters && (
        <Filters
          filtersInput={filtersInput}
          handleChangeFilterInputs={handleChangeFilterInputs}
          handleClickFilterInputs={handleClickFilterInputs}
        />
      )}

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
        {successCreateTask && (
          <CreateTasksCorrect handleClickSuccess={handleClickSuccess} />
        )}
        {addTask && (
          <NewTask
            handleClickDiscardTask={handleClickDiscardTask}
            tasks={tasks}
            setAddTask={setAddTask}
            setReLoading={setReLoading}
            setSuccessCreateTask={setSuccessCreateTask}
            setLoading={setLoading}
          />
        )}
        {tasksSearch.map((task) => (
          <Task key={task.id} data={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
