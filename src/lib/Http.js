import axios from 'axios';

export class Http{
        static post(url,data,key){
        return axios.post(url,data,{headers:{key}})
            
        }
        static get(url,key){
        return axios.get(url,{headers:{key}})       
              
        }
        static delete(url,key){
            return axios.delete(url,{headers:{key}})    
        }
        static put(url,data,key){
                return axios.put(url,data,{headers:{key}})    
            }
        
}
