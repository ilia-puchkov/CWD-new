import React from 'react'
import { Typography, Button } from '@mui/material'

function PageIntro() {
  return (
    <section>
      <Typography variant="h1">С НАМИ ЛЮБОЙ ДЕНЬ - ПРАЗДНИК!</Typography>
      <Typography variant="h2">
        создаём незабываемые мероприятия по индивидуальному сценарию
      </Typography>
      <Button
        variant="outlined"
        color="warning"
        sx={{
          ':hover': {
            bgcolor: 'primary.main', // theme.palette.primary.main
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
