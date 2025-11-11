import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateQuiz from "./pages/CreateQuiz";
import QuizList from "./pages/QuizList";
import TakeQuiz from "./pages/TakeQuiz";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";
import "./index.css";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/quizlist" element={<QuizList />} />
        <Route path="/takequiz/:id" element={<TakeQuiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
