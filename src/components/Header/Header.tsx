import React from 'react'
import { AppBar, Button, Grid, Link, Toolbar } from '@mui/material'

function Header() {
  return (
    <header>
      <AppBar position="relative">
        <Toolbar>
          <Grid
            container
            spacing={2}
            alignContent="center"
            justifyContent="right"
          >
            <Grid item>
              <Link href="#" color="secondary">
                Formats
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="secondary">
                About us
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="secondary">
                Gallery
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="secondary">
                Contacts
              </Link>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Order call
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
