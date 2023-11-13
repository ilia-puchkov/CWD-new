import React, { useState } from 'react'
import Header from '../components/Header/Header'
import PageIntro from '../components/PageIntro/PageIntro'
import PageEventFormats from '../components/PageEventFormats/PageEventFormats'
import PopupCall from '../components/PopupCall/PopupCall'
import PageGallery from '../components/PageGallery/PageGallery'
import PageExplanation from '../components/PageExplanations/PageExplanation'
import Footer from '../components/Footer/Footer'
import PageAboutUs from '../components/PageAboutUs/PageAboutUs'
import { Container, Box } from '@mui/material'
import PopupForm from '../components/PopupForm/PopupForm'
import background from '../images/pageTopBackground.jpg'
import { appBoxStyle, appContainerStyle, appTopImage } from '../utils/appStyles'

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

function MainPage() {
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
    console.log(contactData)
  }

  function handleFormSubmit(formData: IFormData) {
    console.log(formData)
  }

  return (
    <Container sx={appContainerStyle}>
      <Box sx={appBoxStyle}>
        <img src={background} style={appTopImage} alt="back" />
      </Box>

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
  )
}

export default MainPage
