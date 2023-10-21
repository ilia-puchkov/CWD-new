import React from 'react'
import { AppBar, Button, ButtonGroup, Stack, Toolbar } from '@mui/material'
import SideMenu from '../SideMenu/SideMenu'

function Header() {
  return (
    <AppBar
      position="relative"
      color="transparent"
      elevation={0}
      sx={{ justifyContent: 'space-between' }}
    >
      <Toolbar sx={{ marginLeft: 'auto' }}>
        <Stack spacing={1} direction="row">
          <ButtonGroup arial-label="header button group">
            <Button
              variant="text"
              href="#formats"
              size="small"
              color="secondary"
            >
              Formats
            </Button>
            <Button variant="text" href="#about" color="secondary" size="small">
              About us
            </Button>
            <Button
              variant="text"
              href="#gallery"
              color="secondary"
              size="small"
            >
              Gallery
            </Button>
            <Button
              variant="text"
              href="#contacts"
              color="secondary"
              size="small"
            >
              Contacts
            </Button>
          </ButtonGroup>
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
          <SideMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
