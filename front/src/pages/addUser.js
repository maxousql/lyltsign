/* Le code importe les dépendances et composants nécessaires pour le composant "AddUser". */
import React, { useEffect } from 'react';
import Navbar from '../components/navBar';

import { usersService } from '../services/usersService';

/**
 * La fonction AddUser est un composant React qui récupère tous les utilisateurs et enregistre les
 * données de réponse, et restitue un composant Navbar.
 * @returns Le composant renvoie un `<div> ` élément qui contient un `<Navbar> ` composant.
 */
const AddUser = () => {
    useEffect(() => {
        usersService.getAllUsers()
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    })

    return (
        <div>
            <Navbar />
        </div>
    );
};

export default AddUser;