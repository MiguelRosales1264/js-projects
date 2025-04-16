const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorSelectInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');
const clearButton = document.getElementById('clear');

function clear() {
    firstNumberInput.value = '';
    secondNumberInput.value = '';
    operatorSelectInput.value = '+';
    resultParagraph.style.backgroundColor = '#aeffb2';
    resultParagraph.textContent = 'Result will be displayed here';
}

clearButton.addEventListener('click', clear);

function calculate() {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);
    const operator = operatorSelectInput.value;

    console.log(isNaN(firstNumber), isNaN(secondNumber));

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultParagraph.textContent = "Please enter a valid number";
        resultParagraph.style.backgroundColor = '#F7DF04';
        return;
    }

    let result;
    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else {
        result = firstNumber / secondNumber;
    }
    
    resultParagraph.textContent = 'Result: ' + result;
}
 
calculateButton.addEventListener('click', calculate);
