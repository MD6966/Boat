import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PublicIcon from '@mui/icons-material/Public';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Page from '../../../../components/page/page';
import { Box, styled } from '@mui/material';
import PublicBoats from './PublicBoats';
import PrivateBoats from './PrivateBoats';
import AddNewBoat from './AddNewBoat';
const StyledRoot = styled(Box)(({theme})=> ({
  padding:theme.spacing(5)
}))

const ManageBoats = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page
    title="Manage Boats"
    >

        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<PublicIcon />} value={0}label="PUBLIC BOATS" />
      <Tab icon={<VpnLockIcon />} value={1} label="PRIVATE BOATS" />
      <Tab icon={<AddCircleOutlineIcon />} value={2}label="ADD NEW BOAT" />
    </Tabs>
      <StyledRoot>
      {value==0 && <PublicBoats />}
      {value==1 && <PrivateBoats />}
      {value==2 && <AddNewBoat />}

      </StyledRoot>
    </Page>
  )
}

export default ManageBoats
