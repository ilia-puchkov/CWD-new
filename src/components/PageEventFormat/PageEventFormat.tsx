import React from 'react'
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material'
import EventFormat from '../../models/EventFormat'

interface FormatProps {
  format: EventFormat
}

function PageEventFormat({ format }: FormatProps) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{ justifyContent: 'center', padding: 0, width: 300, height: 350 }}
    >
      <Card
        sx={{
          maxWidth: 300,
          height: 350,
          boxShadow: 0,
          backgroundColor: 'inherit',
        }}
      >
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
            color="primary.contrastText"
          >
            {format.name}
          </Typography>
          <Typography
            variant="body2"
            color="secondary.contrastText"
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
