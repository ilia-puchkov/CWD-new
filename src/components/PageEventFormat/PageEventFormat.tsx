import React from 'react'
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material'
import EventFormat from '../../models/EventFormat'

interface FormatProps {
  format: EventFormat
}

function PageEventFormat({ format }: FormatProps) {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ maxWidth: 240, padding: 0 }}>
      <Card sx={{ height: 350, boxShadow: 0 }}>
        <CardMedia
          component="img"
          height="100"
          sx={{ objectFit: 'contain' }}
          image={format.logo}
          alt={format.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={'center'}
          >
            {format.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={'center'}
          >
            {format.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default PageEventFormat
