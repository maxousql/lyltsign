/* Le code importe divers modules et composants à partir de différents fichiers et bibliothèques. */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { accountService } from '../services/accountService';
import { reqApiService } from '../services/reqApiService';

import "../styles/login.css";

/**
 * La fonction Login est un composant React qui rend un formulaire de connexion et gère la soumission
 * du formulaire.
 * @returns Le composant Login renvoie un élément JSX, qui représente la structure et le contenu de la
 * carte de connexion.
 */
const Login = () => {
    let navigate = useNavigate();
    useEffect(() => {
        document.body.classList.add('pageBodyStyle');

        return () => {
            document.body.classList.remove('pageBodyStyle');
        };
    }, []);

    const [data, setData] = useState({
        mail: '',
        password: ''
    })

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        reqApiService.login(data)
            .then(res => {
                accountService.saveToken(res.data.token)
                navigate('/home')
            })
            .catch(error => console.log(error));
    }

    return (
        <div class="login-card">
            <div class="column">
                <h1>Connexion</h1>
                <p>Après votre connexion, vous pourrez profiter pleinement de l'application !</p>
                <form onSubmit={onSubmit}>
                    <div class="form-item">
                        <input type="text" name="mail" class="form-element" placeholder="Utilisateurs ou email" required value={data.mail} onChange={onChange} />
                    </div>
                    <div class="form-item">
                        <input type="password" name="password" class="form-element" placeholder="Mot de passe" required value={data.password} onChange={onChange} />
                    </div>
                    <div class="form-checkbox-item">
                        <input type="checkbox" id="rememberMe"/>
                        <label for="rememberMe">Se souvenir de moi</label>
                    </div>
                    <div class="flex">
                        <button type="submit">Connexion</button>
                    </div>
                </form>
            </div>
            <div class="column">
                <h2>Bienvenue sur LyltSign</h2>
                <p>Facilement connecté, un émargement qui fait tilt !</p>
            </div>
        </div>
    );
};

/* La ligne `export default Login;` exporte le composant `Login` comme exportation par défaut du
module. Cela signifie que lorsqu'un autre fichier importe ce module, il peut importer directement le
composant `Login` sans avoir à spécifier son nom. Par exemple, dans un autre fichier, vous pouvez
importer le composant `Login` comme ceci : `import Login from './Login';`. */
export default Login;