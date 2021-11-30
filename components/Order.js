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
    <div className="card -m-8 lg:m-12 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form className="mt-2 space-y-6" action="#" method="POST">
      
        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label> 
          <input id="name" type="text" className="input input-bordered"/>
        </div> 
        
        
        <div className="form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label> 
          <input id="email" type="email" className="input input-bordered"/> 
        </div> 
       
       
      
        
        <div className="form-control">
          <label className="label" htmlFor="phone">
            <span className="label-text">Phone No.</span>
          </label> 
          <input id="phone" type="tel" className="input input-bordered"/>
        </div> 
        
       
        <div className="form-control">
          <label className="label" htmlFor="food">
            <span className="label-text">Type your Order</span>
          </label> 
          <input id="food" type="text" className="input input-bordered"/>
        </div> 
        
        
        <div className="form-control">
          <label className="label" htmlFor="address">
          <span className="label-text">Address</span>
          </label> 
         <textarea id="address" className="textarea h-24 textarea-bordered"></textarea>
        </div>
        <br/>
        <div className="form-control mt-2">
          <button type="submit" className="btn btn-error">Order Now</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default Order
