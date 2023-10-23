import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import pageLogo from '../../images/calendar.png'

function PageIntro() {
  return (
    <section id="intro">
      <Stack direction={{ sx: 'column', md: 'row' }}>
        <Box
          sx={{
            width: 360,
            flexGrow: 1,
          }}
        >
          <Stack direction="column">
            <Typography variant="h1" color="primary.main">
              С НАМИ ЛЮБОЙ ДЕНЬ - ПРАЗДНИК!
            </Typography>
            <Typography variant="h2" color="primary.contrastText">
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
        </Box>

        <Box
          sx={{
            width: 400,
          }}
        >
          <img style={{ width: '100%' }} src={pageLogo} alt="EventCalendar" />
        </Box>
      </Stack>
    </section>
  )
}

export default PageIntro
