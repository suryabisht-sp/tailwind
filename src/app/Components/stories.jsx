import React from 'react'

const Stories = ({ navi }) => {
  const detailPage = (id) => {
    localStorage.setItem("url",id)
    navi(id);
  }

  const imageUrls = [
    "http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg",
    "https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg",
    "https://media.nature.com/w300/magazine-assets/d41586-018-07530-7/d41586-018-07530-7_16296784.jpg",
    "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=",
    "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=",
    "https://picsum.photos/id/507/200/300",
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/234/200/300",
    "https://picsum.photos/id/231/200/300",
    "https://picsum.photos/id/232/200/300",
    "https://picsum.photos/id/301/200/300",
    "https://picsum.photos/id/233/200/300",
    "https://picsum.photos/id/235/200/300",
    "https://picsum.photos/id/23/200/300"
    ,
    
  ]
  return (
     <div className="grid grid-col-8 overflow-x-auto sm:overflow-x-hidden " >
        {/* <div className="text-center text-red-500 shadow-lg shadow-pink-800 pt-2"><p className="text-2xl text-center shadow animate-bounce">Stories</p></div>  */}
        <div className="container mx-1 flex sm:flex-wrap p-5 justify-center ">
          {imageUrls && imageUrls.map((items, index) => {
            return (
              <div key={index} className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div>
                <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test" src={items} onClick={() => { detailPage(items) }} />
              </div>
            )
          })}
        </div>
      </div>
     )
}

export default Stories