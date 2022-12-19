// import { firestore } from './../../firebase/utils';
import { axiosClient } from '../../services/utils'

export const handleFetchMatrices = () => {
    return new Promise((resolve, reject) => {
      axiosClient.get('api/testMatrices').then((response)=>{
        console.log(response)
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  }