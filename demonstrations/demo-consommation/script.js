function getPromise(a, b) {
  return new Promise((resolve, reject) => {
    try {
      if (b === 0) throw new Error();
      setTimeout(() => resolve(a / b), 0);
    } catch (error) {
      reject("Division par 0 impossible");
    }
  });
}

// Version promise .then .catch .finally
window.addEventListener("DOMContentLoaded", () => {
  let result;

  getPromise(5, 3)
    .then((x) => (result = x)) // Inutile
    .then(onSuccess)
    .catch(onReject)
    .finally(() => console.log("Promesses terminée ou non mais on s'en fout.")); // Afficher en dernier

  console.log("result :>> ", result);

  setTimeout(() => console.log("coucou"), 1000); // afficher en 2e
  console.log("...."); // Afficher en 1er

  function onSuccess(value) {
    console.log("Promesse tenue.", value);
  }

  function onReject(error) {
    console.log("Promesse rompue.", error);
  }
});

// Version promise async/awayt try/catch
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const result = await getPromise(5, 0);
    console.log(result);
  } catch (error) {
    console.log("error :>> ", error);
  }
});
