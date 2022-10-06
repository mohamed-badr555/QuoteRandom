var quotes =[
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all.",
        author:"Oscar Wilde"
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:"Robert Frost"
    },
    {
        quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author:" J.K. Rowling"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"Mae West"
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author:" Bernard M. Baruch"
    }
];
var last = undefined;

function generateQuote() {
    // don't repeat quote
    do {
        var current= Math.floor(Math.random() * quotes.length);
    } while (current === last);
    document.getElementById('quote').innerHTML=`
    <p>"${quotes[current].quote}"</p>
    <h2>-- ${quotes[current].author}</h2>`;
    last =current;
}