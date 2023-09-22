"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation';

const Detail = () => {
  const [url, setUrl] = useState();
  const [userId, setUserId] = useState()
  const [data, setData] = useState()
  const router =useParams()
 
  useEffect(() => {
    const user= router?.id
    setUserId(user)
  })

  const [show, setShow]=useState(false)
  const showfuntion = () => {
    setShow(true)
  }

  const appId = "64e485d2185e41484a709b93";
  

  const fetchData = async(id) => {
    try {
      const res = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          "app-id": appId,
        }
      }).then((resp) => { return resp.json() })
      if (res.error == "RESOURCE_NOT_FOUND") {
        setData();
        fetchData1()
      }
      await setData(res)
      await setUrl(res?.picture)
      } catch (error) {
      }
  }

  useEffect(() => {
  userId && fetchData(userId)
  },[userId])

  
  return (
    <div className="flex flex-col items-center p-5 relative">
      {!data ?<div className='flex relative'> <div className='w-16 animate-spin h-16 rounded-full bg-gradient-to-r from-white to-blue-800 relative'> <div className='absolute left-1 top-1 w-14 h-14 bg-pin rounded-full border-5'> </div> </div><span className='absolute mx-2 text-blue-800 text-xl left-16 top-4'> Loading...</span></div> : <article className="relative flex gap-10 flex-wrap prose prose-img:rounded-xl justify-center prose-headings:underline prose-a:text-blue-600 ">
        <div className="w-256 h-256 bg-pink-800 rounded-xl">
          {url && <Image
            onMouseEnter={showfuntion}
            className="transition ease-in delay-10 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:cursor-pointer"
            // unoptimized
            src={url}
            loading='lazy'
            width={300}
            height={300}
            alt="Picture"
          />}
        </div>
        {/* {show && <div className="flex absolute -bottom-7 overflow-auto" >
         <Image src="/thumbs-up.svg" loading='lazy'
         width={20}
            height={20}
          alt="likes"/>
          {" "}
            <img loading = 'lazy'
            width={20}
            height={20}  
       alt="likes"      
            src="/thumbs-down.svg" />
              </div>} */}
        {<div className='grid justify-items-center'>
          <span className='uppercase font-bold'>Name: {data?.title} {data?.firstName}-{data?.lastName} </span>
          <span>Gender: {data?.gender}</span>
          <span>DOB: {data?.dateOfBirth}</span>
          <span>email: {data?.email}</span>
          <span>Phone: {data?.phone}</span>
          <span>Registered on: {data?.registerDate}</span>
          <span>location: {data?.location?.street} {data?.location?.city}, {data?.location?.state}</span>                         
        </div>}
      </article>}
     </div>
  )
}

export default Detail