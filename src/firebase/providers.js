import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth";
import {FirebaseAuth} from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const {displayName, email, photoURL, uid} = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  } catch (error) {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
      errorCode
    }
  }
};

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const {uid, photoURL} = result.user;
    // Update the new user
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return {
      ok:true,
      displayName,
      email,
      uid,
      photoURL,
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
};

export const loginUserWithEmailPassword = async({email, password})=>{
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth,email,password);
    const {uid,displayName, photoURL} =result.user;
    return{
      ok:true,
      displayName,
      uid,
      photoURL
    }
  } catch (error) {
    return{
      ok:false,
      errorMessage:error.message,
    }
  }
};