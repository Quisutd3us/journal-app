import { useSelector } from "react-redux";
// Libraries Imports
import { PropTypes } from "prop-types";
// MUI imports
import { Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { SideBarItem } from "./";

export const SideBar = ({ drawerWidth = 240 }) => {

  const { displayName } = useSelector(state => state.auth);
  const { notes } = useSelector(state => state.journal);


  return (
    <>
      <Box
        component='nav'
        sx={{
          width: {
            sm: drawerWidth
          },
          flexShrink: { sm: 0 }
        }}
      >
        <Drawer
          variant="permanent"
          open={true}
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component={'div'}
            >{displayName}</Typography>
          </Toolbar>
          <Divider />
          <List>
            {
              notes.map((note) => (
                // rendering notes
                <SideBarItem
                  key={note.id}
                  {...note}
                  note={note}
                />
              ))
            }
          </List>
        </Drawer>
      </Box>
    </>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
}