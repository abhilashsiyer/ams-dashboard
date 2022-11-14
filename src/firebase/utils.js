import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export const handleUserProfile = async ({userAuth, additionalData}) => {
  if (!userAuth) return;

  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const appKey = generateUUID();
    // console.log(`appKey${appKey}`);

    try {
      await userRef.set({
        displayName,
        email,
        appKey,
      });
    } catch (err) {
      // console.log(err);
    }
  }

  // console.log(userRef, 1)
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}

function generateUUID() {
  var d = new Date().getTime();

  if (window.performance && typeof window.performance.now == "function") {
    d += performance.now();
  }

  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );

  return uuid;
}
