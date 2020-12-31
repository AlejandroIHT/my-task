import React from 'react';
import '../styles/components/taskEdit.css';
import TaskEditElement from './TaskEditElement';

const TaskEdit = () => (
  <div className="tasksEdit">
    <div className="tasksEdit__container__header">
      <div className="tasksEdit__container__header--column">
        <h1 className="tasksEdit__title">Editando la tarea</h1>
      </div>
    </div>

    <div className="tasksEdit__container">
      <TaskEditElement />
    </div>
  </div>
);

export default TaskEdit;
