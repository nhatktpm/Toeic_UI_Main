import axios from 'axios';

const axiosClient = axios.create({
    baseURL: ' http://localhost:9599',
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",        
    },

});


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { config, status, data } = error.response;
    const URLS = ['/auth/login', '/auth/register'];
    if (URLS.includes(config.url) && status === 400) {
 
    //   throw new Error(firstMessage.message);
    }

    return Promise.reject(error);
});

export default axiosClient;