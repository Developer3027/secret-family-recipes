import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBL1jPei4ZgxtQLgV-NxCAmeGkUry3UyL8",
    authDomain: "family-recipe-ad03a.firebaseapp.com",
    databaseURL: "https://family-recipe-ad03a.firebaseio.com",
    projectId: "family-recipe-ad03a",
    storageBucket: "family-recipe-ad03a.appspot.com",
    messagingSenderId: "687071178346",
    appId: "1:687071178346:web:b54a74cdb397243a9d6413",
    measurementId: "G-G8DXDHK5M0"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if ( !userAuth ) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.error('error creating user', error.message);
        }
    } 
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;