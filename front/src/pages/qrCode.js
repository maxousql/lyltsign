import { React } from 'react';
import QRCode from 'qrcode.react';

import Navbar from '../components/navBar';
import Scanner from '../components/scanner';

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