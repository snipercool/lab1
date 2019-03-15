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
    var type = "";
    if (summ.indexOf("Breezy" )!= -1||summ.indexOf("Windy" )!= -1||summ.indexOf("Flurries" )!= -1) {
        type = "dragon";
    }
    else if(summ.indexOf("Drizzle" )!= -1||summ.indexOf("Overcast" )!= -1 ){
        type = "grass";
    }
    else if(summ.indexOf("Rain" )!= -1){
        type = "water";
    }
    else if(summ.indexOf("sun" )!= -1){
        type = "fire";
    }
    else if(summ.indexOf("Storm" )!= -1){
        type = "lightning";
    }
    if(summ.indexOf("Clear")!= -1|| summ.indexOf("Humid")!= -1){
        type = "Colorless";
    }
    let url = `https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?types=${type}`;
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