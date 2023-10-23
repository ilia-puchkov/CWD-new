import React from 'react'
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

export function App() {
  return (
    <ThemeProvider theme={pageTheme}>
      <CssBaseline />
      <Container
        sx={{ maxWidth: 1280, backgroundImage: `url(${backgroundNoise})` }}
      >
        <Header />
        <PageIntro />
        <PageEventFormats />
        <PageAboutUs />
        <PageExplanation />
        <PageGallery />
        <Footer />

        <PopupCall />
      </Container>
    </ThemeProvider>
  )
}
