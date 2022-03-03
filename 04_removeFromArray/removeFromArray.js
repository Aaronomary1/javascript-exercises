const removeFromArray = function(array, arg, arg2, arg3, arg4) {
    if ((array.includes(arg3))){
        array.splice((array.indexOf(arg3)), 1);
    } 
    if ((array.includes(arg2))){
        array.splice((array.indexOf(arg2)), 1);
    } 
    if ((array.includes(arg))){
        array.splice((array.indexOf(arg)), 1);
    } 
    if ((array.includes(arg4))){
        array.splice((array.indexOf(arg4)), 1);
    } 
        
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
