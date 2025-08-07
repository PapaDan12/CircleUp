import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-200 p-4 shadow-md sticky top-0 z-50 rounded-lg">
        <div className="flex justify-between items-center">
          <Link to="/">
          <h1 className="text-2xl bg-amber-300 rounded-full px-2 py-2 font-bold text-blue-950 cursor-pointer hover:bg-amber-400 transition-colors duration-300">
            CircleUp
          </h1>
          </Link>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-blue-950 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 text-blue-950 font-semibold">
          <Link to="/two">  <li className='cursor-pointer'>FEATURES</li> </Link>
          <Link to="/three"> <li className='cursor-pointer'>PRIVACY</li></Link>
          <Link to="/fourth"> <li className='cursor-pointer'>HELP CENTER</li></Link>
          <Link to="/fifth">  <li className='cursor-pointer'>BLOG</li> </Link>
          </ul>
          <div className="hidden md:flex space-x-2">
            <Link to="/seventh">
            <p className="text-blue-950 bg-white px-2 py-2 rounded-full font-semibold cursor-pointer hover:bg-gray-300 transition-colors duration-300">
              LOG IN
            </p>
            </Link>
            <Link to="/sixth">
            <p className="bg-blue-950 text-white rounded-full px-2 py-2 font-semibold cursor-pointer hover:bg-blue-800 transition-colors duration-300">
              SIGN UP
            </p>
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2 text-blue-950 font-semibold">
              <Link to="/two">  <li className='cursor-pointer'>FEATURES</li> </Link>
              <Link to="/three"> <li className='cursor-pointer'>PRIVACY</li></Link>
              <Link to="/fourth"> <li className='cursor-pointer'>HELP CENTER</li></Link>
              <Link to="/fifth">  <li className='cursor-pointer'>BLOG</li> </Link>
            </ul>
            <div className="flex flex-col space-y-2 mt-2">
              <p className="text-blue-950 bg-white px-2 py-2 rounded-full font-semibold cursor-pointer hover:bg-gray-300 transition-colors duration-300">
                LOG IN
              </p>
              <p className="bg-blue-950 text-white rounded-full px-2 py-2 font-semibold cursor-pointer hover:bg-blue-800 transition-colors duration-300 ">
                SIGN UP
              </p>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
