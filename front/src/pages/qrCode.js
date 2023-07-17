import { React } from 'react';

import Navbar from '../components/navBar';
import Scanner from '../components/scanner';

const qrCode = () => {
    return (
        <div>
            <Navbar />
            <Scanner />
        </div>
    );
};

export default qrCode;