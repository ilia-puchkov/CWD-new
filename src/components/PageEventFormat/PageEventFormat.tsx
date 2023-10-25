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
      sx={{
        justifyContent: 'center',
        padding: 0,
        maxWidth: 300,
        maxHeight: 350,
      }}
    >
      <Card
        sx={{
          maxWidth: 300,
          maxHeight: 350,
          boxShadow: 0,
          backgroundColor: 'inherit',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: 'contain',
            height: '100px',
            '@media (max-width:500px)': {
              height: '80px',
            },
          }}
          image={format.logo}
          alt={format.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={'center'}
            color="primary"
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
