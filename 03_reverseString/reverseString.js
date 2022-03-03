const reverseString = function(string) {
    const length = string.length;
    let newString = '';
    for (let i = 0; i < length; i++){
        newString += string[(length - 1) - i]
    }
    
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
