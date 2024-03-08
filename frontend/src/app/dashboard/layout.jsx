'use cleant'
import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import '../ui/dashboard/dashboardui.css'
function layout({children}) {
  return (
    <div className='flex'>

        <div className=' w-1/5 h-screen  overscroll-none sticky '>
        <Sidebar/>
        </div>
        <div className='   flex    '> 
         <Navbar/>

        </div>
     
<div className=' pt-24  w-screen overflow-y-scroll scroll-smooth'>

    {children}
</div>

      
       


    </div>
  )
}

export default layout