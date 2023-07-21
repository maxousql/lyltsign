/* Le code importe les dépendances et composants nécessaires pour le composant DocumentationPage. */
import React from "react";
import "../styles/DocumentationPage.css"; 
import Navbar from '../components/navBar';

/**
 * Le composant DocumentationPage est un composant fonctionnel React qui affiche une page de
 * documentation pour le site de participation en ligne LYLTSIGN, fournissant des instructions sur la
 * façon de naviguer et d'utiliser ses fonctionnalités.
 * @returns Le composant DocumentationPage renvoie un élément JSX qui représente la page de
 * documentation du site de participation en ligne LYLTSIGN. La page comprend une barre de navigation,
 * un en-tête et un bloc de documentation qui fournit des instructions pour l'utilisation des
 * fonctionnalités du site, telles que l'accès à la page d'accueil, la connexion, la consultation de
 * l'horaire, la signature des présences, la justification des absences et la déconnexion.
 */

const DocumentationPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="documentation-container">
      <h1>Documentation</h1>
      <div className="documentation-block">
      Documentation de l'utilisateur pour le site d'émargement en ligne LYLTSIGN 
    Bienvenue dans la documentation de l'utilisateur pour le site d'émargement en ligne LYLTSIGN. 
    Ce guide détaillé vous aidera à naviguer et à utiliser les fonctionnalités du site pour faciliter votre 
    processus d'émargement lors de vos cours. Suivez attentivement les instructions ci-dessous pour 
    commencer.
    <p>
    1. Accès à la page <a href="/">d'acceuil</a>
    - Ouvrez votre navigateur web et accédez à l'URL du site d'émargement en ligne LYLTSIGN.
    - La page d'accueil s'affichera, présentant diverses options et fonctionnalités.
    </p><p>
    2. Connexion à votre compte 
    - Sur la page de <a href="/login">connexion</a>, saisissez vos informations d'identification, y compris votre nom 
    d'utilisateur et votre mot de passe.
    -Cliquez sur le bouton "Connexion" pour accéder à votre compte.
    </p>
    <p>
    3. Visualisation de <a href="/planning">l'emploi du temps</a>
    - Une fois connecté, vous serez redirigé vers votre tableau de bord.
    - Sur le tableau de bord, recherchez une section ou un onglet intitulé "Emploi du temps" ou 
    "Calendrier".
    - Cliquez sur cet onglet pour afficher votre emploi du temps, qui répertorie tous vos cours et leurs 
    horaires respectifs.
    </p>
    <p>
    4. Signature de l'émargement pour un cours 
    - Sur le tableau de bord ou l'emploi du temps, recherchez le cours pour lequel vous souhaitez 
    effectuer l'émargement.
    - Cliquez sur le nom du cours pour accéder à sa page spécifique.
    - Assurez-vous que l'heure actuelle correspond à l'heure du cours pour pouvoir signer 
    l'émargement.
    - Si l'heure est correcte, vous verrez un bouton ou une option pour "Signer" ou "Emarger".
    - Cliquez sur ce bouton pour enregistrer votre présence à ce cours.
    </p>
    <p>
    5. Justification d'une absence 
    - Dans la barre de navigation du site, recherchez une option intitulée <a href="/absences">Absence</a>.
    - Cliquez sur cette option pour accéder à la page de justification des absences.
    - Sur cette page, vous pourrez fournir des informations et des raisons pour justifier votre absence 
    à un cours spécifique.
    - Remplissez les champs requis et soumettez le formulaire pour enregistrer votre justification.</p>
    <p>
    6. Déconnexion 
    - Pour vous déconnecter de votre compte, recherchez un bouton ou une option intitulée 
    "Déconnexion".
    - Cliquez sur ce bouton pour fermer votre session et quitter le site en toute sécurité.
    </p>
      </div>
    </div>
    </div>
  );
};

export default DocumentationPage;