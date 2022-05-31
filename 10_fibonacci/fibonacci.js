const fibonacci = function(member) {

    if(member <= 0) return "OOPS"

    let arrayIndex = member - 1;
    let fibo = [1,1];   

    for(let i = 2; i <= arrayIndex; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return fibo[arrayIndex];
};



// Do not edit below this line
module.exports = fibonacci;
