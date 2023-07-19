import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://10.1.1.189:3000',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default Axios;