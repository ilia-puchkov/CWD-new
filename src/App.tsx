import React, { useState } from 'react'
import Header from './components/Header/Header'
import PageIntro from './components/PageIntro/PageIntro'
import PageEventFormats from './components/PageEventFormats/PageEventFormats'
import PopupCall from './components/PopupCall/PopupCall'
import PageGallery from './components/PageGallery/PageGallery'
import PageExplanation from './components/PageExplanations/PageExplanation'
import Footer from './components/Footer/Footer'
import PageAboutUs from './components/PageAboutUs/PageAboutUs'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import pageTheme from './utils/pageTheme'
import backgroundNoise from './images/page-background.png'
import PopupForm from './components/PopupForm/PopupForm'

export function App() {
  const [isPopupCallOpen, setIsPopupCallOpen] = useState(false)
  const [isPopupFormOpen, setIsPopupFormOpen] = useState(false)

  function handlePopupCallOpen() {
    setIsPopupCallOpen(true)
  }

  function handlePopupFormOpen() {
    setIsPopupFormOpen(true)
  }

  function handleAllPopupClose() {
    setIsPopupCallOpen(false)
    setIsPopupFormOpen(false)
  }

  return (
    <ThemeProvider theme={pageTheme}>
      <CssBaseline />
      <Container
        sx={{
          backgroundImage: `url(${backgroundNoise})`,
          '@media (max-width:600px)': {
            padding: '0',
          },
        }}
      >
        <Header onPopupCallClick={handlePopupCallOpen} />
        <PageIntro onPopupFormClick={handlePopupFormOpen} />
        <PageEventFormats />
        <PageAboutUs onPopupFormClick={handlePopupFormOpen} />
        <PageExplanation />
        <PageGallery />
        <Footer onPopupCallClick={handlePopupCallOpen} />

        <PopupCall isOpen={isPopupCallOpen} onClose={handleAllPopupClose} />
        <PopupForm isOpen={isPopupFormOpen} onClose={handleAllPopupClose} />
      </Container>
    </ThemeProvider>
  )
}
