import axios from 'axios';

export class Http{
        static post(url,data,key){
        return axios.post(url,data,{headers:{key}})
            
        }

        static get(url,data,key){
        return axios.get(url,data,{headers:{key}})
        }
}
