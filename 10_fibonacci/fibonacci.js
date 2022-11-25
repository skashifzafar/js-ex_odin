const fibonacci = function(n) {
    val=n*1
    if (!isNaN(val)){
        if (val>0){
            var a=1
            var b=1
            if (n>2){
                for (var i=2;i<n;i++){
                    b=a+b
                    a=b-a
                }
            }
            return b
        }
    }
    return 'OOPS'

};

// Do not edit below this line
module.exports = fibonacci;
