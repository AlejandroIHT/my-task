import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/globalStyle.css';
import Http from '../libs/http';
import AppContext from '../context/AppContext';
import TaskEdit from '../components/TaskEdit';

const API = 'https://my-tasks-a68e9-default-rtdb.firebaseio.com/tasks.json';

const EditTask = () => {
  const [taskSearch, setTaskSearch] = useState({});
  const [loading, setLoading] = useState(false);
  const { state, getTasks } = useContext(AppContext);
  const location = useLocation();
  const takeTasksSearch = () => {
    const searchSplit = location.search.split('=');
    const takeTask = state.tasks.filter(
      (task) => task.id.toString() === searchSplit[1]
    );
    return takeTask[0];
  };

  const getTasksFuntion = async () => {
    setLoading(true);
    const data = await Http.instance.get(API);
    data.splice(0, 1);
    getTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    if (state.tasks.length === 0) {
      getTasksFuntion();
    }
  }, []);

  useEffect(() => {
    const task = takeTasksSearch();
    setTaskSearch(task);
  }, [state.tasks]);

  return (
    <div className="global-background-color global-color-text global-padding-container-page">
      <TaskEdit task={taskSearch} loading={loading} />
    </div>
  );
};

export default EditTask;
