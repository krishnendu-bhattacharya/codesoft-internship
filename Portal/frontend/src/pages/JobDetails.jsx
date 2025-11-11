import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const JobDetails = () => {
  const { id } = useParams();
  const { jobsData } = useContext(AppContext);
  const navigate = useNavigate();

  console.log("jobsData:", jobsData);
  console.log("id from URL:", id);

  if (!jobsData || jobsData.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading job details...
      </div>
    );
  }

  const job = jobsData.find((job) => String(job._id) === String(id));

  if (!job) {
    return (
      <div className="py-20 text-center text-gray-500">
        Job not found 😕
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">{job.title}</h1>
        <p className="text-gray-600 text-lg">{job.company}</p>

        <div className="flex flex-wrap gap-4 mt-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/apply/${job._id}`)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Apply Now
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-xl hover:bg-indigo-50 transition"
          >
            Save Job
          </motion.button>
        </div>
      </div>

      {/* Example layout below */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold mb-2 text-lg">Details</h3>
            <p>💰 {job.salary}</p>
            <p>📍 {job.location}</p>
            <p>🕒 {job.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
