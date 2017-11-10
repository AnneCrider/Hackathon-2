document
.querySelector('form')
.addEventListener('submit', function(e){ // On écoute tout l'envoie du formulaire
e.preventDefault(); // Permet de bloquer le rafraichissement de la page
let city = document.querySelector('#nameCity').value; // À récupérer dans le #nameCity (querySelector)
const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=ad559d3bfa2f82742e93ec96980f34f4';
let req = new XMLHttpRequest();
req.addEventListener("load", function () {
if (req.status >= 200 && req.status < 400) {
// Appelle la fonction callback en lui passant la réponse de la requête
// callback(req.responseText);
const result = JSON.parse(req.responseText); // Transforme du texte en JSON
document.querySelector("#resultat").innerHTML=result.main.temp+"°C";
document.querySelector("#weatherIcon").src= "http://openweathermap.org/img/w" + result.weather[0].icon + ".png";
console.log(result.weather[0].icon);
//alert (value = document.innerHTML);
// Déplacer dans le JSON -> Récupérer la temp
} else {
console.error(req.status + " " + req.statusText + " " + url);
}
});
req.addEventListener("error", function () {
console.error("Erreur réseau avec l'URL " + url);
});
req.open("GET", url);
req.send(null);
});


/*Heure*/
let heure;
setInterval(function(){
heure = new  Date();
document.querySelector('.heure').innerHTML = "Heure : " + heure.toLocaleTimeString();
document.querySelector('.date').innerHTML = "Date : " + heure.toLocaleDateString("en-GB");
}, 1000);
