import {registerUserWithEmailPassword, signInWithGoogle} from "../../firebase/providers";
import {checkingCredentials, logOut, login} from "./authSlice";


export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logOut(result));
    dispatch(login(result));
  };
};

export const startUserWithEmailPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailPassword({email, password, displayName});
    console.log(result)
    if (!result.ok) return dispatch(logOut(result));
    dispatch(login(result));
  };
};