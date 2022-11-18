const reverseString = function(str) {
    var out=''
    for (var i=0;i<str.length;i++){
        out+=str[str.length-i-1]
    }
    return out

};

// Do not edit below this line
module.exports = reverseString;
