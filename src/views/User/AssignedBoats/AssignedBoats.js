import { Box, styled } from '@mui/material'
import React from 'react'
import Page from '../../../components/page'
const StyledRoot = styled(Box)(({theme})=> ({
    padding:theme.spacing(5)
}))
const AssignedBoats = () => {
  return (
    <Page
    title="Assigned Boats"
    >
        <StyledRoot>
      Assigned Baots
        </StyledRoot>
    </Page>
  )
}

export default AssignedBoats
