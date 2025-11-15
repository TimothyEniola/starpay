import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#0B1A2A] text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Secure your transactions
          </h2>

          <div className="flex items-center gap-4">
            <button className="bg-[#91C730] text-[#FFFFFF] font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
              Join the waitlist
            </button>
            <button className="bg-[#FFFFFF] text-[#0F172A] font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
              Take a Survey
            </button>
          </div>
        </div>

        <hr className="opacity-20 mb-12" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo + Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="logo"
                className="w-14 h-14 lg:w-16 lg:h-16 cursor-pointer"
              />
            </div>

            <p className="text-sm leading-6 opacity-80 mb-4">
              KariyaPay is a secure, user‑friendly platform designed to simplify
              digital transactions for individuals and businesses. Whether
              you’re sending money, receiving payments, or managing finances,
              KariyaPay ensures every transaction is fast, safe, and seamless.
            </p>
            <p className="text-sm opacity-80">
              Join a growing community that trusts KariyaPay for reliable,
              real‑time financial solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>How It Works</li>
              <li>Pricing</li>
              <li>Security</li>
              <li>API Documentation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>About</li>
              <li>Blog</li>
              <li className="flex items-center gap-2">
                Careers{" "}
                <span className="bg-[#ffffff] text-[#63C132] text-xs px-2 py-0.5 rounded-full">
                  New
                </span>
              </li>
              <li>Press Kit</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2 text-sm opacity-80 mb-6">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Tutorials</li>
              <li>Blog</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <hr className="opacity-20 my-12" />

        {/* Copyright */}
        <p className="text-center text-xs opacity-50">
          © 2025 FluTech Creative
        </p>
      </div>
    </footer>
  );
};

export default Footer;
