/*import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Project 1</h3>
          <p>Project description here.</p>
          <a href="project1-url" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Project description here.</p>
          <a href="project2-url" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>Project description here.</p>
          <a href="project3-url" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project">
          <h3>Project 4</h3>
          <p>Project description here.</p>
          <a href="project4-url" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default Projects; */


import React, { useState } from 'react';

import './Projects.css';


const Projects = () => {
  const allProjects = [
    {
      title: 'Money Transfer',
      description: 'This is a Money Transfer Project. It showcases my skills in React.',
      link: 'https://princelamar509.github.io/MoneyTransfer1/',
      category: 'React'
    },
    {
      title: 'Template',
      description: 'This  is a template for a startup or any other business. It focuses on front-end development using JavaScript and HTML.',
      link: 'https://princelamar509.github.io/Start-up1/',
      category: 'HTML/CSS'
    },
    {
      title: 'Online Shopping',
      description: 'This is a online shopping project. It showcases my skills in React and also how to use API.',
      link: 'https://princelamar509.github.io/shopping1/',
      category: 'React'
    },
    {
      title: 'Music Player',
      description: 'This is a music player project. It showcases my skills in JavaScript.',
      link: 'https://princelamar509.github.io/music-player/',
      category: 'JavaScript'
    },
    // Add more projects as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  const categories = ['All', 'React', 'JavaScript', 'HTML/CSS'];

  return (
    <section id="projects" className="projects-section">
      <div className="projects">
        <h2>My Projects</h2>
        <div className="filter-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

