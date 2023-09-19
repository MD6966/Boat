import React from 'react'
import Page from '../../components/page'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { adminLogOut } from '../../store/actions/adminActions'
const Organization = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogOut = () => {
        dispatch(adminLogOut())
        navigate('/', {replace: true})
    }
  return (
    <Page
    title="Organization"
    >
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h4'>    
                    Organization
                </Typography>
                <Button variant='contained' sx={{ml:'auto'}}
                onClick={handleLogOut}
                >
                    Sign out
                </Button>
            </Toolbar>
        </AppBar>
        <Outlet />
    </Page>
  )
}

export default Organization
