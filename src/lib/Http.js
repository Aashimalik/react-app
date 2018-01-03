import axios from 'axios';

export class Http{
        static post(url,data){
     return new Promise((resolve,reject)=>{
           axios.post(url,data)
           .then(({data})=>{
            resolve(data)
            })
           .catch((err)=>{
            reject({err})
           })
            
        })
            
        }
        static get(url){
            return new Promise((resolve,reject)=>{
           axios.get(url)
           .then(({data})=>{
            resolve(data)
            })
           .catch((err)=>{
            reject({err})
           })
            
        })
              
        }

        static delete(url){
            return new Promise((resolve,reject)=>{
                axios.delete(url)
                .then(({data})=>{
                     resolve(data)
                })
                .catch((err)=>{
                    reject({err})
                })  
        })
    }
    
        static put(url,data){
                   return new Promise((resolve,reject)=>{
           axios.put(url,data)
           .then(({data})=>{
            resolve(data)
            })
           .catch((err)=>{
            reject({err})
           })
            
        })   
            }
        
}
