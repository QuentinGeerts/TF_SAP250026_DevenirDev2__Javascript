/*
  Écrire un programme qui permet d'afficher la date et 
  l'heure comme si c'était un écran de veille.

  L'heure doit se réactualisé toutes les secondes.

  L'affichage doit être formatté en français.
  """""""""""""
    18 Mars 2026
      11:45:18
  """""""""""""
*/

window.addEventListener("DOMContentLoaded", () => {
  const date = document.getElementById("date");
  const time = document.getElementById("time");

  function updateClock() {
    const now = new Date();

    date.textContent = now.toLocaleDateString("fr-BE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    time.textContent = now.toLocaleTimeString("fr-BE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    setTimeout(updateClock, 1000);
  }

  // setInterval(updateClock, 1000);
  updateClock();
});
