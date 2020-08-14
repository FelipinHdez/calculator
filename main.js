function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function mutliply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function operate (a, b, operator){
    switch (operator){
        case 'a':
            return add(a, b);
        case 's':
            return subtract(a, b);
        case 'm':
            return mutliply(a, b);
        case 'd':
            return divide(a, b);
    }
}