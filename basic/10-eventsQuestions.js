const collectAnswers = require("./10-lib/collectAnswers");

const questions = [
  "what is your name?",
  "what are you doing now?",
  "what is your favourite programming language?",
];

const answerEvents = collectAnswers(questions, (answers) => {
  console.log(answers);
  process.exit();
});

answerEvents.on("answer", (answer) =>
  console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", (answers) => {
  console.log(answers);
});

answerEvents.on("complete", () => process.exit());
