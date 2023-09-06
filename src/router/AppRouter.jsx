import {Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth";
import {JournalRoutes} from "../journal";

export const AppRouter = () => {
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