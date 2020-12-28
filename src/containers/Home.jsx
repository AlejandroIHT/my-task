import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Tasks from '../components/Tasks';
import ButtonAdd from '../components/ButtonAdd';

const Home = () => {
  const { state } = useContext(AppContext);
  const { tasks } = state;

  return (
    <div className="global-background-color global-color-text global-padding-container-page">
      <Tasks tasks={tasks} />
      <ButtonAdd />
    </div>
  );
};

export default Home;
