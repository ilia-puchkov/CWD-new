import React from 'react'
import Header from './components/Header/Header'
import Test from './test'
import PageIntro from './components/PageIntro/PageIntro'
import PageEventFormats from './components/PageEventFormats/PageEventFormats'
import PopupCall from './components/PopupCall/PopupCall'
import PageGallery from './components/PageGallery/PageGallery'
import PageExplanation from './components/PageExplanations/PageExplanation'
import Footer from './components/Footer/Footer'

export function App() {
  return (
    <div>
      <Header />
      <PageIntro />
      <PageEventFormats />
      <PageExplanation />
      <PageGallery />
      <Footer />

      <Test />
      <PopupCall />
    </div>
  )
}
