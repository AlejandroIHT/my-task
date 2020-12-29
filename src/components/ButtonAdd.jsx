import React from 'react';
import '../styles/components/buttonAdd.css';

const ButtonAdd = ({ handleClick }) => (
  <a
    className="button__add button__container__add"
    onClick={handleClick}
    href="#header"
  >
    +
  </a>
);

export default ButtonAdd;
