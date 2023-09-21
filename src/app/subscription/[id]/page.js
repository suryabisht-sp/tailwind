"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Subscriptions = ({ plans }) => {
  const router = useRouter()
  const [newPlans, setNewPlans] = useState(false)
  const handleSubscribe = (id) => {
    router.push(`../checkout/${id}`)
  }
  return (
    <div className="max-w-6xl mx-auto pt-10 pb-36 px-8">

      <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl"><span className="text-indigo-600">Flexible</span> Plans</h1>
        <p className="text-xl text-gray-500 font-medium">Choose a plan that works best for you.</p>
      </div>

      <div className="flex flex-col justify-between gap-10 items-center lg:flex-row lg:items-start">

        <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 cursor-pointer
                                py-6 rounded-lg transform
                                transition duration-500 hover:scale-110 ">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg" alt="" className="rounded-3xl w-20 h-20" />
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
          <a onClick={() => { handleSubscribe("0") }} className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
            Choose Plan
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
          </a>
        </div>

        <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 cursor-pointer
                                py-6 rounded-lg transform
                                transition duration-500 hover:scale-110 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <img src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg" alt="" className="rounded-3xl w-20 h-20" />
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-white">Intermediate</span>
              <span><span className="font-medium text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold text-white">24 </span></span><span className="font-medium">/ Months</span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
            <li className="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">Send Private messages <span className="text-white">upto 50 users</span></span>
            </li>
            <li className="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">Hidden card <span className="text-white">check the views</span></span>
            </li>
            <li className="flex">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3"><span className="text-white">Timer with Screenshot blocking and send videos upto</span> 5 mins</span>
            </li>
          </ul>
          <a onClick={() => { handleSubscribe("1") }} className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl">
            Choose Plan
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
          </a>
        </div>
        <div className="w-full flex-1 cursor-pointer
                 py-6 rounded-lg transform
                                transition duration-500 hover:scale-110 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg" alt="" className="rounded-3xl w-20 h-20" />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Advance</span>
              <span><span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span><span className="text-3xl font-bold">35 </span></span><span className="text-gray-500 font-medium">/ Months</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">All features of <span className="text-black">Intermediate</span></span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">Unlimited access for private messages and <span className="text-black">Videos</span></span>
            </li>
            <li className="flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"><span className="text-black">Check who</span> blocked you</span>
            </li>
          </ul>
          <a onClick={() => { handleSubscribe("2") }} className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl">
            Choose Plan
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Subscriptions