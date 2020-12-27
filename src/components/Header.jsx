import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/header.css';

const Header = () => (
  <header className="header global-padding">
    <Link to="/" className="header__link">
      <h1 className="header__title reset-margin">Mis Tareas</h1>
    </Link>
  </header>
);

export default Header;
