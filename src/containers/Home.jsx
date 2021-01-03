import React, { useState, useEffect, useContext } from 'react';
import Http from '../libs/http';
import AppContext from '../context/AppContext';
import Tasks from '../components/Tasks';
import ButtonAdd from '../components/ButtonAdd';

const API = 'https://my-tasks-a68e9-default-rtdb.firebaseio.com/tasks.json';

const Home = () => {
  const [addTask, setAddTask] = useState(false);
  const [loading, setLoading] = useState(false);
  const { state, getTasks } = useContext(AppContext);
  const { tasks } = state;

  const getTasksFuntion = async () => {
    setLoading(true);
    const data = await Http.instance.get(API);
    data.splice(0, 1);
    getTasks(data)
    setLoading(false);
  };

  useEffect(() => {
    getTasksFuntion();
  }, []);

  const handleClickAddTask = () => {
    setAddTask(true);
  };
  const handleClickDiscardTask = () => {
    setAddTask(false);
  };

  return (
    <div className="global-background-color global-color-text global-padding-container-page">
      <Tasks
        loading={loading}
        tasks={tasks}
        addTask={addTask}
        handleClickDiscardTask={handleClickDiscardTask}
      />
      <ButtonAdd handleClick={handleClickAddTask} />
    </div>
  );
};

export default Home;
