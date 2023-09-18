import React from 'react'
import Page from '../../../../components/page'
import { useDispatch } from 'react-redux'
import { Typography,Card,Box,Grid } from '@mui/material'
import { getPubliccAndPrivateOrg } from '../../../../store/actions/userActions'
const PublicOrganizations = () => {
  const [orgData, setOrgData]=React.useState([])
  const dispatch = useDispatch()
  const getPublicOrg = () => {
    dispatch(getPubliccAndPrivateOrg()).then((result) => {
      console.log(result, '++++')
    }).catch((err) => {
      
    });
  }
  React.useEffect(()=>{
    getPublicOrg()
  },[])
  const posData = () => {

  }
  return (
    <Page
    title="Public Organizations"
    >
      <Typography variant='h4' sx={{mb:2}}>
        Public Organizations
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
      </Typography>
    </Page>
  )
}

export default PublicOrganizations
