import React, { useState } from 'react'
import Header from './components/Header/Header'
import PageIntro from './components/PageIntro/PageIntro'
import PageEventFormats from './components/PageEventFormats/PageEventFormats'
import PopupCall from './components/PopupCall/PopupCall'
import PageGallery from './components/PageGallery/PageGallery'
import PageExplanation from './components/PageExplanations/PageExplanation'
import Footer from './components/Footer/Footer'
import PageAboutUs from './components/PageAboutUs/PageAboutUs'
import { Container, CssBaseline, ThemeProvider, Box } from '@mui/material'
import pageTheme from './utils/pageTheme'
import PopupForm from './components/PopupForm/PopupForm'
import emailjs from 'emailjs-com'
import {
  contactService,
  contactTemplate,
  publicKey,
  questionsTemplate,
} from './utils/mailUtils'
import background from './images/pageTopBackground.jpg'
import { appBoxStyle, appContainerStyle, appTopImage } from './utils/appStyles'
import PopupWithImage from './components/PopupWithImage/PopupWithImage'

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
  const [isPopupImageOpen, setIsPopupImageOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState({})

  function handlePopupCallOpen() {
    setIsPopupCallOpen(true)
  }

  function handlePopupFormOpen() {
    setIsPopupFormOpen(true)
  }

  function handleImageClick(imageData) {
    setSelectedImage(imageData)
    console.log(imageData)
    setIsPopupImageOpen(true)
  }

  function handleAllPopupClose() {
    setIsPopupCallOpen(false)
    setIsPopupFormOpen(false)
    setIsPopupImageOpen(false)
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
      <Container sx={appContainerStyle}>
        <Box sx={appBoxStyle}>
          <img src={background} style={appTopImage} alt="back" />
        </Box>

        <Header onPopupCallClick={handlePopupCallOpen} />
        <PageIntro onPopupFormClick={handlePopupFormOpen} />
        <PageEventFormats />
        <PageAboutUs onPopupFormClick={handlePopupFormOpen} />
        <PageExplanation />
        <PageGallery onImageClick={handleImageClick} />
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

        <PopupWithImage
          image={selectedImage}
          isOpen={isPopupImageOpen}
          onClose={handleAllPopupClose}
        />
      </Container>
    </ThemeProvider>
  )
}
