const palindromes = function (string) {
    let reverseString = string.toLowerCase().replace(/[^a-z0-9]/g, "").split("").reverse().join("");
    return reverseString == string.toLowerCase().replace(/[^a-z0-9]/g, "");
};


// Do not edit below this line
module.exports = palindromes;
