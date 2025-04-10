// Card.jsx
import React from 'react';
import './cards.scss';

export default function Card({ project, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-image" src={project.images[0]} alt={project.name} />
      <strong>
        <div className="card-title">{project.name}</div>
      </strong>
      <div className="card-description">{project.description}</div>
    </div>
  );
}
