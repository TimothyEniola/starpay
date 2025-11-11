// import React from 'react'

// const App = () => {
//   return (
//     <div className='bg-amber-400 '>App</div>
//   )
// }

// export default App

import React from "react";
import stars from "./assets/stars.png";
import whatsapp from "./assets/whatsapp.png";
import {
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
const JoinWaitlist = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-emerald-50 px-4">
      <div className="fixed top-6 left-6">
        <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
          <IoIosArrowBack size={20} className="text-green-600" />
        </button>
      </div>
      <div className="hidden md:block md:fixed md:bottom-6 md:right-6 md:pt-0">
        <img
          src={whatsapp}
          alt="whatsapp"
          className="w-12 h-12 md:w-16 md:h-16 object-contain cursor-pointer"
        />
      </div>
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <img src={stars} alt="stars" className="w-32 h-32 object-contain" />
        </div>

        <h1 className="text-3xl font-bold mb-4 text-[#000000] md:text-5xl">
          Join the waitlist for <br />
          <span className="text-[#91C730]">KariyaPay</span>
        </h1>
        <p className="text-[#000000] mb-6 text-sm font-medium sm:text-base md:text-lg">
          Stay informed about our latest updates
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#91C730] text-white py-2 rounded-lg font-semibold hover:bg-green-600 hover:cursor-pointer transition">
            Join Waitlist
          </button>

          <button
            type="button"
            className="w-full bg-[#3FABDD] text-white py-2 rounded-lg font-semibold hover:bg-blue-600 hover:cursor-pointer transition">
            Take a Survey
          </button>
        </form>

        <div className="flex justify-center space-x-8 mt-6 hover:cursor-pointer">
          <FaXTwitter size={24} className="hover:text-[#91C730]" />
          <FaInstagram size={24} className="hover:text-[#91C730]" />
          <PiLinkedinLogoBold size={24} className="hover:text-[#91C730]" />
          <TiSocialFacebookCircular size={24} className="hover:text-[#91C730]" />
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
