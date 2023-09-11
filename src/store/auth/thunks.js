
import { signInWithGoogle } from "../../firebase/providers";
import {  checkingCredentials, logOut, login } from "./authSlice";


export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if(!result.ok ) return dispatch(logOut(result));
    dispatch(login(result));
  };
};