/*
  Démonstration : Timer
*/

// 1.  Timeout
// setTimeout(callbackFn, delay): number

const startTimeoutButton = document.getElementById("startTimeout");
const stopTimeoutButton = document.getElementById("stopTimeout");

let timerTimeout;

startTimeoutButton.addEventListener("click", () => {

  if (timerTimeout != undefined) return;

  console.log("Démarrage du timer...");
  console.time("timeout");

  // Permet de créer un timer et d'exécuter un callback après un délai
  timerTimeout = setTimeout(comportementTimeout, 3000);
  console.log('timerTimeout :>> ', timerTimeout);
});

stopTimeoutButton.addEventListener("click", () => {
  console.log("Stoppage du timer...", timerTimeout);

  // Permet d'arrêter un timer
  clearTimeout(timerTimeout)
});


function comportementTimeout() {
  console.timeEnd("timeout");
  console.log("Comportement du timer : Timeout");
  timerTimeout = undefined;
}


// 2.  Interval
// setInterval(callbackFn, delay): number

const startIntervalButton = document.getElementById("startInterval");
const stopIntervalButton = document.getElementById("stopInterval");

let timerInterval;

startIntervalButton.addEventListener("click", () => {
  if (timerInterval != undefined) return;
  console.warn("Démarrage du interval");

  timerInterval = setInterval(() => {
    console.log("Déclenchement de l'interval");
  }, 2000);
});

stopIntervalButton.addEventListener("click", () => {
  console.warn("Stoppage du interval");
  clearInterval(timerInterval);
  timerInterval = undefined;
});

