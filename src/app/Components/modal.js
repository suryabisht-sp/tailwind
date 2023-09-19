import Image from 'next/image'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Modal = ({ handleModal, del, password, email }) => {
  const handleClose = () => {
    handleModal()
  }


  const handleNotification = () => {
    if (email) {
      toast.success("Email updated successfully")  }
    else if (del) {
      toast.success("Account Deactivated successfully")}
    else if (password) {
      toast.success("Password updated successfully")}
  }
  return (
    <div>
     <Toaster />
<div id="popup-modal" tabIndex="-1" className="modal-position absolute top-5 left-0 right-5 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={() => {handleClose()}}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
             </button>
            <div className="p-6 text-center">
              <div>
                <Image width={25} height={25} src="/defa.jpg" className='absolute avatar rounded-full' alt=""/>
                </div>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                <br /><label>{password && "Change Password"}{del && "Are you sure you want to Deactivate your account"}{email && "Change Email" }</label> <br />
             {(password || email) && <input type='password' autoComplete={false} className='rounded-md'/>}</h3>
                      <button data-modal-hide="popup-modal" onClick={()=>handleNotification()} type="button" className="text-white bg-green-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                  {del ? "Yes" :"Update"}
                </button>
                <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => {handleClose()}}>No, cancel</button>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Modal