let myKey = "AIzaSyDUTfGgyYuWN-yBAQtDRjJwVMoPD8YKhOw";
const container = document.getElementById("contGif");
const input = document.getElementById("searchIn");

let featuredURL = "https://tenor.googleapis.com/v2/featured?key=" + myKey

window.addEventListener("DOMContentLoaded", apiFunction);
input.addEventListener("keyup", searchGif);

function createCard(data) {
    data["results"].map(results => {

        const div = document.createElement("div");
        div.classList.add("card");
        const img = document.createElement("img");
        img.src = results["media_formats"]["gif"]["url"];
        img.classList.add("img");
        div.appendChild(img);
        container.appendChild(div);
    })
}
function apiFunction() {
    fetch(featuredURL)
    .then(response => response.json())
    .then(data => createCard(data))
}

function searchGif(event) {
    container.innerHTML = "";
    let newURL = "";
        if (input.value === "") {
            apiFunction();
        } else {
           newURL = `https://tenor.googleapis.com/v2/search?q=${event.target.value}&key=${myKey}`;
        }
    fetch(newURL)
    .then(response => response.json())
    .then(data => createCard(data))
}