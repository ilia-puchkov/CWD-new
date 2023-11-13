import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import pageTheme from './utils/pageTheme'
import MainPage from './pages/MainPage'
import RequestPage from './pages/RequestPage'

export function App() {
  return (
    <ThemeProvider theme={pageTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="requests" element={<RequestPage />} />
      </Routes>
    </ThemeProvider>
  )
}
