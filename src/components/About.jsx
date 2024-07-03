import React from 'react';
import './About.css';


function About() {
  return (
    <div className="about">
      <img src={"https://news.xbox.com/en-us/wp-content/uploads/sites/2/2022/07/disability002-c7489c4724f59970087c.jpg"} draggable={false} alt="img" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am a self-taught developer with a strong foundation in HTML, CSS, and JavaScript. 
          Over the past few years, I've immersed myself in various online courses, coding bootcamps, and personal projects to hone my skills and stay current with industry trends.
           My approach to development is rooted in a commitment to creating visually appealing, user-friendly websites that deliver a seamless experience across all devices.</p>

        <p> One of the aspects I love most about front-end development is the blend of creativity and logic. 
        I enjoy transforming complex problems into intuitive, beautiful interfaces. Whether it's optimizing the performance of a web page, implementing responsive designs, or enhancing user interactions,
         I find great satisfaction in the details that make a big difference.</p>
      </div>
    </div>
  );
}

export default About;
