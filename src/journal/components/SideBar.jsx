import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const SideBar = ({ drawerWidth = 240 }) => {
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
                        <Typography variant="h6" noWrap component={'div'}>David Narino</Typography>
                    </Toolbar>
                    <Divider />
                    <List>
                        {
                            ['January', 'Febrary', 'March', 'April', 'June', 'July'].map(month => (
                                <ListItem key={month} >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot />
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={month}/>
                                            <ListItemText secondary={'Lorem ipsum color'}/>
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
            </Box>
        </>
    )
}
