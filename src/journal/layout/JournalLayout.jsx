// Library imports
import  PropTypes  from 'prop-types';
// MUI imports
import { Box } from '@mui/material';
// App Imports
import { NavBar, SideBar } from '../components';

export const JournalLayout = ({ children }) => {
  const drawerWidth = 240;
  return (
    <>
      <Box sx={{ display: 'flex' }}>

        {/* navbar */}
        <NavBar drawerWidth={drawerWidth} />
        {/* Sidebar */}
        <SideBar drawerWidth={drawerWidth} />
        <Box
          component={'main'}
          sx={{ flexGrow: 1, p: 3, mt: 5 }}
        >
          {children}
        </Box>
      </Box>
    </>
  )
};

JournalLayout.propTypes = {
  children: PropTypes.array.isRequired
}
