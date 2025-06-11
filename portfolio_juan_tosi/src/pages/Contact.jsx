import React from 'react'
import Header from '../components/Header'
import MainContact from '../components/MainContact'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Header />
        <div className="main">
        <MainContact />
        </div>
        <Footer />
    </div>
  )
}

export default Contact