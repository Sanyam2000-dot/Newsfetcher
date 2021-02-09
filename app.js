var input = document.querySelector("#input-area")
var btn = document.querySelector("#input-btn")
var image = document.querySelector(".card-image").getAttribute("src")
var content = document.querySelector(".card-content")

var serverURL = 'http://newsapi.org/v2/top-headlines?q='

function getURL(input) {
    return serverURL + input + '&country=us&apiKey=b394bfc8816445efa7a1d7387092fc28';
}
console.log(getURL("one"));

function clickHandler() {
    var inputText = input.value;
    fetch(getURL(inputText))
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.articles.length; i++) {
                var imageurl = json.articles[i].urlToImage;
                image = imageurl;
                var details = json.articles[i].description;
                content.innerText = details;
            }
        })
}
btn.addEventListener("click", clickHandler)