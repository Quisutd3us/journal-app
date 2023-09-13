// import libraries
import { Navigate, Route, Routes } from "react-router-dom";
// import routes
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";
// App imports
import { useCheckAuth } from "../hooks";
import { CheckingAuth } from "../ui";


export const AppRouter = () => {
  
  // custom hook
  const { status } = useCheckAuth();

  if (status === 'checking') return <CheckingAuth />

  return (
    <>
      <Routes>

        {
          (status === 'authenticated')
            ? <Route path={'/*'} element={<JournalRoutes />} />
            : <Route path={'/auth/*'} element={<AuthRoutes />} />
        }
        <Route path="/*" element={<Navigate to={'/auth/login'} />} />


        {/* Route for Login and Register component*/}
        {/* <Route path={'/auth/*'} element={<AuthRoutes />} /> */}
        {/*Route for JournalAll */}
        {/* <Route path={'/*'} element={<JournalRoutes />} /> */}
      </Routes>
    </>
  );
};