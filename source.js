const numbers=document.querySelectorAll('[data-number]');
const operators=document.querySelectorAll('[data-operator]');
const equlas=document.querySelector('[data-equals]');
const allClearButton=document.querySelector('[data-all-clear]');
const backSpace=document.querySelector('[data-backspace]');
const point=document.querySelector('[data-point]');
const buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',populateDisplay);
});


var firstNumber;
var secondNumber;
var operator;
var displayValue='';


function add(num1,num2){return num1+num2}

function subtract(num1,num2){return num1-num2}

function multiply(num1,num2){return num1*num2}

function divide(num1,num2){return num1/num2}

function operate(firstNumber,secondNumber,operator){
    switch(operator){
        case '+':
            add(firstNumber,secondNumber);
            break;
        case '-':
            subtract(firstNumber,secondNumber);
            break;
        case '*':
            multiply(firstNumber,secondNumber);
            break;
        case '÷':
            divide(firstNumber,secondNumber);
            break;
        default:
            break;
    }
}

const screen=document.querySelector('#display');
function populateDisplay(event){
    displayValue=event.target.innerHTML;
    screen.append(displayValue);
}



