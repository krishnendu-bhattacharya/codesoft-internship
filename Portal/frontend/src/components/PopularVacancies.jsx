import React from "react";
import { vacancies } from "../assets/assets";

const colors = [
  "from-[#5E17EB] to-[#9C27B0]",
  "from-[#2196F3] to-[#21CBF3]",
  "from-[#FF5722] to-[#FF9800]",
  "from-[#009688] to-[#4CAF50]",
  "from-[#E91E63] to-[#F06292]",
  "from-[#3F51B5] to-[#2196F3]",
  "from-[#FF6F00] to-[#FFB300]",
  "from-[#8E24AA] to-[#BA68C8]",
  "from-[#0097A7] to-[#00BCD4]",
  "from-[#D32F2F] to-[#FF5252]",
];

const PopularVacancies = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#E8EAF6] to-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
          Popular <span className="text-[#5E17EB]">Vacancies</span>
        </h2>
        <p className="text-gray-600 mb-10 text-sm md:text-base">
          Explore trending job categories across industries and domains.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {vacancies.map((vacancy, index) => (
            <div
              key={vacancy._id}
              className={`w-[180px] h-[120px] flex flex-col items-center justify-center text-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br ${colors[index % colors.length]}`}
            >
              <p className="text-2xl font-semibold">{vacancy.count}</p>
              <p className="text-sm mt-1 opacity-90">{vacancy.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVacancies;
