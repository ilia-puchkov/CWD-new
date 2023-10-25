import React from 'react'
import { Box, Grid } from '@mui/material'
import formatsList from '../../utils/formatsList'
import PageEventFormat from '../PageEventFormat/PageEventFormat'

function PageEventFormats() {
  return (
    <Box component="section" id="formats">
      <Grid container spacing={3} sx={{ justifyContent: 'center' }} my={4}>
        {formatsList.map((format) => (
          <PageEventFormat format={format} key={format.id} />
        ))}
      </Grid>
    </Box>
  )
}

export default PageEventFormats
