// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {
Firestore,
doc ,// retrieve documents inside firebase database
getDoc,getFirestore,//getting  doc data
setDoc//setting doc data
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4sA756BK-8wj3E_cHsyaL0v5GIKNufY0",
  authDomain: "clothing-app-c2313.firebaseapp.com",
  projectId: "clothing-app-c2313",
  storageBucket: "clothing-app-c2313.appspot.com",
  messagingSenderId: "11153926387",
  appId: "1:11153926387:web:c422330e7c55caff39ef86"
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account',
})

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);
export const db=getFirestore();
export const createUserDocFromAuth=async(userAuth)=>{
    
    const userDocRef=doc(db,'user',userAuth.uid);
    // userDocRef-->even if first time 'user' will not be there it will create a refrence to some unique doc,

    const userSnapshot= await getDoc(userDocRef);
    //getDoc mean get Doc Data
    const {email,displayName}=userAuth;
    const timeNow=new Date;

if(!userSnapshot.exists()){
    try{
await setDoc(userDocRef,{
email,
displayName,
timeNow
})
    }catch(err){
        console.log(err.message);
    }
}
return userDocRef;
}