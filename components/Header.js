import React from 'react';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

function First() {
    const animcontainer = useRef(null)
    useEffect(()=>{
      lottie.loadAnimation({
        container:animcontainer.current,
        renderer:'svg',
        loop: true,
        autoplay:true,
        animationData:require('./delivery.json')
      })
    },[])
    return (
        <div className="hero min-h-screen font-Poppins">
        <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="max-w-xl rounded-lg container" ref={animcontainer}></div> 
          <div>
            <h1 className="p-4 mb-5 text-5xl  font-bold">
            TASTY TREATS &#128523;
                </h1> 
            <button className="p-4 btn btn-outline btn-error rounded-full">ORDER NOW</button>
          </div>
        </div>
      </div>      
    )
}

export default First
