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
    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultParagraph.textContent = "Please enter a valid number";
        resultParagraph.style.backgroundColor = '#F7DF04';
        return;
    }

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0 ) {
                resultParagraph.textContent = "Cannot divide by zero";
                resultParagraph.style.backgroundColor = '#F7DF04';
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            resultParagraph.textContent = "Invalid operator";
            resultParagraph.style.backgroundColor = '#F7DF04';
            return;

    }
    
    resultParagraph.textContent = 'Result: ' + result;
}

calculateButton.addEventListener('click', calculate);
