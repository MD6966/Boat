import React from 'react'
import { useDispatch } from 'react-redux'
import { getOrgPubAndPrvBoats } from '../../../../../store/actions/userActions'
import { Grid,Typography,Box,Card } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import { RotatingLines } from 'react-loader-spinner';
import ShareIcon from '@mui/icons-material/Share';
import { Link, useNavigate } from 'react-router-dom';
const OrgPrvBoats = (props) => {
    const {state} = props
    const [loading, setLoading] = React.useState(false)
    const [boatData, setBoatData]=React.useState([])
    const dispatch = useDispatch()
    const getOrgPrvBoats = () => {
        setLoading(true)
        dispatch(getOrgPubAndPrvBoats(state.id)).then((result) => {
            setBoatData(result.data.private_boats)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        });
    }
    React.useEffect(()=> {
        getOrgPrvBoats()
    },[])
    const navigate = useNavigate()
    const posData = (val) => {
        navigate('/admin/share-boat', {state:val})
        // console.log(val.id)
    }
  return (
    <div>
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
                            md={12}
                            lg={12}>
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
                            <Box>
                            <Box 
                            onClick={()=>posData(val)}
                            sx={{border:'1px solid rgba(0,0,0,0.5)', p:0.5, ml:1, cursor:'pointer',
                            color:'#000',
                            textDecoration:'none',
                            '&:hover': {
                                background:'#c6c6c6'
                            }
                        }}>
                                        <ShareIcon sx={{fontSize:'1.05rem', mb:-0.5, mr:0.5}} />
                            <Typography sx={{display:'inline'}} >
                                         Share
                                    </Typography>
                                </Box>
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
              <Box sx={{display:'flex', justifyContent:'center', mt:5}}>
              <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={loading}/>
              </Box>
            }
            {
                (boatData.length < 1 && !loading) &&
            <Typography sx={{textAlign:'center', mt:5}}>
                No data found
            </Typography>
            }
    </div>
  )
}

export default OrgPrvBoats
