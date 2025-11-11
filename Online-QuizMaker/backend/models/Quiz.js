import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  title: String,
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswer: String,
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
