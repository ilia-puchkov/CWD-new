import { createTheme } from '@mui/material'

const pageTheme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'Merriweather', 'sans-serif'].join(','),
    h3: {
      fontSize: '2rem',
      color: 'red',
      margin: '0 0 0 10px',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
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
  '@media (max-width:900px)': {
    textAlign: 'center',
  },
  '@media (max-width:600px)': {
    fontSize: '2rem',
  },
}

pageTheme.typography.h2 = {
  fontSize: '2.5rem',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
}

pageTheme.typography.h5 = {
  fontSize: '1.3rem',
  fontWeight: '400',
  '@media (max-width:600px)': {
    fontSize: '1.1rem',
    textAlign: 'center',
  },
}

pageTheme.typography.subtitle1 = {
  fontSize: '1.5rem',
  '@media (max-width:600px)': {
    fontSize: '1rem',
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
  '@media (max-width:900px)': {
    fontSize: '14px',
    textAlign: 'center',
  },
}

export default pageTheme
