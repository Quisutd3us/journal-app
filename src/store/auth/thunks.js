import {
  loginUserWithEmailPassword,
  registerUserWithEmailPassword,
  signInWithGoogle, 
  signOutUserWithEmailPassword
} from '../../firebase/providers';
import { clearNotesLogOut } from '../journal/journalSlice';
import { checkingCredentials, logOut, login } from './authSlice';


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

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingAuthentication());
    const result = await loginUserWithEmailPassword({ email, password });
    result.email = email
    if (!result.ok) return dispatch(logOut(result));
    dispatch(login(result));
  };
};

export const logOutUserWithEmailPassword = () => {
  return async (dispatch) => {
    const result = {
      errorMessage: null
    }
    await signOutUserWithEmailPassword();
    dispatch(clearNotesLogOut());
    dispatch(logOut(result));
  };
};

export const startUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailPassword({ email, password, displayName });
    if (!result.ok) return dispatch(logOut(result));
    dispatch(login(result));
  };
};