import React from 'react';
import Navbar from '../components/navBar';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-page">
          <div className="presentation">
            <h2>Bienvenue sur LYLTSIGN !</h2>
            <p>
          LYLTSIGN est une plateforme innovante conçue spécialement pour toi, élève ! Elle va faciliter la gestion de tes absences et retards au sein de ton établissement scolaire. Notre mission est de simplifier les processus liés à la gestion des présences, afin que tu puisses te concentrer pleinement sur ton éducation.

Avec LYLTSIGN, tu pourras facilement consulter et enregistrer tes absences ou retards en seulement quelques clics. Si tu as besoin de justifier une absence, tu auras la possibilité d'ajouter des documents appropriés pour le faire.

Ton tuteur aurat également accès à un espace dédié où ils pourront suivre les informations relatives à tes absences et recevoir des notifications en temps réel. Tout cela pour que tu puisses rester informé et bien accompagné tout au long de ton parcours scolaire.

Notre interface est conviviale et intuitive, même si tu n'es pas un expert en technologie, tu sauras rapidement l'utiliser. Et n'oublie pas, notre équipe est toujours là pour répondre à tes questions et t'accompagner afin de t'offrir une expérience optimale.

Rejoins-nous dès aujourd'hui et découvre comment LYLTSIGN peut te simplifier la vie en te donnant un outil pratique, efficace et moderne pour gérer tes absences et retards. Nous sommes impatients de t'accompagner dans cette aventure scolaire !

Ensemble, simplifions la gestion des présences pour créer un environnement d'apprentissage optimal. Bienvenue sur LYLTSIGN !
          </p>
            <div className="button-container">
              <Link to="/planning" className="btn-primary">
                Voir le planning
              </Link>
              <div className="file-download">
                <Link to="/documentation" className="btn-secondary">
              Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;