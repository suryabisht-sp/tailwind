import React, { useEffect, useState } from 'react'
import imageUrls from '../utils/imageUrl'

const Stories = ({ navi, data }) => {
  
  const detailPage = (url, id) => {
    localStorage.setItem("url", url)
    localStorage.setItem("id",id)
    navi(id);
  }

  return (
     <div className="grid grid-col-8 overflow-x-auto sm:flex flex-wrap " >
        {/* <div className="text-center text-red-500 shadow-lg shadow-pink-800 pt-2"><p className="text-2xl text-center shadow animate-bounce">Stories</p></div>  */}
        <div className="container mx-5 flex p-5 ">
          {data && data.map((items, index) => {
            return (
              <div key={index} className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div>
                <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test" src={items?.picture} onClick={() => { detailPage(items?.picture,items?.id) }} />
              </div>
            )
          })}
        </div>
      </div>
     )
}

export default Stories