import React, { useEffect } from 'react';
import "../styles/login.css";

const Login = () => {
    useEffect(() => {
        document.body.classList.add('pageBodyStyle');

        // Nettoyer la classe lorsque le composant est démonté
        return () => {
            document.body.classList.remove('pageBodyStyle');
        };
    }, []);

    return (
        <div class="login-card">
            <div class="column">
                <h1>Connexion</h1>
                <p>Après vous être connecté, vous pouvez profiter de l'application !</p>
                <form>
                    <div class="form-item">
                        <input type="text" class="form-element" placeholder="Utilisateurs ou email" />
                    </div>
                    <div class="form-item">
                        <input type="password" class="form-element" placeholder="Mot de passe" />
                    </div>
                    <div class="form-checkbox-item">
                        <input type="checkbox" id="rememberMe" checked />
                        <label for="rememberMe">Se souvenir de moi</label>
                    </div>
                    <div class="flex">
                        <button type="button">Connexion</button>
                    </div>
                </form>
            </div>
            <div class="column">
                <h2>Bienvenue sur LyltSign</h2>
                <p>Facilement connecté, un émargement sans tilt !</p>
                {/* <a id="signInButton" href="e">Connexion</a> */}
            </div>
        </div>
    );
};

export default Login;