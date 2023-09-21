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

<div className="mb-4 border-b border-gray-200 dark:border-gray-700 text-center flex justify-center">
    <ul className="block sm:flex md:flex xl:flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li className="mr-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"  id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Who we are</button>
        </li>
        <li className="mr-2" role="presentation">
            <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Our senior staff</button>
        </li>
        <li className="mr-2" role="presentation">
            <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Our work</button>
        </li>
        <li role="presentation">
            <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Working at Unlike</button>
          </li>
           <li role="presentation">
            <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Business services</button>
          </li>
           <li role="presentation">
            <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Get in touch</button>
        </li>
    </ul>
</div>
<div id="myTabContent">
    <div className="open p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the
            <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the
            <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the
            <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
    </div>
    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the
            <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
    </div>
</div>
{/* 
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
      </div> */}
      <hr className="bg-red-800 sm:border-2"/>
      <p className="m-2 text-center text-xl p-2 text-white bg-red-300">Our mission is to increase the public’s
        enjoyment and understanding of art from the 20th century to the present day
        and of international modern and contemporary art
      </p>
      <hr className="bg-red-800 sm:border-2" />
      <h1 className="text-5xl text-red-800 p-5 text-bold text-center">WHO WE ARE</h1>
      <div className="container">
        <div className="relative flex flex-wrap gap-5 p-5 justify-center">
          <div className="relative p-5">
            <div className="relative p-5 w-28 h-28 -top-5 rounded-md rounded-md -left-4 p-2 mx-2 hover:animate-spin bg-yellow-500 shadow-xl hover:shadow-yellow-800 "></div>
            <img className="absolute w-24 rounded-xl h-24 top-2" alt="test" src="https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg" />
          <p className="text-md text-red-800">Daina Rose</p></div>
          <div className="relative p-5">
            <div className="relative p-5 w-28 h-28 -top-5 rounded-md -left-4 p-2 mx-2 hover:animate-spin bg-yellow-500 shadow-xl hover:shadow-yellow-800 "></div>
            <img className="absolute w-24 rounded-xl h-24 top-2" alt="test" src="https://media.nature.com/w300/magazine-assets/d41586-018-07530-7/d41586-018-07530-7_16296784.jpg" />
           <p className="text-md text-red-800">Gibert Mertn</p></div>
          <div className="relative p-5">
            <div className="relative p-5 w-28 h-28 -top-5 rounded-md -left-4 p-2 mx-2 hover:animate-spin bg-yellow-500 shadow-xl hover:shadow-yellow-800 "></div>
            <img className="absolute w-24 rounded-xl h-24 top-2" alt="test" src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" />
             <p className="text-md text-red-800">Aldern Wart</p>
             </div>
          </div>
                </div>
    </div>
  )
}

export default AboutUs