const events = require("events");

const emmiter = new events.EventEmitter();

emmiter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

// emmiter.emit("customEvent", "hello world", "computer");
// emmiter.emit("customEvent", "Its cool", "Lahiru");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emmiter.emit("customEvent", "Bye", "Process");
    process.exit();
  }
  emmiter.emit("customEvent", input, "terminal");
});
