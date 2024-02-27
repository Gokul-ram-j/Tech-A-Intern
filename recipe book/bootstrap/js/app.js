var myHeaders = new Headers();
myHeaders.append("apikey", "SOAVSaquauSGJBIIoW36Z9aNDuvhbw3o");
let sortDirection="asc"
let sort="popularity"
let query="chicken"
let offset="10"
let number="50"
let intolerances=`Wheat`
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

//  -------------------------- Restarent or hetel foods -----------------------------------------
fetch(`https://api.apilayer.com/spoonacular/food/menuItems/search?query=${query}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
  fetch(`https://api.apilayer.com/spoonacular/food/ingredients/search?sortDirection=${sortDirection}&sort=${sort}&query=${query}&offset=${offset}&number=${number}&intolerances=${intolerances}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));