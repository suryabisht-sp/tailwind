"use client"
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const Navbar = () => {
  const router = useRouter()

  const goHome = () => {
    router.push(`/`)
  }

  const contactus = () => {
    router.push(`/contactus`)
  }

  const aboutUS = () => {
    router.push(`/aboutus`)
  }

  const setting = () => {
     router.push(`/usersetting`)
  }

  const profile = () => {
    router.push(`/userprofile`)
  }
  return (
    <div>
      <div className="grid grid-column text-center sm:flex md:flex bg-pink-800">
        <h4 className="basis-4/12 p-2 sm:p-0 text-3xl text-orange-500 sm:block flex justify-center text-center">
          <div className="parent" >
            <div className="mx-4 bg-gradient-to-r from-pink-500 to-blue-500 px-4 relative w-14 h-14 -left-2 rounded-full hover:animate-spin"></div>
            {/* <div className="motion-safe:animate-spin hover:animate-none relative w-12 h-12 bg-red-500 rounded-full mx-2 shadow-xl shadow-white"></div> */}
            <div className="absolute top-3 mx-1 sm:top-2 sm:left-0 w-1 h-1 bg-transparent-600 rounded-xl" onClick={() => { goHome() }}>
              <h4 className="capitalise center text-white text-3xl">Unlike</h4>
            </div>
          </div>
        </h4>
        <h4 className="basis-4/12 text-2xl text-white hover:underline mt-2 hover:cursor-pointer" onClick={() => { goHome() }}>
          Home
        </h4>
        <h4 className="basis-4/12 text-2xl text-white hover:underline mt-2 hover:cursor-pointer" onClick={() => { contactus() }}>
          Contact
        </h4>
        <h4 className="basis-4/12 text-2xl text-white hover:underline mt-2 hover:cursor-pointer" onClick={() => { aboutUS() }}>
          KnowUs
        </h4>
        <input placeholder="Search here..." className="m-5 sm:m-0 sm:px-2 bg-pink-800 border-2 border-pink-700" />
       <div>
          <details x-data x-ref="dropdown" class="relative inline-block text-left z-10">
            <summary>
       <Image src="/defa.jpg" loading='lazy'
          width={80}
          height={20}
          className='rounded-full p-3'
                alt="user" />
              </summary>
       <details-menu role="menu" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1" role="none">
          <a className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100 hover:text-blue-900" role="menuitem">Signed in as Guest@gmail.com</a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {
                  profile()
          }}>Your Account</a>
          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {
                  setting()
          }}>Settings</a>
          <form method="POST" action="#" role="none">
            <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Sign out
            </button>
          </form>
        </div>
      </details-menu>
    </details>
</div>
      </div>
    </div>
  )
}
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });