import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import './newsstyle.css'
export default function page() {
  return (
    <div className="p-relative h-screen"  style={{ width: 'background-color: #15202b' }}>
        <div className="flex justify-center">

        {/* <header className="text-white h-12 py-4 h-auto">
      <div style={{ width: '275px' }}>
        <div className="overflow-y-auto fixed h-screen pr-3" style={{ width: '275px' }}>
          <Link href="#" passHref>
            
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-white ml-3" fill="currentColor">
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
              <h1>Welcome to Next.js</h1>
            
          </Link>

          <nav className="mt-5 px-2">
          
            
              <Link href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Home
              
            </Link>
          </nav>

          <div className="absolute" style={{ bottom: '2rem' }}>
            <div className="flex-shrink-0 flex hover:bg-gray-800 rounded-full px-4 py-3 mt-12 mr-2">
              
                <Link href="#" passHref className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base leading-6 font-medium text-white">
                        ℜ??????ℜ??????.dev
                      </p>
                      <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @Ricardo_oRibeir
                      </p>
                    </div>
                  </div>
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header> */}

            <div role="main">
                <div className="flex" style={{width: '990px'}}>
                    <section className="w-3/5 border border-y-0 border-gray-800" style={{maxWidth:'600px'}}>
                     
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
        <div className="mx-2">
          <h2 className="mb-0 text-xl font-bold text-white">ℜ??????ℜ??????.dev</h2>
          <p className="mb-0 w-48 text-xs text-gray-400">9,416 Tweets</p>
        </div>
      </div>

      <hr className="border-gray-800" />
    </div>

    {/* <div>
      <div className="w-full bg-cover bg-no-repeat bg-center" style={{ height: '200px', backgroundImage: 'url(https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200)' }}>
        <img className="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="" />
      </div>
      <div className="p-4">
        <div className="relative flex w-full">
          <div className="flex flex-1">
            <div style={{ marginTop: '-6rem' }}>
              <div style={{ height: '9rem', width: '9rem' }} className="md rounded-full relative avatar">
                <img style={{ height: '9rem', width: '9rem' }} className="md rounded-full relative border-4 border-gray-900" src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt="" />
                <div className="absolute"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <button className="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="space-y-1 justify-center w-full mt-3 ml-3">
          <div>
            <h2 className="text-xl leading-6 font-bold text-white">ℜ??????ℜ??????.dev</h2>
            <p className="text-sm leading-5 font-medium text-gray-600">@Ricardo_oRibeir</p>
          </div>
          <div className="mt-3">
            <p className="text-white leading-tight mb-2">Software Engineer / Designer / Entrepreneur <br />Visit my website to test a working <b>Twitter Clone.</b> </p>
            <div className="text-gray-600 flex">
              <span className="flex mr-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 paint-icon">
                  <g>
                    <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
                    <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
                  </g>
                </svg>
                <Link href="https://ricardoribeirodev.com/personal/" target="#" className="leading-5 ml-1 text-blue-400">www.RicardoRibeiroDEV.com</Link>
              </span>
              <span className="flex mr-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 paint-icon">
                  <g>
                    <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                    <circle cx="7.032" cy="8.75" r="1.285"></circle>
                    <circle cx="7.032" cy="13.156" r="1.285"></circle>
                    <circle cx="16.968" cy="8.75" r="1.285"></circle>
                    <circle cx="16.968" cy="13.156" r="1.285"></circle>
                    <circle cx="12" cy="8.75" r="1.285"></circle>
                    <circle cx="12" cy="13.156" r="1.285"></circle>
                    <circle cx="7.032" cy="17.486" r="1.285"></circle>
                    <circle cx="12" cy="17.486" r="1.285"></circle>
                  </g>
                </svg>
                <span className="leading-5 ml-1">Joined December, 2019</span>
              </span>
            </div>
          </div>
          <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
            <div className="text-center pr-3">
              <span className="font-bold text-white">520</span>
              <span className="text-gray-600"> Following</span>
            </div>
            <div className="text-center px-3">
              <span className="font-bold text-white">23,4m </span>
              <span className="text-gray-600"> Followers</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-800" />
    </div> */}

    <ul className="list-none">
      <li>
        <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
          <div className="flex flex-shrink-0 p-4 pb-0">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                </div>
                <div className="ml-3">
                  <p className="text-base leading-6 font-medium text-white">
                    Sonali Hirave
                    <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                      @ShonaDesign . 16 April
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="pl-16 flex-col">
            <p className="text-base width-auto font-medium text-white height-auto">
              Day 07 of the challenge <Link href="#" className="text-blue-400">#100DaysOfCode</Link>
              I was wondering what I can do with <a href="#" className="text-blue-400">#tailwindcss</a>, so just started building
              Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
              [07/100]
              <Link href="#" className="text-blue-400"> #WomenWhoCode #CodeNewbie</Link>
            </p>

            <div className="md:flex-shrink pr-6 pt-3">
              <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style={{ height: "200px", backgroundImage: "url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)" }}>
                <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
              </div>
            </div>

            <div className="flex items-center py-4">
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                  </g>
                </svg>
                12.3 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M12 2C6.489 2 2 6.488 2 12s4.489 10 10 10 10-4.488 10-10S17.511 2 12 2zm0 18c-4.41 0-8-3.589-8-8s3.59-8 8-8 8 3.589 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"></path>
                  </g>
                </svg>
                14 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M12 2C6.487 2 2 6.488 2 12s4.487 10 10 10 10-4.488 10-10S17.513 2 12 2zm0 18c-4.41 0-8-3.589-8-8s3.59-8 8-8 8 3.589 8 8-3.59 8-8 8zM12 8h2v6h-2zm0 4h2v2h-2z"></path>
                  </g>
                </svg>
                14 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M12 2C6.487 2 2 6.488 2 12s4.487 10 10 10 10-4.488 10-10S17.513 2 12 2zm-1 14h2v2h-2zm0-8h2v6h-2z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <hr className="border-gray-800" />
        </article>
      </li>
    </ul>
    <ul className="list-none">
      <li>
        <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
          <div className="flex flex-shrink-0 p-4 pb-0">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                </div>
                <div className="ml-3">
                  <p className="text-base leading-6 font-medium text-white">
                    Sonali Hirave
                    <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                      @ShonaDesign . 16 April
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="pl-16 flex-col">
            <p className="text-base width-auto font-medium text-white height-auto">
              Day 07 of the challenge <Link href="#" className="text-blue-400">#100DaysOfCode</Link>
              I was wondering what I can do with <a href="#" className="text-blue-400">#tailwindcss</a>, so just started building
              Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
              [07/100]
              <Link href="#" className="text-blue-400"> #WomenWhoCode #CodeNewbie</Link>
            </p>

            <div className="md:flex-shrink pr-6 pt-3">
              <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style={{ height: "200px", backgroundImage: "url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)" }}>
                <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
              </div>
            </div>

            <div className="flex items-center py-4">
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                  </g>
                </svg>
                12.3 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M12 2C6.489 2 2 6.488 2 12s4.489 10 10 10 10-4.488 10-10S17.511 2 12 2zm0 18c-4.41 0-8-3.589-8-8s3.59-8 8-8 8 3.589 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"></path>
                  </g>
                </svg>
                14 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M12 2C6.487 2 2 6.488 2 12s4.487 10 10 10 10-4.488 10-10S17.513 2 12 2zm0 18c-4.41 0-8-3.589-8-8s3.59-8 8-8 8 3.589 8 8-3.59 8-8 8zM12 8h2v6h-2zm0 4h2v2h-2z"></path>
                  </g>
                </svg>
                14 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M12 2C6.487 2 2 6.488 2 12s4.487 10 10 10 10-4.488 10-10S17.513 2 12 2zm-1 14h2v2h-2zm0-8h2v6h-2z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <hr className="border-gray-800" />
        </article>
      </li>
    </ul>

    <ul className="list-none">
      <li>
        <article className="hover:bg-gray-800 transition duration-350 ease-in-out">
          <div className="flex flex-shrink-0 p-4 pb-0">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img className="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                </div>
                <div className="ml-3">
                  <p className="text-base leading-6 font-medium text-white">
                    Sonali Hirave
                    <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                      @ShonaDesign . 16 April
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="pl-16 flex-col">
            <p className="text-base width-auto font-medium text-white height-auto">
              Day 07 of the challenge <Link href="#" className="text-blue-400">#100DaysOfCode</Link>
              I was wondering what I can do with <a href="#" className="text-blue-400">#tailwindcss</a>, so just started building
              Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion.
              [07/100]
              <Link href="#" className="text-blue-400"> #WomenWhoCode #CodeNewbie</Link>
            </p>

            <div className="md:flex-shrink pr-6 pt-3">
              <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64" style={{ height: "200px", backgroundImage: "url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80)" }}>
                <img className="opacity-0 w-full h-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="" />
              </div>
            </div>

            <div className="flex items-center py-4">
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                  </g>
                </svg>
                12.3 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M12 2C6.489 2 2 6.488 2 12s4.489 10 10 10 10-4.488 10-10S17.511 2 12 2zm0 18c-4.41 0-8-3.589-8-8s3.59-8 8-8 8 3.589 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"></path>
                  </g>
                </svg>
                14 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M12 2C6.487 2 2 6.488 2 12s4.487 10 10 10 10-4.488 10-10S17.513 2 12 2zm0 18c-4.41 0-8-3.589-8-8s3.59-8 8-8 8 3.589 8 8-3.59 8-8 8zM12 8h2v6h-2zm0 4h2v2h-2z"></path>
                  </g>
                </svg>
                14 k
              </div>
              <div className="flex-1 flex items-center color-white text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <g>
                    <path d="M12 2C6.487 2 2 6.488 2 12s4.487 10 10 10 10-4.488 10-10S17.513 2 12 2zm-1 14h2v2h-2zm0-8h2v6h-2z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <hr className="border-gray-800" />
        </article>
      </li>
    </ul>
                    </section>


 <div className="w-2/5 h-12 relative">
      <div style={{ maxWidth: '350px' }}>

    <div className="overflow-y-auto fixed  h-screen">




    <div className="relative text-gray-300 w-80 p-5">
      <button type="submit" className="absolute ml-4 mt-3 mr-4">
      <svg
  className="h-4 w-4 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 56.966 56.966"
  style={{ enableBackground: "new 0 0 56.966 56.966" }}
  xmlSpace="preserve"
  width="512px"
  height="512px"
>

<path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          ></path></svg>
      
      </button>

      <input
        type="search"
        name="search"
        placeholder="Search Twitter"
        className="bg-dim-700 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0"
      />
    </div>
    <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
      <div className="flex mb-1">
        
          <Link href="https://www.instagram.com/ricardoribeiro.rr/" passHref className="flex-col w-full">
            <div
              className="w-full bg-cover bg-no-repeat bg-center"
              style={{
                height: "100px",
                backgroundImage:
                  'url("https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=V2sPZa9JmQAAX_Lmo3e&tp=1&oh=ecbe6e24eb0d74975e725fceaaf09f5b&oe=60460257")',
              }}
            >
              <img
                className="opacity-0"
                src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=V2sPZa9JmQAAX_Lmo3e&tp=1&oh=ecbe6e24eb0d74975e725fceaaf09f5b&oe=60460257"
                alt=""
              />
            </div>
         
        </Link>

        
          <Link href="https://www.instagram.com/ricardoribeiro.rr/" passHref className="flex-col w-full">
            <div
              className="w-full bg-cover bg-no-repeat bg-center"
              style={{
                height: "100px",
                backgroundImage:
                  'url("https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=V2sPZa9JmQAAX_Lmo3e&tp=1&oh=ecbe6e24eb0d74975e725fceaaf09f5b&oe=60460257")',
              }}
            >
              <img
                className="opacity-0"
                src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=V2sPZa9JmQAAX_Lmo3e&tp=1&oh=ecbe6e24eb0d74975e725fceaaf09f5b&oe=60460257"
                alt=""
              />
            </div>
          
        </Link>

      
          <Link href="https://www.instagram.com/ricardoribeiro.rr/" passHref className="flex-col w-full">
            <div
              className="w-full bg-cover bg-no-repeat bg-center"
              style={{
                height: "100px",
                backgroundImage:
                  'url("https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=V2sPZa9JmQAAX_Lmo3e&tp=1&oh=ecbe6e24eb0d74975e725fceaaf09f5b&oe=60460257")',
              }}
            >
              <img
                className="opacity-0"
                src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=V2sPZa9JmQAAX_Lmo3e&tp=1&oh=ecbe6e24eb0d74975e725fceaaf09f5b&oe=60460257"
                alt=""
              />
            </div>
         
        </Link>
      </div>

      <div className="flex">
     
          <Link href="https://www.instagram.com/ricardoribeiro.rr/" passHref target="_blank" className="flex-col w-full">
            <div
              className="w-full bg-cover bg-no-repeat bg-center"
              style={{
                height: "100px",
                backgroundImage:
                  'url("https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257")',
              }}
            >
              <img
                className="opacity-0"
                src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257"
                alt=""
              />
            </div>
         
        </Link>

        
          <Link href="https://www.instagram.com/ricardoribeiro.rr/" passHref target="_blank" className="flex-col w-full">
            <div
              className="w-full bg-cover bg-no-repeat bg-center"
              style={{
                height: "100px",
                backgroundImage:
                  'url("https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257")',
              }}
            >
              <img
                className="opacity-0"
                src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257"
                alt=""
              />
            </div>
         
        </Link>

     
          <Link href="https://www.instagram.com/ricardoribeiro.rr/" passHref target="_blank" className="flex-col w-full">
            <div
              className="w-full bg-cover bg-no-repeat bg-center"
              style={{
                height: "100px",
                backgroundImage:
                  'url("https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257")',
              }}
            >
              <img
                className="opacity-0"
                src="https://instagram.flis9-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/71304173_398561657763867_3930777215019056798_n.jpg?_nc_ht=instagram.flis9-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=V2sPZa9JmQAAX_Lmo3e&amp;tp=1&amp;oh=ecbe6e24eb0d74975e725fceaaf09f5b&amp;oe=60460257"
                alt=""
              />
            </div>
        </Link>
      </div>
    </div>
<div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
<div className="flex">
      <div className="flex-1 m-2">
        <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Germany trends</h2>
      </div>
      <div className="flex-1 px-4 py-2 m-2">
        <Link href="" className="text-2xl rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
          <svg className="m-2 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </Link>
      </div>
    </div>


    <hr className="border-gray-800"/>

    <div className="flex">
      <div className="flex-1">
        <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">1 . Trending</p>
        <h2 className="px-4 ml-2 w-48 font-bold text-white">#Microsoft363</h2>
        <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">5,466 Tweets</p>
      </div>
      <div className="flex-1 px-4 py-2 m-2">
        <Link href="" className="text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
          <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </Link>
      </div>
    </div>
    <hr className="border-gray-800"/>


    <div className="flex">
    <div className="flex-1">
      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">2 . Politics . Trending</p>
      <h2 className="px-4 ml-2 w-48 font-bold text-white">#HI-Fashion</h2>
      <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">8,464 Tweets</p>
    </div>
        <div className="flex-1 px-4 py-2 m-2">
            <Link href="" className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
                <svg className="m-2 h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </Link>
        </div>
    </div>
    <hr className="border-gray-800"/>


    <div className="flex">
      <div className="flex-1">
        <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">3 . Rock . Trending</p>
        <h2 className="px-4 ml-2 w-48 font-bold text-white">#Ferrari</h2>
        <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">5,586 Tweets</p>
      </div>
      <div className="flex-1 px-4 py-2 m-2">
       
          <Link href="/" passHref className="text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
            <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
        
        </Link>
      </div>
    </div>
    <hr className="border-gray-800"/>


    <div className="flex">
      <div className="flex-1">
        <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">4 . Auto Racing . Trending</p>
        <h2 className="px-4 ml-2 w-48 font-bold text-white">#vettel</h2>
        <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">9,416 Tweets</p>
      </div>
      <div className="flex-1 px-4 py-2 m-2">
       
          <Link href="/" passHref className="text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right">
            <svg className="m-2 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
         
        </Link>
      </div>
    </div>
    <hr className="border-gray-800"/>


    <div className="flex">
        <div className="flex-1 p-4">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
        </div>
    </div>

<div className="max-w-sm rounded-lg  bg-dim-700 overflow-hidden shadow-lg m-4">
    <div className="flex">
        <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Who to follow</h2>
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
                        Sonali Hirave
                    </p>
                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @ShonaDesign
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
                        Sonali Hirave
                    </p>
                    <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @ShonaDesign
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
        <div className="flex-1 p-4">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
        </div>
    </div>

</div>




        <div className="flow-root m-6 inline">
            <div className="flex-1">
                <a href="#">
                    <p className="text-sm leading-6 font-medium text-gray-500">Terms Privacy Policy Cookies Imprint Ads info
                    </p>
                </a>
            </div>
            <div className="flex-2">
                <p className="text-sm leading-6 font-medium text-gray-600"> © 2020 Twitter, Inc.</p>
            </div>
        </div>
    </div>
</div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>

  )

            


  
}