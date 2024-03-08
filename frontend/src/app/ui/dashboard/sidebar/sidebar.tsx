import React from 'react'
import Image from 'next/image';

import '../sidebar/sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ForumIcon from '@mui/icons-material/Forum';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import Logo from '../../../../../public/dbu.png'
const Menuitems = {
  title:"name",
  list:[{
    id:1,
    title:"Campus",
    path:"/dashboard/campus",
    icon:<BuildIcon/>},
  {
    id:1,
  title:"Collage",
  path:"/dashboard/collage",
  icon:<MapsHomeWorkIcon/>},
  {
    title:"Department",
    path:"/dashboard/departments",
    icon:<SchoolIcon/>

}
,
  { id:1,
    title:"Follow",
    path:"/dashboard/follow",
    icon:<PersonIcon/>

},
{
  id:2,
  title:"Lectures",
  path:"/dashboard/lectures",
  icon:<LocalLibraryIcon/>

},
{
  id:2,
  title:"Messages",
  path:"/dashboard/messages",
  icon:<ForumIcon/>

},
{
  id:2,
  title:"News",
  path:"/dashboard/news",
  icon:<AddIcon/>

},
{
  id:3,
  title:"Notifications",
  path:"/dashboard/notfcations",
  icon:<NotificationsActiveIcon/>

},
{
  id:3,
  title:"Collage",
  path:"/dashboard/collage",
  icon:<MapsHomeWorkIcon/>

},
{
  id:3,
  title:"Logout",
  path:"/logout",
  icon:<LogoutIcon/>

},
{
  id:4,
  title:"dashboard",
  path:"/dashboard",
  icon:<LogoutIcon/>

}]
  
}
export default function sidebar() {
  return (














<div className=' sticky   '>
<nav className="bg-[#1f2e47] h-screen   top-0 left-0 flex-1 py-6 px-4 font-[sans-serif]">
      <div className="relative">
        <a href="javascript:void(0)"><img src="https://images.pexels.com/photos/12109950/pexels-photo-12109950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className='w-full h-28' />
        </a>
      </div>
      <div className=" mt-6  flex flex-1 justify-between h-full ">
      <ul className=' flex flex-col p-6 gap-6'>
    
    {Menuitems.list.map((item) => (  
      <li key={item.id} className=' w-full'>
        <Link href={item.path}>
          {item.icon}
          {item.title}
        </Link>
      </li>
     
    ))}
    
  </ul>
  
      </div>
    </nav>













    </div>






// <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

// <div className="min-h-screen flex flex-row bg-gray-100">
//   <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
//     <div className="flex items-center justify-center h-20 shadow-md">
//       <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
//     </div>
//     <ul className="flex flex-col py-4">
//       <li>
//         <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
//           <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
//           <span className="text-sm font-medium">Dashboard</span>
//         </a>
//       </li>
//       <li>
//         <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
//           <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
//           <span className="text-sm font-medium">Music</span>
//         </a>
//       </li>
//       <li>
//         <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
//           <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
//           <span className="text-sm font-medium">Drink</span>
//         </a>
//       </li>
//       <li>
//         <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
//           <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
//           <span className="text-sm font-medium">Shopping</span>
//         </a>
//       </li>
//       <li>
//         <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
//           <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
//           <span className="text-sm font-medium">Chat</span>
//         </a>
//       </li>
//       <li>
//         <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
//           <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
//           <span className="text-sm font-medium">Profile</span>
//         </a>
//       </li>
//       <li>
//         <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
//           <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
//           <span className="text-sm font-medium">Notifications</span>
//           <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
//         </a>
//       </li>
//       <li>
//         <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
//           <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
//           <span className="text-sm font-medium">Logout</span>
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>




  )
 }

