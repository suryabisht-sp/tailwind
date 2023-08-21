"use client"
import { useRouter } from 'next/navigation'
import React, {useState,useEffect } from 'react'
import dynamic from 'next/dynamic'
const Navbar = () => {
  const router = useRouter()
  const [test, setTest] = useState(false)

  useEffect(() => {
    goHome()
  }, [test])
  
  const goHome = () => [
    router.push(`/`)
  ]

  return (
    <div>
      <div className="grid grid-column text-center sm:flex md:flex bg-pink-800">
        <h1 className="basis-4/12 p-2 sm:p-0 text-3xl text-orange-500 sm:block flex justify-center text-center">
          <div className="parent" >
            <div className="mx-4 bg-gradient-to-r from-pink-500 to-blue-500 px-4 relative w-14 h-14 -left-2 rounded-full hover:animate-spin"></div>
            {/* <div className="motion-safe:animate-spin hover:animate-none relative w-12 h-12 bg-red-500 rounded-full mx-2 shadow-xl shadow-white"></div> */}
            <div className="absolute top-3 mx-1 sm:top-2 sm:left-0 w-1 h-1 bg-transparent-600 rounded-xl" onClick={()=>{setTest(!test)}}>
              <h3 className="capitalise center text-white text-3xl">Logo</h3>
            </div>
          </div>
        </h1>
        <h1 className="basis-4/12 text-2xl text-white hover:underline mt-2 hover:cursor-pointer" onClick={()=>{setTest(!test)}}>
          Home
        </h1>
        <h1 className="basis-4/12 text-2xl text-white hover:underline mt-2 hover:cursor-pointer" onClick={()=>{setTest(!test)}}>
          Contact
        </h1>
        <h1 className="basis-4/12 text-2xl text-white hover:underline mt-2 hover:cursor-pointer" onClick={()=>{setTest(!test)}}>
          About
        </h1>
        <input placeholder="Search here..." className="m-5 sm:m-0 sm:px-2 bg-pink-800 border-2 border-pink-700" />
      </div></div>
  )
}
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });