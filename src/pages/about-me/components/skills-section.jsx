import React from 'react';
import { skills } from '../../../data/skills';  
import SkillCard from './cards/cards';
import './skills-section.scss';

export default function SkillsSection() {
  const handleCardClick = () => {
    // Logic for what should happen on card click (e.g., navigate to details, etc.)
    console.log('Card clicked!');
  };

  return (
    <div className="skills-section">
      <h2>{skills[0].title}</h2>
      <h5>{skills[0].subtitle}</h5>
      <div className="skills-cards">
        {skills[0].sections.map((section, index) => (
          <SkillCard
            key={index}
            skill={section}  // Pass each section data to the Card component
            onClick={handleCardClick}  // Handle card clicks
          />
        ))}
      </div>
    </div>
  );
}
