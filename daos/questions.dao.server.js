const questionsModel = require("../models/questions/questions.model.server");
const quizzesModel = require("../models/quizzes/quizzes.model.server");

const findAllQuestions = () => questionsModel.findAllQuestions();
const findQuestionsForQuiz = (qzid) =>
  quizzesModel
    .findById(qzid)
    .populate("questions")
    .then((quiz) => quiz.questions);
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz };
