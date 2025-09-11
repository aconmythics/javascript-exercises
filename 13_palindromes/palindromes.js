const palindromes = function (palindrome) {
    stripped = palindrome.replace(/[^a-zA-Z0-9]/g, '').split("")
    if (stripped.join().toLowerCase() == stripped.reverse().join().toLowerCase()) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
