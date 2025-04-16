// 1. Print even numbers from 2 to 20
function printEven(){
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}

// 2. Calculate Factorial of num
    // Write a loop to calculate the factorical of a given number
    // 3! = 3 * 2 * 1 = 6

function calculateFactorial(number) {
    let result = 1;
    factorialNum = number
    while (factorialNum >= 1) {
        result *= factorialNum;
        factorialNum--;
    }
    console.log(number + '!= ' + result)
}

// 3. Guess the Number Game: 
    // Create a simple game where the user has to guess a randomly generated number.
    // Use a loop to keep asking for guesses until they get it right
    // Guess 1 to 10

    
    
function guessNumberGame(guessedNumber) {
    const guessInput = document.getElementById('guess');
    const submitGuessButton = document.getElementById('submitGuess')
    const guessResultParagraph = document.getElementById('guessResult');

    
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let guessedNumber = parseFloat(guessInput.value);
    do {
        if (guessedNumber < secretNumber) {
            console.log('Too low');
            guessResultParagraph.textContent = 'Too low'
            guessResultParagraph.style.backgroundColor = '#F7DF04';
        } else if (guessedNumber > secretNumber) {
            console.log('Too high');
            guessResultParagraph.textContent = 'Too high'
            guessResultParagraph.style.backgroundColor = '#F7DF04';
        } else {
            console.log('You guessed it!')
            guessResultParagraph.textContent = 'You guess it!'
            guessResultParagraph.style.backgroundColor = '#aeffb2';
        }
    } while (guessedNumber === secretNumber)
}
