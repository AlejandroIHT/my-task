import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Tasks from '../components/Tasks';

const Home = () => {
  const { state } = useContext(AppContext);
  const { tasks } = state;

  return (
    <div className="global-background-color global-color-text global-padding-container-page">
      <Tasks tasks={tasks} />
    </div>
  );
};

export default Home;
