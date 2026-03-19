/*
  Créer un programme qui affiche une liste de produit (sous forme d'un tableau) qui formera un catalogue.

  Le catalogue affichera le nom du produit et son prix avec un bouton qui permet de l'ajouter au panier (affiché en-dessous).
*/

const products = [
  {
    id: "c3a4412d-bd3e-4510-a6b5-80d75d8126dc",
    name: "Clavier mécanique rétroéclairé",
    price: 218.26,
  },
  {
    id: "e8b73364-f77b-4758-b319-639c620be144",
    name: "Écouteurs sans fil",
    price: 264.53,
  },
  {
    id: "a391d590-a765-421c-8288-41a628b26321",
    name: "Chaise ergonomique de bureau",
    price: 275.55,
  },
  {
    id: "e8fc32d7-bfdc-4a3c-8fb4-228794535071",
    name: "Lampe LED intelligente",
    price: 124.73,
  },
  {
    id: "358f6c6c-49f6-4f1c-822e-40d771e39a75",
    name: "Chargeur sans fil rapide",
    price: 159.5,
  },
  {
    id: "cc3ba870-41e4-4f09-8e35-a59f4f58e29d",
    name: "Sac à dos antivol",
    price: 89.15,
  },
  {
    id: "8aa86484-76ac-476d-bb78-d6cc2fe11837",
    name: "Montre connectée fitness",
    price: 242.4,
  },
  {
    id: "fc0831ce-5f52-40ce-a972-76b3cb822d6f",
    name: "Tapis de souris XXL",
    price: 45.67,
  },
  {
    id: "9b6aa54e-2ec0-4d8a-8162-98f50d7fd303",
    name: "Hub USB-C multifonction",
    price: 72.8,
  },
  {
    id: "73b1d9e5-9212-410c-bb59-9d9d5b14895a",
    name: "Disque dur externe 2To",
    price: 199.99,
  },
  {
    id: "0d80926c-e43a-4500-b1d3-947f9cd7ca32",
    name: "Webcam Full HD 1080p",
    price: 89.99,
  },
  {
    id: "ad2ffe9e-8de8-4f57-af06-835699b4da2d",
    name: "Microphone USB professionnel",
    price: 129.9,
  },
  {
    id: "e38ae5d8-9004-492d-89c4-698b2568d2a7",
    name: "Support pour ordinateur portable",
    price: 39.95,
  },
  {
    id: "0f1441cb-bdb1-433e-9248-b456bf98ac02",
    name: "Station d'accueil double écran",
    price: 189.0,
  },
  {
    id: "6cef1a74-3aac-4354-aa33-5c093725249d",
    name: "Clé USB 128 Go ultra-rapide",
    price: 49.99,
  },
  {
    id: "14afb870-a842-45b6-b769-5d075ae5f99d",
    name: "Caméra de surveillance Wi-Fi",
    price: 84.9,
  },
  {
    id: "9d9d6ad1-09a9-4b97-9f76-b72825767d96",
    name: "Enceinte Bluetooth portable",
    price: 69.99,
  },
  {
    id: "6baecd34-3166-4edb-afee-45ecc0cd9982",
    name: "Tapis chauffant pour clavier",
    price: 34.0,
  },
  {
    id: "c8a44b8a-a0ca-418e-a744-13593f98358f",
    name: "Batterie externe 20 000mAh",
    price: 54.99,
  },
  {
    id: "cab235cd-7ff9-4a5d-beac-35e38436f7e4",
    name: "Mini projecteur portable",
    price: 139.0,
  },
  {
    id: "e09427be-15d6-444d-b18f-7bf5c4f4d567",
    name: "Clavier pliable Bluetooth",
    price: 58.6,
  },
  {
    id: "d4ee34a4-3045-4ad0-be73-bdf73b70c29c",
    name: "Souris ergonomique verticale",
    price: 47.5,
  },
  {
    id: "59ba0acf-b731-4e56-be61-0ad1355903e6",
    name: "Tablette graphique USB",
    price: 89.99,
  },
  {
    id: "c02ab9f3-ad4c-433c-8502-11c66fd94ecc",
    name: "Lecteur de cartes SD/TF USB-C",
    price: 24.8,
  },
  {
    id: "eedd7ae6-7e9e-4ad0-923f-434b704ec187",
    name: "Switch HDMI 3 ports",
    price: 32.5,
  },
  {
    id: "7378f33a-1af7-41e5-9dcc-25deb19b6396",
    name: "Ventilateur USB silencieux",
    price: 29.9,
  },
  {
    id: "0cbd4639-c16f-4ca5-b321-8b294b02f33e",
    name: "Casque gaming RGB",
    price: 112.2,
  },
  {
    id: "c90fda07-b47a-4dea-80e9-4704a9e55915",
    name: "Tapis de bureau XXL",
    price: 49.99,
  },
  {
    id: "936daac4-f02b-45dd-9637-fee95fe3b98d",
    name: "Souris sans fil rechargeable",
    price: 38.5,
  },
  {
    id: "12e69bf1-8953-4b83-93c2-88a1587c4cc4",
    name: "Lampe de bureau USB avec pince",
    price: 27.8,
  },
];