import React from 'react';
import '../styles/components/task.css';

import Tag from './Tag';

const Task = ({ data }) => (
  <div className="task">
    <div className="task__header">
      <h2 className="task__header__title">
        {`${data.name} / `} <span>{`nivel: ${data.level}`}</span>{' '}
        <span className="task__header__title__date">{`${data.date_start}`}</span>
      </h2>
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
    <div className="task__footer">
      {data.tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  </div>
);

export default Task;
