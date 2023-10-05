import React from 'react'
import Page from '../../../../../components/page/page'
import { Box, Button, Dialog, DialogContent, DialogTitle, 
    Divider, Typography, styled, TextField, DialogActions,
Tab, Tabs
} from '@mui/material'
    import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { useLocation, useParams } from 'react-router'
import { addOrgBoat } from '../../../../../store/actions/adminActions'
import { RotatingLines } from 'react-loader-spinner'
import PublicIcon from '@mui/icons-material/Public';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OrgPubBoats from './OrgPubBoats'
import OrgPrvBoats from './OrgPrvBoats'
import OrgNewBoat from './OrgNewBoat'
const StyledRoot = styled(Box)(({theme})=> ({
    padding: theme.spacing(5)
}))
const SingleOrganization = () => {
    const [open, setOpen] = React.useState(false)
    const {id} = useParams()
    const {state} = useLocation()
    // console.log(state)
    const initialValues = {
        name:'',
        location:'',
        type:'',
        contact:'',
    }
    const [formValues, setFormValues] = React.useState(initialValues)
    const [loading, setLoading] = React.useState(false)
    // const handleChange = (e) => {
    //     const {name, value} = e.target
    //     setFormValues({...formValues, [name]:value})
    // }
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const handleSubmit = (e)=> {
        setLoading(true)
        e.preventDefault()
        const updatedValues = {
            ...formValues,
            organization_id: id,
        }
        console.log(updatedValues)
        dispatch(addOrgBoat(updatedValues)).then((result) => {
            enqueueSnackbar(result.data.message, {
                variant:'success'
            })
            setFormValues(initialValues)
            setLoading(false)
            setOpen(false)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        });
    }
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Page
    title="Organization"
    >
        <StyledRoot>
            <Box sx={{display:'flex', justifyContent:"space-around"}}>
                <Typography variant='h4' textAlign="center" fontWeight="bold">
                    {state.name}
                </Typography>
            </Box>
            <Divider sx={{mt:2, mb:2}}/>
            <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<PublicIcon />} value={0}label="PUBLIC BOATS" />
      <Tab icon={<VpnLockIcon />} value={1} label="PRIVATE BOATS" />
      <Tab icon={<AddCircleOutlineIcon />} value={2}label="ADD NEW BOAT" />
    </Tabs>
    <Box sx={{mt:2}}>

      {value==0 && <OrgPubBoats state={state}/>}
      {value==1 && <OrgPrvBoats state={state}/>}
      {value==2 && <OrgNewBoat  state={state.id}/>}

    </Box>
                {/* <Dialog open={open} fullWidth onClose={()=> setOpen(false)}>
                    <form onSubmit={handleSubmit}>

                    <DialogTitle>
                        Add device
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                    <TextField fullWidth label="Boat Name"
                    name="name" value={formValues.name} onChange={handleChange}
                    required
                    />
                     <TextField fullWidth label="Boat Location" sx={{mt:2}}
                     name="location" value={formValues.location} onChange={handleChange}
                     required
                     />
                     <TextField fullWidth label="Boat Type" sx={{mt:2}} placeholder='eg: supply boat / speed boat'
                     name="type" value={formValues.type} onChange={handleChange}
                     required
                     />
                     <TextField fullWidth label="Boat contact" sx={{mt:2}}
                     name="contact" value={formValues.contact} onChange={handleChange}
                     required
                     />
                    </DialogContent>
                    <DialogActions>
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
                </Dialog> */}
        </StyledRoot>
    </Page>
  )
}

export default SingleOrganization
