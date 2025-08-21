import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Scroller = () => {
  return (
    <div
        className="flex flex-col items-center justify-center mt-2 bg-gray-200 p-6 rounded-lg shadow-md space-y-4"
    >
      <video className="w-full h-auto" autoPlay loop muted>
        <source src="/src/assets/scroll.mp4" type="video/mp4" />

      </video>
    </div>
  )
}

export default Scroller
