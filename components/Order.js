import React from 'react'
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

function Order() {
  const animcontainer = useRef(null)
    useEffect(()=>{
      lottie.loadAnimation({
        container:animcontainer.current,
        renderer:'svg',
        loop: true,
        autoplay:true,
        animationData:require('./foodorder.json')
      })
    },[])
    return (
      <div id="orders">
        <p className="font-Poppins pt-4 text-center text-3xl font-bold text-gray-800">
    Order Now
    </p>
        <div className="hero min-h-screen">
  <div className="flex-col justify-center hero-content lg:flex-row">
    <div className="lg:text-left">
    <div className="max-w-md rounded-lg container" ref={animcontainer}></div> 
    </div> 
  </div>
</div>
</div>
    )
}

export default Order
