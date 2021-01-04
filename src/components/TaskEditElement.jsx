import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/taskEditElement.css';

const TaskEditElement = ({ task }) => {
  const [newTag, setNewTag] = useState('');
  const [taskEdit, setTaskEdit] = useState(task);
  const form = useRef(null);

  useEffect(() => {
    setTaskEdit(task);
  }, [task]);

  const handleChange = (e) => {
    setTaskEdit({ ...taskEdit, [e.target.name]: e.target.value });
  };

  const handleChangeNewTag = (e) => {
    setNewTag(e.target.value);
  };

  const handleKeyPressNewTag = (e) => {
    if (e.key === 'Enter') {
      const taskTags = taskEdit.tags.slice();
      taskTags.push(newTag);
      setTaskEdit({ ...taskEdit, tags: taskTags });
      setNewTag('');
      e.target.value = '';
    }
  };

  const handleClickDeleteTag = (e) => {
    const taskTags = taskEdit.tags.slice();
    const tagId = taskTags.indexOf(e.target.name);
    taskTags.splice(tagId, 1);
    setTaskEdit({ ...taskEdit, tags: taskTags });
  };

  return (
    <div className="taskEditElement">
      <form ref={form}>
        <div className="taskEditElement__header__status">
          {taskEdit && (
            <>
              {taskEdit.status === 'en cola' && (
                <p className="taskEditElement__header__status--red">
                  <i className="fas fa-circle" />
                  <select
                    className="status__select--red"
                    name="status"
                    value={taskEdit.status}
                    onChange={handleChange}
                  >
                    <option
                      className="taskEditElement__header__status__option"
                      value="en cola"
                    >
                      en cola
                    </option>
                    <option
                      className="taskEditElement__header__status__option"
                      value="en proceso"
                    >
                      en proceso
                    </option>
                    <option
                      className="taskEditElement__header__status__option"
                      value="terminada"
                    >
                      terminada
                    </option>
                  </select>
                </p>
              )}
              {taskEdit.status === 'en proceso' && (
                <p className="taskEditElement__header__status--yellow">
                  <i className="fas fa-circle" />
                  <select
                    className="status__select--yellow"
                    name="status"
                    value={taskEdit.status}
                    onChange={handleChange}
                  >
                    <option
                      className="taskEditElement__header__status__option"
                      value="en cola"
                    >
                      en cola
                    </option>
                    <option
                      className="taskEditElement__header__status__option"
                      value="en proceso"
                    >
                      en proceso
                    </option>
                    <option
                      className="taskEditElement__header__status__option"
                      value="terminada"
                    >
                      terminada
                    </option>
                  </select>
                </p>
              )}
              {taskEdit.status === 'terminada' && (
                <p className="taskEditElement__header__status--green">
                  <i className="fas fa-circle" />
                  <select
                    className="status__select--green"
                    name="status"
                    value={taskEdit.status}
                    onChange={handleChange}
                  >
                    <option
                      className="taskEditElement__header__status__option"
                      value="en cola"
                    >
                      en cola
                    </option>
                    <option
                      className="taskEditElement__header__status__option"
                      value="en proceso"
                    >
                      en proceso
                    </option>
                    <option
                      className="taskEditElement__header__status__option"
                      value="terminada"
                    >
                      terminada
                    </option>
                  </select>
                </p>
              )}
            </>
          )}
          <p className="taskEditElement__header__status__date">
            {taskEdit ? taskEdit.date_start : ''}
          </p>
        </div>
        <div className="taskEditElement__header">
          <input
            name="name"
            className="taskEditElement__header--name-task"
            type="text"
            placeholder="Nombre de la tarea..."
            value={taskEdit ? taskEdit.name : ''}
            onChange={handleChange}
          />
          <select
            className="taskEditElement__header--level"
            name="level"
            value={taskEdit ? taskEdit.level : ''}
            onChange={handleChange}
          >
            <option
              className="taskEditElement__header__status__option"
              value="1"
            >
              Nivel 1
            </option>
            <option
              className="taskEditElement__header__status__option"
              value="2"
            >
              Nivel 2
            </option>
            <option
              className="taskEditElement__header__status__option"
              value="3"
            >
              Nivel 3
            </option>
            <option
              className="taskEditElement__header__status__option"
              value="4"
            >
              Nivel 4
            </option>
            <option
              className="taskEditElement__header__status__option"
              value="5"
            >
              Nivel 5
            </option>
            <option
              className="taskEditElement__header__status__option"
              value="6"
            >
              Nivel 6
            </option>
            <option
              className="taskEditElement__header__status__option"
              value="7"
            >
              Nivel 7
            </option>
            <option
              className="taskEditElement__header__status__option"
              value="8"
            >
              Nivel 8
            </option>
            <option
              className="taskEditElement__header__status__option"
              value="9"
            >
              Nivel 9
            </option>
            <option
              className="taskEditElement__header__status__option"
              value="10"
            >
              Nivel 10
            </option>
          </select>
        </div>
        <div className="taskEditElement__content">
          <div className="taskEditElement__content__row">
            <p>
              <strong>De: </strong>
            </p>
            <input
              name="person_create"
              className="taskEditElement__content__row--from"
              type="text"
              placeholder="Nombre Apellido..."
              value={taskEdit ? taskEdit.person_create : ''}
              onChange={handleChange}
            />
          </div>
          <div className="taskEditElement__content__row">
            <p>
              <strong>Para: </strong>
            </p>
            <input
              name="person_assigned"
              className="taskEditElement__content__row--to"
              type="text"
              placeholder="Nombre Apellido..."
              value={taskEdit ? taskEdit.person_assigned : ''}
              onChange={handleChange}
            />
          </div>
          <div className="taskEditElement__content__row">
            <p>
              <strong>Fecha término: </strong>
            </p>
            <input
              name="date_end"
              className="taskEditElement__content__row--date-finish"
              type="date"
              value={taskEdit ? taskEdit.date_end : ''}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="taskEditElement__footer">
          <div className="taskEditElement__footer">
            <div className="taskEditElement__footer__container">
              {!taskEdit.tags
                ? ''
                : taskEdit.tags.map((tag) => (
                    <div className="taskEditElement__footer__container--tag">
                      <p>{tag}</p>
                      <button
                        name={tag}
                        className="tag__delete"
                        type="button"
                        onClick={handleClickDeleteTag}
                      >
                        x
                      </button>
                    </div>
                  ))}
              <input
                className="tag__input"
                type="text"
                placeholder="Escribe el tag..."
                value={newTag}
                onChange={handleChangeNewTag}
                onKeyPress={handleKeyPressNewTag}
              />
            </div>
          </div>
        </div>
        <div className="taskEditElement__container__button">
          <button className="button--create" type="button">
            Editar
          </button>
          <Link to="/" className="taskEditElement__container__button--link">
            <button className="button--discard" type="button">
              Descartar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TaskEditElement;
