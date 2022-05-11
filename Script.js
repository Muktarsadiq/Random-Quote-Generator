const quoteText = document.querySelector('.quotes'),
authorName = document.querySelector('.author .name'),
quoteBtn = document.querySelector('button'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter')

function randomQuote(){
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "loading Quote...";
    //fetching rnadom Api's and parsing them into javascript functions
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading")

    });
}

soundBtn.addEventListener("click", () => {
    //SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText} `);
    speechSynthesis.speak(utterance) // speak method  of speechsynthesis speaks the utterance
})

copyBtn.addEventListener("click", () => {
    //copying the quote text on copyBtn click
    //writeText property writes the specified text to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
    
})

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
})

quoteBtn.addEventListener('click', randomQuote)
