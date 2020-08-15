let displayValue = '';
const numbers = '0123456789'.split('');
let inputOperator = true;
const operators = '÷×+-'.split('');
let inputDecimal = true;

const calcKeys = Array.from(document.querySelectorAll('button'));
document.addEventListener('keypress', event => {
    console.log(event['key']);
    let key = event['key'];
    key = (key === '/') ? '÷' : key;
    key = (key === '*') ? '×' : key;
    key = (key === 'Enter') ? '=' : key;
    updateDisplayValue(key);
})

calcKeys.forEach( element =>{
    element.addEventListener('click', updateDisplayValue);
});

function updateDisplayValue(newValue){
    const display = document.querySelector('#display');
    if(typeof newValue == 'object'){
        newValue = newValue.target.textContent;
    }

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
    if (Number.isNaN(displayValue)){
        displayValue = '';
        window.alert('What’s 0 divided by 0?\nImagine that you have zero cookies and you split them evenly among zero friends. How many cookies does each person get? See? It doesn’t make sense. And Cookie Monster is sad that there are no cookies, and you are sad that you have no friends.')
    }
    displayValue = displayValue.toString();
    inputOperator = true;
    inputDecimal = true;
}

function getNumber(string){
    fullNumbers = numbers.push('e');
    string = string.split('');
    string = string.filter( char => numbers.includes(char));
    return string.join('');
}