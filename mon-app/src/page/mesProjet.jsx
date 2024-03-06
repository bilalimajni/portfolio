import React from "react";
import sophie from "../image/sophie.png";
import kasa from "../image/kasa.png";
import argentBank from "../image/argentBank.png";

import "./projet.css";

export default function MesProjet() {
  const carte = [
    {
      image: sophie,
      title:
        "Création d'une page web interactive avec JavaScript, intégrant un back-end, récupérant dynamiquement des travaux, gérant la connexion, et utilisant une modale pour manipuler les données.",
      github: "https://github.com/bilalimajni/SophieBluel",
      
    },
    {
      image: kasa,
      title: "J'ai développé une application web de location immobilière avec React en suivant des étapes précises, incluant le routage, la création de pages interactives, et la gestion des erreurs. t",
      github: "https://github.com/bilalimajni/kasa",
    },
    {
      image: argentBank,
      title: "J'ai conçu une application bancaire avec React, intégrant un back-end fonctionnel, un système d'authentification utilisateur sécurisé, et la possibilité de modifier le nom d'utilisateur. Le projet est finalisé, avec une API Swagger documentée",
      github: "https://github.com/bilalimajni/argentBank",
    },
  ];

  return (
    <>
   
      <section id="projets" className="carte">
         <h2 className="titleProjet">mes projets</h2>
         <div className="cartFlex">
           {carte.map((projet, index) => (
          
          <div className="carte-item" key={index}>
            <img className="carteIMAGE" src={projet.image} alt="" />
            <p className="Carte-item-title">{projet.title}</p>
            <a href={projet.github} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          </div>
        ))}
         </div>
       
      </section>
    </>
  );
}
