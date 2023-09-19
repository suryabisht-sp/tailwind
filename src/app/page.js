"use client"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import Stories from './Components/stories';
import imageUrls from "./utils/imageUrl"
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast';

function Home() {

  const router = useRouter()
  const [data, setData] = useState([])

  const [postData, setpostData] = useState([])

  const detailPage = (id) => {
    router.push(`./details/${id}`);
  }

  const postDetail = (id) => {
    router.push(`./postdetails/${id}`);
  }
  // Function to pick a random item from an array
  function getRandomItem(arr) {
    const randomIndex = Math.round(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const appId = "64e485d2185e41484a709b93";
 
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyapi.io/data/v1/user?limit=300", {
        headers: {
          "app-id": appId,
        }
      }).then((resp) => { return resp.json() })
      await setData(res?.data)
    } catch (error) {

    }
  }
  const fetchPostData = async () => {
    try {
      const res = await fetch("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "app-id": appId,
        }
      }).then((resp) => { return resp.json() })
      await setpostData(res?.data)
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData()
    fetchPostData()
    localStorage.clear()
  }, [])


  // Usage
  const randomItem = getRandomItem(postData);

  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 

// Usage 
const shuffledArray = shuffle(postData); 
  return (
    <div className="overflow-x-hidden">
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
      <Stories navi={detailPage} data={data} />
      <Toaster/>
      <div className="flex items-center flex-col flex-wrap gap-5 p-5 overflow-y-auto">
        {shuffledArray && shuffledArray.map((items, index) => {
          return (
            <article key={index} className="prose prose-headings:underline prose-a:text-blue-600 rounded-md">
              <div style={{    margin: "17px", height: "38px" }} className="prose prose-img:rounded-full flex flex-wrap gap-5">
                <Image
                   className="bg-red-800 transition ease-in delay-10 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:cursor-pointer"
                   unoptimized
                  src={items?.owner?.picture}
                  loading='lazy'
                  width={54}
                  height={54}
                  alt="Picture"
                  onClick={()=>{postDetail(items.id)}}
                />
                <div className="-my-2">
                  <p>{items.owner.firstName} {items.owner.lastName}</p>
                   </div>
              </div>
              <Image
                className="transition ease-in delay-10 hover:-translate-y-2 hover:scale-105 hover:duration-300 hover:cursor-pointer"
                src={items?.image}
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius:"10px"
                }}
                loading='lazy'
                width={300}
                height={300}
                alt="Picture"
                 onClick={()=>{postDetail(items.id)}}
              />
              <h3 className='capitalize mx-1 -my-1'>{items?.text.substring(0, 25)}...</h3>
              <div className='flex flex-nowrap'>
                {items?.tags && items?.tags?.length > 0 && (
                  items?.tags?.map((size, index) => {
                    return (
                      <p className='bg-blue-800 rounded-2xl px-2 mx-1 text-white max-w-xs' key={size}>
                        {size}
                      </p>
                    )
                  }))}
              </div>
                { <div className="flex -my-5" >
         <Image src="/thumbs-up.svg" loading='lazy'
         width={20}
                  height={20}
                  className='mx-2'
          alt="likes"/>
                {" "}
                <span className='mt-7 px-2'>{items?.likes}</span>
               </div>}
            </article>
          )
        })}
     </div>
    </div>
  )
}


export default dynamic(() => Promise.resolve(Home), { ssr: false });