// import { firestore } from './../../firebase/utils';
import {axiosReportingClient } from './../../services/utils'

export const handleFetchResults = ({matriceId, appId}) => {
    return new Promise((resolve, reject) => {

      console.log('handleFetchResults-matriceId',matriceId);
      console.log('handleFetchResults-appId',appId);
      //"matrix-12b4vnqxiectv"
      
      const payload = {testMatrixId:matriceId, historyId:appId}

      axiosReportingClient.post('getResultsForAllTestCases',payload).then((response)=>{
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  }
  export const handleFetchResult = (fetchResult) => {
    return new Promise((resolve, reject) => {
      console.log('fetchResult',fetchResult)
      const payload = {
        testMatrixId:fetchResult.matriceId, 
        testCaseName: fetchResult.testCaseName, 
        historyId:fetchResult.appId
      }

      axiosReportingClient.post(`getResultsForTestCase`, payload).then((response)=>{
        console.log('** helper', response.data)
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })
    })
  }  