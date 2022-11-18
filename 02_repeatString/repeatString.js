const repeatString = function(str,n) {
    if(n<0){
        return "ERROR"
    }
    var out=""
    for (var i=0;i<n;i++){
        out+=str
    }
    return out
};

// Do not edit below this line
module.exports = repeatString;
