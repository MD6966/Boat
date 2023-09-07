import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, styled, 
  List, ListItem, ListItemIcon, ListItemText, ListItemButton, Button, TextField } from '@mui/material'
import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import NavBarLinks from '../../layouts/Landing/NavBarLinks'
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import SailingIcon from '@mui/icons-material/Sailing';
import { Menu } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import clsx from 'clsx'
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
    '& .MuiListItemIcon-root, & .MuiTypography-root': {
      color: '#fff',
    },
  },
}))
const drawerWidth = 500;
const Header = () => {
  const classes = useStyles()
  const location = useLocation()
  const isPublicGroupsRoute = location.pathname === '/public-list';
  const [open, setOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  
  const handleListItemClick = (event, index, val) => {
    setSelectedIndex(index);
    setOpen(false)
  };
  const ListData = [
    {id:1, title:'Home', icon:<HomeIcon />  , to:'/home' },
    {id:2, title:'Public List', icon:<DirectionsBoatIcon />, to:'/public-list' },
    {id:3, title:'Public Groups', icon:<SailingIcon />, to:'/public-groups'},
    {id:4, title:'Boat By Atolls', icon:<SailingIcon />,},
    {id:5, title:'Boat By Operators', icon:<SailingIcon />,},
  ]
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
                  location.pathname =='/public-list' ? 'Public Vessels' :
                  location.pathname =='/public-groups' ? 'Public Groups' :
                  location.pathname =='/home' ? 'Home' : null
                }
              </Typography>
              <Box sx={{ml:'auto'}}>
              {isSearchVisible && (
            <StyledInput
              placeholder="Search"
              // onKeyDown={(e) => {
              //   if (e.key === 'Enter') {
              //     handleSearch();
              //   }
              // }}
            />
          )}
              </Box>
            <Box style={{marginLeft:'auto'}}>
            {isPublicGroupsRoute && (
              <IconButton sx={{ color: '#fff' }} onClick={toggleSearch}>
                <SearchIcon />
                <Typography>Search</Typography>
              </IconButton>
            )}
            {/* <NavBarLinks  />  */}
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
                      <Button variant='contained'
                      component={Link}
                      to="/admin-login"
                      >
                          Admin Login
                      </Button>
                    </Box>
        </Drawer>
    </div>
  )
}

export default Header
