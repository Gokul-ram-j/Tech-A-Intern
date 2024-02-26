var myHeaders = new Headers();
myHeaders.append("apikey", "SOAVSaquauSGJBIIoW36Z9aNDuvhbw3o");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

let sortDirection="asc"
let sort="popularity"
let query="tomato"
let offset=0
let number=50
let intolerances=`Peanut
Seafood,
Sesame,
Shellfish`
fetch(`https://api.apilayer.com/spoonacular/food/ingredients/search?sortDirection=${sortDirection}&sort=${sort}&query=${query}&offset=${offset}&number=${number}&intolerances=${intolerances}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));