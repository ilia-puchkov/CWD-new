import React from 'react'
import { AppBar, Button, Stack, Toolbar } from '@mui/material'

function Header() {
  return (
    <header>
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <Stack spacing={1} direction="row">
            <Button variant="text" href="#" color="info">
              Formats
            </Button>
            <Button
              variant="text"
              target="_blank"
              href="http://google.com"
              color="info"
            >
              About us
            </Button>
            <Button variant="text" href="#" color="info">
              Gallery
            </Button>
            <Button variant="text" href="#" color="info">
              Contacts
            </Button>
            <Button
              variant="outlined"
              color="info"
              sx={{
                ':hover': {
                  bgcolor: 'primary.main', // theme.palette.primary.main
                  color: 'white',
                },
              }}
            >
              Order call
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
