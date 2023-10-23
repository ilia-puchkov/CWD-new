import React, { useState } from 'react'
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  Toolbar,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../../images/cwd-logo.png'

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            style={{ width: '70px', marginRight: '20px' }}
            src={logo}
            alt="page-logo"
          />
        </Box>
        <Stack spacing={2} direction="row">
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
          <IconButton
            id="menu-button"
            size="small"
            edge="start"
            color="secondary"
            aria-label="logo"
            onClick={handleClick}
            aria-controls={open ? 'page-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
        <Menu
          sx={{ paddingTop: 0, paddingBottom: 0 }}
          id="page-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'menu-button',
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Button
              variant="text"
              href="#formats"
              size="small"
              color="secondary"
              sx={{
                '&:hover': {
                  background: 'none',
                },
              }}
            >
              Formats
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button
              variant="text"
              href="#about"
              color="secondary"
              size="small"
              sx={{
                '&:hover': {
                  background: 'none',
                },
              }}
            >
              About us
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button
              variant="text"
              href="#gallery"
              color="secondary"
              size="small"
              sx={{
                '&:hover': {
                  background: 'none',
                },
              }}
            >
              Gallery
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button
              variant="text"
              href="#contacts"
              color="secondary"
              size="small"
              sx={{
                '&:hover': {
                  background: 'none',
                },
              }}
            >
              Contacts
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
