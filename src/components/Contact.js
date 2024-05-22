import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div className='d-flex justify-content-center align-items-center   ' style={{marginTop:'200px'}}>
    <div className='w-75 ' style={{backgroundColor: '#EDF4F2', padding: '50px',borderRadius:'30px'}}>
      <div className='text-center mb-4'>
        <h3 className='fw-bold' style={{fontSize:"50px"}}>Contact</h3>
      </div>
      <div className='text-center'>
        <a style={{color: '#31473A', margin: '0 10px'}} href=""><FaInstagramSquare size={40} /></a>
        <a style={{color: '#31473A', margin: '0 10px'}} href=""><FaGithub size={40} /></a>
        <a style={{color: '#31473A', margin: '0 10px'}} href=""><FaLinkedin size={40} /></a>
      </div>
    </div>
  </div>
  )
}

export default Contact