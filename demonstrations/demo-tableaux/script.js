/*
  Démonstration : Tableaux
*/

// 1.  Déclaration
const tab1 = new Array();
const tab2 = [
  1, 2, 3, 4, 5,
  true, false,
  "bonjour", 'Hello', `hi`,
  [],
  () => {}, 
  {}
];

console.log('tab1 :>> ', tab1);
console.log('tab2 :>> ', tab2);

// 2.  Récupération d'un élément dans le tableau
// > nomTableau[index]

console.log('tab2[6] :>> ', tab2[6]);
console.log('tab2[-1] :>> ', tab2[-1]);
console.log('tab2[200] :>> ', tab2[200]);

// 3.  Tableaux associatifs

const plats = [];

plats["lundi"] = "sandwich";
plats["mardi"] = "sandwich";
plats["mercredi"] = "sandwich";
plats["jeudi"] = "burger day";
plats["vendredi"] = "sandwich";
plats["samedi"] = "sandwich";
plats["dimanche"] = "sandwich";

console.log('plats :>> ', plats);

console.log('Taille tableau :>> ', Object.keys(plats).length);

const personne = {
  "last-name": 'Geerts',
  "first-name": 'Quentin'
}

console.log('personne :>> ', personne);

console.log('personne.first-name :>> ', personne.first-name);
console.log('personne["first-name"] :>> ', personne["first-name"]);

// 3.  Méthodes (voir DOC)