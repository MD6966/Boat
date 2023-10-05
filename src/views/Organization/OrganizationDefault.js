import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled,Tabs,Tab } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import OrgPrivateBoats from './components/OrgPrivateBoats';
import OrgPublicBoats from './components/OrgPublicBoats';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OrgNewBoat from '../Admin/Dashboard/components/SingleOrg/OrgNewBoat';

const StyledRoot = styled(Box)(({theme})=> ({
  padding:theme.spacing(5),
  marginTop:theme.spacing(3)
}))
const OrganizationDefault = () => {
  const org = useSelector((state)=>state.admin.user)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{display:'flex', justifyContent:'center', mt:3}}>
         <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<PublicIcon />} value={0}label="PUBLIC BOATS" />
      <Tab icon={<VpnLockIcon />} value={1} label="PRIVATE BOATS" />
      <Tab icon={<AddCircleOutlineIcon />} value={2}label="ADD NEW BOAT" />
    </Tabs>
      </Box>
    <StyledRoot>
      {value == 0 && <OrgPublicBoats />}
      {value == 1 && <OrgPrivateBoats /> }
      {value == 2 && <OrgNewBoat state={org.organization_id}/>}
    </StyledRoot>
    </div>
  )
}

export default OrganizationDefault
