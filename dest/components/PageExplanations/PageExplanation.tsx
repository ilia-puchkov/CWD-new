import { Typography, Box, Stack } from '@mui/material'
import React from 'react'
import {
  hrStyle,
  hr1Style,
  hr2Style,
  hr3Style,
  hr4Style,
  hr5Style,
  explanationDivisionStyle,
  explanationSpacing,
} from './PageExplanationsStyles'

function PageExplanation() {
  return (
    <Box component="section" id="explanations" mt={8}>
      <Typography
        variant="h2"
        color="primary.main"
        sx={{
          fontFamily: 'Merriweather',
          alignSelf: 'center',
          textAlign: 'center',
        }}
        mb={4}
      >
        Как это работает?
      </Typography>
      <Stack
        direction="row"
        display={'flex'}
        alignItems={'center'}
        mt={explanationDivisionStyle}
        spacing={explanationSpacing}
      >
        <Box sx={hr1Style}>
          <hr style={hrStyle}></hr>
        </Box>
        <Typography variant="h5" color="secondary">
          1
        </Typography>
        <Typography variant="h5" color="primary.contrastText">
          Вы заполняете анкету
        </Typography>
      </Stack>
      <Stack
        direction="row"
        display={'flex'}
        alignItems={'center'}
        mt={explanationDivisionStyle}
        spacing={explanationSpacing}
      >
        <Box sx={hr2Style}>
          <hr style={hrStyle}></hr>
        </Box>
        <Typography variant="h5" color="secondary">
          2
        </Typography>
        <Typography variant="h5" color="primary.contrastText">
          Мы уточняем детали
        </Typography>
      </Stack>
      <Stack
        direction="row"
        display={'flex'}
        alignItems={'center'}
        mt={explanationDivisionStyle}
        spacing={explanationSpacing}
      >
        <Box sx={hr3Style}>
          <hr style={hrStyle}></hr>
        </Box>
        <Typography variant="h5" color="secondary">
          3
        </Typography>
        <Typography variant="h5" color="primary.contrastText">
          Вы выбираете сценарий
        </Typography>
      </Stack>
      <Stack
        direction="row"
        display={'flex'}
        alignItems={'center'}
        mt={explanationDivisionStyle}
        spacing={explanationSpacing}
      >
        <Box sx={hr4Style}>
          <hr style={hrStyle}></hr>
        </Box>
        <Typography variant="h5" color="secondary">
          4
        </Typography>
        <Typography variant="h5" color="primary.contrastText">
          Мы воплощаем его в жизнь
        </Typography>
      </Stack>
      <Stack
        direction="row"
        display={'flex'}
        alignItems={'center'}
        mt={explanationDivisionStyle}
        spacing={explanationSpacing}
      >
        <Box sx={hr5Style}>
          <hr style={hrStyle}></hr>
        </Box>
        <Typography variant="h5" color="secondary">
          5
        </Typography>
        <Typography variant="h5" color="primary.contrastText">
          Вы получаете WOW-эффект
        </Typography>
      </Stack>
    </Box>
  )
}

export default PageExplanation
