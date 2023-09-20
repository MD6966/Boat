import React from 'react'
import Page from '../../../components/page/page'
import { Box,Typography,Grid, Card, styled, Skeleton } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch } from 'react-redux';
import { getPublicOrg } from '../../../store/actions/userActions';
const StyledRoot = styled(Box)(({theme})=> ({
  minHeight:'100vh',
  padding: theme.spacing(2)
}))
const PublicGroups = () => {
  const data = [
    { id: 1, name: 'AAGALAA QUEEN', location: 'S. Hithadhoo', type: 'Supply Boat', phone: '9312019' },
    { id: 2, name: 'Ocean Voyager', location: 'Male', type: 'Fishing Boat', phone: '9876543' },
    { id: 3, name: 'Island Explorer', location: 'S. Gan', type: 'Tourist Boat', phone: '7890123' },
    { id: 4, name: 'Coral Diver', location: 'N. Atoll', type: 'Diving Boat', phone: '5555555' },
    { id: 5, name: 'Sunrise Star', location: 'S. Hulhule', type: 'Cargo Ship', phone: '4444444' },
    { id: 6, name: 'Wave Rider', location: 'B. Eydhafushi', type: 'Ferry', phone: '7777777' },
    { id: 7, name: 'Sea Breeze', location: 'L. Fonadhoo', type: 'Sailing Boat', phone: '6666666' },
    { id: 8, name: 'Tropical Paradise', location: 'S. Maradhoo', type: 'Cruise Ship', phone: '1234567' },
    { id: 9, name: 'Island Hopper', location: 'Fuvahmulah', type: 'Transport Boat', phone: '2345678' },
    { id: 11, name: 'Golden Sands', location: 'K. Kaashidhoo', type: 'Tourist Boat', phone: '9876543' },
    { id: 12, name: 'Blue Horizon', location: 'S. Feydhoo', type: 'Diving Boat', phone: '7654321' },
    { id: 13, name: 'Island Express', location: 'R. Meedhoo', type: 'Cargo Ship', phone: '5432109' },
    { id: 14, name: 'Sunset Serenity', location: 'N. Velidhoo', type: 'Ferry', phone: '6789012' },
    { id: 15, name: 'Coastal Cruiser', location: 'M. Mulaku', type: 'Cruise Ship', phone: '9999999' },
  
]
  const [orgData, setOrgData] = React.useState([])
  const dispatch = useDispatch()
  const [loading , setLoading] = React.useState(false)
  const getOrgData = () => {
    setLoading(true)
    dispatch(getPublicOrg()).then((result) => {
      // console.log(result, "Result++++++++++++++++")
      setOrgData(result.data)
      setLoading(false)
    }).catch((err) => {
      
    });
  }
  // console.log(loading, "This is Loading")
  React.useEffect(()=> {
    getOrgData()
  },[])
  return (
    <Page
    title="Public List"
    >
        <StyledRoot>
        <Grid
            container
            spacing={2}
            >
                {
                    orgData.map((val, ind)=> {
                        return(
                            <Grid
                            item
                            xs={12}
                            md={6}
                            lg={6}>
                    <Card sx={{background:'#f7f7f7', display:'flex', justifyContent:"space-between"}}>
                            <Box sx={{display:'flex',alignItems:'center',}}>
                            <Box
                            component="img"
                            src='/assets/images/boat.webp'
                            sx={{height:'80px'}}
                            >
                            </Box>
                            <Box>
            
                            <Typography sx={{ml:2}} variant='h6' fontWeight="bold">
                                       {val.name}
                                    </Typography>
                                    {/* <Typography sx={{ml:1.5,}}>
                                        <PlaceIcon sx={{verticalAlign:'bottom', color:'red'}}/> 
                                        <span style={{marginLeft:1, color:'#38393a'}}>
                                            {val.location}
                                            </span>
                                    </Typography> */}
                            </Box>
                            </Box>
                           
                            <Box sx={{display:'flex',alignItems:'center', mr:1}}>
                                <Box sx={{border:'1px solid rgba(0,0,0,0.5)', p:0.5}}>
                            <Typography >
                                         {val.visibility}
                                    </Typography>
                                </Box>
                                <Box sx={{border:'1px solid rgba(0,0,0,0.5)', p:0.5, ml:1}}>
                            <Typography sx={{display:'inline'}} >
                                         {val.organization_boats_count} Devices
                                    </Typography>
                                </Box>
                               </Box>
                        </Card>
                            </Grid>
                        )
                    })
                }
            

            </Grid>
              {
                loading && 
                <Grid container spacing={2}>
               <Grid item
               xs={12}
               md={6}
               lg={6}
               >
           <Skeleton variant="rectangular" width={610} height={120}/>
               </Grid>
               <Grid item
               xs={12}
               md={6}
               lg={6}
               >
           <Skeleton variant="rectangular" width={610} height={120}/>
               </Grid>
               <Grid item
               xs={12}
               md={6}
               lg={6}
               >
           <Skeleton variant="rectangular" width={610} height={120}/>
               </Grid>
               <Grid item
               xs={12}
               md={6}
               lg={6}
               >
           <Skeleton variant="rectangular" width={610} height={120}/>
               </Grid>
           </Grid>
              }
             
            
        </StyledRoot>
    </Page>
  )
}

export default PublicGroups
