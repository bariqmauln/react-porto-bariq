import React from 'react'
import logo from '../assets/BariqMaulanaLogo.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/bariqmaulana/" target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href="https://github.com/bariqmauln" target='_blank' rel='noreferrer'><FaGithub /></a> 
      </div>
    </nav>
  )
}

export default Navbar
