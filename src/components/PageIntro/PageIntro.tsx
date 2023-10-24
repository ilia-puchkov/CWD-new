import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import pageLogo from '../../images/cwd-logo.png'

interface PageIntroProps {
  onPopupFormClick: () => void
}

function PageIntro({ onPopupFormClick }: PageIntroProps) {
  return (
    <Box component="section" id="intro" mt={8}>
      <Stack
        direction={{ sx: 'column', md: 'row' }}
        padding={{ sx: '10px', md: '40px' }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Stack direction="column" justifyContent="center">
            <Typography variant="h1" color="primary.main">
              С НАМИ ЛЮБОЙ ДЕНЬ - ПРАЗДНИК!
            </Typography>
            <Typography variant="subtitle1" color="primary.contrastText">
              создаём незабываемые мероприятия по индивидуальному сценарию
            </Typography>
            <Button
              onClick={onPopupFormClick}
              variant="outlined"
              color="secondary"
              size="small"
              sx={{
                width: 150,
                ':hover': {
                  bgcolor: 'secondary.main', // theme.palette.primary.main
                  color: 'white',
                },
                marginTop: 5,
                '@media (max-width:900px)': {
                  marginLeft: 'auto',
                  marginRight: 'auto',
                },
              }}
            >
              Fill Form
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            width: 350,
            marginTop: 5,
            '@media (max-width:400px)': {
              width: 300,
              marginTop: 8,
            },
          }}
        >
          <img style={{ width: '100%' }} src={pageLogo} alt="EventCalendar" />
        </Box>
      </Stack>
    </Box>
  )
}

export default PageIntro
