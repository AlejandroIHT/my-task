import React from 'react';
import '../styles/components/createTasksCorrect.css';

const CreateTasksCorrect = ({ handleClickSuccess }) => (
  <div className="CreateTasksCorrect">
    <button
      onClick={handleClickSuccess}
      type="button"
      className="CreateTasksCorrect__container"
    >
      <i className="fas fa-check-square" />
      <p>Tarea creada correctamente</p>
    </button>
  </div>
);

export default CreateTasksCorrect;
