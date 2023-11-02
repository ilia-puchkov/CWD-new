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
import emailjs from 'emailjs-com'
import {
  contactService,
  contactTemplate,
  publicKey,
  questionsTemplate,
} from './utils/mailUtils'

interface IContactData {
  name?: string
  phone?: string
}

interface IFormData {
  name: string
  phone: string
  question1?: string
  question2?: string
  question3?: string
  question4?: string
  question5?: string
  question6?: string
}

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

  function handleCallSubmit(contactData: IContactData) {
    emailjs
      .send(contactService, contactTemplate, contactData, publicKey)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  function handleFormSubmit(formData: IFormData) {
    emailjs
      .send(contactService, questionsTemplate, formData, publicKey)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <ThemeProvider theme={pageTheme}>
      <CssBaseline />
      <Container
        sx={{
          backgroundImage: `url(${backgroundNoise})`,
          '@media (max-width:600px)': {
            padding: '5px',
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

        <PopupCall
          isOpen={isPopupCallOpen}
          onClose={handleAllPopupClose}
          onSubmit={handleCallSubmit}
        />
        <PopupForm
          isOpen={isPopupFormOpen}
          onClose={handleAllPopupClose}
          onSubmit={handleFormSubmit}
        />
      </Container>
    </ThemeProvider>
  )
}
