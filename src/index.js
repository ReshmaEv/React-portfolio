import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Home from "./components/Home"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/> 
       <Route path="about" element={<About/>}/>
       <Route path="skills" element={<Skills/>}/>
       <Route path="project" element={<Project/>}/>
       <Route path="contact" element={<Contact/>}/>
       </Route>
       
       
     </Routes>
 </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
