import axios from "axios";

export const BASE_URL = "https://economia.awesomeapi.com.br"

const api = axios.create({
    baseURL: `${BASE_URL}`
});

export default api;