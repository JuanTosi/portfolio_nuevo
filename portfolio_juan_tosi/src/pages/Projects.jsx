import React from 'react'
import Header from '../components/Header'
import MainProjects from '../components/MainProjects'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div>
      <Header />
        <div className="main">
        <MainProjects />
        </div>
        <Footer />
    </div>
  )
}

export default Projects