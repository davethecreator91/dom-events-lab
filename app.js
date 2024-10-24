/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const clearScreen = () => {
    display.textContent("display") = '';
}
const display = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let numbers = {'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'0':0}
let operators = {
    '+': (a,b) => a+b,
    '-': (a,b) => a-b,
    '*': (a,b) => a*b,
    '/': (a,b) => a/b,
    '=': (a,b) => ,
    'C':clearScreen,
}

// let Add = operators['+'](numbers, numbers)
// let Subtract = operators['-'](numbers, numbers)
// let Multiply = operators['*'](numbers, numbers)
// let Divide = operators['/'](numbers, numbers)
/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      
      // Future logic to capture the button's value would go here...
    });
    
  });
  
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
    updateDisplay(event.target.innerText)
  
    // Example
    if (event.target.classList.contains('numbers')) {
      // Do something with a numbers
        
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    }
  });
  
/*-------------------------------- Functions --------------------------------*/
function updateDisplay(value) {
    display.textContent = value;
}

// calculation = number/operator/number

// if (button.innerText === numbers) {
//         updateDisplay()
//     else 
//         updateDisplay('Invalid Entry')
// }

