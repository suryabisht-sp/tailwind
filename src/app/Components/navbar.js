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

    const handleChat = () => {
    router.push("./userChat")
  }
  return (
    <div>
      <div className="grid grid-column text-center sm:flex md:flex bg-pink-800">
        <h4 className="basis-4/12 p-2 sm:p-0 text-3xl text-orange-500 sm:block flex justify-center text-center">
          <div className="parent" >
            <div className="mx-4 bg-gradient-to-r from-pink-500 to-blue-500 ml-8 px-4 relative w-14 h-14 -left-2 rounded-full hover:animate-spin"></div>
            {/* <div className="motion-safe:animate-spin hover:animate-none relative w-12 h-12 bg-red-500 rounded-full mx-2 shadow-xl shadow-white"></div> */}
            <div className="absolute top-3 mx-2 sm:top-2 sm:left-0 w-1 h-1 bg-transparent-600 rounded-xl" onClick={() => { goHome() }}>
              <h4 className="text-white text-3xl">Unlike</h4>
            </div>
          </div>
        </h4>
        <h4 className="sm:flex basis-4/12 text-white hover:underline mt-4 hover:cursor-pointer" onClick={() => { goHome() }}>
          Home
        </h4>
        <h4 className="sm:flex basis-4/12 text-white hover:underline mt-4 hover:cursor-pointer" onClick={() => { contactus() }}>
          Contact
        </h4>
        <h4 className="sm:flex basis-4/12 text-white hover:underline mt-4 hover:cursor-pointer" onClick={() => { aboutUS() }}>
          KnowUs
        </h4>
         <h4 className="sm:flex basis-4/12 text-white hover:underline mt-4 hover:cursor-pointer" onClick={() => { aboutUS() }}>
          FAQ
        </h4>
         <a onClick={()=>{handleChat()}} class="flex items-center w-20 relative inset-x-1/3 ml-6 sm:left-0 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
              <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
      <form className='relative sm:contents left-1/3 w-1/3 rounded-md pr-2 ml-1 w-1/3'>
      <div class="relative rounded-md mt-2">
            <input type="search" placeholder="Search here..."
              className="rounded-md block p-2.5 w-full z-20 text-sm text-white bg-gray-50 
              rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500
              focus:border-blue-500 sm:px-2 bg-pink-800" required />
          </div>
        </form>
       <div>
          <details x-data x-ref="dropdown" className="relative inline-block text-left z-10">
            <summary>
       <img src="/defa.jpg" loading='lazy'
          width="112px"
          height="20px"
          className='rounded-full mt-1 nav-img'
                alt="user" />
              </summary>
       <details-menu role="menu" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1" role="none">
          <a className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100 hover:text-blue-900" role="menuitem">Signed in as Guest@gmail.com</a>
                <a className="block hover:cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {
                  profile()
          }}>Your Account</a>
          <a className=" hover:cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {
                  setting()
          }}>Settings</a>
          <form method="POST" action="#" role="none">
            <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Sign out
                  </button>
          <a className=" hover:cursor-pointer block mx-1 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
               <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
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