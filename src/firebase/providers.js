import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
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
    return {
      ok:true,
      displayName:displayName,
      email,
      uid,
      photoURL,

    }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}