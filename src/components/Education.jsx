import React from "react";
import "./Education.css";

const education = [

  {
    date: '2023 - 2024',
    title: 'Certificate Front End Development Libraries',
    description: 'Freecodecamp'
  },

    {
      date: '2023 - 2024',
      title: 'Certificate in javaScript algorithms and data structures',
      description: 'Freecodecamp'
    },
    {
      date: '2023 - 2024',
      title: 'Certificate in Web Development and Design', 
      description: 'FreeCodeCamp'
    },
    {
      date: '2019 - 2020',
      title: 'Associated Degree',  
      
      description: 'Fortis College'
    },
    {
      date: '2010 - 2014',
      title: 'High School Diploma',
      description: 'Seaford Senior High School'
    }
  ];
  
  const Timeline = () => {
    return (
      <div className="experience-section">
        <div className="timeline-container">
          <h2 style={{ textAlign: 'center' }}>Education</h2>
          <div className="timeline">
            <div className="timeline-track"></div>
            <div className="timeline-section education">
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-date">{edu.date}</div>
                  <div className="timeline-content">
                    <h3>{edu.title}</h3>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div> 
            
             
          </div>
        </div>
      </div>
    );
  };
  
  export default Timeline;
  
  
  
  
  
  