import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled,Tabs,Tab } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import OrgPrivateBoats from './components/OrgPrivateBoats';
import OrgPublicBoats from './components/OrgPublicBoats';
const StyledRoot = styled(Box)(({theme})=> ({
  padding:theme.spacing(5),
  marginTop:theme.spacing(3)
}))
const OrganizationDefault = () => {
  const dispatch = useDispatch()
  // const getOrganizationBoats = () => {
  //   dispatch(getOrgPubAndPrvBoats(org_id)).then((result) => {
  //     console.log(result)
  //     setData(result)
  //   }).catch((err) => {
  //     console.log(err)
  //   });
  // }
  // React.useEffect(()=> {
  //   getOrganizationBoats()
  // },[])
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{display:'flex', justifyContent:'center', mt:3}}>
         <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<PublicIcon />} value={0}label="PUBLIC ORGANIZATIONS" />
      <Tab icon={<VpnLockIcon />} value={1} label="PRIVATE ORGANIZATIONS" />
      {/* <Tab icon={<AddCircleOutlineIcon />} value={2}label="ADD NEW ORGANIZATION" /> */}
    </Tabs>
      </Box>
    <StyledRoot>
      {value == 0 && <OrgPublicBoats />}
      {value == 1 && <OrgPrivateBoats /> }
    </StyledRoot>
    </div>
  )
}

export default OrganizationDefault
