
'use client'

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';

import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for styling
import Link from 'next/link';

export default function lectures() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Assuming selectedImage is a URL, hence string
  const [selectedcoverImage, setSelectedcoverImage] = useState<string | null>(null); // Assuming selectedImage is a URL, hence string

  // const router = useRouter();

  // const goToLocations = () => {
  //   router.push('http://localhost:3000/crud/create/locationn');
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string); // Assuming reader.result is a URL, hence string
      };
      reader.readAsDataURL(file);
    }
  };


  const handleImagecoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedcoverImage(reader.result as string); // Assuming reader.result is a URL, hence string
      };
      reader.readAsDataURL(file);
    }
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Function to handle changes in the selected date
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };


//   const gotolocations = ()=>
//   {
// setLocations("http://localhost:3000/crud/create/location")
//   }
  
  return (
    <div className="bg-cream text-white min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
      <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
      <section className="bg-cream-lighter p-4 shadow">
      <div className="md:flex">
        <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Create University Profile </h2>
      </div>
      <form>
      <div className="flex flex-1 px-3 text-center">
      <div className="button w-36 h-36 border-2 hover:border-yellow-500 text-cream mx-auto relative cursor-pointer rounded-xl bg-transparent">
        <input
          className="opacity-0 w-36 h-36 absolute cursor-pointer text-black"
          type="file"
          name="profile"
          onChange={handleImageChange}
           
        />
        
        {selectedImage ? (
          <img className="w-36 h-36 object-cover rounded-xl" src={selectedImage} alt="Selected" />
        ) : (
          <span>Cover Photo</span>
        )}
      </div>
      <div className="button w-36 h-36 border-2 hover:border-yellow-500 text-cream mx-auto relative cursor-pointer rounded-xl bg-transparent">
        <input
          className="opacity-0 w-36 h-36 absolute cursor-pointer text-black"
          type="file"
          name="profile"
          onChange={handleImagecoverChange}
           
        />
        
        {selectedImage ? (
          <img className="w-36 h-36 object-cover rounded-xl" src={selectedcoverImage} alt="Selected" />
        ) : (
          <span>profile</span>
        )}
      </div>
    </div>
        <div className=" md:flex mb-8">
      
          <div className="md:w-1/3">
            <legend className="uppercase tracking-wide text-sm">Contact </legend>
            <p className="text-xs font-light text-red">This entire section is .</p>
            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-xs font-bold">Phone</label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="tel" name="phone" placeholder="+2519999999"/>
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">URL (Portfolio,Linkedin )</label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="url" name="url" placeholder="https://linkedin.com"  />
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Email</label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="email" name="email" placeholder="uniconnect@gmail.com"  />
            </div>
          </div>
          </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">University Full Name</label>
            <input className="w-full shadow-inner p-4 border-0 text-black" type="text" name="name" placeholder="Name"  />
          </div>
          <div className="md:flex mb-4">
            <div className="md:flex-1 md:pr-3">
              <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Bio</label>
              <textarea   className="w-full shadow-inner p-4 border-0 text-black"  name="address_street" placeholder="Enter your text here..." cols={10} rows={10}> </textarea>
            </div>
            <div className="md:flex-1 md:pl-3">
              <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Ubiversty User Name.</label>
              <input   className="w-full shadow-inner p-4 border-0 text-black" type="text" name="address_number" placeholder=" @uniconnect"/>
              <span className="text-xs mb-4 font-thin">Please cheack </span>
            </div>
          </div>
          <div className="md:flex mb-4">
            <div className="md:flex-1 md:pr-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">University Web page </label>
                <input   className="w-full shadow-inner p-4 border-0 text-black" type="url" name="lat" placeholder="http://uniconnectethiopia.com"/>
              </div>
              <div className="md:flex-1 md:pl-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Stablished year  </label>
                <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="Select a date"
        dateFormat="MM/dd/yyyy" 
         
        className=' text-black border rounded-md  w-96 h-14'
      />              </div>
            </div>
          </div>
        </div>
      






        <div className=" md:flex mb-8">
      
          <div className="md:w-1/3">
            <p className="text-xs font-light text-red">This entire section is .</p>
            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-xs font-bold">Numbers Of Campus</label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="number" name="campus" placeholder="12 Campus "/>
            </div>
            <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Numbers Of Department</label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="number" name="Department" placeholder="12 Department "/>
            </div>
            <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Numbers Of Collage </label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="number" name="collage" placeholder="12 Collage "/>
             </div>
             <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Numbers Of Lectures </label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="number" name="Lectures" placeholder="12 Lectures "/>
             </div>
             <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Total Numbers Of Lab </label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="number" name="Lab" placeholder="12 Lab " />
             </div>
             <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Total Numbers Of Library </label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="number" name="Library" placeholder="12 Library  " />
             </div>
          </div>
          </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
         
          <div className="md:flex mb-4">
            
            <div className="md:flex-1 md:pl-3">
              <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Bio.</label>
              <input className="w-full shadow-inner p-4 border-0 text-black" type="text" name="address_number" placeholder="Bio"/>
              <span className="text-xs mb-4 font-thin">Please cheack </span>
            </div>
          </div>
          <div className="md:flex mb-4">
            <div className="md:flex-1 md:pr-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Education </label>
                <input className="w-full shadow-inner p-4 border-0 text-black" type="text" name="lat" placeholder="Education"/>
              </div>
              <div className="md:flex-1 md:pl-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Exprians </label>
                <input className="w-full shadow-inner p-4 border-0 text-black" type="text" name="lon" placeholder="Exprians"/>
              </div>
            </div>
            <div className="md:flex-1 md:pr-3">
              <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Set Locations</label>
              <Link href="http://localhost:3000/crud/create/location">
            <button className="w-full bg-white shadow-inner h-24 p-4 border-0 text-black" > set locations</button>
            </Link>
            </div>
          </div>
        </div>






        
          <div className="md:flex mb-6 border  border-t-1 border-b-0 border-x-0 border-cream-dark">
            <div className=" md:flex-1 px-3 text-center md:text-right">
              <input className="button text-cream-lighter text-white bg-brick hover:bg-brick-dark cursor-pointer w-32 h-12 rounded-xl border-white border hover:bg-slate-500 hover" type="submit" value="Submit Form "/>
            </div>
          </div>
        </form>
      </section>
      </main>
    </div>
  )
}
