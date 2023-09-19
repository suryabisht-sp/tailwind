"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation';

const PostDetail = () => {
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
  
  const fetchData1 = async (id) => {
     try {
          const res = await fetch("https://dummyapi.io/data/v1/post?limit=500", {
            headers: {
              "app-id": appId,
            }
          }).then((resp) => { return resp.json() })
          const filterdata = res.data.filter(item => item.id == id);
          let obj = Object.assign({}, filterdata[0]);
       setData(obj)
        await setUrl(obj?.image)
          } catch (error) {
    }
   }


  useEffect(() => {
  userId && fetchData1(router.id)
  },[userId])

  return (
   
    <div className="flex flex-col items-center p-5 relative">
      {!data ? <div className='flex relative'>
        <div className='w-16 animate-spin h-16 rounded-full bg-gradient-to-r from-white to-blue-800 relative'>
          <div className='absolute left-1 top-1 w-14 h-14 bg-pin rounded-full border-5'> </div>
        </div>
        <span className='absolute mx-2 text-blue-800 text-xl left-16 top-4'> Loading...</span>
      </div> :
        <article className="relative gap-10 prose prose-img:rounded-xl justify-center prose-headings:underline prose-a:text-blue-600 ">
        <div className="w-256 h-256 bg-pink-800 rounded-xl relative left-1" style={{ height:"500px"}}>
          {url && <Image
            onMouseEnter={showfuntion}
              className="absolute transition ease-in delay-10 hover:-translate-y-1 hover:scale-110 hover:duration-300
             hover:cursor-pointer"
              style={{top:"10%"}}
            // unoptimized
            src={url}
            loading='lazy'
            width={550}
            height={500}
            alt="Picture"
          />}
        </div>
        {show && <div className="flex absolute overflow-auto gap-2" style={{top:"66%", left:"48%"}} >0
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
        </div>}
          <div className='flex flex-nowrap justify-center'>
                {data?.tags && data?.tags?.length > 0 && (
                  data?.tags?.map((size, index) => {
                    return (
                      <p className='bg-blue-800 rounded-2xl px-2 mx-1 text-white max-w-xs h-8' key={size}>
                        {size}
                      </p>
                    )
                  }))}
              </div>
        {<div className='grid'>
          <span className='uppercase font-bold'>Owner Name: {data?.owner?.title} {data?.owner?.firstName}-{data?.owner?.lastName} </span>
          <h3 className='capitalize my-1'>{data?.text}</h3>
        </div>}
      </article>}
     </div>
  )
}

export default PostDetail