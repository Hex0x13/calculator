const topDisplay = document.querySelector('.top');
const bottomDisplay = document.querySelector('.bottom');
const buttons = Array.from(document.querySelectorAll('.calculator-buttons'));
let currentNum = 0;
let prevNum = 0;
let operator = '';

buttons.forEach(button => {
  const buttonText = button.textContent;
  if (buttonText.match(/[0-9\.]/g)){
    button.onclick = inputNumber;
  } else if (buttonText === 'AC'){
    button.onclick = clearDisplay;
  } else if (buttonText === 'DEL'){
    button.onclick = backspace;
  } else if (buttonText === '+/−'){
    button.onclick = negateNumber;
  } else if (buttonText === '%'){
    button.onclick = toPercentage;
  } else if (buttonText.match(/[÷×−+]/g)){
    button.onclick = inputOperator;
  } else if (buttonText.includes('=')){
    button.onclick = displayAnswer;
  }
});

function inputNumber(event){
  const text = event.target.textContent;
  bottomDisplay.textContent += text;
  currentNum = +bottomDisplay.textContent;
}

function clearDisplay(){
  topDisplay.textContent = '';
  bottomDisplay.textContent = '';
  currentNum = 0;
  prevNum = 0;
}

function backspace(){
  const text = bottomDisplay.textContent.slice(0, -1);
  if (text.length === 1 && text === '-'){
    bottomDisplay.textContent = '';
  } else {
    bottomDisplay.textContent = text;
  }
}

function toPercentage(){
  currentNum /= 100;
  console.log(currentNum)
  bottomDisplay.textContent = currentNum;
}

function negateNumber(){
  if (bottomDisplay.textContent === ''){
    return;
  }
  currentNum = -currentNum;
  bottomDisplay.textContent = currentNum;
}

function inputOperator(event){
  if (bottomDisplay.textContent === ''){
    return;
  }

  const text = topDisplay.textContent;
  if (text[text.length - 1] === operator) displayAnswer();
  operator = event.target.textContent;
  prevNum = currentNum;
  currentNum = 0;
  topDisplay.textContent = bottomDisplay.textContent + operator;
  bottomDisplay.textContent = '';
}

function displayAnswer(){
  if (bottomDisplay.textContent === '' || topDisplay.textContent === '') 
    return;
  topDisplay.textContent += currentNum;
  currentNum = operate(prevNum, currentNum, operator);
  bottomDisplay.textContent = currentNum;
}

function add(x, y){
  return x + y;
}

function subtract(x, y){
  return x - y;
}

function multiply(x, y){
  return x * y;
}

function divide(x, y){
  return x / y;
}

function operate(a, b, operator){
  switch (operator){
    case '×':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
    case '+':
      return add(a, b);
    case '−':
      return subtract(a, b);
  }
  return currentNum;
}
