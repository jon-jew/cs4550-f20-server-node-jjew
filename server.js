const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/whiteboard", { useNewUrlParser: true });

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./controllers/quizzes.controller.server")(app);
require("./controllers/questions.controller.server")(app);
require("./controllers/quiz-attempts.controller.server")(app);

app.listen(3008);
