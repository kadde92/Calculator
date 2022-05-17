let numOne = null
let opera = null
let numTwo = null


// Calc operations

// 1. add

function add(a, b) {
    return a + b
};

// 2. Subtract
function subtract(a, b) {
    return a - b;
};

// 3. multiply

function multiply(a, b) {
    return a * b;
};

// 4. divide

function divide(a, b) {
    return a / b;

};


// Operate function
// 1. check that a and b are numbers
// 2. check that the operator is correct

// function operate(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return true;
//     } else {
//         return false;
//     }
// }

function calculate(a, b, c) {
    if (b === '+') {
        return add(a, c)
    } else if (b === '-') {
        subtract(a, c)
    } else if (b === '/') {
        divide(a, c)
    } else if (b === '*') {
        multiply(a, c)
    }
}

// add the screen for the calculator

const screen = document.querySelector('.screen')
const screenContent = document.createElement('div')
screenContent.classList.add('screencontent')
screen.appendChild(screenContent)

const result = document.createElement('div')
result.classList.add('result')
screen.prepend(result)





// number buttons, select and add eventlistener

const numBtn = document.querySelectorAll('.number-buttons')
numBtn.forEach(number => number.addEventListener('click', insertScreen));



function insertScreen(e) {
    screenContent.textContent += e.target.textContent;
}


// operator buttons

//remove eventlistener if textContent.includes(operator buttons)

const operatorBtn = document.querySelectorAll('.operator-buttons')
operatorBtn.forEach(operator => operator.addEventListener('click', insertOperator));


function insertOperator(e) {
    console.log(e.key)
    // numOone is for saving the value of the first number
    numOne = parseInt(screenContent.textContent)
    result.textContent = screenContent.textContent + e.target.textContent

    screenContent.textContent = null;

    // opera is a variable for saving the operator
    opera = e.target.textContent
    operatorBtn.forEach(operator => operator.removeEventListener('click', insertOperator));

}

// remove eventlistener after one click


// equal button

const equalBtn = document.querySelector('.equals')
equalBtn.addEventListener('click', addResult)

function addResult() {
    numTwo = parseInt(screenContent.textContent)
    console.log(numOne, opera, numTwo)
    result.textContent += screenContent.textContent
    screenContent.textContent = calculate(numOne, opera, numTwo)

}







// clear button

const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', clear)

function clear() {
    screenContent.textContent = null;
    result.textContent = null;
    operatorBtn.forEach(operator => operator.addEventListener('click', insertOperator));

}




// 1. 
