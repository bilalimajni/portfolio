import React from 'react';
import react from '../image/react.png';  
import javaScript from '../image/js.svg';
import css from '../image/css.png';
import git from '../image/git.png';
import github from '../image/github.png';
import html from '../image/html.png';
import mongodb from '../image/mongodb.png';
import redux from '../image/redux.png';
import sass from '../image/sass.png';



import './competances.css';

export default function Competences() {
  const competances = [
    {
      image: javaScript, 
      title: "Java script",
    },
    {
        image: react,
      title: "react",
      
    },
    {
        image: css,
      title: "css",
   
    },
    {
        image: git,
      title: "git",
   
    },
    {
        image: github,
      title: "github",
   
    },
    {
        image: html,
      title: "html",
   
    },
    {
        image: mongodb,
      title: "mongodb",
   
    },
    {
        image: redux,
      title: "redux",
   
    },
    {
        image: sass,
      title: "sass",
   
    },



    
  ];

  return (
    <>
     <h2 id="competences" className='titleCompetances'>Mes compétences</h2>
    <section className='competances'>
      
      {competances.map((competances, index) => (
        <div className='competances-item' key={index}>
          <img className='competances-icon' src={competances.image} alt="" />
          <h3 className='competances-item-title'>{competances.title}</h3>
          
        </div>
      ))}
    </section>
    </>
     
  );
}
