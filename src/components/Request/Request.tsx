import { Box, Typography } from '@mui/material'
import React from 'react'
import RequestFormat from '../../models/RequestFormat'

interface IRequestProp {
  requestData: RequestFormat
}

const requestMainBodyStyle = {
  paddingTop: '10px',
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  width: '250px',
  flexDirection: 'column',
  border: '2px solid white',
  margin: '3px',
}

const requestBoxStyle = {
  paddingTop: '5px',
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  flexDirection: 'row',
}

function Request({ requestData }: IRequestProp) {
  const questions = requestData.questions

  return (
    <Box sx={requestMainBodyStyle}>
      <Typography variant="h6" color={'primary'}>
        Request #
      </Typography>
      <Typography variant="body1" color={'primary'}>
        {requestData._id || 'No ID'}
      </Typography>
      <Box sx={requestBoxStyle}>
        <Typography variant="body1" color={'secondary'}>
          Name: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.name || 'No data'}
        </Typography>
      </Box>
      <Box sx={requestBoxStyle}>
        <Typography variant="body1" color={'secondary'}>
          Phone: &nbsp;
        </Typography>
        <Typography variant="body1" color={'primary'}>
          {requestData.phone || 'No data'}
        </Typography>
      </Box>
      {questions
        ? questions.map((question) => (
            <Box sx={requestBoxStyle} key={questions.indexOf(question)}>
              <Typography variant="body1" color={'secondary'}>
                {questions.indexOf(question)}: &nbsp;
              </Typography>
              <Typography variant="body1" color={'primary'}>
                {question || 'No data'}
              </Typography>
            </Box>
          ))
        : ''}
    </Box>
  )
}

export default Request
