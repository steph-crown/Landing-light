const cardNumber = $('div.card .pad h5:nth-child(2)');
const cardNumberInput = document.getElementById('card-number');

const cardDate = $('div.card .date');
const cardDateInput = document.getElementById('exp-date');

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

const spaceAfter4 = (text) => {
    // Adds space after 4 characters
    text = text.trim()
        .split("")
        .filter(x => isNumeric(x))
        .map((x, index) => (index + 1) % 4 === 0 ? (x + " ") : x)
        .join("")
        ;
    return text.slice(0,19);
};

const leftPad = num => {
    return ('0' + num).slice(-2)
}

const prettifyDate = (date) => {
    // Prettify date
    date = new Date(date);
    return `${leftPad(date.getMonth())}/${String(date.getFullYear()).slice(-2)}`
    
}

cardNumberInput.addEventListener('input', (ev) => {
    ev.target.value = spaceAfter4(ev.target.value)
    cardNumber.innerText = ev.target.value
});

cardDateInput.addEventListener('input', (ev) => {
    // console.log(new Date(ev.target.value).getFullYear());
    // console.log(prettifyDate(ev.target.value));
    cardDate.innerText = prettifyDate(ev.target.value);
})