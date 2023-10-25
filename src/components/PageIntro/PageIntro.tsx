import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import pageLogo from '../../images/cwd-logo.png'

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
    >
      <Stack
        direction={{ sx: 'column', md: 'row' }}
        padding={{ sx: '10px', md: '40px' }}
      >
        <Box
          sx={{
            maxWidth: '600px',
            flexGrow: 1,
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            maxWidth={'650px'}
            sx={{
              '@media (max-width:900px)': {
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            }}
          >
            <Typography variant="h1" color="primary.main">
              С НАМИ ЛЮБОЙ ДЕНЬ - ПРАЗДНИК!
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary.contrastText"
              sx={{
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
            width: 500,
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
