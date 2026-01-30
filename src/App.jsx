import React from 'react';
import './App.css';
const projects = [
  {
    title: "Protfolio",
    description: "My portfolio",
    link: "https://sreevallisyamagari.github.io/sreevalli-portfolio/",
  },
  {
    title: "Counter-App",
    description: "Simple Counter app for Increment and Decrement",
    link: "https://sreevallisyamagari.github.io/sreevalli-counter/",
  },
  {
    title: "Calculator",
    description: "Simple calculator using React",
    link: "https://sreevallisyamagari.github.io/sreevalli-calculator_app/",
  },
  {
    title: "Digital Clock",
    description: "Time and Date",
    link: "https://sreevallisyamagari.github.io/Digital_clock/",
  },
];

function App() {
  return (
    <div className="container">
      <h3 className="heading">🚀 My Projects</h3>

      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <button
              onClick={() => window.open(project.link, "_blank")}
            >
              Open Project →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
