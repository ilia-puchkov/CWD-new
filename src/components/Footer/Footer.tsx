import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../images/cwd-logo.png'

function Footer() {
  return (
    <footer id="contacts">
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        sx={{ width: '95%' }}
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
        <Stack spacing={1} direction="column">
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={{
              transition: '.7s ease-in-out',
              ':hover': {
                bgcolor: 'secondary.main',
                color: 'white',
              },
            }}
          >
            Order call
          </Button>
          <img style={{ width: '100px' }} src={logo} alt="footer-logo" />
          <Typography variant="h6">Create wow Date</Typography>
        </Stack>
        <Stack spacing={1} direction="column">
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
    </footer>
  )
}

export default Footer
