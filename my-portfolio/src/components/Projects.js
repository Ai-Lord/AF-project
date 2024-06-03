import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Blockchain Based E-vault</h3>
        <p>A web application that stores legal documents and provide enhanced security and immutability using blockchain.</p>
        <p>Technologies: HTML, CSS, JavaScript, Nodejs, MongoDB, API, Truffle, Ganache and Solidity</p>
        <a href="https://github.com/Ai-Lord/Blockchain-based-E-vault.git">View Project</a>
      </div>
      <div className="project">
        <h3>Voting Application</h3>
        <p>A simple web application for voting the candidates and show vote count.</p>
        <p>Technologies: HTML, CSS, JavaScript, Nodejs, MongoDB</p>
        <a href="https://github.com/Ai-Lord/voting-app.git">View Project</a>
      </div>
      <div className="project">
        <h3>Other Projects</h3>
        <p>Three different web application for resume, RestNews - fake news generator and Portfolio.</p>
        <p>Technologies: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, API</p>
        <a href="https://github.com/Ai-Lord/AF-project.git">View Project</a>
      </div>
      <a href="#skills" className="down-arrow">▼</a>
    </section>
  );
};

export default Projects;
