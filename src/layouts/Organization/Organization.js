import React from 'react'
import Page from '../../components/page'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
const Organization = () => {
  return (
    <Page
    title="Organization"
    >
        <AppBar>
            <Toolbar>
                <Typography variant='h4'>    
                    Organization
                </Typography>
                <Button variant='contained' sx={{ml:'auto'}}>
                    Sign out
                </Button>
            </Toolbar>
        </AppBar>
    </Page>
  )
}

export default Organization
