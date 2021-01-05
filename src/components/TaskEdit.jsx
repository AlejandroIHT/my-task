import React, { useState } from 'react';
import '../styles/components/taskEdit.css';
import TaskEditElement from './TaskEditElement';
import Loader from '../containers/Loader';
import CreateTasksCorrect from './CreateTasksCorrect';

const TaskEdit = ({ task, loading, setLoading }) => {
  const [successEditTask, setSuccessEditTask] = useState(false);

  return (
    <div className="tasksEdit">
      <div className="tasksEdit__container__header">
        <div className="tasksEdit__container__header--column">
          <h1 className="tasksEdit__title">Editando la tarea</h1>
        </div>
      </div>
      {loading && <Loader />}
      {successEditTask && <CreateTasksCorrect edit />}
      {!loading && !successEditTask && (
        <div className="tasksEdit__container">
          <TaskEditElement
            task={task}
            setLoading={setLoading}
            setSuccessEditTask={setSuccessEditTask}
          />
        </div>
      )}
    </div>
  );
};

export default TaskEdit;
