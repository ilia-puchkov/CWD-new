import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Request from '../Request/Request'
import { testRequests } from './TestRequests'

function RequestsTable() {
  const [requestsValues, setRequestsValues] = useState(testRequests)

  function getData() {
    fetch('http://localhost:5500/answers', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => setRequestsValues(res))
  }

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
        onClick={getData}
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
        {requestsValues.map((request) => (
          <Request requestData={request} key={request._id} />
        ))}
      </Grid>
    </Box>
  )
}

export default RequestsTable
