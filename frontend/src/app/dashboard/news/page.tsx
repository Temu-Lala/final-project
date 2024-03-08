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
    <div className="  p-relative h-screen "  style={{ width: 'background-color: #15202b' }}>
        <div className="flex ">

        

            <div className='pl-32 flex flex-4 justify-center'>
                <div className="flex" >
                    <section className=" border border-y-0 border-gray-800" >
                     
                    <div>
      <div className="flex justify-start">
        <div className="px-4 py-2 mx-2">
          <Link
            href=""
            className="text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right"
          >
            <svg
              className="m-2 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
                ></path>
              </g>
            </svg>
          </Link>
        </div>
        
      </div>

    </div>


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

          <div className="pl-16 flex-col">
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
            <div>
              <button
                className="flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                
              </button>
            </div>
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex text-black w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
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
            <div className='flex w-full h-4  justify-end '><MoreVertIcon  className = " hover:text-blue-600  "/></div>
          
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

          <div className="pl-16 flex-col">
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
            <div>
              <button
                className="flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                
              </button>
            </div>
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex text-black w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
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
            <div className='flex w-full h-4  justify-end '><MoreVertIcon  className = " hover:text-blue-600  "/></div>
          
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

          <div className="pl-16 flex-col">
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
            <div>
              <button
                className="flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                
              </button>
            </div>
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex text-black w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
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


 <div className="w-2/5 h-12 relative">
      <div style={{ maxWidth: '350px' }}>

    <div className="overflow-y-auto fixed  h-screen">




    {/* <div className="relative text-yellow-300 w-80 p-5">
      <button type="submit" className="absolute ml-4 mt-3 mr-4">
      <SearchIcon/>
      </button>

      <input
        type="search"
        name="search"
        placeholder="Search "
        className="bg-dim-700 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow  border-0"
      />
    </div> */}


    {/* <div className="flex flex-col max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
      <div className=" mb-1 w-full">
        <div className='flex flex-row'>
          <div>          <span className=' w-full justify-center'>Folloers</span></div>
        <Link href={"#"} className='flex w-full justify-end text-blue-500 underline'>See All</Link> </div>
          <Link href="#"  className="flex w-full h-auto">
            <div
              className="flex  w-full bg-cover bg-no-repeat bg-center gap-5 hover:underline">
            <SearchIcon/>
              <span> followers Ab </span>
            </div>
         
        </Link>

        
        <Link href="#"  className="flex w-full">
            <div
              className="flex  w-full bg-cover bg-no-repeat bg-center gap-5 hover:underline">
            <SearchIcon/>
              <span> followers Ab </span>
            </div>
         
        </Link>

      
        <Link href="#"  className="flex w-full">
            <div
              className="flex  w-full bg-cover bg-no-repeat bg-center gap-5 hover:underline">
            <SearchIcon/>
              <span> followers Ab </span>
            </div>
         
        </Link>
      </div>

     
    </div> */}
    
{/* 


<div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
<div className="flex">
      <div className="flex flex-1 m-2 flex-row">
        <div className=' w-2/3'>        <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Universites </h2>
</div>
        <div className='flex'>
        <Link href={"#"} className='flex w-full justify-end text-blue-500 underline'>See All</Link> </div>
     
      </div>
    
    </div>



    <div className="flex">
      <div className="flex-1 hover:underline w-full">
        <Link href={"#"}>        <h2 className="hover:underline px-4 ml-2 w-48 font-bold text-white">#Microsoft363</h2>
</Link>
      </div>
    
    </div>


    <div className="flex ">
      <div className="flex-1 hover:underline w-full">
        <Link href={"#"}>        <h2 className="px-4 ml-2 w-48 font-bold text-white">#Microsoft363</h2>
</Link>
      </div>
    
    </div>
    <div className="flex">
      <div className="flex-1 hover:underline w-full">
        <Link href={"#"}>        <h2 className="px-4 ml-2 w-48 font-bold text-white">#Microsoft363</h2>
</Link>
      </div>
    
    </div>

    <div className="flex">
      <div className="flex-1 hover:underline w-full">
        <Link href={"#"}>        <h2 className="px-4 ml-2 w-48 font-bold text-white">#Microsoft363</h2>
</Link>
      </div>
    
    </div>

    <div className="flex">
       <Link href={"#"}>
       <div className="flex-1 p-4 hover:underline w-full">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
        </div></Link>
    </div>

<div className="max-w-sm rounded-lg  bg-dim-700 overflow-hidden shadow-lg m-4">
    <div className="flex">
        <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Lectures</h2>
        </div>
    </div>


    <hr className="border-gray-800"/>


    <div className="flex flex-shrink-0">
        <div className="flex-1 ">
            <div className="flex items-center w-48">
                <div>
                    <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt=""/>
                </div>
                <div className="ml-3 mt-3">
                    <p className="text-base leading-6 font-medium text-white">
                       Lecture Ab
                    </p>
                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @lectures
                    </p>
                </div>
            </div>

        </div>
        <div className="flex-1 px-4 py-2 m-2">
            <a href="" className=" float-right">
                <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                    Follow
                </button>
            </a>

        </div>
    </div>
    <hr className="border-gray-800"/>


    <div className="flex flex-shrink-0">
        <div className="flex-1 ">
            <div className="flex items-center w-48">
                <div>
                    <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt=""/>
                </div>
                <div className="ml-3 mt-3">
                    <p className="text-base leading-6 font-medium text-white">
Lectures Ab                    </p>
                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @lectures
                    </p>
                </div>
            </div>

        </div>
        <div className="flex-1 px-4 py-2 m-2">
            <Link href="" className=" float-right">
                <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                    Follow
                </button>
            </Link>

        </div>
    </div>

    <hr className="border-gray-800"/>



 

    <div className="flex">
       <Link href={"#"}> <div className="flex-1 p-4">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
        </div></Link>
    </div>

</div>




     
    </div> */}
</div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>

  )

            


  
}
