import { Box, Typography } from '@mui/material'
import React from 'react'
import RequestFormat from '../../models/RequestFormat'

interface IRequestProp {
  requestData: RequestFormat
}

function Request({ requestData }: IRequestProp) {
  return (
    <Box
      sx={{
        paddingTop: '10px',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        width: '250px',
        flexDirection: 'column',
        border: '2px solid white',
        margin: '3px',
      }}
    >
      <Typography variant="h6" color={'primary'}>
        Request #
      </Typography>
      <Typography variant="body1" color={'primary'}>
        {requestData._id || 'No ID'}
      </Typography>
      <Box
        sx={{
          paddingTop: '5px',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography variant="body1" color={'secondary'}>
          Name: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.name || 'No data'}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: '5px',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography variant="body1" color={'secondary'}>
          Phone: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.phone || 'No data'}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: '5px',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography variant="body1" color={'secondary'}>
          Q1: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.question1 || 'No data'}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: '5px',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography variant="body1" color={'secondary'}>
          Q2: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.question2 || 'No data'}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: '5px',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography variant="body1" color={'secondary'}>
          Q3: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.question3 || 'No data'}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: '5px',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography variant="body1" color={'secondary'}>
          Q4: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.question4 || 'No data'}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: '5px',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography variant="body1" color={'secondary'}>
          Q5: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.question5 || 'No data'}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: '5px',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Typography variant="body1" color={'secondary'}>
          Q6: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.question6 || 'No data'}
        </Typography>
      </Box>
    </Box>
  )
}

export default Request
