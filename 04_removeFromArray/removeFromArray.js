const removeFromArray = function(userArray, ...remItems) {  //...remItems is a Rest parementer. It is an array of all the parameters that are entered after userArray parameter

    nextIteration: for (let i = 0; i < remItems.length; i++) //nextIteration is a label for the for loop
    {
        let remIndex = userArray.indexOf(remItems[i]);

        if (remIndex == -1) continue nextIteration; //indexOf method returns -1 if the parameter is not found. If it is not found, continue will skip to the next parameter to be removed from the array

        userArray.splice(remIndex, 1); //splice changes the original array and returns the DELETED items. It does not returns the modified array
    }

    return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;
