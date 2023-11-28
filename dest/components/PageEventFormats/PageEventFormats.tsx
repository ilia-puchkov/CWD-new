import React from 'react'
import { Box, Grid } from '@mui/material'
import formatsList from '../../utils/formatsList'
import PageEventFormat from '../PageEventFormat/PageEventFormat'

function PageEventFormats() {
  return (
    <Box
      component="section"
      id="formats"
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          width: '100%',
          justifyContent: 'center',
          marginLeft: 'auto',
          // '@media (max-width:500px)': {
          //   marginLeft: '0',
          // },
        }}
        my={4}
      >
        {formatsList.map((format) => (
          <PageEventFormat format={format} key={format.id} />
        ))}
      </Grid>
    </Box>
  )
}

export default PageEventFormats
