import React from 'react';
import './profileDevelopeur.css';

export default function ProfileDevelopeur() {
    return (
        <div className='aproposDeMois' id="a-propos" >
          <h2>À Propos de Moi</h2>
          <p>
            Je suis Imajni Bilal, titulaire d'un Bac Professionnel Systèmes Numériques.<br />
            Actuellement, je suis en formation pour devenir intégrateur web chez OpenClassrooms,<br />
            où j'acquiers des compétences approfondies en développement front-end  , 
          </p>
    
          <h2 >Formation</h2>
          <ul>
            <li>Bac Professionnel Systèmes Numériques</li>
            <li>Formation en Cours: Intégrateur Web chez OpenClassrooms</li>
          </ul>
        </div>
      );
}
