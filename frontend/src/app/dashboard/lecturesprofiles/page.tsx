import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
export default function page() {
  return (
<div className="border  p-4">

<div className="border-1 shadow-lg shadow-gray-700 rounded-lg">

    <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
        <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>

        <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
              Temesgen teshome 
            </p>
            <p className="text-heading">Software Engineer</p>
        </div>

    </div>

    <div className="p-5">

        <div className="flex flex-col sm:flex-row sm:mt-10">

            <div className="flex flex-col sm:w-1/3">
                <div className="py-3 sm:order-none order-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color"> Contact  Me</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div>
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 hover:text-orange-600"><LinkedInIcon/>
                            </a>
                            <div className="ml-2 truncate">jkdfjdkjfkdj@gmail.com</div>
                        </div>
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                aria-label="Visit TrendyMinds YouTube" href="" target="_blank"><PhoneAndroidIcon/>
                            </a>
                            <div>9145258775</div>
                        </div>
                     
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                aria-label="Visit TrendyMinds Twitter" href="" target="_blank">
                                    <EmailIcon/>
                            </a>
                            <div>gfffffffff87.gmail.com</div>
                        </div>

                    </div>
                </div>
                <div className="py-3 sm:order-none order-2">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Skills</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div>
                        <div className="flex items-center my-1">
                          
                            <div className="ml-2">Tailwind CSS</div>
                        </div>
                        <div className="flex items-center my-1">
                           
                            <div className="ml-2">Java</div>
                        </div>
                        <div className="flex items-center my-1">
                         
                            <div className="ml-2">Andoid</div>
                        </div>
                        <div className="flex items-center my-1">
                          
                            <div className="ml-2">Html, Css, JS</div>
                        </div>

                    </div>
                </div>
                <div className="py-3 sm:order-none order-1">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Education Background</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div className="flex flex-col space-y-1">

                        <div className="flex flex-col">
                            <p className="text-sm font-medium">
                                <span className="text-green-700"> (INFORMATION TECHNOLOGY)</span>, vjhjhjhjhjhjjj.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium"><span className="text-green-700">HSC</span>, RAJARSHI SHAHU
                                COLLEGE, LATUR.</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium"><span className="text-green-700">SSC</span>, DNYANESHWAR HIGH
                                SCHOOL, LATUR.</p>
                        </div>

                    </div>
                </div>


                <div className="py-3 sm:order-none order-1">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Languages</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div className="flex flex-col space-y-1">

                        <div className="flex flex-col">
                            <p className="text-sm font-medium">
                               Amharic.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium"> English
                               </p>
                        </div>
                     

                    </div>
                </div>

            </div>


            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">

                <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">About Me</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>
                    <p>To get a career opportunity which would help me to utilize my academic background to assist
                        me to gain experience, employ my excellent skills, and enable me to make positive
                        contribution.</p>
                </div>

                <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div className="flex flex-col">

                        <div className="flex flex-col">
                            <p className="text-lg font-bold">Netcracker Technology | Software Engineer</p>
                            <p className="font-semibold text-sm ">2021 - Present</p>
                            <p className="font-semibold text-sm mt-2 mb-1">Key Responsibilities</p>
                            <ul className="text-sm list-disc pl-4 space-y-1">
                                <li>Working on customer facing product</li>
                                <li>Deliverying highly efficient solutions</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>

                        <div className="flex flex-col mt-8">
                            <p className="text-lg font-bold">TailwindFlex.com | Lead</p>
                            <p className="font-semibold text-sm ">2020-2021</p>
                            <p className="font-semibold text-sm  mt-2 mb-1">Key Responsibilities</p>
                            <ul className="text-sm list-disc pl-4 space-y-1">
                                <li>Developed usable components</li>
                                <li>Solving complex problems</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Projects</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div className="flex flex-col">

                        <div className="flex flex-col">
                            <p className="text-lg font-semibold ">Used Books mobile app</p>
                            <p className="font-normal text-sm  mb-1 pl-2">A platform to sell as well as to
                                buy used books only for PCCoE College due to this reuse of books will be there
                                beneficial for environment also indirectly helps increase communication between
                                juniors and seniors.</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold ">Parking Automation System</p>
                            <p className="font-normal text-sm  mb-1 pl-2">it’s a web application which
                                helps you to book your slot for your car just like booking a movie ticket from home.
                            </p>
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
