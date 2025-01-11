import React from 'react'
import TopNavbar from '../components/TopNavbar'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Plink from '../components/Plink'
import HServices from '../components/HServices'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skill'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#121212] text-red'>
      <TopNavbar />
      <Navbar />
      <Header />
      <Plink />
      <Experience />
      <Portfolio />
      <br />
      <HServices />
      <Skills />
      <AboutMe />
   <Contact />
   <Footer />
    </div>
  )
}

export default Home
