// import { firestore } from './../../firebase/utils';
import { axiosClient } from './../../services/utils'

export const handleFetchResults = (matriceId) => {
    return new Promise((resolve, reject) => {
  
      const payload = {testMatrixId:"matrix-12b4vnqxiectv"}

      axiosClient.post('api/testResults',payload).then((response)=>{
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  }
  export const handleFetchResult = (resultID) => {
    return new Promise((resolve, reject) => {

      const payload = {testMatrixId:resultID.matriceId, testCaseName: resultID.testCaseName}

      axiosClient.post(`api/testResultsForTestCase`, payload).then((response)=>{
        console.log('** helper', response.data)
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  }  