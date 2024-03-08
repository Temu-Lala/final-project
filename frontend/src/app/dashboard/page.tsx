import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Lecturesprofile from './lecturesprofiles/page'
import Link from 'next/link';
export default function Dashboard() {
  return (
   
    
     
      <div className="p-4 xl:ml-10 flex flex-4">
       
        <div className="mt-12">
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
               <ApartmentIcon/>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Campus </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">12</h4>
              </div>
              
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <AutoStoriesIcon/>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Collages</p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">23</h4>
              </div>
             
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <SchoolIcon/>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Department </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900"> <span>21</span> </h4>
              </div>
            
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
               <PsychologyIcon/>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Lectures </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">430</h4>
              </div>
            
            </div>
          </div>
          
          <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                <div>
                  <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Lectures </h6>
                  <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                  </p>
                </div>
              
              </div>
              <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Name</p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Deparment</p>
                      </th>
                      <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Contact</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=' cursor-pointer' >
                      <Link href ="/dashboard/lecturesprofiles" >
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Lecture Ab</p>
                        </div>
                      </td>
                      
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">Software</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="w-10/12">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">09093420</p>

                        </div>
                      </td>
                      </Link>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Lecture Ab</p>
                        </div>
                      </td>
                      
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">Software</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="w-10/12">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">09093420</p>

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Lecture Ab</p>
                        </div>
                      </td>
                      
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">Software</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="w-10/12">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">09093420</p>

                        </div>
                      </td>
                    </tr>
    
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    
  )
}
