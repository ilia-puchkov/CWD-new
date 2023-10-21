import React from 'react'
import { Grid } from '@mui/material'
import formatsList from '../../utils/formatsList'
import PageEventFormat from '../PageEventFormat/PageEventFormat'

function PageEventFormats() {
  return (
    <section id="formats">
      <Grid container spacing={1} sx={{ justifyContent: 'center' }} my={4}>
        {formatsList.map((format) => (
          <PageEventFormat format={format} key={format.id} />
        ))}
      </Grid>
    </section>
  )
}

export default PageEventFormats
