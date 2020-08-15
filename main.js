let displayValue = '';
const numbers = '0123456789'.split('');
let inputOperator = true;
const operators = '÷×+-'.split('');
let inputDecimal = true;

const calcKeys = Array.from(document.querySelectorAll('button'));

calcKeys.forEach( element =>{
    element.addEventListener('click', updateDisplayValue);
});

function updateDisplayValue(newValue){
    const display = document.querySelector('#display');
    newValue = newValue.target.textContent;

    if (newValue == 'c'){
        displayValue = '';
    }else if(newValue == '<'){
        if (displayValue == ''){return;}
        if (operators.includes(displayValue.slice(-1))){
            inputOperator = true;
            inputDecimal = false;
        }
        if (displayValue.slice(-1) == '.'){
            inputDecimal = true;
        }
        displayValue= displayValue.substring(0, displayValue.length-1);
    }
    else if(numbers.includes(newValue)){
        displayValue += newValue;
        inputOperator = true;
    }
    else if(operators.includes(newValue) && inputOperator){
        displayValue += newValue;
        inputOperator = false;
        inputDecimal = true;
    }
    else if(newValue == '.' && inputDecimal){
        displayValue += newValue;
        inputDecimal = false;
    }
    else if (newValue == '='){
        compute();
    }

    display.textContent = displayValue;
    
}

function compute(){
    displayValue = displayValue.replace('÷', '/');
    displayValue = displayValue.replace('×', '*');
    displayValue = displayValue.replace(/[^-()\d/*+.]/g, '');
    displayValue = Function('"use strict";return (' + displayValue + ')')();
    displayValue = Math.round(displayValue*100)/100;
    displayValue = displayValue.toString();
    inputOperator = true;
    inputDecimal = true;
}