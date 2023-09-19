"use client"
import Image from "next/image"
import { useState } from "react"
import Editform from "../Components/editform"

const Profile = () => {
  const [show, setShow] = useState(false)
  const showEditBio = () => {
    setShow(!show)
  }
  return (
    <div>
      {!show && <div>
        <div><h1 className="p-5">Profile</h1></div>
        <Image className="w-24 rounded-full h-24 top-20 m-5" src="/defa.jpg" width={60} height={60} alt="Picture" />
        <span className="p-5">Bio</span>
        <p className="text-red-800 m-5">Name: Guest</p>
        <p className="text-red-800 m-5">Email: Guest@gmail.com</p>
        <p className="text-red-800 m-5">Contact: +1-7500000000</p>
        <p className="text-red-800 m-5">Address: 562/5 Baltimore</p>
        <p className="text-red-800 m-5">Pin: 432100</p>
        <p className="text-red-800 m-5">Bio: Here is an interesting thing about unlike  </p>
        <p className="text-red-800 m-5">Gender:{" "} <input type="radio" checked /> Male{" "}</p>
        <button className="p-2 m-5 hover:cursor-pointer bg-pink-800 hover:text-white rounded-xl hover:bg-blue-700 transition ease-in delay-10" onClick={()=>{showEditBio()}}>Edit Profile</button>
      </div>}
        {show && <Editform showEditBio={showEditBio} /> }
    </div>
  )
}

export default Profile;