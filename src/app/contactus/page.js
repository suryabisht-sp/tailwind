"use client"

import { useState } from "react"
import PopupChat from "../Components/popupchat"

const ContactUs = () => {
  const[showchat, setShowChat]=useState(false)
  const handlesupportChat = () => {
    setShowChat(true)
  }
  return (
       <div className="antialiased text-gray-900 px-6 border-2">
      <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
        <div className="py-6">
          <h1 className="text-4xl font-bold">Contact Form</h1>
          <p className="mt-2 text-lg text-gray-600">
            An opinionated form to provide better solution within time.
          </p>
          <div className="mt-4 flex space-x-4">
            <a className="text-lg underline cursor-pointer" href="/"
              >Phone </a>
            <a className="text-lg underline cursor-pointer" onClick={()=>{handlesupportChat()}}>Chat</a>
          </div>
        </div>
        <div className="py-6">
          <h2 className="text-2xl font-bold">Contact Form</h2>
          <p className="mt-2 text-lg text-gray-600">Please fill the below form</p>
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input type="text" className="mt-1 block w-full" placeholder="" />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input type="email"  required className="mt-1 block w-full" placeholder="john@example.com" />
              </label>
              <label className="block">
                <span className="text-gray-700">What type of issue is it?</span>
                <select className="block w-full mt-1">
                  <option>Account</option>
                  <option>Subcription</option>
                  <option>Profile</option>
                    <option>Posting</option>
                    <option>Spam</option>
                        <option>Report</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Additional Information</span>
                <textarea className="mt-1 block w-full" rows="3"></textarea>
              </label>
              <div className="block">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input type="checkbox"/>
                      <span className="ml-2">Email me a copy of the submitted form</span>
                    </label>
                  </div>
                </div>
                </div>
                <button className="hover:cursor-pointer bg-pink-800 hover:text-white rounded-xl hover:bg-blue-700 transition ease-in delay-10">Submit</button>
            </div>
          </div>
        </div>
       </div>
   {showchat && <PopupChat/>}
    </div>
  )
}

export default ContactUs