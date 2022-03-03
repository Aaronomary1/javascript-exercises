const sumAll = function(num, num2) {
    let totalSum = 0;
    if (num < 0 || num2 < 0 || (typeof num != 'number') || (typeof num2 != 'number')){
        return "ERROR";
    }
    if (num < num2){
        for (let i = num; i <= num2; i++){
            totalSum += i;
        }
    }
    else{
        for (let i = num; i >= num2; i--){
            totalSum += i;
        }
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
