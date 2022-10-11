import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBK8ivYtYV49YHmt1Cvp1jyzEwngId9lc4",
    authDomain: "ecommerce-e2e84.firebaseapp.com",
    projectId: "ecommerce-e2e84",
    storageBucket: "ecommerce-e2e84.appspot.com",
    messagingSenderId: "779286133819",
    appId: "1:779286133819:web:e015fee2dd3862909bb01e",
    measurementId: "G-6SYVPNK8NP"
};

// Initiallize Firebase
firebase.initializeApp(firebaseConfig);

// Store user in database
export const createUserProfileDocument = async (userAuth, additionnalData) => {
    // If There is no user object data
    if(!userAuth) return;

    // Fetch this user in DB
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    // If user doesn't exist in DB
    if(!snapshot.exists) {
        // get name & email from Google account
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            // Create new user with these data
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionnalData
            })
        } catch (error) {
            console.log('error creaing user', error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch =  firestore.batch();

    objectsToAdd.forEach(object => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, object);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

// Use Firebase authentication & firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Add sign-in with Google account
const provider = new firebase.auth.GoogleAuthProvider();

// Propmt user to choose a Google account when signing-in with Google
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;