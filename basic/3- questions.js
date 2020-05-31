const questions = [
  "what is your name?",
  "what are you doing now?",
  "what is your favourite programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

//async func on event listeners
process.on("exit", () => {
  const [name, activity, lang] = answers;
  console.log(`
    Thank you for your response.

    Go. ${activity} ${name} you can write ${lang}
    `);
});
