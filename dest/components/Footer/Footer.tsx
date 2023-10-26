import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../images/cwd-logo.png'

interface FooterProps {
  onPopupCallClick: () => void
}

function Footer({ onPopupCallClick }: FooterProps) {
  return (
    <Box component="footer" id="contacts" pt={5} pb={2}>
      <Typography variant="h2" color="primary.main" mb={1} textAlign={'center'}>
        Остались вопросы?
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        sx={{ width: '99%' }}
      >
        <Stack spacing={1}>
          <ButtonGroup
            orientation="vertical"
            arial-label="footer navigation button group"
          >
            <Button
              variant="text"
              href="#formats"
              size="small"
              color="secondary"
            >
              Форматы
            </Button>
            <Button variant="text" href="#about" color="secondary" size="small">
              О нас
            </Button>
            <Button
              variant="text"
              href="#gallery"
              color="secondary"
              size="small"
            >
              Галерея
            </Button>
            <Button
              variant="text"
              href="#contacts"
              color="secondary"
              size="small"
            >
              Контакты
            </Button>
          </ButtonGroup>
        </Stack>
        <Stack
          spacing={1}
          direction="column"
          display={'flex'}
          flexDirection={'column'}
          justifyItems={'center'}
        >
          <Button
            onClick={onPopupCallClick}
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              maxWidth: '120px',
              fontSize: '10px',
              transition: '.7s ease-in-out',
              ':hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            Заказать звонок
          </Button>
          <img
            style={{ width: '90px', margin: '10px auto 0' }}
            src={logo}
            alt="footer-logo"
          />
          <Typography variant="body1" color="primary" textAlign={'center'}>
            Create wow Date
          </Typography>
        </Stack>
        <Stack spacing={1} direction="column" justifyContent={'space-between'}>
          <ButtonGroup
            orientation="vertical"
            arial-label="footer contacts button group"
          >
            <Button
              variant="text"
              href="tel:+9971863733"
              size="small"
              color="secondary"
            >
              Позвонить
            </Button>
            <Button
              variant="text"
              target="_blank"
              href="#"
              color="secondary"
              size="small"
            >
              Написать
            </Button>
            <Button variant="text" href="#" color="secondary" size="small">
              Telegram
            </Button>
            <Button variant="text" href="#" color="secondary" size="small">
              ВКонтакте
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer
