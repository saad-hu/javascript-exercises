const reverseString = function(str) {

    let splitArray = str.split(""); //splits the string into an array with the elements being a single individual character
    let reversedArray = splitArray.reverse();   //reverses the array

    let reversedStr = reversedArray.join(""); //joins the array into a string

    return reversedStr;

    // return str.split("").reverse().join(""); //short for above code
};

// Do not edit below this line
module.exports = reverseString;
