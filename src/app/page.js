import Image from 'next/image'

export default function Home() {
  return (
    <>
    {/* <div className="md:grid grid-cols-5 gap-2">
    <h1 className="basis-4/12 md:bg-green-500 col-start-3 text-3xl rounded-lg p-2 text-orange-500">
      Logo
      </h1>
      <h1 className="basis-4/12 col-span-2 col-start-5 md:bg-blue-500 rounded-lg p-2 text-3xl text-white">
      Home
      </h1>
      <h1 className="basis-4/12 md:bg-orange-500 rounded-lg p-2 text-3xl text-green-600">
      Contact
      </h1>
      </div> */}
      <div className="block md:flex bg-orange-500">
       <h1 className="basis-4/12 text-3xl text-orange-500">
     <div className="parent" >
          <div className="motion-safe:animate-spin hover:animate-none relative w-12 h-12 bg-red-500 rounded-full mx-2 shadow-xl shadow-red-800"></div>
            <div className="absolute top-0 left-0 w-1 h-1 bg-transparent-600 rounded-xl">
              <h3 className="capitalise center text-white">Logo</h3>
          </div>
        </div>
       </h1>
       <h1 className="basis-4/12 text-3xl text-white hover:underline">
       Home
       </h1>
       <h1 className="basis-4/12 text-3xl text-white hover:underline">
       Contact
        </h1>
         <h1 className="basis-4/12 text-3xl text-white hover:underline">
       About
       </h1>
      </div>
      <div className="grid grid-col-8" >
        <img className="hover:{w-64, h-64} w-full h-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" />
        <p>Hello image</p>
       
        <div className="container flex flex-wrap">
          <div className="bg-red-800 z-100 rounded-full p-5">  <img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
          <div className="bg-red-800 z-90 rounded-full p-5"><img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
          <div className="bg-red-800 z-80 rounded-full p-5"><img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
          <div className="bg-red-800 z-70 rounded-full p-5"><img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
          <div className="bg-red-800 z-60 rounded-full p-5"><img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
          <div className="bg-red-800 z-50 rounded-full p-5"><img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
          <div className="bg-red-800 z-40 rounded-full p-5"><img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
          <div className="bg-red-800 z-30 rounded-full p-5"><img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
          <div className="bg-red-800 z-20 rounded-full p-5"><img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
          <div className="bg-red-800 z-10 rounded-full p-5"><img className="w-32 h-32 rounded-full" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /></div>
        </div>
     </div>
      </>
  )
}
