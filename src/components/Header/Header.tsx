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

interface HeaderProps {
  onPopupCallClick: () => void
}

const headerButtonStyle = {
  width: '100%',
  margin: '0 5px',
  '&:hover': {
    background: 'none',
  },
}

function Header({ onPopupCallClick }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ paddingTop: '10px' }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            style={{ width: '100px', marginRight: '20px' }}
            src={logo}
            alt="page-logo"
          />
        </Box>
        <Stack spacing={2} direction="row">
          <Button
            onClick={onPopupCallClick}
            variant="outlined"
            color="secondary"
            size="small"
            sx={{
              transition: '.7s ease-in-out',
              ':hover': {
                bgcolor: 'secondary.main',
                color: 'white',
              },
              '@media (max-width:500px)': {
                fontSize: '11px',
                lineHeight: '11px',
                // height: '27px',
              },
            }}
          >
            Заказать звонок
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
          <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
            <Button
              variant="text"
              href="#formats"
              size="small"
              color="secondary"
              sx={headerButtonStyle}
            >
              Форматы
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
            <Button
              variant="text"
              href="#about"
              color="secondary"
              size="small"
              sx={headerButtonStyle}
            >
              О нас
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
            <Button
              variant="text"
              href="#gallery"
              color="secondary"
              size="small"
              sx={headerButtonStyle}
            >
              Галерея
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
            <Button
              variant="text"
              href="#contacts"
              color="secondary"
              size="small"
              sx={headerButtonStyle}
            >
              Контакты
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
