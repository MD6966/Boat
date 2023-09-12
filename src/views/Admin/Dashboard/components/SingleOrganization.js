import React from 'react'
import Page from '../../../../components/page/page'
import { Box, Button, Dialog, DialogContent, DialogTitle, 
    Divider, Typography, styled, TextField, DialogActions } from '@mui/material'
    import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { useLocation, useParams } from 'react-router'
import { addOrgBoat } from '../../../../store/actions/adminActions'
import { RotatingLines } from 'react-loader-spinner'
const StyledRoot = styled(Box)(({theme})=> ({
    padding: theme.spacing(5)
}))
const SingleOrganization = () => {
    const [open, setOpen] = React.useState(false)
    const {id} = useParams()
    console.log(id)
    const initialValues = {
        name:'',
        location:'',
        type:'',
        contact:'',
    }
    const [formValues, setFormValues] = React.useState(initialValues)
    const [loading, setLoading] = React.useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]:value})
    }
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
                </Dialog>
        </StyledRoot>
    </Page>
  )
}

export default SingleOrganization
