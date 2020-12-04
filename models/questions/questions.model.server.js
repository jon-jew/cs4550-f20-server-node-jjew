const mongoose = require("mongoose");
const questionSchema = require("./questions.schema.server.js");
const questionModel = mongoose.model("QuestionModel", questionSchema);

const findAllQuestions = () => questionModel.find();
const findQuestionForQuiz = (quizId) => questionModel.find({ quizId: quizId });

module.exports = {
  findAllQuestions,
  findQuestionForQuiz,
};
