var promptNumber = prompt("Please enter a number: ");
alert("Factorial of " + promptNumber + " is " + factorial(promptNumber)); // displays factorial of the prompted number

function factorial(num)
{
    var value=1; // this sets result=1 for promptNumber < 2 
    for (var i = 2; i <= num; i++) // for prompted number greater than or equal 2
        value = value * i; // also we could use value *= i here
    return value;
}

