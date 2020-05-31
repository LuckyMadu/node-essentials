const readline = require("readline");
const { EventEmitter } = require("events");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questions, done = (f) => f) => {
  const answers = [];
  const [firstQ] = questions;
  const emmiter = new EventEmitter();

  const questionAnswered = (answer) => {
    emmiter.emit("answer", answer);
    answers.push(answer);

    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  rl.question(firstQ, questionAnswered);

  return emmiter;
};
