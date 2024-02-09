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
      mt={6}
      display={'flex'}
      justifyContent={'center'}
      sx={{
        padding: '40px 40px',
        '@media (max-width:900px)': {
          padding: '10px 20px',
        },
      }}
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
              mb={3}
              mt={2}
              sx={{ fontFamily: 'Merriweather', lineHeight: '1.1' }}
            >
              С НАМИ ЛЮБОЙ ДЕНЬ - ПРАЗДНИК!
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary.contrastText"
              sx={{
                fontWeight: '500',
                lineHeight: '1.1',
                '@media (max-width:900px)': {
                  textAlign: 'center',
                },
              }}
            >
              создаём незабываемые мероприятия по&#160;индивидуальному сценарию
            </Typography>
            <Button
              onClick={onPopupFormClick}
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                transition: '.7s ease-in-out',
                maxWidth: '250px',
                ':hover': {
                  bgcolor: 'secondary.main',
                  color: 'white',
                },
                // boxShadow:
                //   '0px 0px 2px 0.3px #f02ed1, inset 0px 0px 4px 0.5px #f02ed1',
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
              marginTop: '25px',
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
