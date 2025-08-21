import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Body = () => {
   useEffect(() => {
    AOS.init({ duration: 1000 }); // 1000ms animation
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="bg-[url(/src/assets/img1.jpg)] h-80 sm:h-96 md:h-[32rem] bg-cover bg-center mt-2 flex flex-col justify-center items-center text-blue-950 space-y-4 rounded-2xl"
      >
        <div className="text-center font-serif rounded-full  px-2 py-4 bg-white sm:px-14 animate-bounce bg-opacity-50 shadow-lg text-4xl ">
          <h1 className="font-bold leading-16 ani ">CONNECT . CREATE <br/>AUGMENT YOUR <br/> REALITY </h1>
        
        </div>
      </div>
    </>
  )
}

export default Body
