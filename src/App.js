import React from "react";
import "./App.css";
import blogtheme from "./images/blogtheme.png";
import advicepicture from "./images/advicepicture.png";
import booklist from "./images/booklist2.png";
import github from "./images/github-logo.png";
import linkedin from "./images/linkedin-logo.png";
import resume from "./images/resume-and-cv.png";
import profileImage from "./images/newprofile.png";
import resumepdf from "./images/webdev-mia-stroud-2023.pdf";
// import resumepdf from "./images/mia-stroud-resume.pdf"

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="profileImage" src={profileImage} alt="github" />
        <h1>Mia Stroud</h1>
        <p style={{ fontSize: 30 }}>Full-stack web developer</p>
      </div>
      <div className="projectsDisplay">
        <a
          className="card"
          href="https://reading-book-tracking.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="overlay"></div>
          <h2 className="projectName">Reading List</h2>
          <img className="projectImage" src={booklist} alt="book list" />
        </a>
        <a
          className="card"
          href="https://github.com/mia-jane/quote-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="overlay"></div>
          <h2 className="projectName">Advice API</h2>
          <img
            className="projectImage"
            src={advicepicture}
            alt="advice picture"
          />
        </a>
        <a
          className="card"
          href="https://github.com/mia-jane/blog-theme-mockup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="overlay"></div>
          <h2 className="projectName">Clean Blog Theme</h2>
          <img
            className="projectImage"
            src={blogtheme}
            alt="clean blog theme"
          />
        </a>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="logos-container">
            <a href="https://github.com/mia-jane" target="_blank">
              <img className="logoImage" src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/mia-stroud-/" target="_blank">
              <img className="logoImage" src={linkedin} alt="linkedin" />
            </a>
            <a href={resumepdf} target="_blank">
              <img className="logoImage" src={resume} alt="linkedin" />
            </a>
          </div>
          <a
            className="email-link"
            target="_blank"
            href="mailto:miast36@gmail.com"
          >
            miast36@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
