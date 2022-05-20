let numOne = null
let opera = null
let numTwo = null


// Calc operations

// 1. add

function add(a, b) {
    const c = a + b
    if (c % 1 === 0) {
        return c
    } else {
        return c.toFixed(3)
    }
};

// 2. Subtract
function subtract(a, b) {
    const c = a - b;
    if (c % 1 === 0) {
        return c
    } else {
        return c.toFixed(3)
    }
};

// 3. multiply

function multiply(a, b) {
    const c = a * b
    if (c % 1 === 0) {
        return c
    } else {
        return c.toFixed(3)
    }
};

// 4. divide

function divide(a, b) {
    const c = a / b
    if (c % 1 === 0) {
        return c
    } else {
        return c.toFixed(3)
    }
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
    if (b === '/' && c === 0) {
        alert("Cant divide with 0")
        return insertScreen()
    }

    if (b === '+') {
        return add(a, c)
    } else if (b === '-') {
        return subtract(a, c)
    } else if (b === '/') {
        return divide(a, c)
    } else if (b === '*') {
        return multiply(a, c)
    }
}

// add the screen for the calculator

const screen = document.querySelector('.screen')
const screenContent = document.createElement('div')
screenContent.classList.add('screencontent')
screen.appendChild(screenContent)

// result screen
const result = document.createElement('div')
result.classList.add('result')
screen.prepend(result)





// number buttons, select and add eventlistener

const numBtn = document.querySelectorAll('.number-buttons')
numBtn.forEach(number => number.addEventListener('click', insertScreen));



function insertScreen(e) {
    if (e.target.textContent !== '=') {
        screenContent.textContent += e.target.textContent;
        operatorBtn.forEach(operator => operator.addEventListener('click', insertOperator));
    }
    if(screenContent.textContent.includes('.')) {
        document.querySelector('#dot').disabled = true
    } else {
        document.querySelector('#dot').disabled = false
    }
}


// operator buttons


const operatorBtn = document.querySelectorAll('.operator-buttons')
operatorBtn.forEach(operator => operator.addEventListener('click', insertOperator));


function insertOperator(e) {
    //can't start with an operator, will remove the operator buttons if tried
    if (screenContent.textContent === '') {
        operatorBtn.forEach(operator => operator.removeEventListener('click', insertOperator));

    } else {
        // numOone is for saving the value of the first number
        numOne = intOrFloat(screenContent.textContent)
        // numOne = parseInt(screenContent.textContent)
        result.textContent = screenContent.textContent + e.target.textContent
        screenContent.textContent = null;

        // opera is a variable for saving the operator
        opera = e.target.textContent
        operatorBtn.forEach(operator => operator.removeEventListener('click', insertOperator));
        numBtn.forEach(number => number.addEventListener('click', insertScreen));

        equalBtn.addEventListener('click', addResult)
    }

}




// equal button

const equalBtn = document.querySelector('#equals')
if (screenContent.textContent !== '') {
    equalBtn.addEventListener('click', addResult)
}

function addResult(e) {
    // first, remove the equal button from use so that the user can input it only once
    equalBtn.removeEventListener('click', addResult)

    // add a funtion that declares the variables numOne / numTwo to either a int or a float, depending if the textContent uses the decimal or not
    numTwo = intOrFloat(screenContent.textContent)
    // numTwo = parseInt(screenContent.textContent)
    result.textContent += screenContent.textContent + e.target.textContent
    if (isNaN(numTwo)) {
        equalBtn.removeEventListener('click', addResult)
        const last = document.querySelector('.result').textContent.slice(0, -1)
        result.textContent = last
        equalBtn.addEventListener('click', addResult)
    } else {
        screenContent.textContent = calculate(numOne, opera, numTwo)
        numBtn.forEach(number => number.removeEventListener('click', insertScreen));
        operatorBtn.forEach(operator => operator.addEventListener('click', insertOperator));
    }
}







// clear button

const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', clear)

function clear() {
    numBtn.forEach(number => number.addEventListener('click', insertScreen));
    screenContent.textContent = null;
    result.textContent = null;
    operatorBtn.forEach(operator => operator.addEventListener('click', insertOperator));
}


// AC button 

const acBtn = document.querySelector('#ac')
acBtn.addEventListener('click', erase)



function erase() {
    numBtn.forEach(number => number.addEventListener('click', insertScreen));
    const last = document.querySelector('.screencontent').textContent.slice(0, -1)
    screenContent.textContent = last

}

// problems left: 1. starting with zero does not work as it should

//3. pressing between the numbers (when having i.e gap) somehow presses all the buttons...
// 4. num + operator = NaN, done
// 5. jos ei paina = niin lukuja voi muutella loputtomiin operaattorien avulla -> pitäisi korjata niin että jos num1 operaattori ja num2 on 'oikein' niin operaattorin painallus toimii samallatavalla kun =

function intOrFloat(variable){
    if(variable.includes('.')) {
        return parseFloat(variable)
    } else return parseInt(variable)
}




