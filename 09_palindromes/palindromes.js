const palindromes = function (sentence) {
    //this removes all spaces and punctuation 
    let noPunc = sentence.replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "").replaceAll("!", "");
    let noPuncLower = noPunc.toLowerCase(); //converting to lowercase
    
    //now we have to make a reverse string of noPuncLower
    //Method 1: this converts the string to array. then uses reverse method on array. then join method to convert form array to string
    //there is no direct method to reverse a string

    let reverseStr = noPuncLower.split("").reverse().join("");

    //Method 2: this uses loop. No methods are used
    // let reverseStr = "";

    // for(let i = noPuncLower.length - 1; i >= 0; i--) {
    //     reverseStr = reverseStr + noPuncLower[i];
    // }

    if (noPuncLower === reverseStr) return true;

    else return false;
};


// Do not edit below this line
module.exports = palindromes;
