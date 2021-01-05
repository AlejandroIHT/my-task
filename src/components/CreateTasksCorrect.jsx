import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/createTasksCorrect.css';

const CreateTasksCorrect = ({ handleClickSuccess, edit }) => (
  <div className={!edit ? 'CreateTasksCorrect' : 'CreateTasksCorrect edit'}>
    {!edit && (
      <button
        onClick={handleClickSuccess}
        type="button"
        className="CreateTasksCorrect__container"
      >
        <i className="fas fa-check-square" />
        <p>Tarea creada correctamente</p>
      </button>
    )}
    {edit && (
      <Link to="/" className="CreateTasksCorrect__container edit">
        <i className="fas fa-check-square" />
        <p>Tarea editada correctamente</p>
      </Link>
    )}
  </div>
);

export default CreateTasksCorrect;
