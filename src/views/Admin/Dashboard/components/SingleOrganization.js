import React from 'react'
import Page from '../../../../components/page/page'
import { Box, Button, Dialog, DialogContent, DialogTitle, 
    Divider, Typography, styled, TextField, DialogActions } from '@mui/material'

const StyledRoot = styled(Box)(({theme})=> ({
    padding: theme.spacing(5)
}))
const SingleOrganization = () => {
    const [open, setOpen] = React.useState(false)
  return (
    <Page
    title="Organization"
    >
        <StyledRoot>
            <Box sx={{display:'flex', justifyContent:"space-around"}}>
                <Typography variant='h4' textAlign="center" fontWeight="bold">
                    Single Organization Data 
                </Typography>
                <Button variant='contained' onClick={() => setOpen(true)}>
                     Add a new device
                </Button>
            </Box>
                <Dialog open={open} fullWidth onClose={()=> setOpen(false)}>
                    <DialogTitle>
                        Add device
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                    <TextField fullWidth label="Boat Name"/>
                     <TextField fullWidth label="Boat Location" sx={{mt:2}}/>
                     <TextField fullWidth label="Boat Type" sx={{mt:2}} placeholder='eg: supply boat / speed boat'/>
                     <TextField fullWidth label="Boat contact" sx={{mt:2}}/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained'>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
        </StyledRoot>
    </Page>
  )
}

export default SingleOrganization
