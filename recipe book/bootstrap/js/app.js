let Avail_opt=["All Recipes","fruit Salads","fruit Salads","fruit Salads","Chicken","Beef","Others..","Western","Chinese","Japan","Malasiya","Korean"]
let navopt=document.querySelector(".navbar")
navopt.addEventListener("click",(e)=>{
  user_opt=e.target.innerText
  if(Avail_opt.includes(user_opt)){
    console.log(user_opt)
  }
})



























// ------------------------------------------------------------------------------------


var myHeaders = new Headers();
myHeaders.append("apikey", "SOAVSaquauSGJBIIoW36Z9aNDuvhbw3o");
let sortDirection="asc"
let sort="popularity"
let query="rice"
let offset="30"
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
 

fetch(`https://api.apilayer.com/spoonacular/food/menuItems/search?query=fruitsalad`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// console.log("-------------------------------------------------------------------------------------------------------------------------")


// fetch("https://api.apilayer.com/spoonacular/recipes/complexSearch?query=chickenrice", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// fetch("www.themealdb.com/api/json/v1/1/search.php?i=rice", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


let apiId="835abe5b"
let apiKey="324162b9baaf575256e1bbef92a86ebb"
let url="https://api.edamam.com/api/recipes/v2?api"
fetch()

