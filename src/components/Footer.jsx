import React from 'react';

import '../styles/components/footer.css';

const Footer = () => (
  <footer className="footer">
    <p className="footer__p">
      Create with <i className="fas fa-heart" /> by{' '}
      <a
        href="https://www.linkedin.com/in/alejandroherrerat/"
        target="_blank"
        rel="noreferrer"
        className="global-color-text"
      >
        Alejandro Herrera Turra
      </a>
    </p>
  </footer>
);

export default Footer;
