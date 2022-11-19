const sumAll = function(a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)){

        if (b<0 || a<0){
            return "ERROR"
        }
        if(b>a){
            return ((b*(b+1)/2)-(a*(a+1)/2)+a)
        }
        else{
            return ((a*(a+1)/2)-(b*(b+1)/2)+b)  
        }
    }
    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
