import React from 'react'
import { Grid,Box,Typography, Card } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch, useSelector } from 'react-redux';
import { getOrgPubAndPrvBoats } from '../../../store/actions/userActions';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router';

const OrgPrivateBoats = () => {
    const id = useSelector((state)=>state.admin.user.organization_id)
    const dispatch = useDispatch()
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const getPrivateBoats = () =>  {
        setLoading(true)
        dispatch(getOrgPubAndPrvBoats(id)).then((result) => {
            setData(result.data.private_boats)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        });
    }
    React.useEffect(()=> {
        getPrivateBoats()
    },[])
    const navigate = useNavigate()
    const posData = (val) => {
        navigate('/organization/share-boat', {state:val})
        // console.log(val.id)
    }
  return (
    <div>
       <Grid
            container
            spacing={2}
            >
                {  
                    data.map((val, ind)=> {
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
                (data.length < 1 && !loading) &&
            <Typography sx={{textAlign:'center', mt:5}}>
                No data found
            </Typography>
            }
    </div>
  )
}

export default OrgPrivateBoats
