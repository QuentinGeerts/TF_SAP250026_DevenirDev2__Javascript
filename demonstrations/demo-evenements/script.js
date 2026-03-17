// Récupération de l'élément
// const btn = document.querySelector("#btn");
const btn = document.getElementById("btn");

console.dir(btn);

// Récupération des valeurs des propriétés
console.log("btn.id :>> ", btn.id);
console.log("btn.className :>> ", btn.className);
console.log("btn.type :>> ", btn.type);
console.log("btn.onclick :>> ", btn.onclick);

// Ajouter un comportement au clic
// <!> en rajouter supprime les anciens !!
btn.onclick = onClick;
btn.onclick = function () {
  console.error("T'as cliqué sur moi !");
};
btn.onclick = () => {
  console.log("T'as cliqué sur moi.");
};

btn.onclick = () => {
  onClick();
  // ..
};
btn.onclick = null; // Supprime le comportement du bouton

function onClick() {
  console.warn("T'as cliqué sur moi.");
}

// Astuce: addEventListener()

function onClick2() {
  console.error("Tu as cliqué sur moi");
}

btn.addEventListener("click", onClick);
btn.addEventListener("click", onClick2);

btn.removeEventListener("click", onClick);

btn.addEventListener("click", function () {
  console.log("Fonction anonyme");
});

btn.addEventListener("click", () => {
  console.log("Fonction flêchée");
});

// Récupération de la valeur d'un champ
btn.addEventListener("click", () => {

  // Récupérer le champ
  const userInput = document.getElementById("userInput");
  
  // Récupérer la valeur d'un champ
  // > element.value
  console.log('userInput.value :>> ', userInput.value);

})