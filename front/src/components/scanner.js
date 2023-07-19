import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRScanner() {
    const [data, setData] = useState('No result');

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: "50px" }}>
            <h2>Scanner de QR Code</h2>
            <div style={{ width: '70%', maxWidth: '400px' }}>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{ width: '100%' }}
                />
                <p>{data}</p>
            </div>
        </div>
    );
}

export default QRScanner;
