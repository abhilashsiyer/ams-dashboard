// import { firestore } from './../../firebase/utils';
import { axiosClient } from './../../services/utils'

export const handleFetchResults = (matriceId) => {
    return new Promise((resolve, reject) => {
  
      console.log('handleFetchResults',handleFetchResults);
      //"matrix-12b4vnqxiectv"
      
      const payload = {testMatrixId:matriceId}

      axiosClient.post('api/testResults',payload).then((response)=>{
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  }
  export const handleFetchResult = (fetchResult) => {
    return new Promise((resolve, reject) => {
      console.log('fetchResult',fetchResult)
      const payload = {testMatrixId:fetchResult.matriceId, testCaseName: fetchResult.testCaseName}

      axiosClient.post(`api/testResultsForTestCase`, payload).then((response)=>{
        console.log('** helper', response.data)
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  }  