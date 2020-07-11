import axios from 'axios'
export default{

    get(path='',data={}){
        return new Promise(function(resolve,reject){
        axios.get(path,{
            params:data
        })
            .then(function(res){
                resolve(res)
            })
            .catch(function(err){
                reject(err)
            })
        })
    }
}