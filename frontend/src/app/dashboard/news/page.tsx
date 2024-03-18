'use client'


import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'



import './newsstyle.css'
import { ClassNames } from '@emotion/react';
export default function page() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
      setIsOpen(false);
  };




  return (
    <div className="   h-screen "  style={{ width: 'background-color: #15202b' }}>
        <div className="flex ">

        

            <div className=' flex '>
                <div className="flex" >
                    <section className=" border border-y-0 border-gray-800" >
                     
           

    <ul className="list-none cursor-pointer">
      <li>
        <article className=" hover:bg-gray-800 transition duration-350 ease-in-out">
          <div className="flex flex-col   p-4 pb-0">
          


















            <div className='flex h-4  justify-end  py-6 pb-8'>
            <div className="relative inline-block">
                <button
                   
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={toggleDropdown}
                >
                    <MoreVertIcon  className = " hover:text-blue-600  "/>
                </button>
                

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Option 1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Option 2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Option 3
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
































          
            <Link href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">

                <div>
                  <img className="inline-block h-10 w-10 rounded-full" src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="ml-3 ">
                  <span className="text-base leading-6 font-medium text-white flex ">
                   Debre Birhan UNiversty 
                   </span>
                    <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out gap-6 duration-150">
                      PR . 16 April
                    </span>
                
                </div>
              </div>
            </Link>
          </div>

          <div className="pl-16 flex-col pb-12 border-b-2">
            <span className="text-base width-auto  text-white height-auto">
              <div  className=' font-bold text-2xl'>   <p>dbu daily news </p></div>
           
              I was wondering what I can do with  so just started building
              Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
              [07/100]
              <Link href="#" className="text-blue-400 underline"> Go to Site </Link>
            </span>

            <div className="md:flex-shrink pr-6 pt-3">
              <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-full" >
                <img className=" w-full h-full" src="https://media.istockphoto.com/id/926334908/photo/victory-of-adwa-national-holiday-in-ethiopia.jpg?s=2048x2048&w=is&k=20&c=KVVos3bfKnrl099kugwSzsG_sTr-jiUpRSMiNermCJw=" alt="" />
                <img className=" w-full h-full" src="https://media.istockphoto.com/id/926334908/photo/victory-of-adwa-national-holiday-in-ethiopia.jpg?s=2048x2048&w=is&k=20&c=KVVos3bfKnrl099kugwSzsG_sTr-jiUpRSMiNermCJw=" alt="" />
                <img className=" w-full h-full" src="https://media.istockphoto.com/id/926334908/photo/victory-of-adwa-national-holiday-in-ethiopia.jpg?s=2048x2048&w=is&k=20&c=KVVos3bfKnrl099kugwSzsG_sTr-jiUpRSMiNermCJw=" alt="" />

              </div>
            </div>

            <div className="flex items-center py-4">
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 active:text-blue-400 hover:text-blue-400 transition duration-350 ease-in-out">
                <ThumbUpIcon/>
                12.3 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
              <ChatIcon/>
                14 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
              <ChatIcon/>
                14 k
              </div>
              </div>
             
            </div>
            <div
            className="flex flex-row items-center h-16 rounded-xl  bg-slate-500 w-full "
          >
           
            <div className="flex-grow break-words ml-4">
              <div className="relative ">
              <textarea
      className="hide-scrollbar flex text-black w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 resize-none"
      style={{ minHeight: '40px', overflowY: 'auto', overflowX: 'hidden', height: 'auto' }}
    ></textarea>
                <button
                  className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                >

                 <EmojiEmotionsIcon/>
                </button>
              </div>
            </div>
            <div className="ml-4">
              <button
                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span className="ml-2">
                <SendIcon/>
                </span>
              </button>
            </div>
            
          </div>
          <span> <Link href="#" className="text-blue-400 underline"> See All Comment </Link>
</span>

          

         
          </div>
          
        </article>
      </li>
    </ul>
    
    
    <ul className="list-none cursor-pointer">
      <li>
        <article className=" hover:bg-gray-800 transition duration-350 ease-in-out">
          <div className="flex flex-col   p-4 pb-0">
          


















            <div className='flex h-4  justify-end  py-6 pb-8'>
            <div className="relative inline-block">
                <button
                   
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={toggleDropdown}
                >
                    <MoreVertIcon  className = " hover:text-blue-600  "/>
                </button>
                

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Option 1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Option 2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Option 3
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
































          
            <Link href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">

                <div>
                  <img className="inline-block h-10 w-10 rounded-full" src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="ml-3 ">
                  <span className="text-base leading-6 font-medium text-white flex ">
                   Debre Birhan UNiversty 
                   </span>
                    <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out gap-6 duration-150">
                      PR . 16 April
                    </span>
                
                </div>
              </div>
            </Link>
          </div>

          <div className="pl-16 flex-col pb-12 border-b-2">
            <span className="text-base width-auto  text-white height-auto">
              <div  className=' font-bold text-2xl'>   <p>dbu daily news </p></div>
           
              I was wondering what I can do with  so just started building
              Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
              [07/100]
              <Link href="#" className="text-blue-400 underline"> Go to Site </Link>
            </span>

            <div className="md:flex-shrink pr-6 pt-3">
              <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-full" >
                <img className=" w-full h-full" src="https://media.istockphoto.com/id/926334908/photo/victory-of-adwa-national-holiday-in-ethiopia.jpg?s=2048x2048&w=is&k=20&c=KVVos3bfKnrl099kugwSzsG_sTr-jiUpRSMiNermCJw=" alt="" />
              </div>
            </div>

            <div className="flex items-center py-4">
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 active:text-blue-400 hover:text-blue-400 transition duration-350 ease-in-out">
                <ThumbUpIcon/>
                12.3 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
              <ChatIcon/>
                14 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
              <ChatIcon/>
                14 k
              </div>
              </div>
             
            </div>
            <div
            className="flex flex-row items-center h-16 rounded-xl  bg-slate-500 w-full "
          >
           
            <div className="flex-grow break-words ml-4">
              <div className="relative ">
              <textarea
      className="hide-scrollbar flex text-black w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 resize-none"
      style={{ minHeight: '40px', overflowY: 'auto', overflowX: 'hidden', height: 'auto' }}
    ></textarea>
                <button
                  className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                >

                 <EmojiEmotionsIcon/>
                </button>
              </div>
            </div>
            <div className="ml-4">
              <button
                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span className="ml-2">
                <SendIcon/>
                </span>
              </button>
            </div>
            
          </div>
          <span> <Link href="#" className="text-blue-400 underline"> See All Comment </Link>
</span>

          

         
          </div>
          
        </article>
      </li>
    </ul>
   
                    </section>



            </div>

        </div>

    </div>
</div>

  )

            


  
}
