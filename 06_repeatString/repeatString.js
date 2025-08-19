const repeatString = function(toRepeat, amount) {
    let message = ""
    if (amount < 0) {
        return "ERROR"
    }
    for(let i = 0; i < amount; i++) {
        message += toRepeat;
    }
    return message
};
// Do not edit below this line
module.exports = repeatString;
