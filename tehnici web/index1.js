
let content = document.querySelector("body").innerText;

function WordCount(str) {
    return str.split(' ').filter(function(n) { return n != '' }).length;
}

document.querySelector("body").innerHTML += "<div class='word-counter'>Numar de cuvinte: " + WordCount(content) + "</div>";

