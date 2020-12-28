import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/buttonAdd.css';

const ButtonAdd = () => (
  <Link to="/addtask" className="button__container__add">
    <button className="button__add" type="button">
      +
    </button>
  </Link>
);

export default ButtonAdd;
