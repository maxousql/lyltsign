import React, { useState, useEffect } from 'react';
import Navbar from '../components/navBar';
import '../styles/PageAbsences.css';

const PageAbsence = () => {
  const [absences, setAbsences] = useState([]); // État pour stocker les absences
  const [retards, setRetards] = useState([]); // État pour stocker les retards
  const [popupOuverte, setPopupOuverte] = useState(false); // État pour gérer l'affichage de la popup
  const [absenceSelectionnee, setAbsenceSelectionnee] = useState(null); // État pour stocker l'absence sélectionnée dans la popup
  const [erreurDocument, setErreurDocument] = useState(false); // État pour gérer l'affichage de l'erreur de document
  const [setMessageErreur] = useState(false); // État pour gérer l'affichage du message d'erreur

  useEffect(() => {
    // Utilisation de useEffect pour effectuer une requête à la base de données au chargement du composant
    // et mettre à jour l'état des absences avec les données récupérées
    fetch('http://localhost:3000/absences') // Remplacez l'URL par l'endpoint de l'API pour récupérer les absences
      .then((response) => response.json())
      .then((data) => setAbsences(data))
      .catch((error) => console.log(error));

    // Utilisation de useEffect pour effectuer une requête à la base de données au chargement du composant
    // et mettre à jour l'état des retards avec les données récupérées
    fetch('http://localhost:3000/retards') // Remplacez l'URL par l'endpoint de l'API pour récupérer les retards
      .then((response) => response.json())
      .then((data) => setRetards(data))
      .catch((error) => console.log(error));
  }, []); // Le tableau vide [] en second argument indique que cette requête ne doit être effectuée qu'une seule fois au chargement du composant

  const gererClicJustifier = (id, type) => {
    // Gère le clic sur le bouton "Justifier" pour les absences et les retards
    const item = type === 'absence' ? absences.find((item) => item.id === id) : retards.find((item) => item.id === id);
    setAbsenceSelectionnee(item); // Sélectionne l'absence ou le retard correspondant
    setPopupOuverte(true); // Ouvre la popup
  };

  const gererChangementStatut = () => {
    // Gère le changement de statut d'une absence ou d'un retard
    if (absenceSelectionnee.fichier) {
      if (absenceSelectionnee.commentaire.trim() === '') {
        // Vérifie si le commentaire est vide
        // setMessageErreur(true); // Commentée car non utilisée
      } else {
        // Met à jour le statut de l'absence ou du retard en "En attente"
        const updatedItem = { ...absenceSelectionnee, statut: 'En attente' };
        if (absenceSelectionnee.type === 'absence') {
          setAbsences((prevAbsences) => prevAbsences.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
        } else {
          setRetards((prevRetards) => prevRetards.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
        }
        setAbsenceSelectionnee(null); // Réinitialise l'absence ou le retard sélectionné
        setPopupOuverte(false); // Ferme la popup
        setErreurDocument(false); // Réinitialise l'erreur de document
      }
    } else {
      setErreurDocument(true); // Affiche l'erreur de document si aucun fichier n'est sélectionné
    }
  };

  const gererChangementFichier = (e) => {
    // Gère le changement de fichier
    const fichier = e.target.files[0]; // Récupère le fichier sélectionné
    setAbsenceSelectionnee((prevItem) => ({ ...prevItem, fichier })); // Met à jour le fichier de l'absence ou du retard sélectionné
  };

  const gererChangementCommentaire = (e) => {
    // Gère le changement de commentaire
    const commentaire = e.target.value; // Récupère la valeur du commentaire
    setAbsenceSelectionnee((prevItem) => ({ ...prevItem, commentaire })); // Met à jour le commentaire de l'absence ou du retard sélectionné
  };

  const gererClicVisualiser = (id, type) => {
    // Gère le clic sur le bouton "Visualiser" pour les absences et les retards
    const item = type === 'absence' ? absences.find((item) => item.id === id) : retards.find((item) => item.id === id);
    setAbsenceSelectionnee(item); // Sélectionne l'absence ou le retard correspondant
    setPopupOuverte(true); // Ouvre la popup
  };

  const fermerPopup = () => {
    // Gère la fermeture de la popup
    setAbsenceSelectionnee(null); // Réinitialise l'absence ou le retard sélectionné
    setPopupOuverte(false); // Ferme la popup
  };

  // Fonction pour ajouter une absence en dur
  const ajouterAbsence = () => {
    const nouvelleAbsence = {
      id: absences.length + 1,
      cours: "Nom du cours de l'absence",
      statut: 'Non justifié',
      fichier: null,
      commentaire: '',
      type: 'absence'
    };
    setAbsences([...absences, nouvelleAbsence]);
  };

  // Fonction pour ajouter un retard en dur
  const ajouterRetard = () => {
    const nouveauRetard = {
      id: retards.length + 1,
      cours: "Nom du cours du retard",
      statut: 'Non justifié',
      fichier: null,
      commentaire: '',
      type: 'retard'
    };
    setRetards([...retards, nouveauRetard]);
  };

  return (
    <div>
      <Navbar /> {/* Affiche la barre de navigation */}
      <div className="container">
        <h1>Liste des absences</h1>
        <table className="table-absences">
          <thead>
            <tr>
              <th>Cours</th>
              <th>Statut</th>
              <th>Justifier</th>
              <th>Visualiser</th>
            </tr>
          </thead>
          <tbody>
            {absences.map((absence) => (
              <tr key={absence.id}>
                <td>{absence.cours}</td> {/* Affiche le nom du cours */}
                <td>{absence.statut}</td> {/* Affiche le statut de l'absence */}
                <td>
                  {absence.statut === 'Non justifié' ? ( // Vérifie si le statut est "Non justifié"
                    <button className="btn-justifier" onClick={() => gererClicJustifier(absence.id, 'absence')}>
                      Justifier
                    </button>
                  ) : (
                    <button className="btn-justifier" disabled>
                      Justifier
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn-visualiser" onClick={() => gererClicVisualiser(absence.id, 'absence')}>
                    Visualiser
                  </button>
                </td>
              </tr>
            ))}
            {retards.map((retard) => (
              <tr key={retard.id}>
                <td>{retard.cours}</td> {/* Affiche le nom du cours */}
                <td>{retard.statut}</td> {/* Affiche le statut du retard */}
                <td>
                  {retard.statut === 'Non justifié' ? ( // Vérifie si le statut est "Non justifié"
                    <button className="btn-justifier" onClick={() => gererClicJustifier(retard.id, 'retard')}>
                      Justifier
                    </button>
                  ) : (
                    <button className="btn-justifier" disabled>
                      Justifier
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn-visualiser" onClick={() => gererClicVisualiser(retard.id, 'retard')}>
                    Visualiser
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {popupOuverte && absenceSelectionnee && ( // Affiche la popup si elle est ouverte et une absence ou un retard est sélectionné
          <div className="popup-overlay">
            <div className="popup">
              <h2>{absenceSelectionnee.cours}</h2> {/* Affiche le nom du cours de l'absence ou du retard sélectionné */}
              {absenceSelectionnee.statut === 'Non justifié' ? ( // Vérifie si le statut est "Non justifié"
                <>
                  <form>
                    <label>
                      Fichier :
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={gererChangementFichier}
                      />
                    </label>
                    {erreurDocument && <p style={{ color: 'red' }}>Veuillez sélectionner un document.</p>} {/* Affiche l'erreur de document */}
                    <label>
                      Commentaire :
                      <textarea
                        value={absenceSelectionnee.commentaire}
                        onChange={gererChangementCommentaire}
                      ></textarea>
                    </label>
                    <button className="btn-soumettre" onClick={gererChangementStatut}>
                      Soumettre
                    </button>
                    <button className="btn-fermer" onClick={fermerPopup}>
                      Fermer
                    </button>
                  </form>
                  {setMessageErreur && <p style={{ color: 'red' }}>Veuillez remplir tous les champs.</p>} {/* Affiche le message d'erreur */}
                </>
              ) : (
                <>
                  {absenceSelectionnee.fichier && (
                    <div className="document-preview">
                      <p>
                        Document :{' '}
                        <a href={URL.createObjectURL(absenceSelectionnee.fichier)}>
                          {absenceSelectionnee.fichier.name}
                        </a>
                      </p>
                    </div>
                  )}
                  <p>Commentaire : {absenceSelectionnee.commentaire}</p> {/* Affiche le commentaire de l'absence ou du retard sélectionné */}
                  <button className="btn-fermer" onClick={fermerPopup}>
                    Fermer
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Ajouter une absence en dur */}
      <button class="add-btn" onClick={ajouterAbsence}>Ajouter une absence</button>

      {/* Ajouter un retard en dur */}
      <button class="add-btn" onClick={ajouterRetard}>Ajouter un retard</button>
    </div>
  );
};

export default PageAbsence;
