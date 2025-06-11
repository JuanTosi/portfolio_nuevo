import React from 'react'
import Header from '../components/Header'
import MainAboutMe from '../components/MainAboutMe'
import Footer from '../components/Footer'

const AboutMe = () => {
  return (
    <div>
<Header />
        <div className="main">
        <MainAboutMe />
        </div>
        <Footer />    </div>
  )
}

export default AboutMe