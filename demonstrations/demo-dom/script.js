/*
  Démonstration : DOM
*/

// 1.  Création d'élément HTML
const newParagraph = document.createElement("p");
newParagraph.textContent = "Hello les loustiques";
newParagraph.id = "p01";
newParagraph.classList.add("paragraph", "m-15");

console.log("newParagraph :>> ", newParagraph);

// 2.  Ajouter l'élément à la page

const container = document.getElementById("container");

// 2.1.  Ajouter en tant que dernier enfant
// > parent.append(...enfant): void
container.append(newParagraph);

// > parent.appendChild(enfant): enfant
const newParagraph2 = container.appendChild(document.createElement("p"));
newParagraph2.textContent = "J'espère que vous êtes prêt pour la journée ?";

// 2.2.  Ajouter en tant que premier enfant
// > parent.prepend(...enfant): void
const newP3 = document.createElement("p");
newP3.textContent = "Ajouté en tant que premier.";
container.prepend(newP3);

// 2.3.  Insérer un élément par rapport à un autre

const sample = document.getElementById("sample");

const sampleButton = sample.insertAdjacentElement(
  "afterbegin",
  document.createElement("button"),
);
sampleButton.textContent = "🚀";

const sampleButton2 = sample.insertAdjacentElement(
  "beforeend",
  document.createElement("button"),
);
sampleButton2.textContent = "😉";

sample.insertAdjacentText("beforebegin", "🐈");

// 3.  Suppression d'un élément HTML
// > parent.removeChild(enfant): enfant

const p01 = container.removeChild(document.getElementById("p01"));

// > element.remove()
// sample.remove();


// 4.  Récupération des enfants d'un parent

console.log('container.children :>> ', container.children);

// 5.  Récupération du parent d'un enfant

console.log('sampleButton2.parentElement :>> ', sampleButton2.parentElement);
