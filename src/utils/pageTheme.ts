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

export default pageTheme
