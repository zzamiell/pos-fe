import axios from 'axios'

const token = localStorage.getItem('tokenadmin_')
const Api = axios.create({
    //set default endpoint API
    baseURL: process.env.VUE_APP_endpoint
})

Api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
if (token != '') {
    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Request interceptor
Api.interceptors.request.use(
    (config) => {
        // Perform actions before a request is sent
        // For example, you can set headers or modify the request config
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

// Response interceptor
Api.interceptors.response.use(
    (response) => {
        // Handle successful responses
        // For example, you can check for specific status codes or data conditions
        // console.log('here')
        // console.log(response)
        if (response.status == 200) {
            return response.data;
        }
    },
    (error) => {
        // Handle error responses
        // For example, you can check for specific error codes or network errors
        if (error.response) {
            // Respons diterima dengan kode status di luar kisaran 2xx
            if (error.response.status > 400) {
                localStorage.removeItem('tokenadmin_')
                return Promise.reject(error.response.data.message)
            }
            return Promise.reject(error.response.data.message)
        } else if (error.request) {
            // Tidak ada respons yang diterima
            return Promise.reject(error.request)
        } else {
            // Kesalahan lainnya
            return Promise.reject(error.message)
        }
    }
);
export default Api