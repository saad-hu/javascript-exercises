const repeatString = function(str, repeatNum) {
    
    if(repeatNum < 0) return "ERROR"; //no -ve numbers allowed

    let finalStr = "";      //an empty string to add the user string to

    for (let i = 0; i < repeatNum; i++) {   
        finalStr = finalStr.concat(str);
    }
    
    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
