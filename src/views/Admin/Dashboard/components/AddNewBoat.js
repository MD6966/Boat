import React from 'react'
import Page from '../../../../components/page/page'
import { Box, Button, TextField, Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addBoat } from '../../../../store/actions/adminActions'
import { useSnackbar } from 'notistack'
import { RotatingLines } from 'react-loader-spinner'

const StyledRoot = styled(Box)(({theme})=> ({
    padding:theme.spacing(4),
}))
const AddNewBoat = () => {
    const initialValues = {
        name:'',
        location:'',
        type:'',
        contact:''
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
        // console.log(formValues)
        dispatch(addBoat(formValues)).then((result) => {
            enqueueSnackbar(result.data.message, {
                variant:'success'
            })
            setFormValues(initialValues)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        });
    }
  return (
    <Page
    title="Add New Boat"
    >
        <StyledRoot>
            <Box>
            <Typography variant='h4' fontWeight="bold" textAlign="center">
                Add new boat
            </Typography>
            <form onSubmit={handleSubmit}>

            <Box sx={{p:4}}>
                <TextField fullWidth label="Boat Name"
                name='name' value={formValues.name} onChange={handleChange} required
                />
                <TextField fullWidth label="Boat Location" sx={{mt:2}}
                name='location' value={formValues.location} onChange={handleChange} required
                />
                <TextField fullWidth label="Boat Type" sx={{mt:2}} placeholder='eg: supply boat / speed boat'
                name='type' value={formValues.type} onChange={handleChange} required
                />
                <TextField fullWidth label="Boat contact" sx={{mt:2}}
                name='contact' value={formValues.contact} onChange={handleChange} required
                />
                <Box
                sx={{
                    display:'flex',
                    justifyContent:'flex-end',
                    mt:2
                }}
                >
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
                </Box>

            </Box>
                    </form>
            </Box>
        </StyledRoot>
    </Page>
  )
}

export default AddNewBoat
