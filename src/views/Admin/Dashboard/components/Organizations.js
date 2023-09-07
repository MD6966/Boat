import React from 'react'
import Page from '../../../../components/page/page'
import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField, Typography, styled } from '@mui/material'
const StyledRoot = styled(Box)(({theme})=> ({
    padding:theme.spacing(4),
}))
const data = [
    { id: 1, name: 'Baa Atoll Ferries', devices: '15', },
    { id: 2, name: 'Ferry Service', devices: '20', },
    { id: 3, name: 'Ocean Cruisers', devices: '12', },
    { id: 4, name: 'Island Hoppers', devices: '18', },
    { id: 5, name: 'Sea Explorers', devices: '25', },
    { id: 6, name: 'Wave Riders', devices: '10', },
    { id: 7, name: 'Tropical Sailors', devices: '22', },
    { id: 8, name: 'Aqua Adventures', devices: '17', },
]
const Organizations = () => {
    const [open, setOpen] = React.useState(false)
  return (
    <Page
    title="Organizations"
    >
        <StyledRoot>
            <Button variant='contained' sx={{mb:2}}
            onClick={()=> setOpen(true)}
            >
                Add New Organization 
            </Button>
            <Divider sx={{mb:2}} />
            <Grid container spacing={3}>
                {
                    data.map((val, ind)=> {
                        return(
                <Grid
                item
                xs={12}
                md={6}
                lg={6}
                key={ind}
                >
                    <Card sx={{background:'#e2e2e2', display:'flex', justifyContent:"space-between"}}>
                <Box sx={{display:'flex',alignItems:'center',}}>
                <Box
                component="img"
                src='/assets/images/boat.webp'
                sx={{height:'80px'}}
                >
                </Box>
                <Typography sx={{ml:2}} variant='h6' fontWeight="bold">
                            {val.name}
                        </Typography>
                </Box>
               
                <Box sx={{display:'flex',alignItems:'center', mr:1}}>
                    <Box sx={{border:'1px solid rgba(0,0,0,0.5)', p:0.5}}>
                <Typography >
                             {val.devices} Devices
                        </Typography>
                    </Box>
                   </Box>
            </Card>
                </Grid>
                        )
                    })
                }
            </Grid>
            <Dialog open={open} fullWidth onClose={() => setOpen(false)}>
                <DialogTitle>
                    Add New Organization
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <TextField fullWidth label="Organization Name" sx={{mb:2}}/>
                    <TextField fullWidth label="Devices" placeholder='Enter Number of devices'/> 
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button variant='outlined'>
                        Cancel
                    </Button>
                    <Button variant='contained'>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </StyledRoot>
    </Page>
  )
}

export default Organizations
