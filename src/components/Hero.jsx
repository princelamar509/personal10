import React from 'react';
import './Hero.css';
import backgroundVideo from '../assets/video4.mp4';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Ensure you have a video file in the specified path

function Hero() {
  return (
    <div className="hero">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
      <div className="hero-content">
        <p>Hello I'm Madeus Rene</p>
        <h1>Front End Developer</h1>
        <p>I'm a pasionate front end developer with a strong foundation in HTML, CSS, and JavaScript.</p>
        <div className="social-icons">
          <a href="https://github.com/princelamar509" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
