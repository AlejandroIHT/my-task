import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/globalStyle.css';
import AppContext from '../context/AppContext';
import TaskEdit from '../components/TaskEdit';

const EditTask = () => {
  const [taskSearch, setTaskSearch] = useState({});
  const { state } = useContext(AppContext);
  const location = useLocation();
  const takeTasksSearch = () => {
    const searchSplit = location.search.split('=');
    const takeTask = state.tasks.filter(
      (task) => task.id.toString() === searchSplit[1]
    );
    return takeTask[0];
  };

  useEffect(() => {
    const task = takeTasksSearch();
    setTaskSearch(task);
  }, []);

  return (
    <div className="global-background-color global-color-text global-padding-container-page">
      <TaskEdit task={taskSearch} />
    </div>
  );
};

export default EditTask;
