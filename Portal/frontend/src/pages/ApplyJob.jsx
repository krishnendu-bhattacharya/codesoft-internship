import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobsData, applyJob, user } = useContext(AppContext);

  const job = jobsData.find((j) => j._id === id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    const success = applyJob(job, { name, email, phone, resume });
    if (success) {
      alert("🎉 Applied Successfully!");
      navigate("/all-jobs"); // redirect after success
    } else {
      alert("⚠️ You have already applied for this job!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">{job?.title}</h2>
      <p className="text-gray-600 mb-6">{job?.company}</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Resume Link or Details"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          required
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full mt-4"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
