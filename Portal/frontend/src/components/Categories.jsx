import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Categories = () => {
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

  const { categoriesData } = useContext(AppContext);

  return (
    <div className="py-16 bg-[#F1F2F4] text-center">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-8">
        Most Popular Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center px-6">
        {categoriesData.map((item, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-3 rounded-2xl py-8 px-6 shadow-md bg-gradient-to-br ${colorClass} text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <img src={item.icon} alt={item.name} className="w-16 h-16 mb-3" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm opacity-90">{item.positions} Open Positions</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
