import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';

export default function messages() {
  return (
    
<div className="flex h-screen antialiased border">
    <div className="flex flex-row h-full w-full overflow-x-hidden">
      <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-transparent border  flex-shrink-0">
        <div className="flex flex-row items-center justify-center h-12 w-full">
          <div
            className="flex items-center justify-center rounded-2xl text-indigo-700  h-10 w-10">
           <ChatIcon/>
            
          </div>
          <div className="ml-2 font-bold text-2xl">DBUChat</div>
        </div>
        <div
          className="flex flex-col items-center border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
          <div className="h-20 w-20 rounded-full border overflow-hidden">
          <ChatIcon/>
          </div>
          <div className="text-sm font-semibold mt-2">User AB</div>
         
        </div>
        <div className="flex  flex-col mt-8">
          <div className="flex flex-row items-center justify-between text-xs">
            <span className="font-bold">Chats</span>
          </div>
          <div className="flex flex-col space-y-1 mt-4 -mx-2 h-1/2 overflow-y-scroll">
            
           
           
            <button
              className="flex flex-col  hover:bg-slate-700 rounded-xl p-2">
             
              <div className="ml-2 text-xl font-semibold"><ChatIcon/>User Ab</div>
              <div className="ml-2 text-sm font-semibold">Last messages </div>

            </button>
            <button
              className="flex flex-col  hover:bg-slate-700 rounded-xl p-2">
             
              <div className="ml-2 text-xl font-semibold"><ChatIcon/>User Ab</div>
              <div className="ml-2 text-sm font-semibold">Last messages </div>

            </button>
            <button
              className="flex flex-col  hover:bg-slate-700 rounded-xl p-2">
             
              <div className="ml-2 text-xl font-semibold"><ChatIcon/>User Ab</div>
              <div className="ml-2 text-sm font-semibold">Last messages </div>

            </button>
            <button
              className="flex flex-col  hover:bg-slate-700 rounded-xl p-2">
             
              <div className="ml-2 text-xl font-semibold"><ChatIcon/>User Ab</div>
              <div className="ml-2 text-sm font-semibold">Last messages </div>

            </button>
          </div>
        
          
        </div>
      </div>
      <div className="flex flex-col flex-auto h-full p-6 border">
        <div
          className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-transparent text-black h-full p-4">
          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2">
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                   <span className='w-12 h-12 rounded-full bg-white'>a</span>
                    <div
                      className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>Hey How are you today?</div>
                    </div>
                  </div>
                </div>
              
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                   <span>b</span>
                    <div
                      className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                    >
                      <div>I'm ok what about you?</div>
                    </div>
                  </div>
                </div>
               
             
             
              
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div
                      className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div className="flex flex-row items-center">
                        <button
                          className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10"
                        ><ChatIcon/>
                        </button>
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div>
              <button
                className="flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
               
               <ChatIcon/>
              </button>
            </div>
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
                <button
                  className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                >
                  <ChatIcon/>
                </button>
              </div>
            </div>
            <div className="ml-4">
              <button
                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span className="ml-2">
                <ChatIcon/>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
