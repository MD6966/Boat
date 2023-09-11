import React from 'react'
import Page from '../../../components/page/page'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'

const StyledRoot = styled(Box)
const AdminDashboard = () => {
  
  return (
    <Page
    title="Admin Dashboard"
    >
      <AppBar position='static'>
        <Toolbar>
        <Typography>
          Admin Dashboard
        </Typography>
        </Toolbar>
      </AppBar>
    </Page>
  )
}

export default AdminDashboard
