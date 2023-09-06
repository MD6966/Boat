import { AppBar, Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import AddIcon from '@mui/icons-material/Add';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Link } from 'react-router-dom';
const StyledRoot = styled(Box)(({theme})=> ({
    padding:theme.spacing(5),
    marginTop:theme.spacing(5),
    background:'#e2e2e2'
}))

const AdminLayout = () => {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
            <Typography>
                Admin Dashboard 
            </Typography>
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
                        to="/admin/new-boat"
                        >

                        <Avatar sx={{height:'30px', width:'30px'}}>
                            <AddIcon sx={{color:'#000'}}/>
                        </Avatar>
                        <ListItemText primary="Add new boat" sx={{ml:1.5}}/>
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
                        to="/admin/groups"
                        >

                        <Avatar sx={{height:'30px', width:'30px'}}>
                            <Diversity2Icon sx={{color:'#000'}}/>
                        </Avatar>
                        <ListItemText primary="Groups" sx={{ml:1.5}}/>
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
