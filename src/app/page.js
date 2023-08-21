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
      <div className="block md:flex bg-pink-800">
       <h1 className="basis-4/12 text-3xl text-orange-500">
          <div className="parent" >
<div className="mx-4 bg-gradient-to-r from-pink-500 to-blue-500 px-4 relative w-14 h-14 -left-2 rounded-full hover:animate-spin"></div>
            {/* <div className="motion-safe:animate-spin hover:animate-none relative w-12 h-12 bg-red-500 rounded-full mx-2 shadow-xl shadow-white"></div> */}
            <div className="absolute top-2 left-0 w-1 h-1 bg-transparent-600 rounded-xl">
              <h3 className="capitalise center text-white text-3xl">Logo</h3>
          </div>
        </div>
       </h1>
       <h1 className="basis-4/12 text-2xl text-white hover:underline mt-2 hover:cursor-pointer">
       Home
       </h1>
       <h1 className="basis-4/12 text-2xl text-white hover:underline mt-2 hover:cursor-pointer">
       Contact
        </h1>
         <h1 className="basis-4/12 text-2xl text-white hover:underline mt-2 hover:cursor-pointer">
       About
        </h1>
       <input placeholder="Search here..." className="px-2"/>
      </div>
      <div className="grid grid-col-8" >
    {/* <div className="text-center text-red-500 shadow-lg shadow-pink-800 pt-2"><p className="text-2xl text-center shadow animate-bounce">Stories</p></div>  */}
          <div className="container flex flex-wrap p-5">
        <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" /> </div>
          <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg" /> </div>
          <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://media.nature.com/w300/magazine-assets/d41586-018-07530-7/d41586-018-07530-7_16296784.jpg" /> </div>
           <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" /> </div>
           <div className="relative"><div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div>  <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" /> </div>
        <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://picsum.photos/id/507/200/300" /> </div>
          <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://picsum.photos/id/237/200/300" /> </div>
          <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://picsum.photos/id/238/200/300" /> </div>
           <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://picsum.photos/id/234/200/300" /> </div>
           <div className="relative"><div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div>  <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://picsum.photos/id/231/200/300" /> </div>
          <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://picsum.photos/id/232/200/300" /> </div>
          <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://picsum.photos/id/301/200/300" /> </div>
           <div className="relative"> <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div> <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://picsum.photos/id/233/200/300" /> </div>
           <div className="relative"><div className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative w-20 h-20 -left-2 border-2 rounded-full hover:animate-spin"></div>  <img className="absolute w-16 h-16 top-2 rounded-full object-cover" alt="test"  src="https://picsum.photos/id/235/200/300" /> </div>
        </div>
    </div>
      <div className="flex flex-center">
        <article class="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
            <img className="w-64 h-64 object-cover" alt="test" src="http://www.kiklop.com.tr/uploads/article/1170x570/article-24.jpg" />
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
</article>
      </div>
      
      </>
  )
}
