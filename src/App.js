import React from 'react';
import './App.css';
import blogtheme from './images/blogtheme.png'
import advicepicture from "./images/advicepicture.png"
import github from "./images/github-logo.png"
import linkedin from "./images/linkedin-logo.png"
import resume from "./images/resume-and-cv.png"
import profileImage from "./images/circle-profile.png"
import resumepdf from "./images/resume.pdf"

function App() {
  return (
    <div className="App">
        <div className="header">
            <img className="profileImage" src={profileImage} alt="github"/>
            <h1>Mia Stroud</h1>
            <p style={{fontSize:30}}>Full-stack web developer</p>
        </div>
        <div className="projectsDisplay">
          <a className="card"href="https://github.com/mia-jane/school/tree/master/module-4/advice-api" target="_blank" rel="noopener noreferrer">
              <div className="overlay"></div>
              <h2 className="projectName">Clean Blog Theme</h2>
              <img className="projectImage" src={blogtheme} alt="advicepicture" />
          </a>
          <a className="card"href="https://github.com/mia-jane/school/tree/master/module-4/advice-api" target="_blank" rel="noopener noreferrer">
              <div className="overlay"></div>
              <h2 className="projectName">Quote API</h2>
              <img className="projectImage" src={advicepicture} alt="advicepicture" />
          </a>
          <a className="card"href="https://github.com/mia-jane/school/tree/master/module-4/advice-api" target="_blank" rel="noopener noreferrer">
              <div className="overlay"></div>
              <h2 className="projectName">Advice API</h2>
              <img className="projectImage" src={advicepicture} alt="advicepicture" />
          </a>
        </div>
        <footer className="footer">
          <a href="https://github.com/mia-jane" target="_blank">
            <img className="logoImage" src={github} alt="github"/>
          </a>
          <a href="https://www.linkedin.com/in/mia-stroud-/" target="_blank">
            <img className="logoImage" src={linkedin} alt="linkedin"/>
          </a>
          <a href={resumepdf} target="_blank">
            <img className="logoImage" src={resume} alt="linkedin"/>
          </a>
          <p style={{fontSize: 20}}>miast36@gmail.com</p>
        </footer>
      </div>
  );
}

export default App;
