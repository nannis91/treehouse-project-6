const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.querySelector('#overlay');
const btnReset = document.querySelector('.btn__reset');

// Phrases to guess for the game
const phrases = [
    // 'forest whispers softly', 
    // 'golden sunlight warms',
    // 'rivers flow gently',
    // 'mountains stand tall',
    'flowers bloom bright'
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

function checkLetter (value) {

    // Store all of the li elements in a variable inside checkLetter 
    let listItems = phrase.querySelector('ul').childNodes;

    // Create a variable to store if a match is found and give it an initial value of null
    let match = [];
    
    // Loop through all of the li elements. Remember: arrays start with index 0!

    for ( let i = 0; i < listItems.length; i++) {

        // Create a conditional that compares the text of the button parameter to the text of the li at the current index of the loop
        if (value === listItems[i].textContent) {
            // If they match, add the “show” class to the li
            listItems[i].className = 'letter show';
            // If they match, store the button text in the match variable
            match.push(listItems[i].textContent);
        }
    }
    // Once the loop completes, return the match variable
    return match;
}

// Checks if a button in QWERTY is clicked and returns the text of that button
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.className != "chosen") {
        buttonText = e.target.innerHTML;
        e.target.className = "chosen";
        checkLetter(buttonText);
    } 
});




 
    
    


