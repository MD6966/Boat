import React from 'react'
import { Button, styled, TextField, Stack   } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router'
import { useSnackbar } from 'notistack';
import { useDispatch,} from 'react-redux'
import {adminLogin} from '../../../store/actions/adminActions'
const StyledButton = styled(Button)(({theme})=> ({
    margin:'10px 0',
    background:theme.palette.primary.main,
    '&:hover' : {
        background:theme.palette.secondary.main
    }
}))
const initialValues = {
    email:'',
    password:''
}
const AdminLoginForm = () => {
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]:value})
    }
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    const [formValues, setFormValues] = React.useState(initialValues)
    const [loading, setLoading] = React.useState(null)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        dispatch(adminLogin(formValues)).then((res)=> {
            console.log(res.res.data.data.user.role, '++++++++')
            if(res.res.status == 200){
                if(res.res.data.data.user.role == 'admin'){
                    navigate('/admin/manage-boats', {replace:true})
                }
                else if (res.res.data.data.user.role == 'organization')
                {
                    navigate('/Organization/main', {replace:true})
                }
                else if (res.res.data.data.user.role == 'user') {
                    navigate('/user/home', {replace:true})
                }
            }
            setLoading(false)
            setLoading(false)
        }).catch((err)=> {
            setLoading(false)
            enqueueSnackbar(err.response.data.message, {
                variant:'error'
            })
        })
    }
    
  return (
    <form onSubmit={handleSubmit}>

        <Stack>
       <TextField label='Email' sx={{mb:'1rem', width:'350px',}} 
       name='email'  value={formValues.email} onChange={handleChange} required
       autoComplete='off'
       />
        <TextField label='Password' sx={{mb:'1rem', width:'350px',}} 
        name='password' value={formValues.password} onChange={handleChange} required 
       autoComplete='off'
       type="password" />
        {
          loading ? <StyledButton type='submit' variant='disabled'>    <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={loading}/> </StyledButton> :
          <StyledButton type='submit' sx={{color:'#fff'}}
          > Login </StyledButton>
        }
        
        </Stack>
        </form>
  )
}

export default AdminLoginForm
