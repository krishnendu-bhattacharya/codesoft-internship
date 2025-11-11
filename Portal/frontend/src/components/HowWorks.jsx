import React from "react";
import { motion } from "framer-motion";
import { howWorks } from "../assets/assets";

const HowWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F3F4F6] via-[#EDE7F6] to-[#F1F2F4] text-center overflow-hidden">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
      >
        How <span className="text-[#5E17EB]">JobFindr</span> Works
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-12"
      >
        Your journey to finding or posting a job is made simple, fast, and effective.
      </motion.p>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 md:px-16 max-w-7xl mx-auto">
        {howWorks.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center justify-center gap-4 border border-transparent hover:border-[#5E17EB]/30"
          >
            <motion.img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 object-contain"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#5E17EB]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#9C27B0]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default HowWorks;
