import { Typography, Box, Stack } from '@mui/material'
import React from 'react'

function PageExplanation() {
  return (
    <Box component="section" id="explanations" mt={5}>
      <Typography variant="h2" color="primary.main">
        КАК ЭТО РАБОТАЕТ?
      </Typography>
      <Stack direction="row" display={'flex'} alignItems={'center'}>
        <hr
          style={{
            height: '2px',
            boxShadow: '0px 0px 2px 1px #F02ED1',
            width: '5%',
            margin: 0,
            backgroundColor: '#F02ED1',
            border: 'none',
            borderRadius: '1px',
          }}
        ></hr>
        <Typography
          variant="subtitle2"
          color="secondary"
          sx={{
            fontSize: '20px',
            boxShadow: 3,
          }}
          ml={1}
          mr={1}
        >
          1
        </Typography>
        <Typography variant="subtitle2" color="primary.contrastText">
          Вы заполняете анкету
        </Typography>
      </Stack>
      <Stack direction="row" display={'flex'} alignItems={'center'}>
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
        <Typography
          variant="subtitle2"
          color="secondary"
          sx={{
            fontSize: '20px',
            boxShadow: 3,
          }}
          ml={1}
          mr={1}
        >
          2
        </Typography>
        <Typography variant="subtitle2" color="primary.contrastText">
          Мы уточняем детали
        </Typography>
      </Stack>
      <Stack direction="row" display={'flex'} alignItems={'center'}>
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
        <Typography
          variant="subtitle2"
          color="secondary"
          sx={{
            fontSize: '20px',
            boxShadow: 3,
          }}
          ml={1}
          mr={1}
        >
          3
        </Typography>
        <Typography variant="subtitle2" color="primary.contrastText">
          Вы выбираете сценарий
        </Typography>
      </Stack>
      <Stack direction="row" display={'flex'} alignItems={'center'}>
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
        <Typography
          variant="subtitle2"
          color="secondary"
          sx={{
            fontSize: '20px',
            boxShadow: 3,
          }}
          ml={1}
          mr={1}
        >
          4
        </Typography>
        <Typography variant="subtitle2" color="primary.contrastText">
          Мы воплощаем его в жизнь
        </Typography>
      </Stack>
      <Stack direction="row" display={'flex'} alignItems={'center'}>
        <hr
          style={{
            height: '2px',
            boxShadow: '0px 0px 2px 1px #F02ED1',
            width: '5%',
            margin: 0,
            backgroundColor: '#F02ED1',
            border: 'none',
            borderRadius: '1px',
          }}
        ></hr>
        <Typography
          variant="subtitle2"
          color="secondary"
          sx={{
            fontSize: '20px',
            boxShadow: 3,
          }}
          ml={1}
          mr={1}
        >
          5
        </Typography>{' '}
        <Typography variant="subtitle2" color="primary.contrastText">
          Вы получаете WOW-эффект
        </Typography>
      </Stack>
    </Box>
  )
}

export default PageExplanation
