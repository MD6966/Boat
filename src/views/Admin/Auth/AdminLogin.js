import React from 'react'
import {AppBar, Toolbar, styled, 
    Typography, Stack } from '@mui/material'
import AdminLoginForm from './AdminLoginForm'
import Page from '../../../components/page/page'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
const StyledRoot = styled('div')(({theme})=> ({
    // backgroundImage: Gradients.Custom,
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    
  }))
  // const CenteredBox = styled(Box)(({theme})=> ({
  //   display:'flex',
  //   justifyContent:'center',
  //   alignItems:'center'
  // }))
  const StyledAppBar = styled(AppBar)(({theme})=> ({
    background:theme.palette.primary.main,
    position:'fixed',
  
  }))
  const StyledToolbar = styled(Toolbar)(({theme})=> ({
    display:'flex',
    justifyContent:'space-between'
   }))
const AdminLogin = () => {
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state)=> state.admin.isAuthenticated)
  React.useLayoutEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/manage-boats', {replace:true});
    }
  }, [isAuthenticated]);
  return (
    <Page>
    <StyledAppBar>
   <StyledToolbar>
    <Typography>
    Admin Login
     </Typography> 
   </StyledToolbar>
 </StyledAppBar>
 <StyledRoot>
     <Stack>
         
         <Typography variant='h4' sx={{textAlign:'center'}}> Admin Login </Typography>
         <Typography sx={{textAlign:'center', mb:'1rem'}}> Sign in on the internal platform </Typography>
                 <AdminLoginForm />
           
     </Stack>
 </StyledRoot>
 </Page>
  )
}

export default AdminLogin
