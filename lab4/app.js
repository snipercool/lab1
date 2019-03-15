class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.initialize();
    } 
 
 initialize() {
     this.getMyLocation();
     this.getPokemon();
 }
 getMyLocation(){
   //console.log("get location"); 
   navigator.geolocation.getCurrentPosition(position => {
     //console.log("found you");
     //console.log (position);
     let lat = position.coords.latitude;
     let long = position.coords.longitude;
 
     this.getWeather(lat, long);
   }, err => {
     console.log(err);
   });
 }
 getWeather(lat, long){
     let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${long}?units=si`;
     fetch(url)
     .then(Response =>{
         return Response.json();
     })
     .then(json =>{
         console.log(json);
         let temp = document.createElement("h1");
         temp.innerHTML = `Today is ${json.currently.summary} at your location`;
         document.querySelector("body").appendChild(temp);
         let love = document.createElement("h5");
        love.innerHTML = "<h2>These pokemon love this weather</h2>";
        document.querySelector("body").appendChild(love);
        let summ = json.currently.summary;
        this.getPokemon(summ);
     });
 }
 getPokemon(summ){
    console.log(summ);
    let url = `https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?types=grass`;
        fetch(url)
        .then(Response =>{
            return Response.json();
        })
        .then(json =>{
            console.log(json);
            json.cards = json.cards.map(x => x.imageUrl);
            console.log(json.cards);
            for(let index = 0; index < json.cards.length; ++index){
                document.querySelector("body").innerHTML += `<img src="${json.cards[index]}"></img>`;
            }
        });
 }
 }
 
 let app = new Weather('1c806b32d520d469e47e53fa297037b9');