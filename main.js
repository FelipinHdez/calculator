let displayValue = '';

const calcKeys = Array.from(document.querySelectorAll('[data-n]'));

calcKeys.forEach( element =>{
    element.addEventListener('click', updateDisplayValue);
});

function updateDisplayValue(newValue){
    if (typeof newValue === 'object'){
        newValue = newValue.target.getAttribute('data-n');
    }
    displayValue += newValue;
    const display = document.querySelector('#display');
    console.log('a');
    display.textContent = displayValue;
    
}



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