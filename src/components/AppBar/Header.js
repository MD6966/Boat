import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, styled, 
  List, ListItem, ListItemIcon, ListItemText, ListItemButton, Button, Stack, } from '@mui/material'
import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
// import NavBarLinks from '../../layouts/Landing/NavBarLinks'
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import SailingIcon from '@mui/icons-material/Sailing';
import { Menu } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import clsx from 'clsx'
import { useDispatch } from 'react-redux';
import { adminLogOut } from '../../store/actions/adminActions';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
const StyledHeader = styled(Box)(({theme})=> ({
  background: theme.palette.primary.main,
  height:'30vh'
}))
const StyledInput = styled('input')(({theme})=> ({
    padding: theme.spacing(1),
    width:'250px'

}))
const useStyles = makeStyles((theme)=> ({
  selected : {
    background:'#1178bd',
    // marginLeft:'auto',
    '& .MuiListItemIcon-root, & .MuiTypography-root': {
      color: '#fff',
    },
  },
}))
const drawerWidth = 500;
const Header = () => {
  const classes = useStyles()
  const location = useLocation()
  const dispatch = useDispatch()
  const isPublicGroupsRoute = location.pathname === '/public-list';
  const [open, setOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  
  const handleListItemClick = (event, index, val) => {
    setSelectedIndex(index);
    setOpen(false)
  };
  const ListData = [
    {id:1, title:'Home', icon:<HomeIcon />  , to:'/user/home' },
    {id:2, title:'Public List', icon:<DirectionsBoatIcon />, to:'/user/public-list' },
    {id:3, title:'Public Groups', icon:<SailingIcon />, to:'/user/public-groups'},
    {id:4, title:'Boat By Atolls', icon:<SailingIcon />,},
    {id:5, title:'Boat By Operators', icon:<SailingIcon />,},
    {id:6, title:'Assigned Boats', icon:<AssignmentTurnedInIcon />, to:'/user/assigned-boats'},

  ]
  const handleLogOut = () => {
    dispatch(adminLogOut())
  }
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
          onClick={()=> setOpen(true)}
          >
          <Menu 
          sx={{color:'#fff'}}
          />
          </IconButton>
              <Typography fontWeight="bold" variant='h5' sx={{ml:1}}>
                {
                  location.pathname =='/user/public-list' ? 'Public Vessels' :
                  location.pathname =='/user/public-groups' ? 'Public Groups' :
                  location.pathname =='/user/home' ? 'Home' :
                  location.pathname == '/user/assigned-boats' ? 'Assigned Boats' : null
                }
              </Typography>
              <Box sx={{ml:'auto'}}>
          
            {/* <StyledInput
              placeholder="Search"/> */}
              <Button variant='contained' sx={{ml:2}}
              onClick={handleLogOut}
              >
                Sign Out 
              </Button>
              </Box>
        
        </Toolbar>
        </AppBar> 
        <Drawer open={open} variant='temporary' onClose={() => setOpen(!open)}
         sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        >
          <StyledHeader>
            <Typography
            sx={{textTransform:'uppercase', color:'#fff', mt:'20%', ml:2}}
            variant='h6'
            >
              Followme tracking service
            </Typography>
            <Typography sx={{color:'#fff', ml:2}}
            variant='h6'
            >
              7901617 | Info@followme.mv
            </Typography>
          </StyledHeader>
          <List>

          {ListData.map((val)=> {
            return(
                    <>
                    <ListItem key={val} disablePadding
                    className={clsx(classes.root, {
                      [classes.selected]: selectedIndex === val.id,
                    })}
                    component={Link}
                    to={val.to}
                    >
                      <ListItemButton
                       selected={selectedIndex === val.id}
                       onClick={(event) => handleListItemClick(event, val.id, val)}
                       
                      >
                        <ListItemIcon sx={{color:'#000', fontWeight:'bold'}}>
                          {val.icon}
                        </ListItemIcon>
                      <ListItemText primary={val.title} sx={{color:'#000',}} />
                      </ListItemButton>
                    </ListItem>
                    </>
                  )
                })}
                    </List>

                    <Box sx={{
                      display:'flex',
                      justifyContent:'center',
                      mt:3
                    }}>
                      <Stack>
                        
                      </Stack>
                      {/* <Button variant='contained'
                      component={Link}
                      to="/admin-login"
                      >
                          Admin Login
                      </Button> */}
                    </Box>
        </Drawer>
    </div>
  )
}

export default Header
