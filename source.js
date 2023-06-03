const numbers=document.querySelectorAll('[data-number]');
const operators=document.querySelectorAll('[data-operator]');
const equlas=document.querySelector('[data-equals]');
const allClearButton=document.querySelector('[data-all-clear]');
const backSpace=document.querySelector('[data-backspace]');
const point=document.querySelector('[data-point]');

numbers.forEach((number)=>{
    number.addEventListener('click',populateDisplay);
});


var firstNumber;
var secondNumber;
var operation;
var displayValue='';
var pointState=0;


function add(num1,num2){
    let rez=num1+num2;
    postOperation(rez);
}

function subtract(num1,num2){
    let rez=num1-num2;
    postOperation(rez);
}

function multiply(num1,num2){
    let rez=num1*num2;
    postOperation(rez);
}

function divide(num1,num2){
    let rez=(num1/num2).toFixed(3);
    postOperation(rez);
}

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

const screen=document.querySelector('#screen');
function populateDisplay(event){
    screen.replaceChildren();
    if(event.target.innerHTML==='.')
    {
        pointState++;
        if(pointState===1)
        {
            displayValue+=event.target.innerHTML;
            screen.append(displayValue);
        }
        else screen.append(displayValue);
    }
    else
    {
        displayValue+=event.target.innerHTML;
        screen.append(displayValue);
    }
}

allClearButton.addEventListener('click',clearScreen);
function clearScreen(){
    screen.replaceChildren();
    displayValue='';
    pointState=0;
    firstNumber=undefined;
    secondNumber=undefined;
    operation=undefined;
}

backSpace.addEventListener('click',backspace);
function backspace(){
    if(displayValue[displayValue.length-1]==='.') pointState=0;
    displayValue=displayValue.slice(0,displayValue.length-1);
    screen.replaceChildren();
    screen.append(displayValue);
}

operators.forEach((operator)=>{
    operator.addEventListener('click',preOperation)
});

function preOperation(event){
    if(event.target.innerHTML==='='){
        secondNumber= +displayValue;
        pointState=0;
    }
    else
    {
        operation=event.target.innerHTML;
        firstNumber= +displayValue;
        displayValue='';
        pointState=0;
    }
    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        displayValue='';
        operate(firstNumber,secondNumber,operation);
    }
}

function postOperation(rez){
    displayValue+=rez.toString();
    screen.replaceChildren();
    screen.append(displayValue);
    displayValue='';
}



