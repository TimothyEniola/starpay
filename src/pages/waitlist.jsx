import React from "react";

const JoinWaitlist = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center from-green-50 to-gray-50 px-4">
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 sm:p-10 text-center border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png"
            alt="KariyaPay Logo"
            className="w-14 h-14 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Join the waitlist for{" "}
          <span className="text-green-600">KariyaPay</span>
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Stay informed about our latest updates
        </p>

        {/* Input Fields */}
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

          {/* Buttons */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Join Waitlist
          </button>

          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Take a Survey
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-6 text-gray-500">
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
