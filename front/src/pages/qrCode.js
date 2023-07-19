import { React } from 'react';
import QRCode from 'qrcode.react';

import Navbar from '../components/navBar';
import Scanner from '../components/scanner';

const qrCode = () => {
    const userData = {
        userId: 'ABC123',
        eventName: 'Meeting XYZ',
    };

    const dataString = JSON.stringify(userData);

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Scanner />
            </div>
            <div>
                <h2>Code QR d'émargement</h2>
                <QRCode value={dataString} />
            </div>
        </div>
    );
};

export default qrCode;