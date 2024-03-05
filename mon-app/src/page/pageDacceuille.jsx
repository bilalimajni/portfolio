import React from 'react';
import './acceueil.css';
import i from '../image/image.png';  

  

function PageDaccueil() {
  return (
    <div className='backgroundDark'>
     
    <img src={i} alt="" />
     <h1>IMAJNI Bilal</h1>
     <p>Etudiant de 22 ans</p>
     <p>intégrateur web</p>
  
    </div>
  )
}

export default PageDaccueil;
