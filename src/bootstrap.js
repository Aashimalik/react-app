import axios from 'axios'

axios.defaults.baseURL = ( process.env.NODE_ENV !== 'production') ? 'http://localhost:8000/' : '/adminapi/';



axios.interceptors.response.use(function (response) {

    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });