const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);
};

const timeFinished = () => {
  clearInterval(interval);
  console.log("DONE");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timeFinished, waitTime);
