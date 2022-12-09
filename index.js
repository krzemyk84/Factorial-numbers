var fact = [];
var promptNumber = prompt("Please enter a number: ");
var totalResult = factorial(promptNumber).replaceAll(",", "*")

function factorial(num) {
  if (num >= 0) {
    fact = [1] // for 1 or 0 the factorial is 1
    for (var i = 2; i <= num; i++) // for prompted number greater than or equal 2
      fact.push(i);
      var factString = fact.toString();
    return factString;
  }
  else {
    fact = [-1] // for 1 or 0 the factorial is 1
    for (var i = -2; i >= num; i--) // for prompted number greater than or equal 2
      fact.push(i);
      var factString = fact.toString();
    return factString;
  }
}

alert("Factorial of " + promptNumber + " is " + totalResult); // displays factorial of the prompted number