var fact = [];
var promptNumber = prompt("Please enter a number: ");
var totalResult = factorial(promptNumber).replaceAll(",", "*")

function factorial(num) {
  var value = 1; // this sets result=1 for promptNumber < 2 
  fact = [1]
  for (var i = 2; i <= num; i++) // for prompted number greater than or equal 2
    fact.push(i);
    var factString = fact.toString();
  return factString;
}

alert("Factorial of " + promptNumber + " is " + totalResult); // displays factorial of the prompted number