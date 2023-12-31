
"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { loggedUser, login, logout } from '../redux/features/auth-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import loginApi from '../api/login'
import toast from 'react-hot-toast'

const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [values, setValues] = useState()
  const userName = useSelector((state) => state.authReducer.values.userName)
  if (userName) {
    return router.push("./")
  }
  

  const handleSignup = () => {
    router.push("./register")
  }

  const handleforget = () => {
    router.push("./forgetpassword")
  }

  const handleLogin = async (e) => {
    e.preventDefault()
     if (!values || !values.email || !values.password) {
    // If either email or password is missing, show an error message
    toast.error("Please enter both email and password.")
    return;
     }
   
    const data = {
     email: values.email,
     password: values.password
    }
    const data1 = await loginApi(data)
    if (data1.message === "Login successful") {
     sessionStorage.setItem("values",JSON.stringify(values))
      dispatch(login(data1))
      dispatch(loggedUser(values.email))
      const emailInput = document.querySelector('input[name="email"]');
     const passwordInput = document.querySelector('input[name="password"]');
    
  emailInput ? emailInput.value = '':"";
 passwordInput ? passwordInput.value = '':" ";
      router.push("/")    
    }
    }

  const handleChange = (e) => {
        e.preventDefault();
  const { name, value } = e.target;
  setValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
  }
  
  return (
    <div>
      <section className="bg-pink-100 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl h-1/3 overflow-hidden shadow-lg max-w-3xl p-5 items-center">
        <div className="px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <form action="" className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="email" name="email" autoComplete="off" onChange={(e)=>{handleChange(e)}} placeholder="Email" />
            <div className="relative">
              <input className="p-2 rounded-xl border w-full" type="password" autoComplete="off" name="password" placeholder="Password" onChange={(e)=>{handleChange(e)}} />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button className="bg-blue-700 rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={(e) => { handleLogin(e) }}>Login</button>
          </form>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            Login with Google
          </button>
          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74] cursor-pointer">
            <a onClick={() => { handleforget() }}>Forgot your password?</a>
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" onClick={() => { handleSignup() }}>Register</button>
          </div>
        </div>
        <div className="md:block hidden w-2/3 h-1/2">
          <Image className="rounded-2xl" width={250} height={50} alt="" src="https://w0.peakpx.com/wallpaper/521/967/HD-wallpaper-red-and-blue-abstract-dark-wood-wooden-thumbnail.jpg" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Login