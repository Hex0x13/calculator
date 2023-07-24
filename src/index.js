
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
    case 'x':
      multiply(a, b);
      break;
    case '÷':
      divide(a, b);
      break;
    case '+':
      add(a, b);
      break;
    case '-':
      subtract(a, b);
  }
}
