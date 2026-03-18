/*
  Démonstration : Boucles
*/

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
  { lastname: "Dupont", firstname: "Antoine", sex: "H", age: 45 }
];

const persons = document.getElementById("persons");

// 1.  For...of
// Itérer sur les valeurs

for (const p of people) {
  // console.log('p :>> ', p);
  persons.innerHTML += `
  <tr>
    <td>${p.lastname}</td>
    <td>${p.firstname}</td>
    <td>${p.age}</td>
    <td>${p.sex}</td>
  </tr>
  `;
}

// 2.  For...in
// Itérer sur les clefs

const nouvellePersonne = { 
  lastname: "Geerts", 
  firstname: "Quentin", 
  sex: "H", 
  age: 29 
}

for (const prop in nouvellePersonne) {
 console.log('prop :>> ', prop, ' :>>', nouvellePersonne[prop]);
}


for (const index in people) {
  console.log('index :>> ', index, ' :>> ', people[index]);
}