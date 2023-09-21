"use client"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import Stories from './Components/stories';
import imageUrls from "./utils/imageUrl"
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast';
import Footer from './Components/footer';

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
 
  //stories
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyapi.io/data/v1/user?limit=20", {
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
      const res = await fetch("https://dummyapi.io/data/v1/post?limit=5", {
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
      <div className="flex items-center flex-col flex-wrap gap-5 p-5 overflow-y-auto mb-6">
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

<div className='mb-4'>
<nav aria-label="Page navigation example relative">
  <ul class="flex items-center -space-x-px h-10 relative left-16 sm:ml-10 sm:inset-x-1/3 text-base">
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
        </nav>
        </div>

      <Footer/>
    </div>
  )
}


export default dynamic(() => Promise.resolve(Home), { ssr: false });