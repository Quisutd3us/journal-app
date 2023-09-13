// Library imports
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// MUI imports
import { LogoutRounded, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
// Firebase Imports
import { logOutUserWithEmailPassword } from '../../store/auth/thunks';


export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const signOutUser = () => {
    dispatch(logOutUserWithEmailPassword())
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}>
      <Toolbar>
        <IconButton
          color='inherit'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography>JournalApp</Typography>
          <IconButton
            onClick={signOutUser}
            color='error'>
            <LogoutRounded />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )

};

NavBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
}
