// import { firestore } from './../../firebase/utils';
import { axiosClient } from './../../services/utils'

export const handleFetchResults = () => {
    return new Promise((resolve, reject) => {

      axiosClient.get('api/testResults').then((response)=>{
        resolve(response.data)
      }).catch(err => {
        reject(err);
      })

      // firestore
      //   .collection('results')
      //   .get()
      //   .then(snapshot => {
      //     const resultsArray = snapshot.docs.map(doc => {
      //       return {
      //         ...doc.data(),
      //         documentID: doc.id
      //       }
      //     });
      //     resolve(resultsArray);
      //   })
      //   .catch(err => {
      //     reject(err);
      //   })
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