import { Container } from '@mui/material'
import React from 'react'
import RequestsTable from '../components/RequestsTable/RequestsTable'
import { appContainerStyle } from '../utils/appStyles'

function RequestPage() {
  return (
    <Container sx={appContainerStyle}>
      <RequestsTable />
    </Container>
  )
}

export default RequestPage
