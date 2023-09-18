import Image from "next/image"

const Settings = () => {
  return (
    <div >
      <div><h1 className="p-5">Profile</h1></div>
      <Image className="w-24 rounded-full h-24 top-20 m-5" src="/defa.jpg" width={60} height={60} />
      <button className="p-2 rounded-md m-5 bg-blue-500 hover:bg-red-500 transition ease-in delay-80 hover:text-white">Edit Bio</button>
      <div className="flex flex-wrap m-5 flex-col gap-2">
        <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Privacy and security</span>
        <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Change Password</span>
        <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Change Email</span>
        <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Read Agreement</span>
        <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Payment and subscription</span>
         <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">About</span>
        <span className="bg-red-100 p-4 rounded-md hover:bg-red-300 hover:text-white hover:cursor-pointer">Deactivate</span>
      </div>
    </div>
  )
}

export default Settings