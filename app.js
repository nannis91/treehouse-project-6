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

// Event listner to the start game button.
btnReset.addEventListener('click', (e) => {
    overlay.style.display = 'none'
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));
});

// Returns a random array item from an array.
function getRandomPhraseAsArray (arr) {
    let randomNumber = Math.floor(Math.random()*arr.length);
    let randomPhrase = arr.slice(randomNumber, randomNumber + 1);
    randomPhrase = randomPhrase.toString();

    return randomPhrase;
};

// Splits phrase in letters and appends li to phrase ul.
function addPhraseToDisplay (text) {
    let ul = phrase.querySelector("ul");
    let letters = text.split('');
    let element = text[0];

    for (let i = 0; i < letters.length; i++) {
        let li = document.createElement("li");
        li.textContent = letters[i];
        ul.appendChild(li);
        
        // Sets class to li if space or letter
        if (li.textContent === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }

};
