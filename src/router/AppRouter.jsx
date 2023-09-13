import { useEffect } from "react";
// import libraries
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
// import routes
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";
// firebase imports
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
// App imports
import { CheckingAuth } from "../ui";
import { logOut, login } from "../store/auth";

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log(user)
      if (!user) return dispatch(logOut());
      const { uid, displayName, email, photoURL } = user
      dispatch(login({ uid, displayName, email, photoURL }))
    });
  }, []);


  if (status === 'checking') return <CheckingAuth />


  return (


    <>
      <Routes>

        {
          (status==='authenticated')
          ? <Route path={'/*'} element={<JournalRoutes />} />
          : <Route path={'/auth/*'} element={<AuthRoutes />} />
        }
        <Route path="/*" element={<Navigate to={'/auth/login'}/>}/>


        {/* Route for Login and Register component*/}
        {/* <Route path={'/auth/*'} element={<AuthRoutes />} /> */}
        {/*Route for JournalAll */}
        {/* <Route path={'/*'} element={<JournalRoutes />} /> */}
      </Routes>
    </>
  );
};