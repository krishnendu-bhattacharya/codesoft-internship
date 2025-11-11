import React from "react";
import { useNavigate } from "react-router-dom"; 
import { assets, heroData } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-[#F1F5] to-[#0225ec] overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-10">
        
        <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
            Find a job that suits your{" "}
            <span className="text-[#5E17EB]">interest & skills</span>.
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Discover your dream job or hire top talent effortlessly with our job portal.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/all-jobs")}
              className="mt-3 bg-[#5E17EB] hover:bg-[#4B0DB8] text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={assets.hero_img}
            alt="Job Search"
            className="w-4/5 sm:w-3/4 md:w-full max-w-md rounded-lg shadow-lg object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-12 px-6 sm:px-10">
        {heroData.map((item) => (
          <div
            key={item._id}
            className="bg-white w-[55%] sm:w-[260px] h-[110px] flex items-center justify-start sm:justify-center gap-4 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 sm:w-12 sm:h-12 ml-6 sm:ml-0 object-contain"
            />
            <div className="flex flex-col gap-1 text-left">
              <p className="text-xl sm:text-2xl font-semibold text-gray-500">
                {item.count}
              </p>
              <p className="text-sm text-gray-600">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
