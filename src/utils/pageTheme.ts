import { createTheme } from '@mui/material'

const pageTheme = createTheme({
  palette: {
    primary: {
      main: '#2ec2f0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f02ed1',
      contrastText: '#fff',
    },
    background: {
      default: '#1B1B1B',
    },
  },
})

pageTheme.typography.h1 = {
  fontSize: '4rem',
  '@media (max-width:600px)': {
    fontSize: '2rem',
    textAlign: 'center',
  },
}

pageTheme.typography.h2 = {
  fontSize: '2.5rem',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
}

pageTheme.typography.subtitle1 = {
  fontSize: '1rem',
  '@media (max-width:600px)': {
    textAlign: 'center',
  },
}

pageTheme.typography.subtitle2 = {
  fontSize: '1rem',
  '@media (max-width:600px)': {
    textAlign: 'left',
  },
}

pageTheme.typography.body2 = {
  '@media (max-width:600px)': {
    fontSize: '14px',
    textAlign: 'center',
  },
}

// pageTheme = responsiveFontSizes(pageTheme)

export default pageTheme
