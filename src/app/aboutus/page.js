import Image from "next/image"

const AboutUs = () => {
  return (
    <div className="overflow-x-hidden relative">
      <Image
        className="transition ease-in delay-10 hover:duration-300 hover:cursor-pointer overflow-hidden"
        src={"/roler.jpg"}
        loading='lazy'
        width={1850}
        height={20}
        alt="Picture"
        style={{ height: "250px", opacity:"0.5"}}
      />
      <h1 className="text-pin-800 text-5xl text-position">Know more about us</h1>
      <div className="flex gap-4 justify-center text-#FCDBE5-800 text-2xl text-red-900">
      <h2>Who we are</h2>||
      <h2>
        Our senior staff</h2>||
      <h2>
        Our work
      </h2>||
      <h2>
        Working at Unlike</h2>||
      <h2>
        Business services</h2>||
      <h2>
          Get in touch</h2>
      </div>
      <hr/>
      <p className="m-2 text-center text-xl p-2 text-white bg-red-300">Our mission is to increase the public’s
        enjoyment and understanding of art from the 20th century to the present day
        and of international modern and contemporary art
      </p>
      <hr className="bg-red-800 border-2" />
      <h1 className="text-5xl text-red-800 p-5 text-bold text-center">WHO WE ARE</h1>
      <div className="container">
        <div className="relative flex flex-wrap gap-5 p-5 justify-center">
          <div className="relative p-5">
            <div className="relative p-5 w-24 h-24 -left-4 p-2 mx-2 hover:animate-spin hover:bg-yellow-500 shadow-xl hover:shadow-yellow-800 "></div>
            <img className="absolute w-24 rounded-xl h-24 top-2" alt="test" src="https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg" />
          <p className="text-md text-red-800">Daina Rose</p></div>
          <div className="relative p-5">
            <div className="relative p-5 w-24 h-24 -left-4 p-2 mx-2 hover:animate-spin hover:bg-yellow-500 shadow-xl hover:shadow-yellow-800 "></div>
            <img className="absolute w-24 rounded-xl h-24 top-2" alt="test" src="https://media.nature.com/w300/magazine-assets/d41586-018-07530-7/d41586-018-07530-7_16296784.jpg" />
           <p className="text-md text-red-800">Gibert Mertn</p></div>
          <div className="relative p-5">
            <div className="relative p-5 w-24 h-24 -left-4 p-2 mx-2 hover:animate-spin hover:bg-yellow-500 shadow-xl hover:shadow-yellow-800 "></div>
            <img className="absolute w-24 rounded-xl h-24 top-2" alt="test" src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" />
             <p className="text-md text-red-800">Aldern Wart</p>
             </div>
          </div>
                </div>
    </div>
  )
}

export default AboutUs