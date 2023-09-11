import React from 'react'
import Page from '../../../../components/page/page'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField, Typography, styled } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addOrg, getOrg } from '../../../../store/actions/adminActions';
import { useSnackbar } from 'notistack';
import { RotatingLines } from 'react-loader-spinner';
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
    const [name, setName] = React.useState('');
    const [orgData, setOrgData] = React.useState([])
    const navigate = useNavigate()
    const{enqueueSnackbar} = useSnackbar()
    const dispatch = useDispatch()
    const [visibility, setVisibility] = React.useState('public');
    const [loading, setLoading] = React.useState(false)
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
    
    const handleVisibilityChange = (e) => {
      setVisibility(e.target.value);
    };
    
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const formValues = {
            name: name,
            visibility: visibility,
          };
          dispatch(addOrg(formValues)).then((result) => {
            enqueueSnackbar(result.data.message, {
                variant:'success'
            })
            setLoading(false)
            setOpen(false)
            getOrganization()
          }).catch((err) => {
            setLoading(false)
            console.log(err)
          });
        setName('')
        
        console.log(formValues)
    }
    const getOrganization = () => {
        dispatch(getOrg()).then((res)=> {
            // console.log(res.data.data)
            setOrgData(res.data.data)
        })
    }
    React.useEffect(()=> {
        getOrganization()
    }, [])
    const posData = (val) => {
        console.log(val)
        navigate('/admin/single-organization')
    }
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
                <form onSubmit={handleSubmit}>
                <DialogTitle>
                    Add New Organization
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <TextField fullWidth label="Organization Name" sx={{mb:2}}
                    name='name' value={name}
                    required
                    onChange={handleNameChange}
                    />
                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={visibility}
          label="Visibility"
          onChange={handleVisibilityChange}
          >
          <MenuItem value="public">Public</MenuItem>
          <MenuItem value="private">Private</MenuItem>
        </Select>
      </FormControl>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button variant='outlined' onClick={()=> setOpen(false)}>
                        Cancel
                    </Button>
                    {
          loading ? <Button type='submit' variant='disabled'>    <RotatingLines
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={loading}/> </Button> :
          <Button type='submit' variant='contained'
          > Add </Button>
        }
          
                </DialogActions>
            </form>
            </Dialog>
        </StyledRoot>
    </Page>
  )
}

export default Organizations
