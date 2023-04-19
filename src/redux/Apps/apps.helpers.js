// import { firestore } from './../../firebase/utils';
import { axiosReportingClient } from '../../services/utils'

export const handleFetchApps = (projectId) => {
    return new Promise((resolve, reject) => {
      
      console.log(`projectId`, projectId)
      const payload = {"project":projectId};

      axiosReportingClient.post('/getAppsInProject',payload).then((response)=>{
        console.log(response)
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  }