import { createContext, useState, useEffect } from "react";
import { categories, jobs } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // ✅ store user object
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [jobsData, setJobData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setCategoriesData(categories);
    setJobData(jobs);
  }, []);

  const filteredJobs =
    query.trim() === ""
      ? jobsData
      : jobsData.filter((job) =>
          [job.title, job.company, job.type, job.location, job.description]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase())
        );

  const applyJob = (job, applicantDetails) => {
    if (!user) {
      alert("⚠️ Please login before applying!");
      return;
    }

    if (!appliedJobs.find((j) => j.job._id === job._id && j.user === user.email)) {
      setAppliedJobs((prev) => [
        ...prev,
        { job, user: user.email, details: applicantDetails },
      ]);
      alert("🎉 Applied Successfully!");
    } else {
      alert("⚠️ You have already applied to this job!");
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser, // ✅ this must be an object like { name, email }
        categoriesData,
        jobsData,
        filteredJobs,
        query,
        setQuery,
        appliedJobs,
        applyJob,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
