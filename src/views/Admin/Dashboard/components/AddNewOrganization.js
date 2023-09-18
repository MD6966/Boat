import { Typography,TextField,FormControl,InputLabel,Select,MenuItem,
Button
} from '@mui/material'
import React from 'react'
import Page from '../../../../components/page'
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { addOrg } from '../../../../store/actions/adminActions';
import { useSnackbar } from 'notistack';
const AddNewOrganization = () => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };
  const [name, setName] = React.useState('');
  const [visibility, setVisibility] = React.useState('public');
  const [loading, setLoading] = React.useState(false)
  const dispatch = useDispatch()
  const{enqueueSnackbar} = useSnackbar()
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
      setName('')
      }).catch((err) => {
        console.log(err)
      });
    console.log("")
  }
  return (
    <Page
    title="Add New Org"
    >
      <Typography variant='h4' sx={{mb:4}}>
        Add New Organization
     </Typography>
        <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Organization Name" sx={{mb:2}}
                    name='name' value={name}
                    required
                    onChange={handleNameChange}
                    />
                     <FormControl fullWidth sx={{mb:2}}>
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
          
        </form>
    </Page>
  )
}

export default AddNewOrganization
