/* Le code importe les modules et composants nécessaires à la fonctionnalité QR Code. */
import { React } from 'react';
import QRCode from 'qrcode.react';

import Navbar from '../components/navBar';
import Scanner from '../components/scanner';

/**
  * La fonction `qrCode` renvoie un élément JSX qui affiche un code QR pour les données d'un utilisateur et inclut un
  * barre de navigation et un composant scanner.
  * @returns La fonction `qrCode` renvoie un élément JSX. Il se compose d'un élément `<div>` qui
  * contient trois éléments enfants : `<Navbar />`, un élément `<div>` avec des styles en ligne et
  * `<Scanner />`. Le `<div>` avec des styles en ligne contient un élément `<h2>` et un composant `<QRCode>`.
  * La valeur prop du composant `<QRCode>` est définie sur
  */

const qrCode = () => {
    const userData = {
        coursID: 'ABC123',
        name: 'Développement WEB et API',
    };

    const dataString = JSON.stringify(userData);

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px'}}>
                <h2 style={{marginBottom: '20px'}}>QR Code d'émargement</h2>
                <QRCode value={dataString} />
            </div>
            <div>
                <Scanner />
            </div>
        </div>
    );
};

export default qrCode;