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
