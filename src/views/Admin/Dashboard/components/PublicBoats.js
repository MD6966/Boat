import React from 'react'
import Page from '../../../../components/page/page'
import { useDispatch } from 'react-redux'
import { getPubliccAndPrivateBoats } from '../../../../store/actions/userActions'
import { Typography,Grid,Box,Card } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
const PublicBoats = () => {
  const dispatch = useDispatch()
  const [boatData, setBoatData] = React.useState([])
  const getPublicBoats = () => {
    dispatch(getPubliccAndPrivateBoats()).then((result) => {
      setBoatData(result.data.public_boat)
    }).catch((err) => {
      console.log(err)
    });
  }
  React.useEffect(()=>{
    getPublicBoats()
  },[])
  return (
    <Page
    title="Public Boats"
    >
      <Typography variant='h4' sx={{mb:2}}>
      All public boats
      </Typography>
      <Grid
            container
            spacing={2}
            >
                {
                    boatData.map((val, ind)=> {
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
                                    <Typography sx={{ml:1.5,}}>
                                        <PlaceIcon sx={{verticalAlign:'bottom', color:'red'}}/> 
                                        <span style={{marginLeft:1, color:'#38393a'}}>
                                            {val.location}
                                            </span>
                                    </Typography>
                            </Box>
                            </Box>
                           
                            <Box sx={{display:'flex',alignItems:'center', mr:1}}>
                                <Box sx={{border:'1px solid rgba(0,0,0,0.5)', p:0.5}}>
                            <Typography >
                                         {val.type}
                                    </Typography>
                                </Box>
                                <Box sx={{border:'1px solid rgba(0,0,0,0.5)', p:0.5, ml:1}}>
                                        <CallIcon sx={{fontSize:'1.05rem', mb:-0.5, mr:0.5}} />
                            <Typography sx={{display:'inline'}} >
                                         {val.contact}
                                    </Typography>
                                </Box>
                               </Box>
                        </Card>
                            </Grid>
                        )
                    })
                }
              

            </Grid>
    </Page>
  )
}

export default PublicBoats
