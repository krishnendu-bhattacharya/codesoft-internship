import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="py-20 px-6 md:px-10 bg-gradient-to-b from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Image */}
        <div className="flex justify-center">
          <img
            src={assets.hero_img}
            alt="About Job Portal"
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Right Section - Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-6">
            About JobFindr
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-purple-600">JobFindr</span> — 
            your trusted bridge between talent and opportunity. We’re on a mission 
            to simplify the way people connect with their dream careers and help 
            employers find the right talent effortlessly.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We believe that the right job can change a life — and the right employee 
            can change a business. Our vision is to create a transparent, efficient, 
            and inspiring digital ecosystem where job seekers explore opportunities 
            that match their potential, and employers discover skilled individuals 
            who drive growth and innovation.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg text-white p-10">
        <h3 className="text-3xl font-semibold mb-6 text-center">Why Choose Us?</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Card 1 */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 hover:bg-white/25 transition-all duration-300">
            <div className="text-4xl mb-3">🧾</div>
            <p className="text-lg font-medium">Verified Job Listings</p>
            <p className="text-sm opacity-80 mt-1">
              Thousands of trusted and updated job openings every day.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 hover:bg-white/25 transition-all duration-300">
            <div className="text-4xl mb-3">⚡</div>
            <p className="text-lg font-medium">Easy Application</p>
            <p className="text-sm opacity-80 mt-1">
              Apply with a single click and track your application seamlessly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 hover:bg-white/25 transition-all duration-300">
            <div className="text-4xl mb-3">🎯</div>
            <p className="text-lg font-medium">Personalized Jobs</p>
            <p className="text-sm opacity-80 mt-1">
              Get matched with jobs that fit your skills and interests perfectly.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 hover:bg-white/25 transition-all duration-300">
            <div className="text-4xl mb-3">🔒</div>
            <p className="text-lg font-medium">Secure Platform</p>
            <p className="text-sm opacity-80 mt-1">
              Your data and applications are safe, private, and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
