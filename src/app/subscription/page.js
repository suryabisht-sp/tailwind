"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Subscriptions = (props) => {

  const router = useRouter()
   
  const handleSubscription = (props) => { 
    if (props ==="change") {
         router.push("./subscription/plans")
      }
  }
  return (
    <div className='relative'> <div className="absolute left-60 w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-2/3 lg:order-1 ">
      <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
        <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"  alt="" className="rounded-3xl w-20 h-20" />
        <div className="ml-5">
          <span className="block text-2xl font-semibold">Beginners</span>
          <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">10 </span></span><span className="text-gray-500 font-medium">/ Months</span>
        </div>
      </div>
      <ul className="mb-7 font-medium text-gray-500">
        <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Get started with sending <span className="text-black">private messages</span></span>
        </li>
        <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3">Choose timer for <span className="text-black">disappearing</span></span>
        </li>
        <li className="flex text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
          <span className="ml-3"><span className="text-black">Private Chats with</span> 10 users</span>
        </li>
      </ul>
      <a onClick={()=>{handleSubscription("change")}}className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
        Change plan
        <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
      </a>
    </div></div>
  )
}

export default Subscriptions