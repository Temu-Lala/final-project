import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import Dashbord from '../dashboard/page'
import Register from '../register/page'
import Link from 'next/link';
// import { useNavigation } from 'next/navigation';
export default function Login() {
  // const navigation = useNavigation();
  // const todashbord = () => {
  //   navigation.push('/dashboard');
  // };

  return (

    <div className="py-6 text-white ">
      <div className="flex text-white border border-white bg-#1a2947 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div className="hidden lg:block lg:w-1/2 bg-cover"> <img src="https://images.pexels.com/photos/262488/pexels-photo-262488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
            <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-center">Brand</h2>
                <p className="text-xl text-center">Welcome back!</p>
                <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md  border hover:bg-blue-400">
                    <div className="px-4 py-3">
                        <GoogleIcon/>
                    </div>
                    <h1 className="px-4 py-3 w-5/6 text-center   font-bold">Sign in with Google</h1>
                </a>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <a href="#" className="text-xs text-center  uppercase">or login with email</a>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="mt-4">
                    <label className="block  text-sm font-bold mb-2">Email Address</label>
                    <input className=" bg-transparent  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"/>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block  text-sm font-bold mb-2">Password</label>
                        <a href="#" className="text-xs ">Forget Password?</a>
                    </div>
                    <input className=" bg-transparent focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"/>
                </div>
                <div className="mt-8">
                <Link href="/dashboard">
                    <button className=" text-white font-bold py-2 px-4 w-full border  rounded hover:bg-gray-600">Login
                      
                     
                      
                      </button>
                      </Link>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <Link href="../register" className="text-xs text-red-600 uppercase">or sign up</Link>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </div>
 )
}
