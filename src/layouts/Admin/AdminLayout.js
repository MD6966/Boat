import { AppBar, Avatar, Box, Button, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import AddIcon from '@mui/icons-material/Add';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adminLogOut } from '../../store/actions/adminActions';
import SailingIcon from '@mui/icons-material/Sailing';
const StyledRoot = styled(Box)(({theme})=> ({
    padding:theme.spacing(5),
    marginTop:theme.spacing(5),
    background:'#e2e2e2'
}))

const AdminLayout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignOut = () => {
        dispatch(adminLogOut())
        navigate('/', {replace: true})

    }
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
            <Typography>
                Admin Dashboard 
            </Typography>
            <Box sx={{ml:'auto'}}>
                <Button variant='contained' onClick={handleSignOut}>
                    Sign out
                </Button>
            </Box>
        </Toolbar>
        </AppBar> 
        <StyledRoot>
            <Stack direction="row" spacing={3}>
            <Box flex={1}
            sx={{background:'#fff', 
            height:'80vh', 
            position:'sticky', 
            borderRadius:2}}
            >
                <List>
                    <ListItem>
                        <ListItemButton 
                        component={Link}
                        to="/admin/manage-boats"
                        >

                        <Avatar sx={{height:'30px', width:'30px'}}>
                            <SailingIcon sx={{color:'#000'}}/>
                        </Avatar>
                        <ListItemText primary="Manage Boats" sx={{ml:1.5}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton 
                        component={Link}
                        to="/admin/organizations"
                        >

                        <Avatar sx={{height:'30px', width:'30px'}}>
                            <CorporateFareIcon sx={{color:'#000'}}/>
                        </Avatar>
                        <ListItemText primary="Organizations" sx={{ml:1.5}}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton 
                        component={Link}
                        to="/admin/islands"
                        >

                        <Avatar sx={{height:'30px', width:'30px'}}>
                            <Diversity2Icon sx={{color:'#000'}}/>
                        </Avatar>
                        <ListItemText primary="Islands" sx={{ml:1.5}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box flex={3}
            sx={{background:'#fff', height:'80vh', overflowY:'scroll'}}
            >
              <Outlet />
            </Box>
            </Stack>
        </StyledRoot>
    </div>
  )
}

export default AdminLayout
