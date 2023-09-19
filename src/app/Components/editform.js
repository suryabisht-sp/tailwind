"use client"

import React, { useState } from 'react'

const Editform = ({showEditBio}) => {
  const handleCancle = () => {
    showEditBio()
  }
  const [fullName, setFullName] = useState("Guest")
    const[mobile, setMobile]=useState(" +1-7500000000")
  return (
    <div className="antialiased text-gray-900 px-6 border-2 relative">
      <div className="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
        <div className="py-8">
          <h1 className="text-4xl font-bold">Edit Bio Info</h1>
          <p className="mt-2 text-lg text-gray-600">
            You can change your name only once.
          </p>
        </div>
        <div className="py-5 relative">
          <h2 className="text-2xl font-bold">Edit Form</h2>
          <p className="mt-2 text-sm text-red-600">You can't update your email<p className='text-red-600 mt-2 imp-position'>*</p></p>
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input type="text" className="mt-1 block w-full text-black-800" defaultValue={fullName} />
              </label>
               <label className="block">
                <span className="text-gray-700">@Handler</span>
                <input type="text" className="mt-1 block w-full text-black-800" defaultValue={"@"+fullName} />
              </label>
               <label className="block">
                <span className="text-gray-700 disabled">Email address</span>
                <input type="email" disabled required className="mt-1 block w-full" placeholder="guest@gmail.com" />
              </label>
               <label className="block">
                <span className="text-gray-700 disabled">Contact</span>
                <input type="email" required className="mt-1 block w-full" defaultValue={mobile}/>
              </label>
               <label className="block">
                <span className="text-gray-700">Address</span>
                <input type="text" className="mt-1 block w-full text-black-800" defaultValue={"562/5 Baltimore"} />
              </label>
               <label className="block">
                <span className="text-gray-700">Zip Code</span>
                <input type="text" className="mt-1 block w-full text-black-800" defaultValue={432100} />
              </label>
               <label className="block">
                <span className="text-gray-700">Gender </span>
                <input type="radio" checked  onChange={()=>{""}}/> Male {" "}
                <input type="radio" /> Female  {" "}
                <input type="radio"/> Others {" "}
              </label>
              <label className="block">
                <span className="text-gray-700">Hobbies & Interest</span>
                <select className="block w-full mt-1">
                   <option disabled select className='text-grey-800 bg-gray-200'>---Select---</option>
                  <option>Reading</option>
                  <option>Playing</option>
                  <option>Sleeping</option>
                    <option>Treking/Hiking</option>
                    <option>Sports</option>
                  <option>Travel</option>
                  <option>Gardening</option>
                  <option>Cooking</option>
                    <option>Driving/Riding</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Bio</span>
                <textarea className="mt-1 block w-full" value onChange={()=>{""} } rows="3">Here is an interesting thing about unlike</textarea>
              </label>
              <button className="hover:cursor-pointer bg-pink-800 hover:text-white rounded-xl hover:bg-blue-700 transition ease-in delay-10">Submit</button>       
                <button className="hover:cursor-pointer bg-pink-800 hover:text-white rounded-xl hover:bg-blue-700 transition ease-in delay-10" onClick={()=>{handleCancle()}}>Cancel</button>
            </div>
          </div>
        </div>
       </div>   
    </div>    
    )
}

export default Editform