import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import Tasks from '../components/Tasks';
import ButtonAdd from '../components/ButtonAdd';

const Home = () => {
  const [addTask, setAddTask] = useState(false);
  const { state } = useContext(AppContext);
  const { tasks } = state;

  const handleClickAddTask = () => {
    setAddTask(true);
  };
  const handleClickDiscardTask = () => {
    setAddTask(false);
  };

  return (
    <div className="global-background-color global-color-text global-padding-container-page">
      <Tasks
        tasks={tasks}
        addTask={addTask}
        handleClickDiscardTask={handleClickDiscardTask}
      />
      <ButtonAdd handleClick={handleClickAddTask} />
    </div>
  );
};

export default Home;
