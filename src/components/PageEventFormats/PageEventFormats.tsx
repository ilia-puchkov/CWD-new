import React from 'react'
import { Grid } from '@mui/material'
import formatsList from '../../utils/formatsList'
import PageEvent from '../PageEvent/PageEvent'

function PageEventFormats() {
  return (
    <section>
      <Grid container spacing={4} justifyContent="center" columns={3}>
        {formatsList.map((format) => (
          <PageEvent format={format} key={format.id} />
        ))}
      </Grid>
    </section>
  )
}

export default PageEventFormats
