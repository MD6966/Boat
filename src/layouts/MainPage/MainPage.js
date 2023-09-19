import React from 'react'
import Page from '../../components/page'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const MainPage = () => {
  return (
    <Page
    title="Boat"
    >
        <AppBar>
            <Toolbar>
                <Typography>
                Main page
                </Typography>
                <Box sx={{ml:'auto'}}>
                <Button variant='contained'
                component={Link}
                to="login"
                >
                    Login
                </Button>
                </Box>
            </Toolbar>
        </AppBar>
    </Page>
  )
}

export default MainPage
