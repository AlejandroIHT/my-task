import React, { useState } from 'react';
import '../styles/components/newTask.css';

const NewTask = ({ handleClickDiscardTask, tasks }) => {
  const dateToday = () => {
    const dateTodayFull = new Date();
    const month =
      dateTodayFull.getMonth() + 1 < 10
        ? `0${dateTodayFull.getMonth() + 1}`
        : dateTodayFull.getMonth() + 1;
    const day =
      dateTodayFull.getDate() < 10
        ? `0${dateTodayFull.getDate()}`
        : dateTodayFull.getDate();

    const today = `${dateTodayFull.getFullYear()}-${month}-${day}`;
    return today;
  };
  const [newTag, setNewTag] = useState('');
  const [form, setForm] = useState({
    id: `${tasks.length}`,
    name: '',
    date_start: `${dateToday()}`,
    date_end: '',
    level: 1,
    person_create: '',
    person_assigned: '',
    tags: [],
    status: 'en cola',
  });

  const handleChange = (e) => {
    if (e.target.name === 'date_end') {
      if (Date.parse(e.target.value) - Date.parse(form.date_start) >= 0) {
        setForm({ ...form, [e.target.name]: e.target.value });
      } else {
        e.target.value = '';
        setForm({ ...form, [e.target.name]: '' });
      }
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeNewTag = (e) => {
    setNewTag(e.target.value);
  };

  const handleKeyPressNewTag = (e) => {
    if (e.key === 'Enter') {
      const taskTags = form.tags.slice();
      taskTags.push(newTag);
      setForm({ ...form, tags: taskTags });
      setNewTag('');
      e.target.value = '';
    }
  };

  const handleClickDeleteTag = (e) => {
    const taskTags = form.tags.slice();
    const tagId = taskTags.indexOf(e.target.name);
    taskTags.splice(tagId, 1);
    setForm({ ...form, tags: taskTags });
  };

  return (
    <div className="newTask">
      <div className="newTask__header__status">
        <p
          className={
            form.status === 'en cola'
              ? 'newTask__header__status--red'
              : 'newTask__header__status--yellow'
          }
        >
          <i className="fas fa-circle" />
          <select
            className={
              form.status === 'en cola'
                ? 'status__select--red'
                : 'status__select--yellow'
            }
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option className="newTask__header__status__option" value="en cola">
              en cola
            </option>
            <option
              className="newTask__header__status__option"
              value="en proceso"
            >
              en proceso
            </option>
          </select>
        </p>
        <p className="newTask__header__status__date">{form.date_start}</p>
      </div>
      <div className="newTask__header">
        <input
          name="name"
          className="newTask__header--name-task"
          type="text"
          placeholder="Nombre de la tarea..."
          value={form.name}
          onChange={handleChange}
        />
        <select
          className="newTask__header--level"
          name="level"
          value={form.level}
          onChange={handleChange}
        >
          <option className="newTask__header__status__option" value="1">
            Nivel 1
          </option>
          <option className="newTask__header__status__option" value="2">
            Nivel 2
          </option>
          <option className="newTask__header__status__option" value="3">
            Nivel 3
          </option>
          <option className="newTask__header__status__option" value="4">
            Nivel 4
          </option>
          <option className="newTask__header__status__option" value="5">
            Nivel 5
          </option>
          <option className="newTask__header__status__option" value="6">
            Nivel 6
          </option>
          <option className="newTask__header__status__option" value="7">
            Nivel 7
          </option>
          <option className="newTask__header__status__option" value="8">
            Nivel 8
          </option>
          <option className="newTask__header__status__option" value="9">
            Nivel 9
          </option>
          <option className="newTask__header__status__option" value="10">
            Nivel 10
          </option>
        </select>
      </div>
      <div className="newTask__content">
        <div className="newTask__content__row">
          <p>
            <strong>De: </strong>
          </p>
          <input
            name="person_create"
            className="newTask__content__row--from"
            type="text"
            placeholder="Nombre Apellido..."
            value={form.person_create}
            onChange={handleChange}
          />
        </div>
        <div className="newTask__content__row">
          <p>
            <strong>Para: </strong>
          </p>
          <input
            name="person_assigned"
            className="newTask__content__row--to"
            type="text"
            placeholder="Nombre Apellido..."
            vakue={form.person_assigned}
            onChange={handleChange}
          />
        </div>
        <div className="newTask__content__row">
          <p>
            <strong>Fecha término: </strong>
          </p>
          <input
            name="date_end"
            className="newTask__content__row--date-finish"
            type="date"
            value={form.date_end}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="newTask__footer">
        <div className="newTask__footer__container">
          {form.tags.map((tag) => (
            <div className="newTask__footer__container--tag">
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
      <div className="newTask__container__button">
        <button className="button--create" type="button">
          Crear
        </button>
        <button
          onClick={handleClickDiscardTask}
          className="button--discard"
          type="button"
        >
          Descartar
        </button>
      </div>
    </div>
  );
};

export default NewTask;
