const sumAll = function(num1, num2) {
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    if (num1 < num2) {
        lower = num1;
        higher = num2;
    }
    else {
        higher = num1;
        lower = num2;
    };
    result = 0;
    for (i = lower; i <= higher; i++) {
        result += i;
    };
    return result;
};

// Do not edit below this line
module.exports = sumAll; 
