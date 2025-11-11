import express from "express";
const router = express.Router();

const demoQuizzes = [
  {
    _id: "1",
    title: "General Knowledge Quiz",
    questions: [
      { question: "What is the capital of France?", options: ["Paris", "Berlin", "London", "Madrid"], answer: "Paris" },
      { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"], answer: "Da Vinci" },
      { question: "What is the national animal of India?", options: ["Tiger", "Elephant", "Lion", "Peacock"], answer: "Tiger" },
    ],
  },
  {
    _id: "2",
    title: "Science Basics",
    questions: [
      { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
      { question: "What gas do plants breathe in?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Carbon Dioxide" },
      { question: "What is H₂O commonly known as?", options: ["Salt", "Hydrogen", "Water", "Oxygen"], answer: "Water" },
    ],
  },
  {
    _id: "3",
    title: "Technology Trivia",
    questions: [
      { question: "Who founded Microsoft?", options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Jeff Bezos"], answer: "Bill Gates" },
      { question: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "HyperType Transfer Process", "HighText Tool Protocol", "Hyper Transfer Text Protocol"], answer: "HyperText Transfer Protocol" },
      { question: "Which company developed the iPhone?", options: ["Google", "Samsung", "Apple", "Microsoft"], answer: "Apple" },
    ],
  },
];

router.get("/demo", (req, res) => {
  res.json(demoQuizzes);
});

router.get("/demo/:id", (req, res) => {
  const quiz = demoQuizzes.find((q) => q._id === req.params.id);
  if (!quiz) return res.status(404).json({ message: "Quiz not found" });
  res.json(quiz);
});

export default router;
