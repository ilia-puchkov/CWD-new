import { Typography, Box, Stack } from '@mui/material'
import React from 'react'

function PageExplanation() {
  return (
    <Box component="section" id="explanations" mt={5}>
      <Typography variant="h2" color="primary.main">
        Как это работает?
      </Typography>
      <Stack direction="row" display={'flex'} alignItems={'center'} mt={2}>
        <hr
          style={{
            height: '2px',
            boxShadow: '0px 0px 2px 1px #F02ED1',
            width: '10%',
            margin: 0,
            backgroundColor: '#F02ED1',
            border: 'none',
            borderRadius: '1px',
          }}
        ></hr>
        <Typography variant="h3" color="secondary">
          1
        </Typography>
        <Typography variant="h3" color="primary.contrastText">
          Вы заполняете анкету
        </Typography>
      </Stack>
      <Stack direction="row" display={'flex'} alignItems={'center'} mt={2}>
        <hr
          style={{
            height: '2px',
            boxShadow: '0px 0px 2px 1px #F02ED1',
            width: '15%',
            margin: 0,
            backgroundColor: '#F02ED1',
            border: 'none',
            borderRadius: '1px',
          }}
        ></hr>
        <Typography variant="h3" color="secondary">
          2
        </Typography>
        <Typography variant="h3" color="primary.contrastText">
          Мы уточняем детали
        </Typography>
      </Stack>
      <Stack direction="row" display={'flex'} alignItems={'center'} mt={2}>
        <hr
          style={{
            height: '2px',
            boxShadow: '0px 0px 2px 1px #F02ED1',
            width: '20%',
            margin: 0,
            backgroundColor: '#F02ED1',
            border: 'none',
            borderRadius: '1px',
          }}
        ></hr>
        <Typography variant="h3" color="secondary">
          3
        </Typography>
        <Typography variant="h3" color="primary.contrastText">
          Вы выбираете сценарий
        </Typography>
      </Stack>
      <Stack direction="row" display={'flex'} alignItems={'center'} mt={2}>
        <hr
          style={{
            height: '2px',
            boxShadow: '0px 0px 2px 1px #F02ED1',
            width: '15%',
            margin: 0,
            backgroundColor: '#F02ED1',
            border: 'none',
            borderRadius: '1px',
          }}
        ></hr>
        <Typography variant="h3" color="secondary">
          4
        </Typography>
        <Typography variant="h3" color="primary.contrastText">
          Мы воплощаем его в жизнь
        </Typography>
      </Stack>
      <Stack direction="row" display={'flex'} alignItems={'center'} mt={2}>
        <hr
          style={{
            height: '2px',
            boxShadow: '0px 0px 2px 1px #F02ED1',
            width: '10%',
            margin: 0,
            backgroundColor: '#F02ED1',
            border: 'none',
            borderRadius: '1px',
          }}
        ></hr>
        <Typography variant="h3" color="secondary">
          5
        </Typography>{' '}
        <Typography variant="h3" color="primary.contrastText">
          Вы получаете WOW-эффект
        </Typography>
      </Stack>
    </Box>
  )
}

export default PageExplanation
