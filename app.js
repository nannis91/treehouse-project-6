const qwerty = document.getElementById('qwerty');
const tries = document.querySelectorAll('.tries img');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const btnReset = document.querySelector('.btn__reset');

let missed = 0;

// Phrases to guess for the game
const phrases = [
    'forest whispers softly', 
    'golden sunlight warms',
    'rivers flow gently',
    'mountains stand tall',
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
    let match = null;
    
    // Loop through all of the li elements. Remember: arrays start with index 0!
    for ( let i = 0; i < listItems.length; i++) {

        // Create a conditional that compares the text of the button parameter to the text of the li at the current index of the loop
        if (value === listItems[i].textContent) {
            listItems[i].className = 'letter show';
            (match = match || []).push(listItems[i].textContent);
        }
    }

    return match;
}

// Function that checks if the player has won or lost
function checkWin () {
    let letters = phrase.querySelectorAll('ul li.letter').length;
    let show = phrase.querySelectorAll('ul li.show').length;
    let ul = phrase.querySelector('ul');
    let buttons = qwerty.querySelectorAll('button');
    
    // Win conditions
    if (show >= letters) {
        // Brings back overlay and change texts and classes
        overlay.style.display = 'flex'
        overlay.querySelector('h2').textContent = "You won!"
        overlay.className = "win"
        overlay.querySelector("a").className = "btn__reset"
        overlay.querySelector("a").textContent = "Play again"
        ul.innerHTML = '';
        missed = 0;

        // Resets button classes
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = ''; 
        }
        // Resets heart images
        for (let i = 0; i < tries.length; i++) {
            tries[i].setAttribute("src", "images/liveHeart.png");
        }

    // Loose conditions    
    } else if (missed >= 5) {
        // Brings back overlay and change texts and classes
        overlay.style.display = 'flex'
        overlay.querySelector('h2').textContent = "You lost!"
        overlay.className = "lose"
        overlay.querySelector("a").className = "btn__reset loose a"
        overlay.querySelector("a").textContent = "Try again"
        ul.innerHTML = '';
        missed = 0;

        // Resets button classes
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = ''; 
        }
        // Resets heart images
        for (let i = 0; i < tries.length; i++) {
            tries[i].setAttribute("src", "images/liveHeart.png");
        }
    }

}

// Checks if a button in QWERTY is clicked and returns the text of that button
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.className != "chosen") {
        buttonText = e.target.innerHTML;
        e.target.className = "chosen";
        let result = checkLetter(buttonText);

        if (result === null) {
            missed++
            tries[missed -1].setAttribute("src", "images/lostHeart.png");
        }
        checkWin();
  
}});