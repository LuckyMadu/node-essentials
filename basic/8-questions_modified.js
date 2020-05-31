const collectAnswers = require("./8-lib/collectAnswers");

const questions = [
  "what is your name?",
  "what are you doing now?",
  "what is your favourite programming language?",
];

collectAnswers(questions, (answers) => {
  console.log(answers);
  process.exit();
});
