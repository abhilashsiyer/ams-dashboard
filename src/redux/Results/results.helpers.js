// import { firestore } from './../../firebase/utils';
import { axiosClient } from './../../services/utils'

export const handleFetchResults = (matriceId) => {
    return new Promise((resolve, reject) => {
      console.log("matriceId",matriceId)

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

      axiosClient.get(`api/testResults?testCaseName=${resultID}`).then((response)=>{
        console.log('** helper', response.data)
        const testCase = response.data[0]
        console.log('** testCase', response.data)
        resolve(testCase)
      }).catch(err => {
        reject(err);
      })

      // firestore
      //   .collection('results')
      //   .doc(resultID)
      //   .get()
      //   .then(snapshot => {
  
      //     if (snapshot.exists) {
      //       resolve(
      //         snapshot.data()
      //       );
      //       console.log(snapshot.data())
      //     }
      //   })
      //   .catch(err => {
      //     reject(err);
      //   })
    })
  }  