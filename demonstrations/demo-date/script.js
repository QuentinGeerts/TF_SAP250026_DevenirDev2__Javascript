/*
  Démonstration : Date
*/

// 1.  Création d'une date
// new Date(...)

const date1 = new Date();
console.log("date1 :>> ", date1);

const date2 = new Date(date1);
const date3 = new Date("2026-03-18");
const date4 = new Date(date1.getTime() + 10000);

console.log('date2 :>> ', date2);
console.log('date3 :>> ', date3);
console.log('date4 :>> ', date4);

const date5 = new Date(2026, 2);
const date6 = new Date(2026, 2, 18);
const date7 = new Date(2026, 2, 18, 10);
const date8 = new Date(2026, 2, 18, 10, 2);
const date9 = new Date(2026, 2, 18, 10, 2, 37);
const date10 = new Date(2026, 2, 18, 10, 2, 37, 356);

console.log('date5 :>> ', date5);
console.log('date6 :>> ', date6);
console.log('date7 :>> ', date7);
console.log('date8 :>> ', date8);
console.log('date9 :>> ', date9);
console.log('date10 :>> ', date10);

document.body.textContent = date1.toLocaleDateString("fr-BE", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});

document.body.textContent = date1.toLocaleDateString(navigator.language, {
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});

console.log(`Il est ${date1.getHours()}h${date1.getMinutes()}`);