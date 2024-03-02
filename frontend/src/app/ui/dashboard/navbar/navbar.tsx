import React from 'react'

export default function navbar() {
  return (
<nav className="bg-[#242526] p-1 h-12">
  <div className="flex justify-between items-center">
  <div className="flex items-center space-x-2">
    <img className="h-8" src="https://freepngimg.com/thumb/facebook/62487-bluetie-icons-computer-facebook-login-icon-email.png" alt=""/>
    <input className="rounded-full h-6 bg-[#3A3B3C] p-4 text-xs text-gray-400 outline-none" type="text" placeholder="Search Facebook" />
  </div>
  <div className="relative flex justify-between w-1/5 items-center">
    <div className="relative group">
      <div className="group-hover:bg-gray-600 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
        <img className="h-5 cursor-pointer" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-home-ui-essential-kmg-design-flat-kmg-design.png"/>
      </div>
        <div className="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div>
    </div>
    <div className="relative group">
      <div className="group-hover:bg-gray-600 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
        <img className="h-5 cursor-pointer" src="https://img.icons8.com/fluency/48/000000/conference-call.png"/>
      </div>
        <div className="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out"></div>
    </div>
     <div className="relative group">
      <div className="group-hover:bg-gray-600 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
        <img className="h-5 cursor-pointer" src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-watch-call-to-action-bearicons-outline-color-bearicons.png"/>
      </div>
        <div className="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div>
    </div>
  </div>
  <div className="flex justify-evenly w-1/5">
    
    <img className="h-5" src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-home-ui-essential-kmg-design-flat-kmg-design.png"/>
    <img className="h-5" src="https://img.icons8.com/fluency/48/000000/conference-call.png"/>
    <img className="h-5" src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-watch-call-to-action-bearicons-outline-color-bearicons.png"/>
  </div>
  </div>
</nav>



 
  )
}
