import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AllJobs from "./pages/AllJobs";
import JobDetails from "./pages/JobDetails";
import About from "./pages/About";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ApplyJob from "./pages/ApplyJob";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyApplications from "./pages/MyApplications";

const App = () => {
  const location = useLocation();
  const adminPath = location.pathname.includes("admin");

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      {!adminPath && <Navbar />}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apply/:id" element={<ApplyJob />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-applications" element={<MyApplications />} />
        </Routes>
      </main>
      {!adminPath && <Footer />}
    </div>
  );
};

export default App;
