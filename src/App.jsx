import React from 'react';
import './App.css';
const projects = [
  {
    title: "Protfolio",
    link: "https://sreevallisyamagari.github.io/sreevalli-portfolio/",
  },
  {
    title: "Counter-App",
    link: "https://sreevallisyamagari.github.io/sreevalli-counter/",
  },
  {
    title: "Calculator",
    link: "https://sreevallisyamagari.github.io/sreevalli-calculator_app/",
  },
  {
    title: "Digital Clock",
    link: "https://sreevallisyamagari.github.io/Digital_clock/",
  },
{
    title: "Weather",
    link: "https://weather-nu-beryl.vercel.app",
  },
{
    title: "pomodoro_timer",
    link: "https://sreevallisyamagari.github.io/pomodoro_timer",
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
