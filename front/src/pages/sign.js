/**
  * Le code ci-dessus est un composant React qui rend un pavé de signature où les utilisateurs peuvent dessiner leur
  * signature et enregistrez-la en tant qu'image.
  * @returns Le composant SignaturePad renvoie un élément JSX.
  */
import React, { useState } from "react";
import SignatureCanvas from 'react-signature-canvas';
import Navbar from '../components/navBar';

import '../styles/PageAbsences.css';

function SignaturePad() {
    const [sign, setSign] = useState()
    const [url, setUrl] = useState()

    const handleClear = () => {
        sign.clear()
        setUrl('')
    }
    const handleGenerate = () => {
        setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px'}}>
                <h1>Signature</h1>
                <div style={{ border: "2px solid black", width: 500, height: 200}}>
                    <SignatureCanvas
                        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                        ref={data => setSign(data)}
                    />
                </div>
            
            <br></br>
                <button className="add-btn" style={{ marginBottom: "10px"}} onClick={handleClear}>Clear</button>
                <button className="add-btn" onClick={handleGenerate}>Save</button>
            </div>
            <br /><br />
            <img src={url} alt="" />
        </div>
    )
}
export default SignaturePad;