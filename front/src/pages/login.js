import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { accountService } from '../services/accountService';
import { reqApiService } from '../services/reqApiService';

import "../styles/login.css";

const Login = () => {
    let navigate = useNavigate();
    useEffect(() => {
        document.body.classList.add('pageBodyStyle');

        return () => {
            document.body.classList.remove('pageBodyStyle');
        };
    }, []);

    const [data, setData] = useState({
        mail: 'maxime',
        password: 'maxime'
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
                <p>Après vous être connecté, vous pouvez profiter de l'application !</p>
                <form onSubmit={onSubmit}>
                    <div class="form-item">
                        <input type="text" name="mail" class="form-element" placeholder="Utilisateurs ou email" value={data.mail} onChange={onChange} />
                    </div>
                    <div class="form-item">
                        <input type="password" name="password" class="form-element" placeholder="Mot de passe" value={data.password} onChange={onChange} />
                    </div>
                    <div class="form-checkbox-item">
                        <input type="checkbox" id="rememberMe" checked />
                        <label for="rememberMe">Se souvenir de moi</label>
                    </div>
                    <div class="flex">
                        <button type="submit">Connexion</button>
                    </div>
                </form>
            </div>
            <div class="column">
                <h2>Bienvenue sur LyltSign</h2>
                <p>Facilement connecté, un émargement sans tilt !</p>
            </div>
        </div>
    );
};

export default Login;