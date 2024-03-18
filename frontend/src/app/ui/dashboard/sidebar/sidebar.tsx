import React from 'react';
import Image from 'next/image';
import '../sidebar/sidebar.css';
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
import Logo from '../../../../../public/dbu.png';

const Menuitems = {
  title: "name",
  list: [
    { id: 1, title: "Campus", path: "/dashboard/campus", icon: <BuildIcon /> },
    { id: 1, title: "Collage", path: "/dashboard/collage", icon: <MapsHomeWorkIcon /> },
    { title: "Department", path: "/dashboard/departments", icon: <SchoolIcon /> },
    { id: 1, title: "Follow", path: "/dashboard/follow", icon: <PersonIcon /> },
    { id: 2, title: "Lectures", path: "/dashboard/lectures", icon: <LocalLibraryIcon /> },
    { id: 2, title: "Messages", path: "/dashboard/messages", icon: <ForumIcon /> },
    { id: 2, title: "News", path: "/dashboard/news", icon: <AddIcon /> },
    { id: 3, title: "Notifications", path: "/dashboard/notfcations", icon: <NotificationsActiveIcon /> },
    { id: 3, title: "Collage", path: "/dashboard/collage", icon: <MapsHomeWorkIcon /> },
    { id: 3, title: "Logout", path: "/logout", icon: <LogoutIcon /> },
    { id: 4, title: "dashboard", path: "/dashboard", icon: <LogoutIcon /> }
  ]
};

export default function Sidebar() {
  return (
    <div className='sticky pt-24 sm:pt-24 md:pt-0 lg:pt-0 xl:pt-0'>
      <nav className="bg-[#1f2e47] h-screen top-0 left-0 flex-1 py-6 px-4 font-[sans-serif]">
        <div className="relative">
          <a href="javascript:void(0)">
            <img src="https://images.pexels.com/photos/12109950/pexels-photo-12109950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className='w-full h-28' />
          </a>
        </div>
        <div className="mt-6 flex flex-1 justify-between h-full ">
          <ul className='flex top-0 h-screen flex-col p-6 gap-6'>
            {Menuitems.list.map((item) => (
              <li key={item.id} className='w-full'>
                <Link href={item.path}>
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2 hidden md:block">{item.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
