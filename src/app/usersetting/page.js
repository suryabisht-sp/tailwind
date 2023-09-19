"use client"

import Image from "next/image"
import { useState } from "react"
import Editform from "../Components/editform"
import Modal from "../Components/modal"
import { useRouter } from "next/navigation"

const Settings = () => {
  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const router=useRouter
  const showEditBio = () => {
    setShow(!show)
  }

  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)
    const [del, setDel] = useState(false)
  
  const handleModal = () => {
    setShowModal(!showModal)
    setPassword(true)
    setEmail(false)
     setDel(false)
  }

  const handleEmail = () => {
    setEmail(true)
    setShowModal(!showModal)
    setDel(false)
    setPassword(false)
  }

    const handleDel = () => {
    setDel(true)
      setShowModal(!showModal)
      setEmail(false)
        setPassword(false)
    }
  

  return (
    <div className="relative" >
      {!show && <div>      <div><h1 className="p-5">Profile</h1></div>
        <Image className="w-24 rounded-full h-24 top-0 inset-x-1/3 sm:left-0 m-5 relative sm:top-0 sm:left" src="/defa.jpg" width={60} height={60} alt="Picture"/>
        <button className="p-2 relative inset-x-1/3 ml-8 sm:ml-5 sm:left-0 rounded-md m-5 bg-blue-500 hover:bg-red-500 transition ease-in delay-80 hover:text-white" onClick={() => { showEditBio() }}>Edit Bio</button>
        <div className="flex flex-wrap m-5 flex-col gap-2">
          <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Privacy and security</span>
          <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer"
            data-modal-target="popup-modal" data-modal-toggle="popup-modal" onClick={()=>{handleModal()}}>Change Password</span>
          <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer" onClick={()=>{handleEmail()}}>Change Email</span>
          <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Read Agreement</span>
          <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Payment and subscription</span>
          <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">About</span>
          <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Help and Support</span>
          <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer" onClick={() => { handleDel() }}>Deactivate</span>
        </div>
      </div>}
      {show && <Editform showEditBio={showEditBio} />}
      {showModal && <Modal handleModal={ handleModal} email={email} password={password} del={del} />}
    </div>
  )
}

export default Settings