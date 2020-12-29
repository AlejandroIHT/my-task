import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import Tasks from '../components/Tasks';
import ButtonAdd from '../components/ButtonAdd';

const Home = () => {
  const [addTask, setAddTask] = useState(false);
  const { state } = useContext(AppContext);
  const { tasks } = state;

  const handleClickAddTask = () => {
    setAddTask(!addTask);
  };

  return (
    <div className="global-background-color global-color-text global-padding-container-page">
      <Tasks tasks={tasks} addTask={addTask} />
      <ButtonAdd handleClick={handleClickAddTask} />
    </div>
  );
};

export default Home;
