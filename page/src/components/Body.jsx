import React from 'react'

const Body = () => {
  return (
    <>
      <div 
        className="bg-[url(/src/assets/img1.jpg)] h-80 sm:h-96 md:h-[32rem] bg-cover bg-center mt-2 flex flex-col justify-center items-center text-blue-950 space-y-4 rounded-2xl"
      >
        <div className="text-center font-serif rounded-full px-2 py-2 w-11/12 sm:w-3/4 md:w-1/2 bg-white bg-opacity-50 shadow-lg text-2xl sm:text-3xl md:text-4xl">
          <h1 className="font-bold mb-4">CONNECT . CREATE </h1>
          <h1 className="font-bold mb-4">AUGMENT YOUR</h1>
          <h1 className="font-bold mb-4"> REALITY</h1>
        </div>
      </div>
    </>
  )
}

export default Body
