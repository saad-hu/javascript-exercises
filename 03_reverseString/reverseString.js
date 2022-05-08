const reverseString = function(str) {
    let lenOfStr = str.length;
    let reversedStr = "";
    for (let i = lenOfStr-1; i >= 0; i--) {
        reversedStr = reversedStr + str[i];
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
