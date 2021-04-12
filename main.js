const bootun = document.getElementById("myBootOn");
const pics = document.getElementById("poodlePics");

bootun.addEventListener("click", function () {
    const URL = 'https://dog.ceo/api/breeds/image/random';
    console.log('button clicked')
    
    fetch(URL)
    .then(function (rawResponse) {
        return rawResponse.json();
    })
    .then(function (json) {
        pics.src = json.message
        console.log(json)
    })

} )

const wetButton = document.getElementById("weatherButton");

const temp = "";
const wind = "";
const desc = "";

wetButton.addEventListener("click", function () {
    let input = document.getElementById("input").value;
    const URL = `https://goweather.herokuapp.com/weather/${input}`;
    console.log('button clicked')
    fetch(URL)
    .then(function (rawResponse) {
        console.log(rawResponse)
        return rawResponse.json();
    })
    .then(function (json) {
        input = json
        document.getElementById("temp").innerHTML = `Temperature is: ${json.temperature} `
        document.getElementById("wind").innerHTML = `Wind is approximately: ${json.wind}`
        document.getElementById("desc").innerHTML = `A brief description: ${json.description}`
        console.log(json)
    })

} )
