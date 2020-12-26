import React from 'react';
import '../styles/components/tag.css';

const Tag = ({ tag }) => <p className="task__footer__tag">{`#${tag}`}</p>;

export default Tag;
