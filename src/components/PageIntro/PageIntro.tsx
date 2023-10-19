import React from 'react'
import { Typography, Button } from '@mui/material'

function PageIntro() {
  return (
    <section>
      <Typography variant="h1" color="primary.main">
        С НАМИ ЛЮБОЙ ДЕНЬ - ПРАЗДНИК!
      </Typography>
      <Typography variant="h2">
        создаём незабываемые мероприятия по индивидуальному сценарию
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        sx={{
          ':hover': {
            bgcolor: 'secondary.main', // theme.palette.primary.main
            color: 'white',
          },
        }}
      >
        Fill Form
      </Button>
    </section>
  )
}

export default PageIntro
