// THERE IS A REVERSE FUNCTION BUILT IN AND THATS THE SOLUTION ARE YOU SERIOUS??? WHATS THE POINT IN THE EXERCISE THEN IF YOU WANT TO USE .REVERSE!!!!
const reverseString = function(str) {
    str.split()
    let reverse = []
    for (i of str) {
        reverse.unshift(i)
    }
    return reverse.join("")
};

// Do not edit below this line
module.exports = reverseString;
