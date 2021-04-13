import React from "react";
import "./skills.scss";
import { skillsData } from "../../data/skillsData";

function Skills() {
  return (
    <section className="skills-container">
      <h3>Skills</h3>
      <div className="skills">
        {skillsData.map((logo, index) => (
          <div className="card" key={index}>
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
