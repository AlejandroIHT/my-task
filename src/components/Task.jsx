import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/task.css';

import Tag from './Tag';

const Task = ({ data }) => (
  <div className="task">
    <div className="task__header__status">
      {data.status === 'en cola' && (
        <p className="task__header__status--red">
          <i className="fas fa-circle" /> {data.status}
        </p>
      )}
      {data.status === 'en proceso' && (
        <p className="task__header__status--yellow">
          <i className="fas fa-circle" /> {data.status}
        </p>
      )}
      {data.status === 'terminada' && (
        <p className="task__header__status--green">
          <i className="fas fa-circle" /> {data.status}
        </p>
      )}
      <p className="task__header__status__date">{`${data.date_start}`}</p>
    </div>
    <div className="task__header">
      <h2 className="task__header__title">{`${data.name}`}</h2>
      <p className="task__header__level">{`nivel: ${data.level}`}</p>
    </div>
    <div className="task__content">
      <div className="task__content__row">
        <p>
          <strong>De: </strong> {`${data.person_create}`}
        </p>
      </div>
      <div className="task__content__row">
        <p>
          <strong>Para: </strong>
          {`${data.person_assigned}`}
        </p>
      </div>
      <div className="task__content__row">
        <p>
          <strong>Fecha término: </strong>
          {`${data.date_end}`}
        </p>
      </div>
    </div>
    <div className="task__container__button">
      <Link
        to={{
          pathname: '/editTask',
          search: `?task=${data.id}`,
        }}
      >
        <button type="button" className="button--edit">
          Editar tarea
        </button>
      </Link>
    </div>
    <div className="task__footer">
      {data.tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  </div>
);

export default Task;
