/*
  Exercice 01 

  Créer un programme qui affiche 3 champs: nom, prenom, date de naissance
  et un bouton.
  Quand vous cliquez sur le bouton, récupérer les valeurs des champs et les afficher.

  Afficher dans une balise "div" en-dessous les informations sous le format : 
  - "Bonjour [prenom] [nom], vous êtes né•e le [date]."
*/

const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
const birthdate = document.getElementById("birthdate");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", handleForm);

function handleForm () {

  const nom = lastname.value.trim();
  const prenom = firstname.value.trim();
  const date = birthdate.value;

  if (nom == "" || prenom == "" || date == "") {
    console.warn("Vous devez remplir les champs.");
    return;
  }

  result.textContent = `Bonjour ${prenom} ${nom}, vous êtes né•e le ${date}.`;
}

