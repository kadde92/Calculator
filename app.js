// Calc operations

// 1. add

function add(a, b) {
    if (operate(a, b)) {
        return a + b
    };
};

// 2. Subtract
function subtract(a, b) {
    if (operate(a, b)) {
        return a - b;
    };
};

// 3. multiply

function multiply(a, b) {
    if (operate(a, b)) {
        return a * b;
    };
};

// 4. divide

function divide(a, b) {
    if (operate(a, b)) {
        return a / b;
    };
};


// Operate function
// 1. check that a and b are numbers
// 2. check that the operator is correct

function operate(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return true;
    } else {
        return false;
    }
}

function operateTemp(a,b,c) {
    if(b === '+') {
        add(a,c)
    } else if(b === '-') {
        subtract(a,c)
    } else if(b === '/') {
        divide(a,c)
    } else if(b === '*') {
        multiply(a,c)
    }
}

// add the screen for the calculator

const screen = document.querySelector('.screen')
const screenContent = document.createElement('p')
screenContent.classList.add('screenContent')
screen.appendChild(screenContent)





// number buttons, select and add eventlistener

const numBtn = document.querySelectorAll('.number-buttons')
numBtn.forEach(number => number.addEventListener('click',insertScreen));

function insertScreen(e) {
    screenContent.textContent += e.target.textContent
    console.log(e)

}


// operator buttons

const operatorBtn = document.querySelectorAll('.operator-buttons')
operatorBtn.forEach(operator => operator.addEventListener('click',insertScreen));
