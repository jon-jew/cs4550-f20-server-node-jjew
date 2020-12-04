const express = require("express");
const app = express();

const mongoose = require("mongoose");//JIHG2zUljQPpVAC6
mongoose.connect("mongodb+srv://whiteboarduser:JIHG2zUljQPpVAC6@cluster0.x8qmv.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true });

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./controllers/quizzes.controller.server")(app);
require("./controllers/questions.controller.server")(app);
require("./controllers/quiz-attempts.controller.server")(app);

app.listen(3008);
