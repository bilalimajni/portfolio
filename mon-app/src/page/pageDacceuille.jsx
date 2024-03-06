import React from 'react';
import './acceueil.css';
import i from '../image/image.png';  
import flecheBas from '../image/flecheBas.png';  

  

function PageDaccueil() {
  return (
    <div className='backgroundDark'>
     
    <img className='photoProfile' src={i} alt="" />
     <h1>IMAJNI Bilal</h1>
     <p>Etudiant de 22 ans</p>
     <p>intégrateur web</p>
     <a href="#a-propos">
  <img className='flecheBas' src={flecheBas} alt="" />
</a>

  
    </div>
  )
}

export default PageDaccueil;
