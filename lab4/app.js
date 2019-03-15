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
     });
 }
 }
 
 let app = new Weather('1c806b32d520d469e47e53fa297037b9');