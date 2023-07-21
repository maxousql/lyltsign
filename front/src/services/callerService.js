/* Le code importe la bibliothèque `axios` et en crée une instance appelée `Axios`. Les "Axios"
l'instance est configurée avec une URL de base de `http://10.1.1.189:3000` et un en-tête par défaut de
`'Type de contenu' : 'application/json'`. Cela vous permet de faire des requêtes HTTP à la base spécifiée
URL utilisant l'instance "Axios". */
import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://10.1.1.189:3000',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default Axios;