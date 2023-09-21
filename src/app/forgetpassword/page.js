"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const ForgetPassword = () => {
  const router=useRouter()

	const handleOtp = () => {
		router.push("./forgetpassword/otp")
	}
	return (
    <div className="font-mono bg-pink-100">

		<div className="container mx-auto">
			<div className="flex justify-center items-center h-screen px-6">

				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
			
					<div
						className="bg-gray-400 hidden lg:block lg:w-1/2 bg-cover">
						<img className="rounded-l-2xl" style={{height:"77vh"}} width={"100%"} alt="" src="https://w0.peakpx.com/wallpaper/521/967/HD-wallpaper-red-and-blue-abstract-dark-wood-wooden-thumbnail.jpg"/>

					</div>
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div className="px-8 mb-4 text-center">
							<h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
							<p className="mb-4 text-sm text-gray-700">
								We get it, stuff happens. Just enter your email address below and we'll send you a
								link to reset your password!
							</p>
						</div>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter Email Address..."
								/>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 text-white bg-blue-700 rounded-full hover:bg-pink-900 focus:outline-none focus:shadow-outline"
										type="button"
										onClick={()=>{handleOtp()}}
								>
									Reset Password
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register"
								>
									Create an Account!
								</a>
							</div>
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./login"
								>
									Already have an account? Login!
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default ForgetPassword