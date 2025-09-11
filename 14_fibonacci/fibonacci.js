const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    }
    let ans = 0
    prev = 1
    for (i = 0; i < a; i++) {
        let temp = ans;
        ans += prev;
        prev = temp;
    }
    return ans;
};

fibonacci(4)

// Do not edit below this line
module.exports = fibonacci;
