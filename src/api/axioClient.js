import axios from 'axios';
import queryString from 'query-string';

import {MY_API_KEY} from './apiConfig';
import {MOVIE_API} from './apiConfig';

const axiosClient = axios.create({
    baseURL: MOVIE_API,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: MY_API_KEY})
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;