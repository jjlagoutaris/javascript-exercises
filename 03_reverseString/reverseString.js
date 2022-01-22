const reverseString = function(str) {
    let array = str.split("");
    array.reverse();
    let s = array.join("");
    return s;
};

// Do not edit below this line
module.exports = reverseString;
