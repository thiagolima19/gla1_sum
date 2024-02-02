//styling the body element
document.body.style.textAlign = "center";
document.body.style.background = "#F8F4EC";

// Arrow function to validate input and display error if not a number
const validateInput = (inputId, errorId) => {
  let inputValue = parseFloat(document.getElementById(inputId).value);

  try {
    // Check if the entered value is a valid number
    if (isNaN(inputValue)) {
      throw new Error("Just numbers are valid!");
    }

    // Reset the border and clear previous error messages
    document.getElementById(inputId).style.border = "";
    document.getElementById(errorId).innerText = "";

    return inputValue;
  } catch (error) {
    // Display error message and set input box border to red
    document.getElementById(inputId).style.border = "2px solid red";
    document.getElementById(errorId).innerText = error.message;
    
    // Return undefined to indicate validation failure
    return undefined;
  }
};

// Function to calculate and display the sum
const calculateSum = () => {
  // Validate the values from the input elements
  let num1 = validateInput("num1", "error1");
  let num2 = validateInput("num2", "error2");

  // If validation is successful, calculate the sum
  if (num1 !== undefined && num2 !== undefined) {
    let sum = num1 + num2;
    document.getElementById(
      "result"
    ).innerText = `Sum: ${num1} + ${num2} = ${sum}`;
  } else {
    document.getElementById("result").innerText = "";
  }
};

//create h1 that contains My name
let myName = "Thiago Barbosa Lima";
let header1 = document.createElement("h1");

header1.innerText = myName;
header1.style.color = "#A9A9A9";

// Create a first input box
let input1 = document.createElement("input");
input1.type = "text";
input1.id = "num1";
input1.placeholder = "Enter number 1";
input1.style.margin = "5px";

//create a div to show the error
let errorDiv1 = document.createElement("div");
errorDiv1.id = "error1";
errorDiv1.style.color = "red";
errorDiv1.style.margin = "5px";

//create a second input box
let input2 = document.createElement("input");
input2.type = "text";
input2.id = "num2";
input2.placeholder = "Enter number 2";
input2.style.margin = "5px";

//create a div to show the error
let errorDiv2 = document.createElement("div");
errorDiv2.id = "error2";
errorDiv2.style.color = "red";
errorDiv2.style.margin = "5px";

//create the button element
let button = document.createElement("button");
button.innerText = "Calculate Sum";
button.onclick = calculateSum;
button.style.margin = "10px";
button.style.fontSize = "16px";
button.style.fontWeight = "700";
button.style.padding = "8px";
button.style.borderRadius = "10px";
button.style.background = "#000";
button.style.color = "#fff";

// Create a div to display the result
let resultDiv = document.createElement("div");
resultDiv.id = "result";
resultDiv.style.margin = "10px";
resultDiv.style.color = "#252525";
resultDiv.style.fontSize = "20px";
resultDiv.style.fontWeight = "700";

// Append elements to the body
document.body.appendChild(header1);
document.body.appendChild(input1);
document.body.appendChild(errorDiv1);
document.body.appendChild(input2);
document.body.appendChild(errorDiv2);
document.body.appendChild(button);
document.body.appendChild(resultDiv);
