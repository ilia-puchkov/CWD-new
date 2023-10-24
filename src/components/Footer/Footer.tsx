import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../images/cwd-logo.png'

interface FooterProps {
  onPopupCallClick: () => void
}

function Footer({ onPopupCallClick }: FooterProps) {
  return (
    <Box component="footer" id="contacts" mt={5} pb={2}>
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
            <Button variant="text" href="#" size="small" color="secondary">
              Formats
            </Button>
            <Button
              variant="text"
              target="_blank"
              href="http://google.com"
              color="secondary"
              size="small"
            >
              About us
            </Button>
            <Button variant="text" href="#" color="secondary" size="small">
              Gallery
            </Button>
            <Button variant="text" href="#" color="secondary" size="small">
              Contacts
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
            <Button variant="text" href="#" size="small" color="secondary">
              Call
            </Button>
            <Button
              variant="text"
              target="_blank"
              href="#"
              color="secondary"
              size="small"
            >
              Write
            </Button>
            <Button variant="text" href="#" color="secondary" size="small">
              Telegram
            </Button>
            <Button variant="text" href="#" color="secondary" size="small">
              VK
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer
