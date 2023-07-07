import React, { useState } from 'react';
import DelayList from './components/DelayList';
import './styles.css';

const App = () => {
  const [delays, setDelays] = useState([
    {
      id: 1,
      cours: 'Mathématiques',
      statut: 'Non justifié',
      dateHeure: '2023-07-06 14:30',
      fichier: null,
      commentaire: ''
    },
    {
      id: 2,
      cours: 'Français',
      statut: 'Non justifié',
      dateHeure: '2023-07-06 15:00',
      fichier: null,
      commentaire: ''
    }
  ]);

  const handleJustify = (id, file) => {
    setDelays((prevDelays) => {
      return prevDelays.map((delay) => {
        if (delay.id === id) {
          return {
            ...delay,
            statut: 'Justifié',
            fichier: file
          };
        }
        return delay;
      });
    });
  };

  return (
    <div className="container">
      <h1>Liste des retards</h1>
      <DelayList delays={delays} onJustify={handleJustify} />
    </div>
  );
};

export default App;
