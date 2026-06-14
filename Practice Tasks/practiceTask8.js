
function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
        
        let result1 = addition(num1, num2);
        let result2 = subtraction(num1, num2);
        let result3 = multiply(num1, num2);
        let result4 = division(num1, num2);

        // Display the result
        displayResult(result1,"addition");
        displayResult(result2,"subtraction");
        displayResult(result3,"multiplication");
        displayResult(result4,"division");
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function displayResult(result,process='') {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');

    if(process==="addition"){
        resultElement.textContent='';
    }
    
    const para=document.createElement('p');
    para.textContent=`The ${process} result is: ${result}`;
    resultElement.appendChild(para); 
}

function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function division(a,b){
    return (b!==0) ? a/b : alert("cannot divide by zero");
}
