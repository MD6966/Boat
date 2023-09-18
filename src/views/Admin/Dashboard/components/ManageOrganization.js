import React from 'react'
import { Box,styled,Tabs,Tab } from '@mui/material'
import PrivateOrganizations from './PrivateOrganizations';
import PublicOrganizations from './PublicOrganizations';
import PublicIcon from '@mui/icons-material/Public';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddNewOrganization from './AddNewOrganization';
const StyledRoot = styled(Box)(({theme})=> ({
  padding:theme.spacing(5)
}))
const ManageOrganization = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
       <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<PublicIcon />} value={0}label="PUBLIC ORGANIZATIONS" />
      <Tab icon={<VpnLockIcon />} value={1} label="PRIVATE ORGANIZATIONS" />
      <Tab icon={<AddCircleOutlineIcon />} value={2}label="ADD NEW ORGANIZATION" />
    </Tabs>
      <StyledRoot>
      {value==0 && <PublicOrganizations />}
      {value==1 && <PrivateOrganizations />}
      {value==2 && < AddNewOrganization/>}

      </StyledRoot>
    </div>
  )
}

export default ManageOrganization
