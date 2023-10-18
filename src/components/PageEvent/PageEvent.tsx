import React from 'react'
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material'
import EventFormat from '../../models/EventFormat'

interface FormatProps {
  format: EventFormat
}

function PageEvent({ format }: FormatProps) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 220 }}>
        <CardMedia
          component="img"
          height="150"
          sx={{ width: '130px', alignSelf: 'center' }}
          image={format.logo}
          alt={format.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {format.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {format.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default PageEvent
