import React from 'react'
import dimg from '../assets/image1.png'
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div className='bg-[#121212] mt-6 px-20 grid grid-cols-1 md:grid-cols-2 items-center'>
    <div>
      <h1 className='text-[#E9DCC9] text-5xl font-bold text-start'>Hi there!</h1>
      <h1 className='text-[#E9DCC9] text-5xl font-bold text-start'>I’m Dino Raj,</h1><br />
      <p className='text-[#a49c8f] text-xl text-start py-2'>Full Stack Developer and Coding Enthusiast.</p>
      <p className='text-[#a49c8f] text-lg text-start py-1'>With 3+ years of experience, I have developed and deployed over 10+ projects, including client work at Unibluweb. I am passionate about coding and I'm always curious to learn and grow. With a focus on Full Stack Development, I specialize in creating dynamic and interactive web applications.
      </p>
      <br />
      <Link to="/#contact"> <button className='p-2 bg-blue-600 hover:bg-blue-900 text-white rounded-md flex items-center'>
        <span className="mx-2"> Hire Me</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button></Link>
    </div>
    <div className='hidden md:block'>
      <img src={dimg} alt="Dino Raj" className="w-80 h-80 rounded-full mx-auto mb-4 shadow-lg" />
    </div>
  </div>
  )
}

export default Header
