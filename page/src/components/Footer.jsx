import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="bg-gray-200 p-4 text-center text-blue-950 font-semibold w-full md:w-auto">
          <p>© 2023 CircleUp. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
        <div className="bg-gray-200 p-2 text-center text-blue-950 font-light w-full md:w-auto">
          <p>Follow us on:</p>
          <p className="space-x-2">
            <a href="https://web.facebook.com/daniel.oluwadare.142" target="_blank" rel="noopener noreferrer">
              <span className="cursor-pointer">Facebook</span>
            </a>
            <span className="cursor-pointer">Twitter</span>
            <span className="cursor-pointer">Instagram</span>
            <span className="cursor-pointer">LinkedIn</span>
          </p>
        </div>
        <div className="bg-gray-200 p-2 text-center text-blue-950 font-light w-full md:w-auto">
          <p>Contact us at: </p>
          <p className="text-blue-950 underline">
            <span className="cursor-pointer"> www.circleup.com/contact</span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
