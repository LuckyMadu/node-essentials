const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "what is your name?",
  "what are you doing now?",
  "what is your favourite programming language?",
];

const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQ] = questions;

  const questionAnswered = (answer) => {
    answers.push(answer);

    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  rl.question(firstQ, questionAnswered);
};

collectAnswers(questions, (answers) => {
  console.log(answers);
  process.exit();
});
