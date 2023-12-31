import { useEffect } from "react";
//Libraries Imports
import { useDispatch, useSelector } from "react-redux";
// firebase imports
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
// App imports
import { logOut, login } from "../store/auth";
import { startLoadingNotes } from "../store/journal";


export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logOut());
      const { uid, displayName, email, photoURL } = user
      dispatch(login({ uid, displayName, email, photoURL }))
    });
  }, []);

  dispatch(startLoadingNotes());

  return {
    status
  }

};