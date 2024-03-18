import React, { ReactElement } from 'react';
import Image from 'next/image';
import HomeIcon from '@mui/icons-material/Home';
import Groups2Icon from '@mui/icons-material/Groups2';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';

interface NavItemProps {
  icon: ReactElement; // Explicitly typing the icon prop as ReactElement
}

export default function Navbar() {
  return (
    <nav className="fixed z-50 left-0  w-full top-0 bg-[#1a2947] p-1">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Profile Image and Search Bar */}
        <div className='flex items-center space-x-4 sm:space-x-2 lg:space-x-4 mb-4 md:mb-0'>
          <Image
            src=""
            alt="#"
            width={20}
            height={20}
            className="rounded-lg shadow-md hover:opacity-80 transition duration-300 ease-in-out w-[3rem] h-[3rem] sm:w-[2.5rem] sm:h-[2.5rem] lg:w-[3rem] lg:h-[3rem]"
          />
          <input
            className="rounded-full h-[2.5rem] sm:h-[2rem] lg:h-[2.5rem] w-full max-w-md sm:max-w-sm lg:max-w-md bg-[#3A3B3C] px-4 text-xs sm:text-sm text-gray-400 outline-none"
            type="text"
            placeholder="Search News"
          />
        </div>

        {/* Other Icons */}
        <div className="flex items-center space-x-4 md:space-x-2 lg:space-x-4">
          <div className="flex flex-wrap justify-center  sm:space-x-12 space-x-4  sm:justify-start">
            <NavItem icon={<HomeIcon />} />
            <NavItem icon={<Groups2Icon />} />
            <NavItem icon={<MessageIcon />} />
            <NavItem icon={<CircleNotificationsIcon />} />
            <NavItem icon={<CampaignIcon />} />
          </div>
        </div>

        {/* Settings Icon */}
        <div className="flex items-center space-x-4">
          <NavItem icon={<SettingsIcon />} />
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon }: NavItemProps) {
  return (
    <div className="relative group">
      <div className="group-hover:bg-gray-600 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
        {icon}
      </div>
      <div className="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out"></div>
    </div>
  );
}
