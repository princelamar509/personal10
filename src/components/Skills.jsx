/*import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill"><FaHtml5 /> HTML5</div>
        <div className="skill"><FaCss3Alt /> CSS3</div>
        <div className="skill"><FaJsSquare /> JavaScript</div>
        <div className="skill"><FaReact /> React</div>
      </div>
    </div>
  );
}

export default Skills;*/


import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'HTML', color: 'bar-html', icon: '🔧' },
    { name: 'CSS', color: 'bar-css', icon: '🎨' },
    { name: 'JavaScript',  color: 'bar-js', icon: '💻' },
    { name: 'React',  color: 'bar-react', icon: '⚛️' },
  ];

  return (
    <section id="skills" className="skills-section">
    <div className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>My Skills</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div
              className={`skill-item ${hoveredSkill === index ? 'hovered' : ''}`}
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-content">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                  <div className={`bar ${skill.color}`}>
                    <div
                      className={`skill-level ${hoveredSkill === index ? 'hovered' : ''}`}
                      style={{ width: `${(index + 1) * 25}%` }}
                      
                    ></div>
                

                    
                   
               
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Skills;



