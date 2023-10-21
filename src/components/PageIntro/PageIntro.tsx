import React from 'react'
import { Typography, Button, Stack } from '@mui/material'
import pageLogo from '../../images/calendar.png'

function PageIntro() {
  return (
    <section>
      <Stack direction="row">
        <Stack direction="column">
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
              width: 150,
              ':hover': {
                bgcolor: 'secondary.main', // theme.palette.primary.main
                color: 'white',
              },
            }}
          >
            Fill Form
          </Button>
        </Stack>
        <img src={pageLogo} alt="EventCalendar" />
      </Stack>
    </section>
  )
}

export default PageIntro
