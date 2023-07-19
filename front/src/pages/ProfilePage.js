import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navBar';
import '../styles/StudentInfo.css';

const StudentInfo = () => {
  // State pour stocker les données de l'élève
  const [student, setStudent] = useState(null);
  // State pour indiquer si les données sont en cours de chargement
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données de l'élève
    const fetchStudent = async () => {
      try {
        // Effectue une requête GET à l'API pour récupérer les données des élèves
        const response = await axios.get('http://localhost:3001/user');
        // Stocke les données du premier élève dans le state 'student'
        setStudent(response.data[0]);
        // Met à jour le state 'loading' pour indiquer que le chargement est terminé
        //setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'élève:', error);
        // En cas d'erreur, met à jour le state 'loading' pour indiquer que le chargement est terminé
        //setLoading(false);
      }
    };

    // Appelle la fonction pour récupérer les données de l'élève
    fetchStudent();
  }, []);

  // Si les données sont en cours de chargement, affiche un spinner et un message de chargement
  //if (loading) {
   // return (
    //  <div className="loading-container">
        //<div className="spinner"></div>
       // <p>Chargement...</p>
     // </div>
   // );
 // }

  // Si aucune donnée d'élève n'est disponible, affiche un message approprié avec css
  if (!student) {
    return (
      <div><Navbar /> {/* Affiche la barre de navigation */}
      <div className="container">
        <h1>Informations de l'élève</h1>
        <div className="no-data">Aucune donnée disponible.</div>
      </div>
      </div>
    );
  }

  // Si les données de l'élève sont disponibles, les affiche dans un composant d'informations
  return (
    <div>
      <Navbar /> 
    <div className="container">
      <h1>Informations de l'élève</h1>
      <div className="info-card">
        <div className="info-item">
          <span className="info-label">Nom:</span>
          <span className="info-value">{student.name}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Âge:</span>
          <span className="info-value">{student.age}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Niveau:</span>
          <span className="info-value">{student.grade}</span>
        </div>
        <div className="info-item">
          <span className="info-label">École:</span>
          <span className="info-value">{student.school}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentInfo;