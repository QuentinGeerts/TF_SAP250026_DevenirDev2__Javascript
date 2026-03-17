/*
  Démonstration : Les fonction
*/

// 1. Fonctions nommées

// 1.1.  Procédure
// Ne retourne rien

function direBonjour() {
  console.log("Bonjour");
}

// 1.2.  Fonctions
// Retourne une valeur

function obtenirBonjour() {
  return "Bonjour";
}

// 2.  Paramètres

/**
 * Permet de dire bonjour à quelqu'un
 *
 * @param {string} prenom Le prénom de la personne à saluer.
 */
function direBonjourA(prenom) {
  console.log(`Bonjour ${prenom}`);
}

// 3.  Invocation

direBonjourA("Antonio");
direBonjourA("Charles-Henri");

// Affichage de l'adresse mémoire
// => Affichage de ce qui se trouve à l'adresse mémoire
console.log("direBonjour:", direBonjour);

// Exécution de la méthode
// => Affichage du retour (non présent) : undefined
console.log("direBonjour:", direBonjour());

// 4.  Paramètres optionnels

function direAuRevoir(expediteur, destinataire = "Kévin") {
  console.log(`${expediteur} dit au revoir à ${destinataire}`);
}

direAuRevoir("Yannis", "Reiley");
direAuRevoir("Georges");

// 5.  Rest Operateur

/**
 * Permet de faire la somme des valeurs fournies en paramètres
 *
 * @param {number[]} numbers
 */
function sum(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log('sum(1, 2, 3) :>> ', sum(1, 2, 3));
console.log('sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) :>> ', sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// 6.  Fonctions anonymes
// Fonction qui n'a pas de nom

let maFonction = direBonjour;
const maFonction2 = direBonjour;
direBonjour();
maFonction();
maFonction2();

const maNouvelleFonction = function () {
  console.log("Exécution de la méthode anonyme...");
}

maNouvelleFonction();

function additionFn (nb1, nb2) {
  return nb1 + nb2;
}

const operations = {
  addition: additionFn,
  soustraction: function (nb1, nb2) {
    return nb1 - nb2;
  },
  multiplication: (nb1, nb2) => { return nb1 * nb2; },
  division: (nb1, nb2) => nb2 != 0 ? nb1 / nb2 : "Division par 0 impossible"
}


console.log("Additon (2, 3): ", operations.addition(2, 3));
console.log("Soustraction (2, 3): ", operations.soustraction(2, 3));
console.log("Multiplication (2, 3): ", operations.multiplication(2, 3));
console.log("Division (2, 3): ", operations.division(2, 3));

console.log('Division (2, 0) :>> ', operations.division(2, 0));


// 7.  Callback (Rappel C#: délégués)

const people = [
  { lastname: "Martin", firstname: "Lucas", sex: "H", age: 34 },
  { lastname: "Dubois", firstname: "Camille", sex: "F", age: 28 },
  { lastname: "Bernard", firstname: "Thomas", sex: "H", age: 45 },
  { lastname: "Petit", firstname: "Léa", sex: "F", age: 22 },
  { lastname: "Robert", firstname: "Hugo", sex: "H", age: 31 },
  { lastname: "Richard", firstname: "Inès", sex: "F", age: 19 },
  { lastname: "Moreau", firstname: "Alexis", sex: "H", age: 52 },
  { lastname: "Simon", firstname: "Chloé", sex: "F", age: 37 },
  { lastname: "Laurent", firstname: "Théo", sex: "H", age: 26 },
  { lastname: "Lefebvre", firstname: "Emma", sex: "F", age: 41 },
  { lastname: "Michel", firstname: "Jordan", sex: "X", age: 29 },
  { lastname: "Garcia", firstname: "Sofia", sex: "F", age: 33 },
  { lastname: "David", firstname: "Maxime", sex: "H", age: 48 },
  { lastname: "Fontaine", firstname: "Jade", sex: "F", age: 24 },
  { lastname: "Leroy", firstname: "Nathan", sex: "H", age: 55 },
  { lastname: "Bonnet", firstname: "Robin", sex: "X", age: 30 },
  { lastname: "Dupont", firstname: "Manon", sex: "F", age: 17 },
  { lastname: "Lambert", firstname: "Antoine", sex: "H", age: 43 },
  { lastname: "Mercier", firstname: "Zoé", sex: "F", age: 36 },
  { lastname: "Rousseau", firstname: "Raphaël", sex: "H", age: 61 },
];

/**
 *
 *
 * @param {{lastname: string, firstname: string, sex: 'H' | 'F' | 'X', age: number}[]} array
 * @return {*} 
 */
function filter (array) {

  const filtered = [];

  for (const element of array) {
    if (element.age < 18) {
      filtered.push(element);
    }
  }

  return filtered;

}

const mineurs = filter (people);

console.log('majeurs :>> ', mineurs);