const qwerty = document.querySelector('#qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.querySelector('#overlay');
const btnReset = document.querySelector('.btn__reset');

let score = 0;

// Phrases to guess for the game
const phrases = [
    'Forest whispers softly', 
    'Golden sunlight warms',
    'Rivers flow gently',
    'Mountains stand tall',
    'Flowers bloom bright'
];

// Event listner to the start game button
btnReset.addEventListener('click', (e) => {
    overlay.style.display = 'none'
});

// Function that returns a random array item from an array
function getRandomPhraseAsArray (arr) {
    let randomNumber = Math.floor(Math.random()*arr.length);
    let randomPhrase = arr.slice(randomNumber, randomNumber + 1);

    return randomPhrase;
};

function addPhraseToDisplay (text) {
    let ul = phrase.querySelector("ul");
    let li = document.createElement("li");
    li.textContent = text;
    li.className = 'letter';
    ul.appendChild(li);
    return ul;
};
