var fact = [];
var result = [];
var promptNumber = prompt("Please enter a number: ");
var totalResult = factorial(promptNumber)
// var x = 0;

function factorial(num) {
  var value = 1;
  if (num >= 0) {
    fact = [1] // for 1 or 0 the factorial is 1
    for (var i = 2; i <= num; i++) {// for prompted number greater than or equal 2
      value *= i;
      fact.push(i);
      // alert("Value in for loop says: "+value)
    }
      fact.reverse();
      var factString = fact.toString();
      var factStringAsterisk = factString.replaceAll(",", "*")
    result.push(value);
    result.push(factStringAsterisk);
    var returnedResult = result
    // alert("Results says: " + result)
    // alert("Value says: "+value)
    return returnedResult;
  }
  else {
    fact = [-1] // for 1 or 0 the factorial is 1
    for (var i = -2; i >= num; i--) { // for prompted number greater than or equal 2
      fact.push(i);
    }
      var factString = fact.toString();
    return factString;
  }
}
// alert(factorial())
alert("Result of " + promptNumber + "!: " + totalResult[1] + " = " + totalResult[0]); // displays factorial of the prompted number