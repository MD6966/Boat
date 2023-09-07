import React from 'react'
import Page from '../../../../components/page/page'
import { Box, Button, TextField, Typography, styled } from '@mui/material'
const StyledRoot = styled(Box)(({theme})=> ({
    padding:theme.spacing(4),
}))
const AddNewBoat = () => {
  return (
    <Page
    title="Add New Boat"
    >
        <StyledRoot>
            <Box>
            <Typography variant='h4' fontWeight="bold" textAlign="center">
                Add new boat
            </Typography>
            <Box sx={{p:4}}>
                <TextField fullWidth label="Boat Name"/>
                <TextField fullWidth label="Boat Location" sx={{mt:2}}/>
                <TextField fullWidth label="Boat Type" sx={{mt:2}} placeholder='eg: supply boat / speed boat'/>
                <TextField fullWidth label="Boat contact" sx={{mt:2}}/>
                <Box
                sx={{
                    display:'flex',
                    justifyContent:'flex-end',
                    mt:2
                }}
                >
                <Button variant='contained'
                sx={{width:'100px', height:'40px'}}
                >
                    Add
                </Button>
                </Box>

            </Box>
            </Box>
        </StyledRoot>
    </Page>
  )
}

export default AddNewBoat
