import { Box } from '@mui/material'
import { NavBar, SideBar } from '../components'

export const JournalLayout = ({ children }) => {
  const drawerWidth = 240;
  return (
    <>
      <Box sx={{ display: 'flex' }}>

        {/* navbar */}
        <NavBar drawerWidth={drawerWidth} />
        {/* Sidebar */}
        <SideBar drawerWidth={drawerWidth}/>
        <Box
          component={'main'}
          sx={{ flexGrow: 1, p: 3 }}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}
