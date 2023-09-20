import React from 'react'
import Page from '../../../../../components/page'
import { Box, Button, Divider, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Typography, styled, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getUsers, shareBoat } from '../../../../../store/actions/adminActions'
import ShareIcon from '@mui/icons-material/Share';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useLocation } from 'react-router'
import { useSnackbar } from 'notistack'
import { RotatingLines } from 'react-loader-spinner'

const StyledRoot = styled(Box)(({theme})=>({
    padding:theme.spacing(5)
}))

const ShareBoats = () => {
    const {state} = useLocation()
    // console.log(state)
    const dispatch = useDispatch()
    const [fromDate, setFromDate] = React.useState(null);
    const [toDate, setToDate] = React.useState(null);  
    const [user , setUser] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const getAllUsers = () => {
        dispatch(getUsers()).then((result) => {
            setUser(result.data.data)
        }).catch((err) => {
            console.log(err)
        });
    }
    React.useEffect(()=> {
        getAllUsers()
    }, [])
    const {enqueueSnackbar} = useSnackbar()
    const handleShareButtonClick = () => {
        // Format the selected dates as "YYYY-MM-DD" and log them
        if (fromDate && toDate) {
            setLoading(true)
          const formattedFromDate = fromDate.format('YYYY-MM-DD');
          const formattedToDate = toDate.format('YYYY-MM-DD');
        //   console.log('From Date:', formattedFromDate);
        //   console.log('To Date:', formattedToDate);
        const values = {
            user_id:user[0].id,
            organization_boat_id:state.id,
            start_date:formattedFromDate,
            end_date:formattedToDate
        }
        dispatch(shareBoat(values)).then((result) => {
            setLoading(false)
            enqueueSnackbar(result.data.message, {
                variant:'success'
            })
            setFromDate(null)
            setToDate(null)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
            
        });
        } else {
          
          enqueueSnackbar('Please select both From and To dates.', {
            variant:'error',
          });
        }
      };
  return (
    <Page
    title="Share Boat"
    >
        <StyledRoot>
            <Typography variant='h4' fontWeight="bold" textAlign="center">    
            Select User
            </Typography>
            <Divider sx={{mt:2, mb:4}} />
            <TableContainer sx={{border:'1px solid rgba(0,0,0,0.25)'}}>
            <Table >
                <TableHead sx={{background:'#000'}}>
                    <TableRow>
                        <TableCell sx={{color:'#fff'}}>No</TableCell>
                        <TableCell sx={{color:'#fff'}}>Name</TableCell>
                        <TableCell sx={{color:'#fff'}}>Email</TableCell>
                        <TableCell sx={{color:'#fff'}}>From</TableCell>
                        <TableCell sx={{color:'#fff'}}>To</TableCell>
                        <TableCell sx={{color:'#fff'}}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        user.map((val, ind)=> {
                            return(
                         <TableRow>
                        <TableCell>{ind + 1}</TableCell>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.email}</TableCell>
                        <TableCell>
                        <LocalizationProvider dateAdapter={AdapterDayjs} label="From">
                  <DatePicker
                    value={fromDate}
                    onChange={(date) => setFromDate(date)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                        </TableCell>
                        <TableCell>
                                {/* <Button variant='outlined'
                                endIcon={<InsertInvitationIcon />}
                                
                                >
                                    To
                                </Button> */}
                                  <LocalizationProvider dateAdapter={AdapterDayjs} label="To">
                  <DatePicker
                    value={toDate}
                    onChange={(date) => setToDate(date)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                        </TableCell>

                        <TableCell>
                        {
              loading ?
              <Box sx={{display:'flex', justifyContent:'center',}}>
              <RotatingLines
              strokeColor="black"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={loading}/>
              </Box>
              :<Button variant='contained'
              endIcon={<ShareIcon />}
              onClick={handleShareButtonClick}
              >
                  Share 
              </Button>
            }
                            
                        </TableCell>

                    </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            </TableContainer>
        </StyledRoot>
    </Page>
  )
}

export default ShareBoats
