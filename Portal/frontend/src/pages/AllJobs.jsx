import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import JobCard from "../components/JobCard";

const AllJobs = () => {
  const { filteredJobs, query } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-3">
          {query ? `Search Results for "${query}"` : "Explore All Available Jobs 🚀"}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover opportunities that match your skills and passion. Whether
          you’re looking for full-time, part-time, or remote work — we’ve got
          you covered!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredJobs && filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No jobs found for your search 😕
          </p>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
