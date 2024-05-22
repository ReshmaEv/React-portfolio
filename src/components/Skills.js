import React from 'react';
import './skills.css';
function Skills() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{marginTop:'100PX'}}>
    <div className="w-75 p-5 skills-container">
      <h3 className="text-center fw-bold " style={{fontSize:'50px'}}>My Skills</h3>
      <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
        <div className="skill-item">HTML</div>
        <div className="skill-item">CSS</div>
        <div className="skill-item">BOOTSTRAP</div>
        <div className="skill-item">JAVASCRIPT</div>
        <div className="skill-item">REACT</div>
        <div className="skill-item">NODE</div>
        <div className="skill-item">EXPRESS</div>
        <div className="skill-item">MONGODB</div>
      </div>
    </div>
  </div>
  )
}

export default Skills