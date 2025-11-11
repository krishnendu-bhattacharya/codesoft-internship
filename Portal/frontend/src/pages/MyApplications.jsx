import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyApplications = () => {
  const { appliedJobs, user } = useContext(AppContext);

  if (!user) return <p className="text-center mt-20">Please login to see your applications.</p>;

  const myApps = appliedJobs.filter((app) => app.user === user.email);

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">My Applications</h1>

      {myApps.length === 0 ? (
        <p className="text-gray-500 text-lg">You have not applied to any jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myApps.map((app, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{app.job.title}</h2>
              <p className="text-gray-600">{app.job.company}</p>
              <p className="text-gray-500">{app.job.location}</p>
              <p className="text-gray-500 mt-2">Name: {app.details.name}</p>
              <p className="text-gray-500">Email: {app.details.email}</p>
              <p className="text-gray-500">Phone: {app.details.phone}</p>
              {app.details.resume && <p className="text-gray-500">Resume: {app.details.resume}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyApplications;
