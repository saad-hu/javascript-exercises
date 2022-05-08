const sumAll = function(num1, num2) {
    let sum = 0;

    //this will check if any of the argument is negative or is not a number. Returns error if it is
    if(num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number") return "ERROR";

    //if num1 is greater than num2, this will swap the two. This is done because the for loop below is designed such that num1 should be lesser than num2
    if(num1 > num2) [num1, num2] = [num2, num1];

    for (let i = num1; i <= num2; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
