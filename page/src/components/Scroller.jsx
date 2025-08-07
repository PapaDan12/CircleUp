import React from 'react'

const Scroller = () => {
  return (
    <div
        className="flex flex-col items-center justify-center bg-gray-200 p-6 rounded-lg shadow-md space-y-4"
    >
      <video className="w-full h-auto" autoPlay loop muted>
        <source src="/src/assets/vid.mp4" type="video/mp4" />

      </video>
    </div>
  )
}

export default Scroller
