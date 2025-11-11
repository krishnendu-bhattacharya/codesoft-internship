import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import JobCard from "./JobCard";

const Jobs = () => {
  const { jobsData } = useContext(AppContext);

  return (
    <div className="py-20 bg-gradient-to-b from-indigo-100 via-white to-pink-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          ✨ Featured <span className="text-purple-600">Jobs</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Discover exciting opportunities crafted just for you
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12">
        {jobsData.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
