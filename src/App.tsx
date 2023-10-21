import React from 'react'
import Header from './components/Header/Header'
import Test from './test'
import PageIntro from './components/PageIntro/PageIntro'
import PageEventFormats from './components/PageEventFormats/PageEventFormats'
import PopupCall from './components/PopupCall/PopupCall'
import PageGallery from './components/PageGallery/PageGallery'

export function App() {
  return (
    <div>
      <Header />
      <PageIntro />
      <PageEventFormats />
      <PageGallery />
      <Test />
      <PopupCall />
    </div>
  )
}
