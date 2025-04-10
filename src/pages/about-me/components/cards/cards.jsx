import React from 'react';
import './cards.scss';

export default function SkillCard({ skill, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-image" src={skill.image.src} alt={skill.image.alt} />
      <strong>
        <div className="card-title">{skill.title}</div>
      </strong>
      <div className="card-description">{skill.description}</div>
      <h4>{skill.listTitle}</h4>
      <ul>
        {skill.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
