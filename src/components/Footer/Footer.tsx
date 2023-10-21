import { Button, ButtonGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../images/cwd-logo.png'

function Footer() {
  return (
    <footer>
      <Stack spacing={3} direction="row">
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
      </Stack>
    </footer>
  )
}

export default Footer
