import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Request from '../Request/Request'
import { testRequests } from './TestRequests'

function RequestsTable() {
  return (
    <Box
      sx={{
        paddingTop: '20px',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        sx={{
          transition: '.7s ease-in-out',
          ':hover': {
            bgcolor: 'secondary.main',
            color: 'white',
          },
        }}
        href="/"
      >
        main
      </Button>
      <Typography variant="h1" color={'primary'}>
        Requests
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        sx={{
          transition: '.7s ease-in-out',
          ':hover': {
            bgcolor: 'primary.main',
            color: 'white',
          },
        }}
      >
        get Requests
      </Button>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }} my={4}>
        {testRequests.map((request) => (
          <Request requestData={request} key={request._id} />
        ))}
      </Grid>
    </Box>
  )
}

export default RequestsTable
