// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    // should reset the styles

    // then increment the guesses

    // then grab the appropriate container element for the correct guess from the DOM

    // then add the face class to that element so that the face shows up

    // then if the user guess is correct, increment the correct guesses

    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}

function resetStyles() {
    // should remove the face class from all containers
}

shedButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'

    // then use that correct spot to 'handle the guess' using the handleGuess function
});

treeButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'

    // then use that correct spot to 'handle the guess' using the handleGuess function
});

boulderButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'

    // then use that correct spot to 'handle the guess' using the handleGuess function
});
