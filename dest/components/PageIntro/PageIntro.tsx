import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import pageLogo from '../../images/calendar.png'

interface PageIntroProps {
  onPopupFormClick: () => void
}

function PageIntro({ onPopupFormClick }: PageIntroProps) {
  return (
    <Box
      component="section"
      id="intro"
      mt={8}
      display={'flex'}
      justifyContent={'center'}
      padding={{ sx: '10px', md: '40px' }}
    >
      <Stack direction={{ sx: 'column', md: 'row' }}>
        <Box
          sx={{
            maxWidth: '700px',
            flexGrow: 1,
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            maxWidth={'700px'}
            sx={{
              '@media (max-width:900px)': {
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            }}
          >
            <Typography
              variant="h1"
              color="primary.main"
              sx={{ fontFamily: 'Merriweather' }}
            >
              С НАМИ ЛЮБОЙ ДЕНЬ - ПРАЗДНИК!
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary.contrastText"
              sx={{
                fontWeight: '500',
                '@media (max-width:900px)': {
                  textAlign: 'center',
                },
              }}
            >
              создаём незабываемые мероприятия по индивидуальному сценарию
            </Typography>
            <Button
              onClick={onPopupFormClick}
              variant="outlined"
              color="secondary"
              size="small"
              sx={{
                transition: '.7s ease-in-out',
                maxWidth: '170px',
                ':hover': {
                  bgcolor: 'secondary.main',
                  color: 'white',
                },
                marginTop: 5,
                '@media (max-width:900px)': {
                  marginLeft: 'auto',
                  marginRight: 'auto',
                },
              }}
            >
              Заполнить анкету
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            width: 400,
            '@media (max-width:600px)': {
              width: 250,
              marginTop: 8,
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          }}
        >
          <img
            style={{ width: '100%', margin: '0 auto' }}
            src={pageLogo}
            alt="EventCalendar"
          />
        </Box>
      </Stack>
    </Box>
  )
}

export default PageIntro
