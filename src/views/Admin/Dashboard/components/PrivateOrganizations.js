import React from 'react'
import Page from '../../../../components/page'
import { useDispatch } from 'react-redux'
import { getPubliccAndPrivateOrg } from '../../../../store/actions/userActions'
import { Typography,Grid,Box,Card } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner'
const PrivateOrganizations = () => {
  const [orgData, setOrgData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const dispatch = useDispatch()
  const getPrivateOrg = () => {
    setLoading(true)
    dispatch(getPubliccAndPrivateOrg()).then((result) => {
      setOrgData(result.data.private_organization)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
    });
  }
  React.useEffect(() => {
    getPrivateOrg()
  },[])
  const posData = () => {

  }
  return (
    <Page
    title="Private Organizations"
    >
       <Typography variant='h4' sx={{mb:2}}>
        Private Organizations
      </Typography>
        <Grid container spacing={3}>
                {
                    orgData.map((val, ind)=> {
                        return(
                <Grid
                item
                xs={12}
                md={6}
                lg={6}
                key={ind}
                >
                    <Card sx={{background:'#e2e2e2', display:'flex', justifyContent:"space-between",
                    cursor:'pointer',
                    textDecoration:'none'    
                }}
                onClick ={()=>posData(val)}
                
                    
                    >
                <Box sx={{display:'flex',alignItems:'center',}}>
                <Box
                component="img"
                src='/assets/images/boat.webp'
                sx={{height:'80px'}}
                >
                </Box>
                <Typography sx={{ml:2}} variant='h6' fontWeight="bold" >
                            {val.name}
                        </Typography>
                </Box>
               
                <Box sx={{display:'flex',alignItems:'center', mr:1}}>
                    <Box sx={{border:'1px solid rgba(0,0,0,0.5)', p:0.5}}>
                <Typography >
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
              <Box sx={{display:'flex', justifyContent:'center', mt:5}}>
              <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={loading}/>
              </Box>
            }
    </Page>
  )
}

export default PrivateOrganizations
