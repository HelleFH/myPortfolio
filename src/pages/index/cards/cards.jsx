// Card.jsx
import React from 'react';
import './cards.scss';

export default function Card({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img className="project-card__image" src={project.images[0]} alt={project.name} />
      <strong className="project-card__title">{project.name}</strong>
      <div className="project-card__description">{project.description}</div>
    </div>
  );
}
