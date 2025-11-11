import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets"; // for save_later_icon if needed

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/job-details/${job._id}`)}
      className="p-6 flex flex-col justify-between rounded-2xl border border-transparent 
                 bg-gradient-to-br from-purple-500 via-pink-400 to-orange-400 
                 text-white shadow-lg cursor-pointer 
                 hover:shadow-2xl hover:scale-[1.03] 
                 transition-all duration-300 ease-out relative"
    >
      {/* Save Job Icon */}
      <img
        src={assets.save_later_icon}
        alt="Save"
        className="absolute top-4 right-4 w-6 h-6 opacity-80 hover:opacity-100"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Job Info */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">{job.title}</h1>

        <div className="flex gap-3 mb-3">
          <p className="text-xs bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">
            {job.type}
          </p>
          <p className="text-xs bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">
            💰 {job.salary}
          </p>
        </div>

        <p className="text-sm opacity-90 line-clamp-2">
          {job.description ||
            "Exciting opportunity to work on amazing projects!"}
        </p>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 mt-5 pt-3 border-t border-white/20">
        <img
          src={job.image || "https://via.placeholder.com/40"}
          alt={job.company || "Company"}
          className="w-10 h-10 rounded-full object-cover border border-white/30"
        />
        <div>
          <p className="text-sm font-semibold">{job.company || "Unknown"}</p>
          <p className="text-xs opacity-80">
            {job.location || "Location not specified"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
