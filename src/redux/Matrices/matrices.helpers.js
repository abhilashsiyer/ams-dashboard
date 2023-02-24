// import { firestore } from './../../firebase/utils';
import { axiosReportingClient } from '../../services/utils'

export const handleFetchMatrices = () => {
    return new Promise((resolve, reject) => {

      const payload = {"project":"projectSample"};

      axiosReportingClient.post('/testMatrices',payload).then((response)=>{
        console.log(response)
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  }