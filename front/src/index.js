/* Le code importe les modules nécessaires pour une application React. */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* Crée un élément racine à l'aide de la méthode `ReactDOM.createRoot()` et l'affecte à la
constante `root`. La méthode `createRoot()` prend l'élément DOM avec l'id 'root' comme argument et
renvoie un objet racine. */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);