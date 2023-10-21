import { Button, Stack, ButtonGroup, Drawer, IconButton } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

function SideMenu() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false)

  return (
    <>
      <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setSideMenuOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isSideMenuOpen}
        onClose={() => setSideMenuOpen(false)}
      >
        <Stack spacing={1} direction="column">
          <ButtonGroup orientation="vertical" arial-label="header button group">
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
        </Stack>
      </Drawer>
    </>
  )
}

export default SideMenu
