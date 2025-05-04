import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2a4e1ee051a849a5bbfd0eadad1d1091'
    }
})