import React from 'react'
import Header from './components/Header/Header'
import Test from './test'
import PageIntro from './components/PageIntro/PageIntro'
import PageEventFormats from './components/PageEventFormats/PageEventFormats'

export function App() {
  return (
    <div>
      <Header />
      <PageIntro />
      <PageEventFormats />
      <Test />
    </div>
  )
}
