// import libraries
import { useSelector } from "react-redux";
import {Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth";
import {JournalRoutes} from "../journal";
import { CheckingAuth } from "../ui/components/CheckingAuth";

export const AppRouter = () => {
  const {status} =useSelector(state =>state.auth);
  if(status === 'checking') return <CheckingAuth/>
  return (
      <>
        <Routes>
          {/* Route for Login and Register component*/}
          <Route path={'/auth/*'} element={<AuthRoutes/>}/>
          {/*Route for JournalAll */}
          <Route path={'/*'} element={<JournalRoutes/>}/>
        </Routes>
      </>
  );
};