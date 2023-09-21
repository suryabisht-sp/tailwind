import React from 'react'

const PopupChat = () => {
  return (
  <div className="flex justify-center">
        <div className="w-80 h-96 bg-white rounded shadow-2xl">
            <nav className="w-full h-10 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
              <div className="flex justify-center items-center"> <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i>
                <img src="https://i.imgur.com/IAgGUYF.jpg" className="rounded-full ml-1" width="25" height="25" />
                <span className="text-xs font-medium text-gray-300 ml-1">Alex cairo</span> </div>
              <div className="flex items-center"> <i className="mdi mdi-video text-gray-300 mr-4"></i>
                <i className="mdi mdi-phone text-gray-300 mr-2"></i> <i className="mdi mdi-dots-vertical text-gray-300 mr-2"></i>
              </div>
            </nav>
            {/* <div className="overflow-auto px-1 py-1" style={{ height: "19rem" }} id="journal-scroll">
              <div className="flex items-center pr-10">
                <img src="https://i.imgur.com/IAgGUYF.jpg" className="rounded-full shadow-xl" width="15" height="15"/>
                <span className="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end" >Hi Dr.Hendrikson, I haven't been feeling well for past few days.
                  <span className="text-gray-400 pl-1">01:25am</span>
                </span>
              </div>
              <div className="flex justify-end pt-2 pl-10">
                <span className="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end " >Lets jump on a video call. <span className="text-gray-400 pl-1" >02.30am</span></span> </div>
              <div className="flex justify-center">
                <span className="text-gray-500 text-xs pt-4" >Call started at 02:33 am</span>
              </div>
              <div className="flex justify-center">
                <span className="text-gray-500 text-xs" >Call ended at 02:33 am</span>
              </div>
              <div className="flex items-center pr-10 mt-1">
                <img src="https://i.imgur.com/IAgGUYF.jpg" className="rounded-full shadow-xl" width="15" height="15" />
                <span className="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs p-1 font-normal rounded-sm px-1 items-end" >How often should i take the medicine? <span className="text-gray-400 pl-1" >01:25am</span></span> </div>
              <div className="flex justify-end pt-2 pl-10">
                <span className="bg-green-900 h-auto text-gray-200 text-xs font-normal p-1 rounded-sm px-1 items-end flex justify-end " >Twice a day, at breakfast and before bed
                  <span className="text-gray-400 pl-1" >02.30am</span></span>
              </div>
              <div className="flex items-center pr-10 pt-2">
                <img src="https://i.imgur.com/IAgGUYF.jpg" className="rounded-full shadow-xl" width="15" height="15" />
                <span className="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end" >Thanks a lot doc<span className="text-gray-400 pl-1" >01:25am</span></span> </div>
              <div className="flex justify-end pt-2 pl-10">
                <span className="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end " >Thats my duty, mention not <span className="text-gray-400 pl-1" >02.30am</span></span> </div>
              <div className="flex items-center pr-10 pt-2">
                <img src="https://i.imgur.com/IAgGUYF.jpg" className="rounded-full shadow-xl" width="15" height="15" />
                <span className="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end" >sorry to bother again but can i ask you one more favour?<span className="text-gray-400 pl-1" >01:25am</span></span> </div>
              <div className="flex justify-end pt-2 pl-10">
                <span className="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end " >yeah sure, go ahead?<span className="text-gray-400 pl-1" >02.30am</span></span> </div>
              <div className="flex items-center pr-10 pt-2">
                <img src="https://i.imgur.com/IAgGUYF.jpg" className="rounded-full shadow-xl" width="15" height="15" />
                <span className="flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end" >I really had a scary feeling about this, can please advice some tricks to overcome my anxiety?<span className="text-gray-400 pl-1" >01:25am</span></span> </div>
                <div className=" " id="chatmsg"> </div>
            </div> */}
            <div className="flex justify-between items-center p-1 bottom-0">
              <div className="relative">
               <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06l-2.12-2.12L13 9.94m-4.12 0L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11l1.06-1.06M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5Z"/></svg>
            <input type="text" className="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white" style={{ fontSize: "11px", width: "250px" }} placeholder="Type a message..." id="typemsg" />
           <svg className='rotate-45 absolute' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6h-1.5Z"/></svg> <i className="mdi mdi-paperclip absolute right-8 top-1 transform -rotate-45 text-gray-400"></i>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3Z" /></svg>
          </div>
              <div className="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center hover:bg-gray-900 hover:text-white">
             <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5h2Z"/></svg> </div>
              <div className="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center">
            <button className="w-7 h-7 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white" onclick="sendbtn();">
             <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m2 21l21-9L2 3v7l15 2l-15 2v7Z"/></svg></button> </div>
            </div>
        </div>
    </div>
 
  )
}

export default PopupChat