import { firestore } from './../../firebase/utils';

export const handleFetchResults = () => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('results')
        .get()
        .then(snapshot => {
          const resultsArray = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          });
          resolve(resultsArray);
        })
        .catch(err => {
          reject(err);
        })
    })
  }
  export const handleFetchResult = (resultID) => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('results')
        .doc(resultID)
        .get()
        .then(snapshot => {
  
          if (snapshot.exists) {
            resolve(
              snapshot.data()
            );
            console.log(snapshot.data())
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }  