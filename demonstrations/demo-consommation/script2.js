const btn = document.getElementById("guserBtn");

btn.addEventListener("click", () => {
  const URL = "https://randomuser.me/api/";
  getWithPromise(URL);
  getWithAwait(URL);
});

function getWithPromise(URL) {
  fetch(URL)
    .then((response) => {
      console.log("response :>> ", response)
      return response.json()
    })
    .then(responseObj => console.log('responseObj :>> ', responseObj.results[0].name.first))
    .catch((err) => console.log('err :>> ', err));
}

async function getWithAwait(URL) {
  try {
    // console.log(await fetch(URL));
    const result = await (await fetch(URL)).json()
    console.log('result :>> ', result);
  }
  catch(err) {
    console.log('err :>> ', err);
  }
}
