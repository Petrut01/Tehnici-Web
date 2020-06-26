//
let quote = document.querySelector("p#word-by-word1"),
    quotewords = quote.innerText.split(" "),
    wordCount = quotewords.length;
quote.innerHTML = "";
let i = 0;
let wordsTimer = setInterval(displayWords,300);

function displayWords(){
    quote.innerHTML += quotewords[i];
    quote.innerHTML += " ";

    i++;
    if(i === wordCount){
        complete();
        return;
    }
}
function complete(){
    clearInterval(wordsTimer);
    wordsTimer = null;
}

//

const docTitle = document.querySelector('h1');
const docTitleChars = docTitle.textContent.split("");
const docTitleCharsLen = docTitleChars.length;

docTitle.textContent = "";
for(let i = 0; i < docTitleChars.length; i++){
    docTitle.innerHTML += "<span>" + docTitleChars[i] + "</span>";
}

let iTitle  = 0;
let titleTimer = setInterval(showTitleChars,100);

function showTitleChars(){
    const titleSpan = docTitle.querySelectorAll('span')[iTitle];
    const titleSpan2 = docTitle.querySelectorAll('span')[docTitleCharsLen - iTitle - 1];
    //console.log(titleSpan2);
    titleSpan.classList.add('show');
    titleSpan2.classList.add('show');

    iTitle++;
    if(iTitle > (docTitleCharsLen/2)){
        complete2();
        return;
    }
}
function complete2(){
    clearInterval(titleTimer);
    titleTimer = null;
}


